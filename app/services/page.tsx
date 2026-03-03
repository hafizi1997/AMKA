"use client";
import Link from "next/link";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import TestimonialSlider from "@/components/slider/TestimonialSlider";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Process from "@/components/sections/home1/Process";
import Feature from "@/components/sections/home1/Feature";
import Service from "@/components/sections/home2/Service";
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 6,
  spaceBetween: 0,

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
    },
    575: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 5,
    },
    1199: {
      slidesPerView: 6,
    },
    1350: {
      slidesPerView: 6,
    },
  },
};
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={3}
        footerStyle={1}
        breadcrumbTitle="Smart Digital Solutions Designed for Business Growth"
        description="We help organizations modernize operations, improve efficiency, and scale through practical digital solutions built for real business environments."
        backgroundImage="/assets/images/backgrounds/service-bg2.png"
      >
        {/*Brand One Start*/}
        {/* <Brands /> */}
        {/*Brand One End*/}

        {/*Feature One Start*/}
        <Feature />
        {/*Feature One End*/}

        {/*Services Four Start*/}
        <section className="services-four services-five">
          <div
            className="services-four__bg"
            style={{
              backgroundImage:
                "url(/assets/images/backgrounds/services-four-bg.png)",
            }}
          />
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-icon">
                  <img src="/assets/images/icon/section-title-icon.png" />
                </div>
                <p className="section-title__tagline">What We Offering</p>
              </div>
              <h2 className="section-title__title">We Help Businesses Grow</h2>
            </div>
            <div className="row">
              {/*Services Four Single Start*/}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="services-four__single">
                  <div className="services-four__shape-1" />
                  <div className="services-four__shape-2" />
                  <div className="services-four__icon">
                    <span className="icon-software" />
                  </div>
                  <h3 className="services-four__title">
                    <Link href="services-details">
                      CRM <br /> System
                    </Link>
                  </h3>
                  <p className="services-four__text">
                    Expert guidance to design, optimize, and integrate CRM and
                    automation workflows that support scalable business growth
                  </p>
                  <Link href="" className="services-four__arrow">
                    <span className="icon-back" />
                  </Link>
                </div>
              </div>
              {/*Services Four Single End*/}
              {/*Services Four Single Start*/}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="services-four__single">
                  <div className="services-four__shape-1" />
                  <div className="services-four__shape-2" />
                  <div className="services-four__icon">
                    <span className="icon-web-page" />
                  </div>
                  <h3 className="services-four__title">
                    <Link href="services-details">
                      Speed <br /> Optimization
                    </Link>
                  </h3>
                  <p className="services-four__text">
                    Improve website performance, stability, and technical health
                    to support user experience and sustainable business growth
                  </p>
                  <Link href="" className="services-four__arrow">
                    <span className="icon-back" />
                  </Link>
                </div>
              </div>
              {/*Services Four Single End*/}
              {/*Services Four Single Start*/}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="services-four__single">
                  <div className="services-four__shape-1" />
                  <div className="services-four__shape-2" />
                  <div className="services-four__icon">
                    <span className="icon-shopping-online" />
                  </div>
                  <h3 className="services-four__title">
                    <Link href="services-details">
                      E-commerce <br /> Solutions
                    </Link>
                  </h3>
                  <p className="services-four__text">
                    Design and build scalable e-commerce platforms that support
                    sales, operations, and long-term business growth.
                  </p>
                  <Link href="" className="services-four__arrow">
                    <span className="icon-back" />
                  </Link>
                </div>
              </div>
              {/*Services Four Single End*/}
              {/*Services Four Single Start*/}
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="services-four__single">
                  <div className="services-four__shape-1" />
                  <div className="services-four__shape-2" />
                  <div className="services-four__icon">
                    <span className="icon-cyber-security" />
                  </div>
                  <h3 className="services-four__title">
                    <Link href="services-details">
                      Website <br /> Maintenance
                    </Link>
                  </h3>
                  <p className="services-four__text">
                    Keep your websites and systems secure, performant, and
                    aligned with evolving business needs.
                  </p>
                  <Link href="" className="services-four__arrow">
                    <span className="icon-back" />
                  </Link>
                </div>
              </div>
              {/*Services Four Single End*/}
            </div>
          </div>
        </section>
        {/*Services Four End*/}

        {/*Industry Start*/}
        <Service />
        {/*Industry End*/}

        {/*Process One Start*/}
        <section className="process-one">
          <div className="container">
            <div className="section-title text-center">
              <div className="section-title__tagline-box">
                <div className="section-title__tagline-icon sm:hidden">
                  <img src="/assets/images/icon/section-title-icon.png" />
                </div>
                <p className="section-title__tagline">Our Approach</p>
              </div>
              <h2 className="section-title__title">
                Our Approach For Better Results
              </h2>
            </div>
          </div>
          <Process />
        </section>
        {/*Process One End*/}

        {/*Newsletter One Start*/}
        <section className="newsletter-one">
          <div className="container">
            <div className="newsletter-one__inner">
              <div
                className="newsletter-one__bg float-bob-y"
                style={{
                  backgroundImage:
                    "url(/assets/images/backgrounds/newsletter-one-bg.jpg)",
                }}
              />
              <h3 className="newsletter-one__title">
                Ready to Modernize Your Business Operations?
              </h3>
              <div
                className="newsletter-one__form mc-form"
                data-url="MC_FORM_URL"
              >
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  inputMode="tel"
                  autoComplete="tel"
                />
                <button type="submit" className="newsletter-one__btn">
                  <span>
                    Get Contacted
                    <i className="icon-arrow" />
                  </span>
                </button>
              </div>
              {/* /.subscribe-one__form */}
              <div className="mc-form__response" />
              {/* /.mc-form__response */}
            </div>
          </div>
        </section>
        {/*Newsletter One End*/}
      </Layout>
    </>
  );
}
