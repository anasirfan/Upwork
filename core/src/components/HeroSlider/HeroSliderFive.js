import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
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
    disableOnInteraction: false
  },
  navigation: true,
  pagination: true
};

const HeroSliderFive = ({ sliderData, spaceBottomClass }) => {
  return (
    <div className={clsx("hero-slider-five", spaceBottomClass)}>
      <Container className="wide">
        <div className="hero-slider-five__wrapper">
          {!!sliderData?.length ? (
            <Swiper options={params} navClass="hero-swiper-five">
              {sliderData.map((single, i) => (
                <SwiperSlide
                  className="hero-slider-five__slide bg-img"
                  style={{ backgroundImage: `url(${single.bgImage})` }}
                  key={i}
                >
                  <Container className="h-100">
                    <Row className="align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-start h-100">
                      <Col lg={6} className="order-2 order-lg-1">
                        <div className="hero-slider-five__content">
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
              ))}
            </Swiper>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default HeroSliderFive;
