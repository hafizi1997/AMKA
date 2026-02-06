import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";

export default function Header2({ scroll, handlePopup, handleMobileMenu }) {
  return (
    <>
      <header className="main-header-three">
        <nav className="main-menu main-menu-three">
          <div className="main-menu-three__wrapper">
            <div className="main-menu-three__wrapper-inner">
              <div className="main-menu-three__logo">
                <Link href="/">
                  <img src="assets/images/resources/logo-2.png"  />
                </Link>
              </div>
              <div className="main-menu-three__top">
                <div className="main-menu-three__top-inner">
                  <p className="main-menu-three__top-text">
                    AMKA Digital Sdn Bhd
                  </p>
                  <ul className="list-unstyled main-menu-three__contact-list">
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope" />
                      </div>
                      <div className="text">
                        <p>
                          <Link href="mailto:contact@amkatech.com">
                            contact@amkatech.com
                          </Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-marker" />
                      </div>
                      <div className="text">
                        <p>Cube Self Storage Suite 2.1, Seksyen 51a, 46100, Petaling Jaya, Selangor, Malaysia</p>
                      </div>
                    </li>
                  </ul>
                  <div className="main-menu-three__top-social">
                    <Link href="#">
                      <i className="fab fa-facebook" />
                    </Link>
                    <Link href="#">
                      <i className="fab fa-instagram" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="main-menu-three__bottom">
                <div className="main-menu-three__main-menu-box">
                  <a onClick={handleMobileMenu} href="#" className="mobile-nav__toggler">
                    <i className="fa fa-bars" />
                  </a>
                  <Menu />
                </div>
                <div className="main-menu-three__search-cart-btn-box">
                  <div className="main-menu-three__search-box">
                    <a
                      onClick={handlePopup}
                      href="#"
                      className="main-menu-three__search search-toggler icon-search"
                    />
                  </div>
                  <div className="main-menu-three__cart-box">
                    <a
                      href="cart"
                      className="main-menu-three__cart icon-shopping-cart"
                    />
                  </div>
                  <div className="main-menu-three__btn-box">
                    <a href="contact">
                      Get Free Quote <span className="icon-back" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="main-menu-three__top-call">
                <div className="main-menu-three__top-call-box">
                  <div className="main-menu-three__top-call-number-box float-bob-y">
                    <a href="tel:9200368090">+60 19-3623141</a>
                  </div>
                  <div className="main-menu-three__top-call-box-two">
                    <div className="main-menu-three__top-call-icon">
                      <i className="fas fa-phone" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div
        className={`stricky-header stricked-menu main-menu main-menu-three ${
          scroll ? "stricky-fixed" : ""
        }`}
      >
        <div className="sticky-header__content">
            <nav className="main-menu main-menu-three">
          <div className="main-menu-three__wrapper">
            <div className="main-menu-three__wrapper-inner">
              <div className="main-menu-three__logo">
                <a href="/">
                  <img src="assets/images/resources/logo-2.png"  />
                </a>
              </div>
              <div className="main-menu-three__top">
                <div className="main-menu-three__top-inner">
                  <p className="main-menu-three__top-text">
                    AMKA Digital Sdn Bhd
                  </p>
                  <ul className="list-unstyled main-menu-three__contact-list">
                    <li>
                      <div className="icon">
                        <i className="fas fa-envelope" />
                      </div>
                      <div className="text">
                        <p>
                          <a href="mailto:contact@amkatech.com">
                            contact@amkatech.com
                          </a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-map-marker" />
                      </div>
                      <div className="text">
                        <p>Cube Self Storage Suite 2.1, Seksyen 51a, 46100, Petaling Jaya, Selangor, Malaysia</p>
                      </div>
                    </li>
                  </ul>
                  <div className="main-menu-three__top-social">
                    <a href="#">
                      <i className="fab fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="main-menu-three__bottom">
                <div className="main-menu-three__main-menu-box">
                  <a onClick={handleMobileMenu} href="#" className="mobile-nav__toggler">
                    <i className="fa fa-bars" />
                  </a>
                  <Menu />
                </div>
                <div className="main-menu-three__search-cart-btn-box">
                  <div className="main-menu-three__search-box">
                    <a
                      onClick={handlePopup}
                      href="#"
                      className="main-menu-three__search search-toggler icon-search"
                    />
                  </div>
                  <div className="main-menu-three__cart-box">
                    <a
                      href="cart"
                      className="main-menu-three__cart icon-shopping-cart"
                    />
                  </div>
                  <div className="main-menu-three__btn-box">
                    <a href="contact">
                      Get Free Quote <span className="icon-back" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="main-menu-three__top-call">
                <div className="main-menu-three__top-call-box">
                  <div className="main-menu-three__top-call-number-box float-bob-y">
                    <a href="tel:9200368090">+60 19-3623141</a>
                  </div>
                  <div className="main-menu-three__top-call-box-two">
                    <div className="main-menu-three__top-call-icon">
                      <i className="fas fa-phone" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        </div>
        {/* /.sticky-header__content */}
      </div>

      <MobileMenu handleMobileMenu={handleMobileMenu} />
    </>
  );
}
