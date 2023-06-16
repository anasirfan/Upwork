import { Container, Row, Col } from "react-bootstrap";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 24,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
};

const ImageSliderThree = ({ imageSliderData }) => {
  return (
    <div className="image-slider-area space-pt--r130 space-pb--r130 bg-color--grey-three">
      <Container className="wide">
        <Row>
          <Col lg={12} className="text-center">
            <div className="instagram-title-container instagram-title-container--style-two space-mb--r80">
              <h4 className="title">@LEZADA_941</h4>
              <h2 className="subtitle">Follow us on instagram</h2>
            </div>
            {!!imageSliderData.length && (
              <Swiper options={params} navClass="img-swiper-three">
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
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageSliderThree;
