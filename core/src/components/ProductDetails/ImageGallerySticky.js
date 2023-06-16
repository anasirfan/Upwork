import { Fragment, useState } from "react";
import { IoMdExpand, IoIosHeartEmpty } from "react-icons/io";
import { Tooltip } from "react-tippy";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { useDispatch } from "react-redux";
import { addToWishlist, deleteFromWishlist } from "../../store/slices/wishlist-slice";

const ImageGallerySticky = ({product, wishlistItem}) => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(-1);
  const slides = product?.image.map((img, i) => ({
      src: process.env.PUBLIC_URL + img,
      key: i,
  }));

  return (
    <Fragment>
      <div className="product-large-image-wrapper space-mb--n10">
        {/* floating badges */}
        <div className="product-large-image-wrapper__floating-badges">
          {product.discount && product.discount > 0 ? (
            <span className="onsale">-{product.discount}%</span>
          ) : (
            ""
          )}
          {product.new ? <span className="hot">New</span> : ""}
          {product.stock === 0 ? <span className="out-of-stock">out</span> : ""}
        </div>

        {/* wishlist button */}
        <div className="product-details-button-wrapper">
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
              className={`wishlist-icon ${
                wishlistItem !== undefined ? "active" : ""
              }`}
            >
              <IoIosHeartEmpty />
            </button>
          </Tooltip>
        </div>
          {product.image &&
            product.image.map((image, i) => {
              return (
                <div key={i}>
                    <button className="enlarge-icon" onClick={() => setIndex(i)}>
                      <Tooltip
                        title="Click to enlarge"
                        position="left"
                        trigger="mouseenter"
                        animation="shift"
                        arrow={true}
                        duration={200}
                      >
                          <IoMdExpand />
                      </Tooltip>
                    </button>
                  <div className="single-image space-mb--10">
                    <img
                      src={process.env.PUBLIC_URL + image}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={slides}
                plugins={[Thumbnails, Zoom, Fullscreen]}
            />
      </div>
    </Fragment>
  );
};

export default ImageGallerySticky;
