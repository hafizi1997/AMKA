import Link from "next/link";

export default function Feature() {
  return (
    <>
      {/*Feature Two Start */}
      <section className="feature-two">
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
                <p className="feature-two__text">Build systems that scale with your business.</p>
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
                  <Link href="contact">Web UI/UX Design</Link>
                </h3>
                <p className="feature-two__text"> Conversion-focused website design built for real users.</p>
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
                  <Link href="services">Digital Growth Strategy</Link>
                </h3>
                <p className="feature-two__text">A clear roadmap before you invest further</p>
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
                  <Link href="services">Website Consultant</Link>
                </h3>
                <p className="feature-two__text">Make the right digital decisions before you build.</p>
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
