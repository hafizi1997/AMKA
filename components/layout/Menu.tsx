import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      <ul className="main-menu__list">
        <li className="dropdown megamenu">
          <Link href="/">Home </Link>
          <ul>
            <li>
              <section className="home-showcase">
                <div className="container">
                  <div className="home-showcase__inner">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="home-showcase__item">
                          <div className="home-showcase__image">
                            <img
                              src="assets/images/home-showcase/home-showcase-1-1.jpg"
                              
                            />
                            <div className="home-showcase__buttons">
                              <Link
                                href="/"
                                className="thm-btn home-showcase__buttons__item"
                              >
                                View Page
                              </Link>
                            </div>
                            {/* /.home-showcase__buttons */}
                          </div>
                          {/* /.home-showcase__image */}
                          <h3 className="home-showcase__title">Home Page 01</h3>
                          {/* /.home-showcase__title */}
                        </div>
                        {/* /.home-showcase__item */}
                      </div>
                      {/* /.col-lg-3 */}
                      <div className="col-lg-3">
                        <div className="home-showcase__item">
                          <div className="home-showcase__image">
                            <img
                              src="assets/images/home-showcase/home-showcase-1-2.jpg"
                              
                            />
                            <div className="home-showcase__buttons">
                              <Link
                                href="index-2"
                                className="thm-btn home-showcase__buttons__item"
                              >
                                View Page
                              </Link>
                            </div>
                            {/* /.home-showcase__buttons */}
                          </div>
                          {/* /.home-showcase__image */}
                          <h3 className="home-showcase__title">Home Page 02</h3>
                          {/* /.home-showcase__title */}
                        </div>
                        {/* /.home-showcase__item */}
                      </div>
                      {/* /.col-lg-3 */}
                      <div className="col-lg-3">
                        <div className="home-showcase__item">
                          <div className="home-showcase__image">
                            <img
                              src="assets/images/home-showcase/home-showcase-1-3.jpg"
                              
                            />
                            <div className="home-showcase__buttons">
                              <Link
                                href="index-3"
                                className="thm-btn home-showcase__buttons__item"
                              >
                                View Page
                              </Link>
                            </div>
                            {/* /.home-showcase__buttons */}
                          </div>
                          {/* /.home-showcase__image */}
                          <h3 className="home-showcase__title">Home Page 03</h3>
                          {/* /.home-showcase__title */}
                        </div>
                        {/* /.home-showcase__item */}
                      </div>
                      {/* /.col-lg-3 */}
                      <div className="col-lg-3">
                        <div className="home-showcase__item">
                          <div className="home-showcase__image">
                            <img
                              src="assets/images/home-showcase/home-showcase-1-4.jpg"
                              
                            />
                            <div className="home-showcase__buttons">
                              <Link
                                href="index-dark"
                                className="thm-btn home-showcase__buttons__item"
                              >
                                View Page
                              </Link>
                            </div>
                            {/* /.home-showcase__buttons */}
                          </div>
                          {/* /.home-showcase__image */}
                          <h3 className="home-showcase__title">Home Page 04</h3>
                          {/* /.home-showcase__title */}
                        </div>
                        {/* /.home-showcase__item */}
                      </div>
                      {/* /.col-lg-3 */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/* /.home-showcase__inner */}
                </div>
                {/* /.container */}
              </section>
            </li>
          </ul>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
        <li className="dropdown">
          <Link href="#">Services</Link>
          <ul className="sub-menu">
            <li>
              <Link href="services">Services</Link>
            </li>
            <li>
              <Link href="service-details">Service Details</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#">Pages</Link>
          <ul className="sub-menu">
            <li>
              <Link href="team">Our team</Link>
            </li>
            <li>
              <Link href="team-details">Team details</Link>
            </li>
            <li>
              <Link href="portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="portfolio-details">Portfolio Details</Link>
            </li>
            <li>
              <Link href="case-single">Case Single</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="#">Blog</Link>
          <ul className="sub-menu">
            <li>
              <Link href="blog">Blog</Link>
            </li>
            <li>
              <Link href="blog-details">Blog details</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
