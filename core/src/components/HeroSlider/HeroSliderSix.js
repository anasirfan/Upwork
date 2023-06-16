import { Container, Row, Col } from "react-bootstrap";
import Anchor from "../anchor";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: true,
  pagination: true,
};

const HeroSliderSix = ({ sliderData }) => {
  return (
    <div className="hero-slider-six">
      <div className="hero-slider-six__wrapper">
        {!!sliderData.length && (
          <Swiper options={params} navClass="hero-swiper-six">
            {sliderData.map((single, i) => {
                return (
                  <SwiperSlide
                    className="hero-slider-six__slide"
                    style={{ backgroundColor: single.bgColor }}
                    key={i}
                  >
                    <Container className="h-100">
                      <Row className="align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-start h-100">
                        {single.image ? (
                          <Col lg={6}>
                            <div className="hero-slider-six__image">
                              <img
                                src={process.env.PUBLIC_URL + single.image}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </Col>
                        ) : (
                          ""
                        )}
                        <Col lg={6}>
                          <div className="hero-slider-six__content">
                            <h5 className="sub-title">{single.subtitle}</h5>
                            <h1
                              className="title"
                              dangerouslySetInnerHTML={{ __html: single.title }}
                            />
                            <div className="slider-link">
                              <Anchor path={single.url} className="lezada-button lezada-button--medium">
                                  shop now
                              </Anchor>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default HeroSliderSix;
