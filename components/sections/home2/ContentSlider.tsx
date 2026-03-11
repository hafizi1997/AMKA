"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import About from "@/components/sections/home2/About";
import Team from "@/components/sections/home2/Team";
import Faq2 from "@/components/sections/home2/Faq";

const swiperOptions = {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  autoHeight: true,
  navigation: {
    nextEl: ".home2-content-slider-next",
    prevEl: ".home2-content-slider-prev",
  },
  pagination: {
    el: ".home2-content-slider-pagination",
    clickable: true,
  },
};

export default function ContentSlider() {
  return (
    <section className="home2-content-slider">
      <Swiper {...swiperOptions} className="home2-content-slider__swiper">
        <SwiperSlide>
          <About />
        </SwiperSlide>
        <SwiperSlide>
          <Team />
        </SwiperSlide>
        <SwiperSlide>
          <Faq2 />
        </SwiperSlide>
      </Swiper>

      <div className="home2-content-slider__controls">
        <button
          type="button"
          className="home2-content-slider__nav home2-content-slider-prev"
          aria-label="Previous slide"
        >
          Prev
        </button>
        <div className="home2-content-slider-pagination" />
        <button
          type="button"
          className="home2-content-slider__nav home2-content-slider-next"
          aria-label="Next slide"
        >
          Next
        </button>
      </div>
    </section>
  );
}
