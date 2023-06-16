import React, { forwardRef } from "react";
import PropTypes from "prop-types"
import cn from "clsx";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
import {
    IoIosArrowBack,
    IoIosArrowForward,
  } from "react-icons/io";

const SwiperSlider = forwardRef(
    (
        {
            options,
            children,
            className,
            navClass,
            customNav
        },
        ref
    ) => {
        const modules = options?.modules !== undefined ? options.modules : [];
        const prevClass = `prev-${navClass || "swiper-nav"}`;
        const nextClass = `next-${navClass || "swiper-nav"}`;
        const sliderOptions = {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: false,
            autoplay: options?.autoplay ? {
                delay: 2500,
                disableOnInteraction: false,
            } : false,
            watchSlidesProgress: true,
            autoHeight: true,
            breakpoints: {},
            ...options,
            modules: [Navigation, Pagination, A11y, Autoplay, ...modules],
            navigation: options?.navigation
                ? {
                      prevEl: `.${prevClass}`,
                      nextEl: `.${nextClass}`,
                  }
                : false,
            pagination: options?.pagination
                ? {
                      clickable: true,
                  }
                : false,
        };

        return (
            <div
                className={cn("swiper-wrap", className)}
                ref={ref}
            >
                <Swiper {...sliderOptions}>{children}</Swiper>

                {sliderOptions?.navigation && !customNav && (
                    <>
                        <button
                            type="button"
                            className={`swiper-button-prev ht-swiper-button-nav ${prevClass}`}
                        >
                            <IoIosArrowBack className="icon" />
                        </button>
                        <button
                            type="button"
                            className={`swiper-button-next ht-swiper-button-nav ${nextClass}`}
                        >
                            <IoIosArrowForward className="icon" />
                        </button>
                    </>
                )}
            </div>
        );
    }
);

export { SwiperSlide };

SwiperSlider.propTypes = {
    options: PropTypes.shape({}),
    children: PropTypes.node,
    className: PropTypes.string,
    navClass: PropTypes.string,
    customNav: PropTypes.bool,
}

SwiperSlider.defaultProps = {
    navStyle: 1,
    dotStyle: 1,
};

export default SwiperSlider;