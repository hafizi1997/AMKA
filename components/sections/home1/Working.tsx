export default function Benefit() {
  return (
    <>
      {/*Benefits One Start*/}
      <section className="benefits-one">
        <div className="benefits-one__shape-1">
          <div
            className="benefits-one__shape-bg"
            style={{
              backgroundImage:
                "url(assets/images/backgrounds/benefits-one-shape-bg.png)",
            }}
          />
        </div>
        <div
          className="benefits-one__bg-one"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/test3.png)",
          }}
        />
        <div className="benefits-one__overly" />
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="benefits-one__left">
                <div
                  className="benefits-one__img wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img src="assets/images/resources/test1.png" />
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="benefits-one__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-icon">
                      <img src="assets/images/icon/section-title-icon.png" />
                    </div>
                    <p className="section-title__tagline">What We Build</p>
                  </div>
                  <h2 className="section-title__title">
                    Built for Scalability,
                    <br /> Not Just Delivery
                  </h2>
                </div>
                <p className="benefits-one__text">
                  At AMKA Digital, we design scalable digital systems that align
                  with real business operations. Our solutions focus on clarity,
                  efficiency, and long-term growth — not quick fixes.
                </p>
                <div className="benefits-one__points-and-mission">
                  <ul className="benefits-one__points list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Structured Systems</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="fa fa-check" />
                      </div>
                      <div className="text">
                        <p>Business Efficiency</p>
                      </div>
                    </li>
                  </ul>
                  <div className="benefits-one__mission">
                    <h3 className="benefits-one__mission-title">
                      Our Benefits
                    </h3>
                    <p className="benefits-one__mission-text">
                      Technology should support operations, not complicate them.
                      We design solutions that fit the way businesses actually
                      work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Benefits One End*/}
    </>
  );
}
