import Link from "next/link";
export default function Feature() {
  return (
    <>
      {/*Feature One Start*/}
      <section className="feature-one">
        <div className="container">
          <div className="row">
            {/*Feature One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-one__single">
                <div className="feature-one__icon">
                  <span className="icon-content-management-1" />
                </div>
                <div className="feature-one__content">
                  <h3 className="feature-one__title">
                    <Link href="/services/digitalization">
                      Digitize Your Business
                    </Link>
                  </h3>
                  <p className="feature-one__text">
                    Helping businesses transition from manual processes into
                    digital operations.
                  </p>
                </div>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-one__single">
                <div className="feature-one__icon">
                  <span className="icon-ux-design" />
                </div>
                <div className="feature-one__content">
                  <h3 className="feature-one__title">
                    <Link href="/services/software-development">
                      Custom Your Software
                    </Link>
                  </h3>
                  <p className="feature-one__text">
                    Tailored systems designed to support unique operational
                    requirements.
                  </p>
                </div>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-one__single">
                <div className="feature-one__icon">
                  <span className="icon-project-management" />
                </div>
                <div className="feature-one__content">
                  <h3 className="feature-one__title">
                    <Link href="/services/business-ai-analytics">
                      Business AI Analytics
                    </Link>
                  </h3>
                  <p className="feature-one__text">
                    Make your business data into actionable insights that
                    support smarter decision-making.
                  </p>
                </div>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-one__single">
                <div className="feature-one__icon">
                  <span className="icon-supply-chain" />
                </div>
                <div className="feature-one__content">
                  <h3 className="feature-one__title">
                    <Link href="/services/cloud-infrastructure">
                      Cloud Infrastructure
                    </Link>
                  </h3>
                  <p className="feature-one__text">
                    Secure and scalable environments that support business
                    growth.
                  </p>
                </div>
              </div>
            </div>
            {/*Feature One Single End*/}
          </div>
        </div>
      </section>
      {/*Feature One End*/}
    </>
  );
}
