import { Fragment } from "react";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../../lib/product";
import ProductGridFour from "./ProductGridFour";

const ProductGridFourWrapper = ({
  products,
  bottomSpace,
  sliderClass
}) => {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  return (
    <Fragment>
      {products &&
        products.map((product) => {
          const discountedPrice = getDiscountPrice(
            product.price,
            product.discount
          ).toFixed(2);
          const productPrice = product.price.toFixed(2);
          const cartItem = cartItems.find(
            (cartItem) => cartItem.id === product.id
          );
          const wishlistItem = wishlistItems.find(
            (wishlistItem) => wishlistItem.id === product.id
          );
          const compareItem = compareItems.find(
            (compareItem) => compareItem.id === product.id
          );

          return (
            <ProductGridFour
              key={product.id}
              product={product}
              discountedPrice={discountedPrice}
              productPrice={productPrice}
              cartItem={cartItem}
              wishlistItem={wishlistItem}
              compareItem={compareItem}
              bottomSpace={bottomSpace}
              sliderClass={sliderClass}
            />
          );
        })}
    </Fragment>
  );
};


export default ProductGridFourWrapper;
