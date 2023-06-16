import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cart-slice";
import { ProductRating } from "../Product";
import Anchor from "../anchor";

const ProductWidget = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  sliderClass
}) => {
  const dispatch = useDispatch();
  return (
    <div className="single-widget-product-wrapper">
      <div className="single-widget-product">
        <div className="single-widget-product__image">
          <Anchor
            path={`/shop/product-basic/${product.slug}`}
            className="image-wrap"
          >
              <img
                src={process.env.PUBLIC_URL + product.thumbImage[0]}
                className="img-fluid"
                alt={product.name}
              />
          </Anchor>
        </div>
        <div className="single-widget-product__content">
          <div className="single-widget-product__content__top">
            <h3 className="product-title space-mb--10">
              <Anchor path={`/shop/product-basic/${product.slug}`}>
                {product.name}
              </Anchor>
            </h3>
            <div className="price space-mb--10">
              {product.discount > 0 ? (
                <Fragment>
                  <span className="main-price discounted">${productPrice}</span>
                  <span className="discounted-price">${discountedPrice}</span>
                </Fragment>
              ) : (
                <span className="main-price">${productPrice}</span>
              )}
            </div>
            <div className="rating">
              <ProductRating ratingValue={product.rating} />
            </div>
          </div>
          <div className="single-widget-product__content__bottom">
            {/* add to cart */}
            {product.affiliateLink ? (
              <a
                href={product.affiliateLink}
                target="_blank"
                className="cart-btn"
              >
                Buy now
              </a>
            ) : product.variation && product.variation.length >= 1 ? (
              <Anchor
                path={`/shop/product-basic/${product.slug}`}
                className="cart-btn"
              >
                Select Option
              </Anchor>
            ) : product.stock && product.stock > 0 ? (
              <button
                onClick={() => dispatch(addToCart(product))}
                disabled={
                  cartItem !== undefined && cartItem.quantity >= cartItem.stock
                }
                className="cart-btn"
              >
                {cartItem !== undefined ? "Added to cart" : "Add to cart"}
              </button>
            ) : (
              <button disabled className="cart-btn">
                Out of Stock
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductWidget;
