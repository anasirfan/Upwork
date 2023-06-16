import Anchor from "../anchor";
import { EffectFade } from 'swiper';
import Swiper, { SwiperSlide } from "../swiper";

const params = {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: true,
};

const HeroSliderFour = ({ sliderData }) => {
  return (
    <div className="hero-slider-four">
      <div className="hero-slider-four__wrapper">
        {!!sliderData.length && (
          <Swiper options={params} navClass="hero-swiper-four">
            {sliderData.map((single, i) => (
              <SwiperSlide
                className="hero-slider-four__slide bg-img"
                style={{ backgroundImage: `url(${single.bgImage})` }}
                key={i}
              >
                <div className="hero-slider-four__content">
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
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default HeroSliderFour;
