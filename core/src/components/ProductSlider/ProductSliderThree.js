import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getDiscountPrice } from "../../lib/product";
import { SectionTitleFour } from "../../components/SectionTitle";
import Anchor from "../anchor";
import Swiper, { SwiperSlide } from "../swiper";
import ProductGridThree from "../../components/ProductThumb/ProductGridThree";

const params = {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 24,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
};

const ProductSliderThree = ({ products }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  return (
    <div className="space-mb--r100">
      <SectionTitleFour title="Trending Now" />
      <Container className="wide">
        <Row>
          <Col lg={12}>
            <div className="product-slider-container">
              {!!products.length && (
                <Swiper options={params}>
                  {products.map((product) => {
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
                      <SwiperSlide key={product.id}>
                        <ProductGridThree
                          product={product}
                          discountedPrice={discountedPrice}
                          productPrice={productPrice}
                          cartItem={cartItem}
                          wishlistItem={wishlistItem}
                          compareItem={compareItem}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              )}
            </div>
          </Col>
          <Col lg={12} className="text-center space-mt--50">
            <Anchor path="/shop/left-sidebar" className="lezada-loadmore-button">
              + Load More..
            </Anchor>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductSliderThree;
