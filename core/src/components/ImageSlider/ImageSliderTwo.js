import { Container, Row, Col } from "react-bootstrap";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 24,
  grabCursor: true,
  navigation: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
};

const ImageSliderTwo = ({ imageSliderData }) => {
  return (
    <div className="image-slider-area space-mb--r130">
      <Container>
        <Row className="align-items-center">
          <Col lg={8} className="order-2 order-lg-1">
            <div className="image-slider-wrapper">
              {!!imageSliderData?.length ? (
                <Swiper options={params} navClass="img-swiper-two">
                  {imageSliderData.map((single, i) => (
                    <SwiperSlide className="single-image text-center" key={i}>
                      <a href={single.url} target="_blank">
                        <img
                          src={process.env.PUBLIC_URL + single.image}
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : null}
            </div>
          </Col>
          <Col lg={4} className="order-1 order-lg-2">
            <div className="image-slider-text">
              <a href="#">@lezada_shop</a>

              <h3>Follow us on Instagram</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageSliderTwo;
