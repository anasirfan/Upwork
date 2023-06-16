import { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductGridList from "./ProductGridList";
import { getDiscountPrice } from "../../lib/product";

const ProductGridWrapper = ({
  products,
  bottomSpace,
}) => {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  console.log(products)

  return (
    <Fragment>
      
      {products &&
        products.map((product) => {
          // const discountedPrice = getDiscountPrice(
          //   product.price,
          //   product.discount
          // );
          // console.log(products)
          let productPrice;

if (product.priceRange && product.priceRange.minVariantPrice && product.priceRange.minVariantPrice.amount) {
  productPrice = product.priceRange.minVariantPrice.amount;
} else if (product.node.priceRange && product.node.priceRange.minVariantPrice && product.node.priceRange.minVariantPrice.amount) {
  productPrice = product.node.priceRange.minVariantPrice.amount;
} else {
  // Set a default value in case both cases fail
  productPrice = "N/A";
}

let id;
if (product.id) {
  id = product.id;
} else if (product.node.id) {
  id = product.node.id;
} else {
  // Set a default value in case both cases fail
  id  = "default";
}
          // console.log(productPrice)
          // const cartItem = cartItems.find(
          //   (cartItem) => cartItem.id === product.id
          // );
          // const wishlistItem = wishlistItems.find(
          //   (wishlistItem) => wishlistItem.id === product.id
          // );
          // const compareItem = compareItems.find(
          //   (compareItem) => compareItem.id === product.id
          // );

          return (
            <ProductGridList
              key={id}
              product={product}
              // discountedPrice={discountedPrice}
              productPrice={productPrice}
              // cartItem={cartItem}
              // wishlistItem={wishlistItem}
              // compareItem={compareItem}
              bottomSpace={bottomSpace}
            />
          );
        })}
    </Fragment>
  );
};

export default ProductGridWrapper;
