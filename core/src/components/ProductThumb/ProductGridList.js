import { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { IoIosHeartEmpty, IoIosShuffle, IoIosSearch, IoLogoWhatsapp } from "react-icons/io";
import { Tooltip } from "react-tippy";
import clsx from "clsx";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist, deleteFromWishlist } from "../../store/slices/wishlist-slice";
import { addToCompare, deleteFromCompare } from "../../store/slices/compare-slice";
import ProductModal from "./ProductModal";
import Anchor from "../anchor";

const ProductGridList = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
  bottomSpace,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

// console.log(product[0].images)
let slug;
if(product.node && product.node.handle){
  slug=product.node.handle;
}
else if(product.handle){
  slug=product.handle;
}

else{
  slug=product[0].handle;
}

let imageUrl;
if(product.node && product.node.images.edges[0].node.originalSrc){
 imageUrl= product.node.images.edges[0].node.originalSrc;
}
else if(product.images && product.images.edges[0].node.url){
  imageUrl= product.images.edges[0].node.url;
}

else{
  imageUrl = product[0].images.edges[0].node.url
}
  return (
    <Fragment>
      <Col lg={3} md={6} className={clsx(bottomSpace)}>
        <div className="product-grid">
          {/*=======  single product image  =======*/}
          <div className="product-grid__image">
            <Anchor path={`/shop/product-basic/${slug}`} className="image-wrap">
                <img
                  src={imageUrl}
                  className="img-fluid"
                  alt={product.name}
                />
                {imageUrl != "" ? (
                  <img
                    src={imageUrl}
                    className="img-fluid"
                    alt={product.name}
                  />
                ) : (
                  ""
                )}
            </Anchor>
            <div className="product-grid__floating-badges">
              {product.discount && product.discount > 0 ? (
                <span className="onsale">-{product.discount}%</span>
              ) : (
                ""
              )}
              {product.new ? <span className="hot">New</span> : ""}
              {product.stock === 0 ? (
                <span className="out-of-stock">out</span>
              ) : (
                ""
              )}
            </div>
            <div className="product-grid__floating-icons">
              {/* add to wishlist */}
              <Tooltip
                title={
                  wishlistItem !== undefined
                    ? "Added to wishlist"
                    : "Add to wishlist"
                }
                position="left"
                trigger="mouseenter"
                animation="shift"
                arrow={true}
                duration={200}
              >
                <button
                  onClick={
                    wishlistItem !== undefined
                      ? () => dispatch(deleteFromWishlist(product.id))
                      : () => dispatch(addToWishlist(product))
                  }
                  className={wishlistItem !== undefined ? "active" : ""}
                >
                  <IoIosHeartEmpty />
                </button>
              </Tooltip>

              {/* add to compare */}
              <Tooltip
                title={
                  compareItem !== undefined
                    ? "Added to WhatsApp"
                    : "Add to WhatsApp"
                }
                position="left"
                trigger="mouseenter"
                animation="shift"
                arrow={true}
                duration={200}
              >
                <button
                  // onClick={
                  //   compareItem !== undefined
                  //     ? () => dispatch(deleteFromCompare(product.id))
                  //     : () => dispatch(addToCompare(product))
                  // }
                  className={compareItem !== undefined ? "active" : ""}
                >
                  <IoLogoWhatsapp />
                </button>
              </Tooltip>

              {/* quick view */}
              <Tooltip
                title="Quick view"
                position="left"
                trigger="mouseenter"
                animation="shift"
                arrow={true}
                duration={200}
              >
                <button
                  onClick={() => setModalShow(true)}
                  className="d-none d-lg-block"
                >
                  <IoIosSearch />
                </button>
              </Tooltip>
            </div>
          </div>

          {/*=======  single product content  =======*/}
          <div className="product-grid__content">
            <div className="title">
              <h3>
                <Anchor path={`/shop/product-basic/${product.slug}`}>
                  {product.name}
                </Anchor>
              </h3>
              {/* add to cart */}
              {product.affiliateLink ? (
                <a href={product.affiliateLink} target="_blank">
                  Buy now
                </a>
              ) : product.variation && product.variation.length >= 1 ? (
                <Anchor path={`/shop/product-basic/${product.slug}`}>
                  Select Option
                </Anchor>
              ) : product.stock && product.stock > 0 ? (
                <button
                  onClick={() => dispatch(addToCart(product))}
                  disabled={
                    cartItem !== undefined &&
                    cartItem.quantity >= cartItem.stock
                  }
                >
                  {cartItem !== undefined ? "Added to cart" : "Add to cart"}
                </button>
              ) : (
                <button disabled>Out of Stock</button>
              )}
            </div>
            <div className="price">
              {product.discount > 0 ? (
                <Fragment>
                  <span className="main-price discounted">${productPrice}</span>
                  <span className="discounted-price">${discountedPrice}</span>
                </Fragment>
              ) : (
                <span className="main-price">${productPrice}</span>
              )}
            </div>
          </div>
        </div>

        <div className="product-list">
          {/*=======  single product image  =======*/}
          <div className="product-list__image">
            <Anchor path={`/shop/product-basic/${product.slug}`} className="image-wrap">
                <img
                  src={imageUrl}
                  className="img-fluid"
                  alt={product.name}
                />
                {imageUrl != "" ? (
                  <img
                    src={imageUrl}
                    className="img-fluid"
                    alt={product.name}
                  />
                ) : (
                  ""
                )}
            </Anchor>
            <div className="product-list__floating-badges">
              {product.discount && product.discount > 0 ? (
                <span className="onsale">-{product.discount}%</span>
              ) : (
                ""
              )}
              {product.new ? <span className="hot">New</span> : ""}
              {product.stock === 0 ? (
                <span className="out-of-stock">out</span>
              ) : (
                ""
              )}
            </div>
            <div className="product-list__floating-icons">
              {/* add to wishlist */}
              <Tooltip
                title={
                  wishlistItem !== undefined
                    ? "Added to wishlist"
                    : "Add to wishlist"
                }
                position="left"
                trigger="mouseenter"
                animation="shift"
                arrow={true}
                duration={200}
              >
                <button
                  onClick={
                    wishlistItem !== undefined
                      ? () => dispatch(deleteFromWishlist(product.id))
                      : () => dispatch(addToWishlist(product))
                  }
                  className={wishlistItem !== undefined ? "active" : ""}
                >
                  <IoIosHeartEmpty />
                </button>
              </Tooltip>

              {/* add to compare */}
              <Tooltip
                title={
                  compareItem !== undefined
                    ? "Added to compare"
                    : "Add to compare"
                }
                position="left"
                trigger="mouseenter"
                animation="shift"
                arrow={true}
                duration={200}
              >
                <button
                  onClick={
                    compareItem !== undefined
                      ? () => dispatch(deleteFromCompare(product.id))
                      : () => dispatch(addToCompare(product))
                  }
                  className={compareItem !== undefined ? "active" : ""}
                >
                  <IoIosShuffle />
                </button>
              </Tooltip>

              {/* quick view */}
              <Tooltip
                title="Quick view"
                position="left"
                trigger="mouseenter"
                animation="shift"
                arrow={true}
                duration={200}
              >
                <button
                  onClick={() => setModalShow(true)}
                  className="d-none d-lg-block"
                >
                  <IoIosSearch />
                </button>
              </Tooltip>
            </div>
          </div>

          {/*=======  single product content  =======*/}
          <div className="product-list__content">
            <div className="title">
              <h3>
                <Anchor path={`/shop/product-basic/${product.slug}`}>
                  {product.name}
                </Anchor>
              </h3>
            </div>
            <div className="price">
              {/* {product.discount > 0 ? (
                <Fragment>
                  <span className="main-price discounted">${productPrice}</span>
                  <span className="discounted-price">${discountedPrice}</span>
                </Fragment>
              ) : ( */}
                <span className="main-price">${productPrice}</span>
             
            </div>

            <div className="short-description">{product.shortDescription}</div>
            <div className="add-to-cart">
              {/* add to cart */}
              {product.affiliateLink ? (
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  className="lezada-button lezada-button--medium"
                >
                  Buy now
                </a>
              ) : product.variation && product.variation.length >= 1 ? (
                <Anchor
                  path={`/shop/product-basic/${product.slug}`}
                  className="lezada-button lezada-button--medium"
                >
                    Select Option
                </Anchor>
              ) : product.stock && product.stock > 0 ? (
                <button
                  onClick={() => dispatch(addToCart(product))}
                  disabled={
                    cartItem !== undefined &&
                    cartItem.quantity >= cartItem.stock
                  }
                  className="lezada-button lezada-button--medium"
                >
                  {cartItem !== undefined ? "Added to cart" : "Add to cart"}
                </button>
              ) : (
                <button
                  disabled
                  className="lezada-button lezada-button--medium"
                >
                  Out of Stock
                </button>
              )}
            </div>
          </div>
        </div>
      </Col>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        discountedprice={discountedPrice}
        productprice={productPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
      />
    </Fragment>
  );
};

export default ProductGridList;
