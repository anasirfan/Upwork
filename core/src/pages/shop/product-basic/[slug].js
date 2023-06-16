import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LayoutTwo } from "../../../components/Layout";
import { getDiscountPrice } from "../../../lib/product";
import { BreadcrumbOne } from "../../../components/Breadcrumb";
import {
  ImageGalleryBottomThumb,
  ProductDescription,
  ProductDescriptionTab
} from "../../../components/ProductDetails";
import Anchor from "../../../components/anchor";
import { getProduct,fetchAllProducts } from "../../../services/product.services";

const ProductBasic = ({ product }) => {
  useEffect(() => {
    document.querySelector("body").classList.remove("overflow-hidden");
    console.log(product)
  }, []);

  // const { cartItems } = useSelector((state) => state.cart);
  // const { wishlistItems } = useSelector((state) => state.wishlist);
  // const { compareItems } = useSelector((state) => state.compare);
  console.log(product.data.productByHandle.title)
  // const discountedPrice = getDiscountPrice(
  //   product.priceRange.minVariantPrice.amount,
  //   product.discount
  // ).toFixed(2);
// console.log(product.priceRange.minVariantPrice.amount.toFixed(2))
  const productPrice = product.data.productByHandle.variants.edges[0].node.price.amount;
  // const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);
  // const wishlistItem = wishlistItems.find(
  //   (wishlistItem) => wishlistItem.id === product.id
  // );
  // const compareItem = compareItems.find(
  //   (compareItem) => compareItem.id === product.id
  // );

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle={product.data.productByHandle.title}
        backgroundImage={product.data.productByHandle.images.edges[0].node.originalSrc}
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">Home</Anchor>
          </li>
          <li>
            <Anchor path="/shop/left-sidebar">Shop</Anchor>
          </li>
          <li>{product.data.productByHandle.title}</li>
        </ul>
      </BreadcrumbOne>

      {/* product details */}
      <div className="product-details space-mt--r100 space-mb--r100">
        <Container>
          <Row>
            <Col lg={6} className="space-mb-mobile-only--50">
              {/* image gallery bottom thumb */}
              <ImageGalleryBottomThumb
                product={product}
                // wishlistItem={wishlistItem}
              />
            </Col>

            <Col lg={6}>
              {/* product description */}
              <ProductDescription
                product={product}
                productPrice={productPrice}
                // discountedPrice={discountedPrice}
                // cartItems={cartItems}
                // cartItem={cartItem}
                // wishlistItem={wishlistItem}
                // compareItem={compareItem}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {/* product description tab */}
              <ProductDescriptionTab product={product} />
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default ProductBasic;

export async function getStaticProps({ params }) {
  console.log(params.slug)
  const product = await getProduct(params.slug);
  console.log('Product:', product); // Add this line to check the fetched product

  return {
    props: {
      product,
    },
  };
}


export async function getStaticPaths() {
  // Fetch all products from the Shopify API
  const products = await fetchAllProducts();

  // Get the paths we want to pre-render based on products
  const paths = products.map((product) => ({
    params: { slug: product.node.handle }
  }));

  return { paths, fallback: false };
}
