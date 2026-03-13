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
              <Link href="services">Software</Link>
            </li>
            <li>
              <Link href="/academy">Academy</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/inside">Inside</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
