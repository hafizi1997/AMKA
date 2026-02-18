"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 6,
  spaceBetween: 20,

  loop: true,

  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 14,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
    1199: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1350: {
      slidesPerView: 6,
      spaceBetween: 22,
    },
  },
};
export default function Brands() {
  return (
    <>
      {/*Brand One Start*/}
      <section className="brand-one">
        <div className="brand-one__inner">
          <Swiper
            {...swiperOptions}
            className="brand-one__carousel thm-owl__carousel owl-theme owl-carousel"
          >
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/brand/panasonic.png" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/brand/veolia.png" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/brand/megajana2.png" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/brand/gas.png" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/brand/westports.png" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Brand One Single*/}
              <div className="brand-one__single">
                <div className="brand-one__img">
                  <img src="assets/images/brand/amka.png" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* If we need navigation buttons */}
        </div>
      </section>
      {/*Brand One End*/}
    </>
  );
}
