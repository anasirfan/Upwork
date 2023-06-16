import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import Anchor from "../anchor";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: true,
  speed: 1000,
  autoplay: true
};


const HeroSliderEight = ({ sliderData, spaceBottomClass }) => {
  return (
    <div className={clsx("hero-slider-eight", spaceBottomClass)}>
      <div className="hero-slider-eight__wrapper">
        {!!sliderData?.length && (
          <Swiper options={params} navClass="hero-swiper-eight">
            {sliderData.map((single, i) => (
              <SwiperSlide
                className="hero-slider-eight__slide bg-img"
                style={{ backgroundImage: `url(${single.bgImage})` }}
                key={i}
              >
                <Container className="h-100">
                  <Row className="align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-start h-100">
                    <Col lg={6} className="order-2 order-lg-1">
                      <div className="hero-slider-eight__content">
                        <h5 className="sub-title">{single.subtitle}</h5>
                        <h1
                          className="title"
                          dangerouslySetInnerHTML={{ __html: single.title }}
                        />
                        <div className="slider-link">
                          <Anchor
                            path={single.url}
                            className="lezada-button lezada-button--medium lezada-button--transparent-white"
                          >
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
        )}
      </div>
    </div>
  );
};

export default HeroSliderEight;
