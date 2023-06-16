import { Container, Row, Col } from "react-bootstrap";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 24,
  grabCursor: true
};

const TestimonialTwo = ({ testimonialData, backgroundImage }) => {
  return (
    <div
      className="testimonial-area bg-img space-pt--r130 space-pb--r130"
      // style={{
      //   backgroundImage: `${
      //     backgroundImage
      //       ? `url(${process.env.PUBLIC_URL + backgroundImage})`
      //       : "none"
      //   } `
      // }}
    >
      {/* <Container>
        <Row>
          <Col lg={12}>
            <div className="testimonial-wrapper">
            {!!testimonialData?.length ? (
              <Swiper options={params}>
                  {testimonialData.map((single, i) => (
                    <SwiperSlide className="single-testimonial-single-item" key={i}>
                      <div className="single-testimonial-single-item__image">
                        <img
                          src={process.env.PUBLIC_URL + single.image}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="single-testimonial-single-item__content text-center">
                        <div className="quote-icon d-inline-block space-mb--30">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/icon/quote.png"
                            }
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="text space-mb--40">
                          {single.content}
                        </div>
                        <div className="client-info">
                          <p className="name">{single.name}</p>
                          <span className="designation">
                            / {single.designation}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            ) : null }
            </div>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default TestimonialTwo;
