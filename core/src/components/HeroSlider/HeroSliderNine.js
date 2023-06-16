import { Container, Row, Col } from "react-bootstrap";
import Anchor from "../anchor";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: true,
  speed: 1000,
  navigation: true
};

const HeroSliderNine = ({ sliderData }) => {
  return (
    <div className="hero-slider-nine">
      <div className="hero-slider-nine__wrapper">
        {!!sliderData?.length ? (
          <Swiper options={params} navClass="hero-swiper-nine">
            {sliderData.map((single, i) => (
              <SwiperSlide className="hero-slider-nine__slide" key={i}>
                <Container className="h-100">
                  <Row className="align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-start h-100">
                    <Col lg={7}>
                      <div className="hero-slider-nine__image">
                        <img
                          src={process.env.PUBLIC_URL + single.image}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col lg={5} className="text-center">
                      <div className="hero-slider-nine__content">
                        <h5 className="sub-title">{single.subtitle}</h5>
                        <h1
                          className="title"
                          dangerouslySetInnerHTML={{ __html: single.title }}
                        />
                        <div className="slider-link">
                          <Anchor path={single.url}>
                            shop now
                          </Anchor>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

export default HeroSliderNine;
