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
                  AMKA Digital Technologies Sdn Bhd is a part of the AMKA
                  Technologies group, a technology company dedicated to helping
                  businesses modernize their operations, improve efficiency, and
                  scale sustainably through technology.
                </p>
                <p className="services-three__text-2">
                  We partner with organizations of all sizes — from startups and
                  SMEs to growing enterprises — delivering practical digital
                  solutions that solve real business challenges.
                </p>
                <p className="services-three__text-3">
                  Our approach focuses on clarity, usability, and measurable
                  results, ensuring technology works for your business, not
                  against it.
                </p>
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
                        <Link href="services-details">Innovation</Link>
                      </h3>
                      <p className="services-three__right-text">
                        We continuously explore smarter ways to solve
                        <br /> business challenges.
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
                        <Link href="services-details">Customer Success</Link>
                      </h3>
                      <p className="services-three__right-text">
                        Our success is measured by the growth and
                        <br /> satisfaction of our clients.
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
                        We evolve with technology to deliver better outcomes
                        <br /> for our clients.
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
