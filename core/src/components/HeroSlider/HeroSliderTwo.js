import clsx from "clsx";
import Swiper, { SwiperSlide } from "../swiper";
import Anchor from "../anchor";

const params = {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: true
};

const HeroSliderTwo = ({ sliderData, spaceBottomClass }) => {
  return (
    <div className={clsx("hero-slider-two", spaceBottomClass)}>
      <div className="hero-slider-two__wrapper">
        {!!sliderData.length && (
          <Swiper options={params} navClass="hero-swiper-two">
            {sliderData.map((single, i) => (
              <SwiperSlide
                className="hero-slider-two__slide"
                style={{ backgroundColor: single.bgColor }}
                key={i}
              >
                <div className="hero-slider-two__image">
                  <img
                    src={process.env.PUBLIC_URL + single.image}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="hero-slider-two__content">
                  <h5 className="sub-title">{single.subtitle}</h5>
                  <h1
                    className="title"
                    dangerouslySetInnerHTML={{ __html: single.title }}
                  />
                  <div className="slider-link">
                    <Anchor
                      path={single.url}
                      className="lezada-button lezada-button--medium"
                    >
                        shop now
                    </Anchor>
                  </div>
                </div>
                <div className="hero-slider-two__pagination">
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

export default HeroSliderTwo;
