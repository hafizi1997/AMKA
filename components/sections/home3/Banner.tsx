
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,

  loop: true,

  // Navigation
  navigation: {
    nextEl: '.srn',
    prevEl: '.srp',
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },



}

export default function Banner() {
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
      <section className="main-slider-three">
        <div
          className="main-slider-three__bg-1"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/main-slider-three-bg-1.jpg)"
          }}
        />
        <div className="main-slider-three__social">
          <Link href="#">Facebook</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">Twitter</Link>
          <Link href="#">Pinterest</Link>
        </div>
        <ul className="list-unstyled main-slider-three__open-close-hours">
          <li>Mon - fri</li>
          <li>9am - 7pm</li>
        </ul>
        <Swiper {...swiperOptions} className="main-slider-three__wrap">
          <div
            className="main-slider-three__carousel owl-carousel owl-theme thm-owl__carousel"
          >
            {slides.map((slide, index) => (
            <SwiperSlide>
              <div className="item main-slider-three__slide-1">
                <div className="main-slider-three__img">
                  <img
                    src={slide.bg}
                    
                  />
                </div>
                <div className="main-slider-three__overly" />
                <div className="main-slider-three__shape-1 float-bob-y">
                  <img
                    src="assets/images/shapes/main-slider-three-shape-1.png"
                    
                  />
                </div>
                <div className="container">
                  <div className="main-slider-three__content">
                    <p className="main-slider-three__sub-title">
                      {slide.subTitle}
                    </p>
                    <h2 className="main-slider-three__title">
                      {slide.title}
                    </h2>
                    <p className="main-slider-three__text">
                      {slide.text}
                    </p>
                    <div className="main-slider-three__btn-box">
                      <Link href={slide.ctaLink} className="main-slider-three__btn">
                        {slide.ctaText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
      {/*Main Sllider Start */}


    </>
  )
}
