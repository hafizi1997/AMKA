import Link from "next/link";
export default function Article1() {
  return (
    <>
      {/*About Two Start*/}
      <section className="about-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-two__left">
                <div
                  className="about-two__img-box wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <div className="about-two__img">
                    <img src="assets/images/resources/about-two-playbook-cover.png" />
                  </div>
                  <div className="about-two__experience-box">
                    <div className="about-two__experience">
                      <h3>1</h3>
                      <p>
                        Practical Growth <br /> Framework
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-two__right">
                <div className="section-title-two text-left">
                  <div className="section-title-two__tagline-box">
                    <span className="section-title-two__tagline">
                      Inside The Playbook
                    </span>
                  </div>
                  <h2 className="section-title-two__title">
                    Turn Expertise Into A Repeatable Growth System
                  </h2>
                </div>
                <p className="about-two__text">
                  Many training and consulting professionals begin their journey
                  with strong expertise but struggle to grow their practice
                  consistently. Client engagements often come from unpredictable
                  referrals or occasional networking, leaving long gaps between
                  projects. Without a clear business development system, it
                  becomes difficult to build the right network, convert
                  conversations into opportunities, and turn expertise into
                  sustainable growth
                </p>
                <ul className="list-unstyled about-two__solution-box">
                  <li>
                    <div className="about-two__solution-icon">
                      <span className="icon-check" />
                    </div>
                    <div className="about-two__solution-text">
                      <p>
                        Stronger Client
                        <br /> Relationships
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="about-two__solution-icon">
                      <span className="icon-check" />
                    </div>
                    <div className="about-two__solution-text">
                      <p>
                        Better Business
                        <br /> Development
                      </p>
                    </div>
                  </li>
                </ul>
                <ul className="list-unstyled about-two__points">
                  <li>
                    <div className="icon">
                      <span className="icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        Learn how to grow your network, increase buyer
                        conversion, and raise engagement value
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        Discover how trust, client psychology, and structured
                        follow-up turn expertise into long-term business growth
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="about-two__btn-and-call">
                  <div className="about-two__btn">
                    <Link href="/playbook-growth-engine">Discover More</Link>
                  </div>
                  <div className="about-two__call">
                    <div className="about-two__call-icon">
                      <span className="icon-phone" />
                    </div>
                    <div className="about-two__call-content">
                      <p>Call Anytime</p>
                      <h4>
                        <Link href="tel:9288006780">+60 19-3623141</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Two End*/}
    </>
  );
}
