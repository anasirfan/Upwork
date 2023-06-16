import { Fragment } from "react";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../../lib/product";
import ProductWidget from "./ProductWidget";

const ProductWidgetWrapper = ({
  products,
  bottomSpace,
  sliderClass
}) => {
  
  const { cartItems } = useSelector((state) => state.cart);

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

          return (
            <ProductWidget
              key={product.id}
              product={product}
              discountedPrice={discountedPrice}
              productPrice={productPrice}
              cartItem={cartItem}
              bottomSpace={bottomSpace}
              sliderClass={sliderClass}
            />
          );
        })}
    </Fragment>
  );
};

export default ProductWidgetWrapper;
