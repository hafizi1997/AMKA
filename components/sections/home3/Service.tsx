import Link from "next/link";
export default function Service() {
  return (
    <>
      {/*Services Three Start */}
      <section className="services-three">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="services-three__left">
                <div className="section-title-three text-left">
                  <div className="section-title-three__tagline-box">
                    <p className="section-title-three__tagline">Who We Are</p>
                  </div>
                </div>
                <p className="services-three__text-1">
                  AMKA Digital Technologies Sdn Bhd is the digital solutions arm
                  of AMKA Technologies Sdn Bhd, created to help businesses
                  modernize how they operate and grow.
                </p>
                <p className="services-three__text-2">
                  We work with startups, SMEs, and growing companies to deliver
                  practical technology that solves real problems — from reducing
                  manual work and improving workflow visibility to building
                  systems that support faster decision-making.
                </p>
                <p className="services-three__text-3">
                  Our approach is simple: build solutions that are clear,
                  usable, and measurable — so technology supports your business,
                  not the other way around.
                </p>
                <div
                  className="services-three__vm wow fadeInUp"
                  data-wow-delay="450ms"
                >
                  <div className="services-three__vm-box">
                    <h4 className="services-three__vm-title">Our Vision</h4>
                    <p className="services-three__vm-text">
                      To become a trusted digital transformation partner
                      empowering businesses across Malaysia and Southeast Asia.
                    </p>
                  </div>

                  <div className="services-three__vm-box">
                    <h4 className="services-three__vm-title">Our Mission</h4>
                    <ul className="services-three__vm-list list-unstyled">
                      <li>
                        Simplify business operations through smart technology
                      </li>
                      <li>
                        Deliver scalable solutions designed for real-world
                        workflows
                      </li>
                      <li>
                        Empower businesses to grow through better systems,
                        better data, and better execution
                      </li>
                      <li>
                        Provide reliable, long-term support as a technology
                        partner
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="services-three__right">
                <div className="row">
                  {/*Services Three Right Single Start*/}
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="services-three__right-single services-three__right-single-1">
                      <div className="services-three__right-icon">
                        <img src="assets/images/icon/services-three-right-icon-1.png" />
                      </div>
                      <h3 className="services-three__right-title">
                        <Link href="services-details">Customer Success</Link>
                      </h3>
                      <p className="services-three__right-text">
                        Our success is measured by the growth, efficiency, and
                        satisfaction of our clients.
                      </p>
                    </div>
                  </div>
                  {/*Services Three Right Single End*/}
                  {/*Services Three Right Single Start*/}
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="services-three__right-single services-three__right-single-2">
                      <div className="services-three__right-icon">
                        <img src="assets/images/icon/services-three-right-icon-2.png" />
                      </div>
                      <h3 className="services-three__right-title">
                        <Link href="services-details">Integrity</Link>
                      </h3>
                      <p className="services-three__right-text">
                        We build trust through transparency, honesty,
                        <br /> and accountability.
                      </p>
                    </div>
                  </div>
                  {/*Services Three Right Single End*/}
                  {/*Services Three Right Single Start*/}
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="services-three__right-single services-three__right-single-3">
                      <div className="services-three__right-icon">
                        <img src="assets/images/icon/services-three-right-icon-3.png" />
                      </div>
                      <h3 className="services-three__right-title">
                        <Link href="services-details">Innovation</Link>
                      </h3>
                      <p className="services-three__right-text">
                        We continuously explore smarter ways to solve business
                        challenges and improve results.
                      </p>
                    </div>
                  </div>
                  {/*Services Three Right Single End*/}
                  {/*Services Three Right Single Start*/}
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <div className="services-three__right-single services-three__right-single-4">
                      <div className="services-three__right-icon">
                        <img src="assets/images/icon/services-three-right-icon-4.png" />
                      </div>
                      <h3 className="services-three__right-title">
                        <Link href="services-details">
                          Continuous Improvement
                        </Link>
                      </h3>
                      <p className="services-three__right-text">
                        We learn, iterate, and evolve — so our solutions stay
                        effective as technology changes
                      </p>
                    </div>
                  </div>
                  {/*Services Three Right Single End*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Services Three End */}
    </>
  );
}
