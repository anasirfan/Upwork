import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import { SectionTitleOne } from "../SectionTitle";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
};

const TestimonialOne = ({ testimonialData, backgroundImage, spaceBottom }) => {
  return (
    <div
      className={clsx("testimonial-area bg-img", spaceBottom ? spaceBottom : "space-pt--r130 space-pb--r130")}
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
            <SectionTitleOne title="Testimonial" />
            <div className="testimonial-wrapper">
              {!!testimonialData.length && (
                <Swiper options={params}>
                  {testimonialData.map((single, i) => (
                    <SwiperSlide className="multi-testimonial-single-item" key={i}>
                      <div className="multi-testimonial-single-item__text">
                        {single.content}
                      </div>
                      <div className="multi-testimonial-single-item__author-info">
                        <div className="image">
                          <img
                            src={process.env.PUBLIC_URL + single.image}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="content">
                          <p className="name">{single.name}</p>
                          <span className="designation">
                            / {single.designation}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default TestimonialOne;
