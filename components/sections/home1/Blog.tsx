import Link from "next/link";
export default function Blog() {
  return (
    <>
      {/*Blog One Start*/}
      <section className="blog-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-icon">
                <img src="assets/images/icon/section-title-icon.png"  />
              </div>
              <p className="section-title__tagline">Our Blog</p>
            </div>
            <h2 className="section-title__title">
              Latest Articles &amp; Blogs
            </h2>
          </div>
          <div className="row">
            {/*Blog One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img src="assets/images/blog/blog-1-1.jpg"  />
                  </div>
                  <div className="blog-one__date">
                    <p>
                      20
                      <br /> May
                    </p>
                  </div>
                </div>
                <div className="blog-one__content">
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <p>
                        <span className="fa fa-user" />
                        Admin
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-comments" />
                        02 Comment
                      </p>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <Link href="blog-details">
                      Easy Yo Use our Software New Innovation
                    </Link>
                  </h3>
                  <p className="blog-one__text">
                    Lorem ipsum is simply is text used by copytyping refreshing.
                  </p>
                  <div className="blog-one__btn">
                    <Link href="blog-details">
                      Read more
                      <span className="icon-right-arrow1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
            {/*Blog One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img src="assets/images/blog/blog-1-2.jpg"  />
                  </div>
                  <div className="blog-one__date">
                    <p>
                      20
                      <br /> May
                    </p>
                  </div>
                </div>
                <div className="blog-one__content">
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <p>
                        <span className="fa fa-user" />
                        Admin
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-comments" />
                        02 Comment
                      </p>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <Link href="blog-details">
                      Ipsum is simply is text used by copytyping
                    </Link>
                  </h3>
                  <p className="blog-one__text">
                    Lorem ipsum is simply is text used by copytyping refreshing.
                  </p>
                  <div className="blog-one__btn">
                    <Link href="blog-details">
                      Read more
                      <span className="icon-right-arrow1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
            {/*Blog One Single Start*/}
            <div
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img src="assets/images/blog/blog-1-3.jpg"  />
                  </div>
                  <div className="blog-one__date">
                    <p>
                      20
                      <br /> May
                    </p>
                  </div>
                </div>
                <div className="blog-one__content">
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <p>
                        <span className="fa fa-user" />
                        Admin
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="fa fa-comments" />
                        02 Comment
                      </p>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <Link href="blog-details">
                      Simply is text used by copytyping refreshing.
                    </Link>
                  </h3>
                  <p className="blog-one__text">
                    Lorem ipsum is simply is text used by copytyping refreshing.
                  </p>
                  <div className="blog-one__btn">
                    <Link href="blog-details">
                      Read more
                      <span className="icon-right-arrow1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/*Blog One Single End*/}
          </div>
        </div>
      </section>
      {/*Blog One End*/}
    </>
  );
}
