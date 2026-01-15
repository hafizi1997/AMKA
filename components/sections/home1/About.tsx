import Link from "next/link";
export default function About() {
  return (
    <>
      {/*About One Start*/}
      <section className="about-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-one__left">
                <div
                  className="about-one__img wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="2500ms"
                >
                  <img
                    src="assets/images/resources/about-one-img-1.jpg"
                    
                  />
                  <div className="about-one__experience-text">
                    <p>12 years Experience</p>
                  </div>
                  <div className="about-one__img-box">
                    <div className="about-one__img-2">
                      <img
                        src="assets/images/resources/about-one-img-2.jpg"
                        
                      />
                      <div className="about-one__video-link">
                        <a className="video-popup">
                          <div className="about-one__video-icon">
                            <span className="fa fa-play" />
                            <i className="ripple" />
                          </div>
                        </a>
                      </div>
                      <div className="about-one__shape-1" />
                    </div>
                  </div>
                  <div className="about-one__project-complete">
                    <div className="about-one__count count-box">
                      <h3 className="count-text">100</h3>
                      <span>+</span>
                    </div>
                    <p className="about-one__count-text">
                      Project
                      <br /> Complete
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__right">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-icon">
                      <img
                        src="assets/images/icon/section-title-icon.png"
                        
                      />
                    </div>
                    <p className="section-title__tagline">About Us</p>
                  </div>
                  <h2 className="section-title__title">
                    Creating Unmatched
                    <br /> Technology
                  </h2>
                </div>
                <p className="about-one__text">
                  Non augue egestas, commodo velit eget, vestibulum tellus.
                  Curabitur vulputate justo elit, at elementum orci pulvinar
                  vel. in a Pellentesque habitant morbi tristique. Pellentesque
                  habitant morbi tristique.
                </p>
                <ul className="about-one__points list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="fa fa-check" />
                    </div>
                    <div className="text">
                      <p>Take a look at our round up of the best shows</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="fa fa-check" />
                    </div>
                    <div className="text">
                      <p>It has survived not only five centuries</p>
                    </div>
                  </li>
                </ul>
                <div className="about-one__it-solution">
                  <div className="about-one__it-solution-img">
                    <img
                      src="assets/images/resources/about-one-it-solution-img.jpg"
                      
                    />
                  </div>
                  <div className="about-one__it-solution-content">
                    <p>
                      IT Solutions Services Company Funded in <span>1998</span>
                    </p>
                  </div>
                </div>
                <div className="about-one__btn-and-contact">
                  <div className="about-one__btn-box">
                    <Link href="about" className="about-one__btn thm-btn">
                      Discover More
                      <span className="fa fa-plus" />
                    </Link>
                  </div>
                  <div className="about-one__contact-box">
                    <div className="about-one__contact-icon">
                      <span className="fas fa-phone" />
                    </div>
                    <div className="about-one__contact">
                      <span>Call Anytime</span>
                      <p>
                        <Link href="tel:9288006780">+92 ( 8800 ) - 6780</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About One End*/}
    </>
  );
}
