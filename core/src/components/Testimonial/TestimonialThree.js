import { useState } from "react";
import clsx from "clsx";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Container, Row, Col } from "react-bootstrap";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  grabCursor: true,
  navigation: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
};

const TestimonialThree = ({
  testimonialData,
  backgroundImage,
  spaceBottom
}) => {
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
      {/* <Container className="wide">
        <Row>
          <Col lg={12}>
            <Row className="align-items-center">
              <Col xs={12}>
                <div className="section-title-container space-mb--r80">
                  <h2 className="section-title section-title--style-three position-relative">
                    Testimonials
                    <div className="testimonial-slider-button-wrapper">
                      <button
                        className="swiper-button-prev ht-swiper-button-nav prev-swiper-nav"
                      >
                        <IoIosArrowBack />
                      </button>
                      <button
                        className="swiper-button-next ht-swiper-button-nav next-swiper-nav"
                      >
                        <IoIosArrowForward />
                      </button>
                    </div>
                  </h2>
                </div>
              </Col>
            </Row>
            <div className="testimonial-wrapper">
              <Swiper options={params} customNav>
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
            </div>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default TestimonialThree;
