const domain = 'd15726.myshopify.com';
const storefrontAccessToken = '8503c260523c96f85c4d35d761097195';

async function ShopifyData(query) {
  const URL = `https://${domain}/api/2022-10/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Products not fetched");
  }
}

export async function fetchAllCollections() {
  const query = `
    {
      collections(first: 250) {
        edges {
          node {
            id
            title
            handle
          }
        }
      }
    }
  `;

  const response = await ShopifyData(query);

  const collections = response.data.collections.edges
    ? response.data.collections.edges.map((edge) => edge.node)
    : [];

  return collections;
}

export async function fetchProductsByType(productType) {
  const query = `
    query  {
      products(first: 10, query: "product_type:${productType}") {
        edges {
          node {
            id
            title
            productType
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 5) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    productType: productType,
  };

  const response = await ShopifyData(query, variables);

  if (response.data && response.data.products && response.data.products.edges) {
    const productsByCategory = response.data.products.edges.map((edge) => edge.node);
    return productsByCategory;
  } else {
    throw  Error('Failed to fetch products');
  }
}

export async function fetchAllCategories() {
  const query = `
    query FetchAllCategories($cursor: String) {
      collections(first: 10, after: $cursor) {
        edges {
          node {
            products(first: 250) {
              edges {
                node {
                  productType
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `;

  let allCategories = [];

  let hasNextPage = true;
  let cursor = '';

  while (hasNextPage) {
    const variables = { cursor };
    const response = await ShopifyData(query, variables);

    const collections = response.data.collections.edges;
    collections.forEach((collection) => {
      const products = collection.node.products.edges;
      const categories = products.map((edge) => edge.node.productType);
      allCategories.push(...categories);
    });

    hasNextPage = response.data.collections.pageInfo.hasNextPage;
    cursor = response.data.collections.pageInfo.endCursor;
  }
  
  // Filter out duplicate categories
  const uniqueCategories = [...new Set(allCategories)];

  return uniqueCategories;
}




export async function fetchAllProducts() {
  const query = `
    {
      products(first: 250) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 5) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await ShopifyData(query);

  const allProducts = response.data.products.edges
    ? response.data.products.edges
    : [];

  return allProducts;
}

export async function getAllProducts() {
  const query = `{
    products(first: 250) {
      edges {
        node {
          handle
          id
        }
      }
    }
  }`;

  const response = await ShopifyData(query);

  const slugs = response.data.products.edges
    ? response.data.products.edges
    : [];

  return slugs;
}

export async function getProduct(handle) {
  const query = `
  {
    productByHandle(handle: "${handle}") {
      id
      title
      handle
      description
      productType
      tags
      vendor
      images(first: 5) {
        edges {
          node {
            originalSrc
            altText
          }
        }
      }
      options {
        name
        values
        id
      }
      variants(first: 25) {
        edges {
          node {
            selectedOptions {
              name
              value
            }
            image {
              originalSrc
              altText
            }
            title
            id
            availableForSale
            sku
            
            price {
              amount
            }
            
          }
        }
      }
    }
  }
  
`;

  const response = await ShopifyData(query);

 

  return response;
}


export async function createCheckout(id, quantity) {
  const query = `
    mutation {
      checkoutCreate(input: {
        lineItems: [{ variantId: "${id}", quantity: ${quantity}}]
      }) {
        checkout {
          id
          webUrl
        }
      }
    }`;

  const response = await ShopifyData(query);

  const checkout = response.data.checkoutCreate.checkout
    ? response.data.checkoutCreate.checkout
    : [];

  return checkout;
}

export async function updateCheckout(id, lineItems) {
  const lineItemsObject = lineItems.map((item) => {
    return `{
      variantId: "${item.id}",
      quantity:  ${item.variantQuantity}
    }`;
  });

  const query = `
    mutation {
      checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}") {
        checkout {
          id
          webUrl
          lineItems(first: 25) {
            edges {
              node {
                id
                title
                quantity
              }
            }
          }
        }
      }
    }`;

  const response = await ShopifyData(query);

  const checkout = response.data.checkoutLineItemsReplace.checkout
    ? response.data.checkoutLineItemsReplace.checkout
    : [];

  return checkout;
}

export async function recursiveCatalog(cursor = "", initialRequest = true) {
  let data;

  if (cursor !== "") {
    const query = `{
      products(after: "${cursor}", first: 250) {
        edges {
          node {
            priceRange {
              minVariantPrice {
                amount
              }
            }
            handle
            title
            id
            images(first: 5) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }`;

    const response = await ShopifyData(query);
    data = response.data.products.edges ? response.data.products.edges : [];

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const cursor = response.data.products.edges[num - 1].cursor;
      console.log("Cursor:", cursor);

      return data.concat(await recursiveCatalog(cursor));
    } else {
      return data;
    }
  } else {
    const query = `{
      products(first: 250) {
        edges {
          node {
            priceRange {
              minVariantPrice {
                amount
              }
            }
            handle
            title
            id
            images(first: 5) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }`;

    const response = await ShopifyData(query);
    data = response.data.products.edges ? response.data.products.edges : [];

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const cursor = response.data.products.edges[num - 1].cursor;

      return data.concat(await recursiveCatalog(cursor));
    } else {
      return data;
    }
  }
}

export async function updateProduct(productId, input) {
  const mutation = `
    mutation {
      productUpdate(input: {
        id: "${productId}",
        ${input}
      }) {
        product {
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 5) {
            edges {
              node {
                originalSrc
                altText
              }
            }
          }
        }
      }
    }`;

  const response = await ShopifyData(mutation);

  const updatedProduct = response.data.productUpdate.product;

  return updatedProduct;
}
