import { Container, Row, Col } from "react-bootstrap";
import { EffectFade } from 'swiper';
import Anchor from "../anchor";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: true
};

const HeroSliderSeven = ({ sliderData }) => {

  return (
    <div className="hero-slider-seven">
      <div className="hero-slider-seven__wrapper">
        {!!sliderData?.length ? (
          <Swiper options={params} navClass="hero-swiper-seven">
            {sliderData.map((single, i) => (
                <SwiperSlide
                  className="hero-slider-seven__slide bg-img"
                  style={{ backgroundImage: `url(${single.bgImage})` }}
                  key={i}
                >
                  <Container className="h-100">
                    <Row className="align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-start h-100">
                      <Col lg={5} className="ms-auto">
                        <div className="hero-slider-seven__content">
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
                  <div className="hero-slider-seven__pagination">
                    <span className="current">{i + 1}</span>
                    <span className="border"></span>
                    <span className="total">{sliderData.length}</span>
                  </div>
                </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

export default HeroSliderSeven;
