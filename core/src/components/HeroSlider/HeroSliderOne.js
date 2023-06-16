
import { Container } from "react-bootstrap";
import Anchor from "../anchor";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: true,
  speed: 1000,
  spaceBetween: 200,
  navigation: true
};

const HeroSliderOne = ({ sliderData }) => {
  return (
    <div className="hero-slider-one space-mb--r100">
      <Container>
        <div className="hero-slider-one__wrapper">
          {sliderData.length ? (
            <Swiper options={params} navClass="hero-swiper-one">
              {sliderData.map((single) => {
                  return (
                    <SwiperSlide
                      className="hero-slider-one__slide"
                      key={single.id}
                    >
                      <div className="slider-image">
                        <img
                          src={process.env.PUBLIC_URL + single.image}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="slider-content">
                        <h2 className="color-title color-title--blue space-mb--20">
                          {single.subtitle}
                        </h2>
                        <h1
                          className="main-title space-mb--30"
                          dangerouslySetInnerHTML={{ __html: single.title }}
                        />
                        <Anchor path="/shop/right-sidebar" className="lezada-button lezada-button--medium">
                            shop now
                        </Anchor>
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          ): null}
        </div>
      </Container>
    </div>
  );
};

export default HeroSliderOne;
