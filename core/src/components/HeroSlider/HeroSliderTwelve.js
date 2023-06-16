import clsx from "clsx";
import Anchor from "../anchor";
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  loop: true,
  speed: 1000,
  navigation: true
};

const HeroSliderTwelve = ({ sliderData, spaceBottomClass }) => {
  return (
    <div className={clsx("hero-slider-twelve", spaceBottomClass)}>
      <div className="hero-slider-twelve__wrapper">
        {!!sliderData?.length ? (
          <Swiper options={params} navClass="hero-swiper-twelve">
            {sliderData.map((single, i) => (
              <SwiperSlide
                className="hero-slider-twelve__slide"
                style={{ backgroundColor: single.bgColor }}
                key={i}
              >
                <div className="hero-slider-twelve__image">
                  <img
                    src={process.env.PUBLIC_URL + single.image}
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="hero-slider-twelve__content">
                  <h5 className="sub-title">{single.subtitle}</h5>
                  <h1
                    className="title"
                    dangerouslySetInnerHTML={{ __html: single.title }}
                  />
                  <div className="slider-link">
                    <Anchor path={single.url}>
                      + store
                    </Anchor>
                  </div>
                </div>

                <div className="hero-slider-twelve__pagination">
                  <span className="current">{i + 1}</span>
                  <span className="border"></span>
                  <span className="total">{sliderData.length}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

export default HeroSliderTwelve;
