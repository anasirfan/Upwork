import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import Anchor from "../anchor";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 50,
  grabCursor: true,
  navigation: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
};

const CategorySlider = ({ categoryData, spaceBottomClass }) => {
  return (
    <div className={clsx("product-category-slider-container", spaceBottomClass)}>
      <Container className="wide">
        <Row>
          <Col lg={12}>
            {!!categoryData.length && (
              <Swiper options={params} navClass="category-swiper">
                {categoryData.map((single, i) => (
                  <SwiperSlide
                    className="single-category single-category--two"
                    key={i}
                  >
                    <div className="single-category__image single-category__image--two">
                      <img
                        src={process.env.PUBLIC_URL + single.image}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="single-category__content single-category__content--two space-mt--25">
                      <div className="title">
                        <Anchor path="/shop/left-sidebar">
                          {single.name}
                        </Anchor>
                      </div>
                      <p className="product-count">{single.count}</p>
                    </div>
                    <Anchor path="/shop/left-sidebar" className="banner-link" />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategorySlider;
