import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import { IoIosCalendar } from "react-icons/io";
import Anchor from "../anchor";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: false,
  slidesPerView: 2,
  spaceBetween: 24,
  grabCursor: true,
  navigation: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    }
  }
};

const BlogPostSlider = ({ blogData, spaceBottomClass }) => {
  return (
    <div
      className={clsx("blog-post-slider", spaceBottomClass)}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={4}>
            <div className="blog-intro space-mb-mobile-only--30">
              <h2>From our blog</h2>
              <p>
                Lorem ipsum dolor sit amet, consecte tur cing elit. Suspe ndisse
                suscipit sagittis leo sit met condim entum.
              </p>
              <Anchor path="/blog/standard-left-sidebar" className="lezada-button lezada-button--medium">
                view all
              </Anchor>
            </div>
          </Col>
          <Col lg={8}>
            <div className="blog-post-slider-container">
              {blogData?.length ? (
                <Swiper options={params} navClass="blog-post-swiper">
                  {blogData.map((single, i) => (
                    <SwiperSlide key={i}> 
                      <div className="blog-grid-post">
                        <div className="blog-grid-post__image space-mb--30">
                          <Anchor path={single.url}>
                              <img
                                src={process.env.PUBLIC_URL + single.image}
                                className="img-fluid"
                                alt=""
                              />
                          </Anchor>
                        </div>
                        <div className="blog-grid-post__content">
                          <div className="post-date">
                            <IoIosCalendar />
                            {single.date}
                          </div>
                          <h2 className="post-title">
                            <Anchor path={single.url}>
                              {single.title}
                            </Anchor>
                          </h2>
                          <p className="post-excerpt">{single.text}</p>
                          <Anchor path={single.url} className="blog-readmore-btn">
                            read more
                          </Anchor>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : null}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogPostSlider;
