"use client";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,

  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  const [isOpen, setOpen] = useState(false);
  const slides = [
    {
      bg: "assets/images/backgrounds/services-banner.png",
      subTitle: "Strategic Digital Solutions",
      title: (
        <>
          Helping Businesses Grow <br />
          Through Smart Digital Systems
        </>
      ),
      text: (
        <>
          We design digital systems, websites, and platforms that help Malaysian
          businesses operate better, convert more customers, and scale with
          confidence.
        </>
      ),
      ctaText: "Get a Free Growth Strategy",
      ctaLink: "/contact",
    },
    {
      bg: "assets/images/backgrounds/services-banner-2.png",
      subTitle: "What We Do",
      title: (
        <>
          From Strategy to <br />
          Scalable Execution
        </>
      ),
      text: (
        <>
          Digital systems, UI/UX design, CRM workflows, e-commerce solutions,
          and ongoing optimization — built around real business needs.
        </>
      ),
      ctaText: "View Our Services",
      ctaLink: "/services",
    },
    {
      bg: "assets/images/backgrounds/services-banner-3.png",
      subTitle: "Why AMKA Digital",
      title: (
        <>
          Enterprise Thinking, <br />
          SME Agility
        </>
      ),
      text: (
        <>
          We combine strategic thinking with practical execution to deliver
          clarity, performance, and long-term digital growth.
        </>
      ),
      ctaText: "Talk to Our Experts",
      ctaLink: "/contact",
    },
  ];
  return (
    <>
      {/* Main Sllider Start */}
      <section className="main-slider">
        <Swiper
          {...swiperOptions}
          className="main-slider__carousel owl-carousel owl-theme thm-owl__carousel"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="item main-slider__slide-1">
                <div
                  className="main-slider__bg"
                  style={{
                    backgroundImage: `url(${slide.bg})`,
                  }}
                ></div>
                {/* /.slider-one__bg */}
                <div className="main-slider__shape-1" />
                <div className="main-slider__shape-2 float-bob-y">
                  <img src="assets/images/shapes/main-slider-shape-2.png" />
                </div>
                <div className="main-slider__shape-3 float-bob-x">
                  <img src="assets/images/shapes/main-slider-shape-3.png" />
                </div>
                <div className="container">
                  <div className="main-slider__content">
                    <p className="main-slider__sub-title">{slide.subTitle}</p>
                    <h2 className="main-slider__title">{slide.title}</h2>
                    <p className="main-slider__text">{slide.text}</p>
                    <div className="main-slider__btn-box">
                      <a
                        href={slide.ctaLink}
                        className="thm-btn main-slider__btn"
                      >
                        {slide.ctaText}
                        <span className="fa fa-plus" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/*Main Sllider Start */}
    </>
  );
}
