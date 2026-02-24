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
          <Link href="/about">About</Link>
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
        <li>
          <Link href="/career">Career</Link>
        </li>
        <li>
          <Link href="contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
