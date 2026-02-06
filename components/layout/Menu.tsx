import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      <ul className="main-menu__list">
        <li className="megamenu">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#about-scroll-target">About</Link>
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
