import { Fragment } from "react";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../../lib/product";
import ProductGrid from "./ProductGrid";

const ProductGridWrapper = ({
  products,
  bottomSpace,
  column
}) => {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  
  
  return (
    <Fragment>
      {products &&
        products.map((product) => {
          // const price = product.price || 0;
          // const discount = product.discount || 0;
          let productPrice;
          // const discountedPrice = getDiscountPrice(price, discount).toFixed(2);
          if(product.node && product.node.priceRange.minVariantPrice.amount){
            productPrice = product.node.priceRange.minVariantPrice.amount;
          }
          else{
            productPrice = product.priceRange.minVariantPrice.amount;
          }
          let key;
          if(product.node && product.node.id){
            key= product.node.id;
          }
          else{
            key = product.id
          }
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
            <ProductGrid
              key={key}
              product={product}
              // discountedPrice={discountedPrice}
              productPrice={productPrice}
              // cartItem={cartItem}
              // wishlistItem={wishlistItem}
              // compareItem={compareItem}
              bottomSpace={bottomSpace}
              column={column}
            />
          );
        })}
    </Fragment>
  );
};

export default ProductGridWrapper;
