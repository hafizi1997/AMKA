import Link from "next/link";
export default function Breadcrumb({ breadcrumbTitle, link }) {
  return (
    <>
      {/*Page Header Start*/}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage: "url(/assets/images/backgrounds/service-bg.png)",
          }}
        ></div>
        <div className="page-header__shape-1" />
        <div className="page-header__shape-2 float-bob-y">
          <img src="/assets/images/shapes/page-header-shape-2.png" />
        </div>
        <div className="page-header__shape-3 float-bob-x">
          <img src="/assets/images/shapes/page-header-shape-3.png" />
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2>{breadcrumbTitle}</h2>
            <ul className="thm-breadcrumb list-unstyled">
              {link && ( <>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li> <span>-</span> </li>
                </>
              )}
              <li>A Malaysian digital agency delivering software, mobile apps, and marketing solutions to move your business forward</li>
            </ul>
          </div>
        </div>
      </section>
      {/*Page Header End*/}
    </>
  );
}
