import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import Anchor from "../anchor";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: true,
  speed: 1000,
  navigation: true
};

const HeroSliderEleven = ({ sliderData, spaceBottomClass }) => {
  return (
    <div className={clsx("hero-slider-eleven", spaceBottomClass)}>
      <div className="hero-slider-eleven__wrapper">
        {!!sliderData.length && (
          <Swiper options={params} navClass="hero-swiper-eleven">
            {sliderData.map((single, i) => (
              <SwiperSlide
                className="hero-slider-eleven__slide"
                style={{ backgroundColor: single.bgColor }}
                key={i}
              >
                <Container className="h-100">
                  <Row className="h-100">
                    <Col lg={6} className="align-self-center">
                      <div className="hero-slider-eleven__content text-center">
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
                    <Col lg={6} className="align-self-end">
                      <div className="hero-slider-eleven__image">
                        <img
                          src={process.env.PUBLIC_URL + single.image}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
                <div className="hero-slider-eleven__pagination">
                  <span className="current">{i + 1}</span>
                  <span className="border"></span>
                  <span className="total">{sliderData.length}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default HeroSliderEleven;
