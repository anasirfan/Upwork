import { Fragment, useState } from "react";
import {
  IoMdExpand,
  IoIosHeartEmpty
} from "react-icons/io";
import { EffectFade, Thumbs } from 'swiper';
import { Tooltip } from "react-tippy";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { useDispatch } from "react-redux";
import { addToWishlist, deleteFromWishlist } from "../../store/slices/wishlist-slice";
import Swiper, { SwiperSlide } from "../../components/swiper";

const ImageGalleryBottomThumb = ({
  product,
  wishlistItem,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(-1);
  const dispatch = useDispatch();

  const slides = product?.data.productByHandle.images.edges.map((edge, i) => ({
    src: process.env.PUBLIC_URL + edge.node.originalSrc,
    key: i,
  }));


  // swiper slider settings
  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    thumbs: { swiper: thumbsSwiper },
    modules: [EffectFade, Thumbs],
    pagination: true
  };

  const thumbnailSwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    loop: true,
    freeMode: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    navigation: true
  };

  return (
    <Fragment>
      <div className="product-large-image-wrapper space-mb--30">
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
        {!!product?.data.productByHandle.images.edges.length && (
          <Swiper options={gallerySwiperParams}>
            {product?.data.productByHandle.images.edges.map((image, i) => (
              <SwiperSlide key={i}>
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
                <div className="single-image">
                  <img
                    src={process.env.PUBLIC_URL + product.data.productByHandle.images.edges[0].node.originalSrc}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={slides}
            plugins={[Thumbnails, Zoom, Fullscreen]}
        />
      </div>
      <div className="product-small-image-wrapper">
        {!product?.data.productByHandle.images.edges.length && (
          <Swiper options={thumbnailSwiperParams}>
            {product.image.map((image, i) => (
              <SwiperSlide key={i}>
                <div className="single-image">
                  <img
                    src={process.env.PUBLIC_URL +  edge.node.originalSrc}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </Fragment>
  );
};

export default ImageGalleryBottomThumb;
