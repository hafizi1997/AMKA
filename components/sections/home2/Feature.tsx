import Link from "next/link";

export default function Feature() {
  return (
    <>
      {/*Feature Two Start */}
      <section className="feature-two" id="about-scroll-target">
        <div className="container">
          <div className="row">
            {/*Feature Two Single Start */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="feature-two__single">
                <div className="feature-two__icon">
                  <span className="icon-content-management-1" />
                </div>
                <h3 className="feature-two__title">
                  <Link href="team"> Digitize Your Business</Link>
                </h3>
                <p className="feature-two__text">
                  Helping businesses transition from manual processes into
                  digital operations.
                </p>
              </div>
            </div>
            {/*Feature Two Single End */}
            {/*Feature Two Single Start */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="feature-two__single">
                <div className="feature-two__icon">
                  <span className="icon-ux-design" />
                </div>
                <h3 className="feature-two__title">
                  <Link href="contact">Custom Your Software</Link>
                </h3>
                <p className="feature-two__text">
                  Tailored systems designed to support unique operational
                  requirements.
                </p>
              </div>
            </div>
            {/*Feature Two Single End */}
            {/*Feature Two Single Start */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="feature-two__single">
                <div className="feature-two__icon">
                  <span className="icon-project-management" />
                </div>
                <h3 className="feature-two__title">
                  <Link href="services">Business AI Analytics</Link>
                </h3>
                <p className="feature-two__text">
                  Make your business data into actionable insights that support
                  smarter decision-making.
                </p>
              </div>
            </div>
            {/*Feature Two Single End */}
            {/*Feature Two Single Start */}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="feature-two__single">
                <div className="feature-two__icon">
                  <span className="icon-supply-chain" />
                </div>
                <h3 className="feature-two__title">
                  <Link href="services">Cloud Infrastructure</Link>
                </h3>
                <p className="feature-two__text">
                  Secure and scalable environments that support business growth.
                </p>
              </div>
            </div>
            {/*Feature Two Single End */}
          </div>
        </div>
      </section>
      {/*Feature Two Start */}
    </>
  );
}
