import Link from "next/link";

export default function Article2() {
  const growthPotential = 90;

  return (
    <>
      {/*Team Two Start*/}
      <section className="team-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="team-two__left">
                <div className="section-title-two text-left">
                  <div className="section-title-two__tagline-box">
                    <span className="section-title-two__tagline">
                      Inside The Playbook
                    </span>
                  </div>
                  <h2 className="section-title-two__title">
                    How Technical Services Companies Build Predictable Growth
                  </h2>
                </div>
                <p className="team-two__text">
                  Many technical services companies start with strong expertise
                  but struggle to grow their business consistently. Projects
                  often come from referrals or occasional connections, creating
                  unpredictable pipelines and long gaps between engagements. The
                  playbook introduces a structured business development approach
                  designed specifically for Malaysian technical services firms.
                </p>
                <ul className="list-unstyled about-two__points">
                  <li>
                    <div className="icon">
                      <span className="icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        Understand the growth formula used by successful
                        professional services firms: Network × Buyers × Average
                        Project Value
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-check" />
                    </div>
                    <div className="text">
                      <p>
                        Learn how trust, relationships, and credibility turn
                        technical expertise into long-term client partnerships
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="team-two__content-box">
                  <div className="team-two__content-icon">
                    <span className="icon-self-development" />
                  </div>
                  <div className="team-two__content">
                    <h4 className="team-two__content-title">
                      Structured Business Development
                    </h4>
                    <p className="team-two__content-text">
                      The playbook provides a practical framework for building
                      reputation, expanding the right network, and <br />
                      converting conversations into long-term business
                      opportunities.
                    </p>
                  </div>
                </div>
                <div className="team-two__progress">
                  <h4 className="team-two__progress-title">
                    Business Growth Potential
                  </h4>
                  <div className="bar">
                    <div
                      className="bar-inner count-bar counted"
                      data-percent={`${growthPotential}%`}
                      style={{ width: `${growthPotential}%` }}
                    >
                      <div className="count-text">{growthPotential}%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="team-two__right">
                <div className="row">
                  {/*Team Two Single Start*/}
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="team-two__single">
                      <div className="team-two__img-box">
                        <div className="team-two__img">
                          <img src="assets/images/team/team-2-1.jpg" />
                          <div className="team-two__hover-content">
                            <h4 className="team-two__title">
                              <Link href="team-details">Kevin Martin</Link>
                            </h4>
                            <p className="team-two__sub-title">
                              Senior Designer
                            </p>
                          </div>
                        </div>
                        <div className="team-two__social">
                          <Link href="#">
                            <i className="fab fa-twitter" />
                          </Link>
                          <Link href="#">
                            <i className="fab fa-facebook" />
                          </Link>
                          <Link href="#">
                            <i className="fab fa-pinterest-p" />
                          </Link>
                          <Link href="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Team Two Single End*/}
                  {/*Team Two Single Start*/}
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="team-two__single">
                      <div className="team-two__img-box">
                        <div className="team-two__img">
                          <img src="assets/images/team/team-2-2.jpg" />
                          <div className="team-two__hover-content">
                            <h4 className="team-two__title">
                              <Link href="team-details">Martyn D Joseph</Link>
                            </h4>
                            <p className="team-two__sub-title">
                              Senior Designer
                            </p>
                          </div>
                        </div>
                        <div className="team-two__social">
                          <Link href="#">
                            <i className="fab fa-twitter" />
                          </Link>
                          <Link href="#">
                            <i className="fab fa-facebook" />
                          </Link>
                          <Link href="#">
                            <i className="fab fa-pinterest-p" />
                          </Link>
                          <Link href="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Team Two Single End*/}
                  {/*Team Two Single Start*/}
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="team-two__single">
                      <div className="team-two__img-box">
                        <div className="team-two__img">
                          <img src="assets/images/team/team-2-3.jpg" />
                          <div className="team-two__hover-content">
                            <h4 className="team-two__title">
                              <Link href="team-details">Aljary Joseph</Link>
                            </h4>
                            <p className="team-two__sub-title">
                              Senior Designer
                            </p>
                          </div>
                        </div>
                        <div className="team-two__social">
                          <Link href="#">
                            <i className="fab fa-twitter" />
                          </Link>
                          <Link href="#">
                            <i className="fab fa-facebook" />
                          </Link>
                          <Link href="#">
                            <i className="fab fa-pinterest-p" />
                          </Link>
                          <Link href="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Team Two Single End*/}
                  {/*Team Two Single Start*/}
                  <div
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <div className="team-two__single">
                      <div className="team-two__img-box">
                        <div className="team-two__img">
                          <img src="assets/images/team/team-2-4.jpg" />
                          <div className="team-two__hover-content">
                            <h4 className="team-two__title">
                              <Link href="team-details">Kevin Coper</Link>
                            </h4>
                            <p className="team-two__sub-title">
                              Senior Designer
                            </p>
                          </div>
                        </div>
                        <div className="team-two__social">
                          <Link href="#">
                            <i className="fab fa-twitter" />
                          </Link>
                          <Link href="#">
                            <i className="fab fa-facebook" />
                          </Link>
                          <Link href="#">
                            <i className="fab fa-pinterest-p" />
                          </Link>
                          <Link href="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Team Two Single End*/}
                </div>
              </div>

              <div className="about-two__btn d-flex justify-content-center">
                <Link href="/playbook-technical-services">Discover More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Team Two End*/}
    </>
  );
}
