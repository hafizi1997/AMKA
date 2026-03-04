"use client";
import Layout from "@/components/layout/Layout";
import Process from "@/components/sections/home1/Process";
import Feature from "@/components/sections/home1/Feature";
import Service from "@/components/sections/home2/Service";

const impactServices = [
  {
    title: "CRM & Sales Operations Systems",
    icon: "icon-software",
    delay: "100ms",
    description:
      "Design centralized customer management platforms that improve lead tracking, sales visibility, and performance accountability.",
    points: [
      "Structured pipeline monitoring",
      "Automated follow-ups and alerts",
      "Cross-team visibility into customer lifecycle",
    ],
    impact: "Higher conversion rates and stronger sales forecasting accuracy.",
  },
  {
    title: "Digital Performance Optimization",
    icon: "icon-web-page",
    delay: "200ms",
    description:
      "Improve platform performance, system reliability, and digital user experience to support operational consistency.",
    points: [
      "Infrastructure performance tuning",
      "System stability improvements",
      "UX performance enhancements",
    ],
    impact: "Reduced downtime and improved customer retention.",
  },
  {
    title: "E-Commerce & Revenue Platforms",
    icon: "icon-shopping-online",
    delay: "300ms",
    description:
      "Build scalable commerce systems that integrate sales, inventory, payments, and reporting into a unified ecosystem.",
    points: [
      "Inventory and order automation",
      "Secure payment integration",
      "Sales analytics dashboard",
    ],
    impact: "Faster order processing and improved revenue visibility.",
  },
  {
    title: "Ongoing System Governance & Support",
    icon: "icon-cyber-security",
    delay: "400ms",
    description:
      "Maintain operational continuity through structured monitoring, updates, and security hardening.",
    points: [
      "System health monitoring",
      "Backup & recovery strategy",
      "Technical debt management",
    ],
    impact: "Long-term operational stability and reduced business risk.",
  },
];
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
                <p className="section-title__tagline">
                  Where We Deliver Impact
                </p>
              </div>
              <h2 className="section-title__title">
                Practical digital solutions applied to real business
                environments.
              </h2>
              <p className="services-impact__intro">
                Strategic systems designed to improve execution quality, reduce
                operational friction, and make performance measurable across
                teams.
              </p>
            </div>
            <div className="row gutter-y-30">
              {impactServices.map((service, index) => (
                <div
                  key={service.title}
                  className="col-xl-6 col-lg-6 wow fadeInUp"
                  data-wow-delay={service.delay}
                >
                  <article className="services-four__single services-impact__card">
                    <div className="services-four__shape-1" />
                    <div className="services-four__shape-2" />
                    <div className="services-impact__head">
                      <div className="services-four__icon">
                        <span className={service.icon} />
                      </div>
                      <span className="services-impact__index">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="services-four__title services-impact__title">
                      {service.title}
                    </h3>
                    <p className="services-four__text services-impact__description">
                      {service.description}
                    </p>
                    <ul className="services-impact__points">
                      {service.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <p className="services-impact__impact">
                      <span>Impact:</span> {service.impact}
                    </p>
                  </article>
                </div>
              ))}
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
