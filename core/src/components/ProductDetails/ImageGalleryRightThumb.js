import { Fragment, useEffect, useState } from "react";
import { EffectFade, Thumbs } from 'swiper';
import { IoMdExpand, IoIosHeartEmpty } from "react-icons/io";
import { Tooltip } from "react-tippy";
import { Row, Col } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { useDispatch } from "react-redux";
import { addToWishlist, deleteFromWishlist } from "../../store/slices/wishlist-slice";
import Swiper, { SwiperSlide } from "../../components/swiper";

const ImageGalleryRightThumb = ({product, wishlistItem}) => {
  const dispatch = useDispatch();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(-1);

  const slides = product?.image.map((img, i) => ({
      src: process.env.PUBLIC_URL + img,
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
    slidesPerView: 5,
    touchRatio: 0.2,
    loop: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    direction: "vertical",
    breakpoints: {
      320: {
        slidesPerView: 4,
        direction: "horizontal"
      },
      640: {
        slidesPerView: 4,
        direction: "horizontal"
      },
      768: {
        slidesPerView: 4,
        direction: "horizontal"
      },
      992: {
        slidesPerView: 4,
        direction: "horizontal"
      },
      1200: {
        slidesPerView: 5,
        direction: "vertical"
      }
    }
  };

  return (
    <Fragment>
      <Row className="align-items-center image-gallery-side-thumb-wrapper">
        <Col xl={2} className="order-2">
          <div className="product-small-image-wrapper product-small-image-wrapper--side-thumb">
            {!!product.image.length && (
              <Swiper options={thumbnailSwiperParams}>
                {product.image.map((image, i) => (
                  <SwiperSlide key={i}>
                    <div className="single-image">
                      <img
                        src={process.env.PUBLIC_URL + image}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </Col>
        <Col xl={10} className="order-1">
          <div className="product-large-image-wrapper">
            {/* floating badges */}
            <div className="product-large-image-wrapper__floating-badges">
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
            {!!product.image.length && (
              <Swiper options={gallerySwiperParams}>
                {product.image.map((image, i) => (
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
                        src={process.env.PUBLIC_URL + image}
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
        </Col>
      </Row>
    </Fragment>
  );
};

export default ImageGalleryRightThumb;
