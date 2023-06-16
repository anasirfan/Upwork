import { Container, Row, Col } from "react-bootstrap";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: false,
  slidesPerView: 5,
  spaceBetween: 24,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    640: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 5
    }
  }
};

const BrandLogoThree = ({ brandLogoData }) => {
  return (
    <div className="brand-carousel-area space-mb--r130">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="brand-carousel-content text-center space-mb--50">
              <h4 className="section-title--style-four">
                <span>OUR BRANDS</span>
              </h4>
            </div>

            <div className="brand-logo-wrapper">
              {!!brandLogoData.length && (
                <Swiper options={params} navClass="brand-swiper-three">
                  {brandLogoData.map((single, i) => (
                    <SwiperSlide className="single-brand text-center" key={i}>
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
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BrandLogoThree;
