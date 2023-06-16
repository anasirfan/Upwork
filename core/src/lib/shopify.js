const getProducts = (products, collection, filter, limit) => {
  const finalProducts = collection
    ? products.filter((product) =>
        product.collections.includes(collection)
      )
    : products;

  // Apply additional filters if necessary
  if (filter === "new") {
    finalProducts.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  } else if (filter === "popular") {
    finalProducts.sort((a, b) => b.popularity - a.popularity);
  } else if (filter === "sale") {
    finalProducts.sort((a, b) => {
      return (
        (a.price - a.discountedPrice) - (b.price - b.discountedPrice)
      );
    });
  }

  // Limit the number of products if necessary
  if (limit && limit > 0 && limit <= finalProducts.length) {
    return finalProducts.slice(0, limit);
  }

  return finalProducts;
};
