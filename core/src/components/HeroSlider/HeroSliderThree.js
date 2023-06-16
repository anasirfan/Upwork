import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
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
  pagination: true
};

const HeroSliderThree = ({ sliderData, spaceBottomClass }) => {
  return (
    <div className={clsx("hero-slider-three", spaceBottomClass)}>
      <div className="hero-slider-three__wrapper">
        {!!sliderData?.length ? (
          <Swiper options={params} navClass="hero-swiper-three">
            {sliderData.map((single, i) => (
                <SwiperSlide
                  className="hero-slider-three__slide bg-img"
                  style={{ backgroundImage: `url(${single.bgImage})` }}
                  key={i}
                >
                  <Container className="h-100">
                    <Row className="align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-start h-100">
                      <Col lg={6} className="order-2 order-lg-1">
                        <div className="hero-slider-three__content">
                          <h5 className="sub-title">{single.subtitle}</h5>
                          <h1
                            className="title"
                            dangerouslySetInnerHTML={{ __html: single.title }}
                          />
                          <div className="slider-link">
                            <Anchor path={single.url}>
                              shop collection
                            </Anchor>
                          </div>
                        </div>
                      </Col>
                      {single.image ? (
                        <Col lg={6} className="order-1 order-lg-2">
                          <div className="hero-slider-three__image">
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

export default HeroSliderThree;
