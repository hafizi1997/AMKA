import Link from "next/link";

export default function Service() {
  const industryItems = [
    {
      title: "Manufacturing",
      description:
        "Digitize production workflows and reduce operational delays.",
      icon: "icon-self-development",
      delay: "100ms",
    },
    {
      title: "Logistics & Distribution",
      description:
        "Improve visibility across inventory, routes, and fulfillment.",
      icon: "icon-brainstorming",
      delay: "200ms",
    },
    {
      title: "Retail & E-commerce",
      description:
        "Scale storefront, order flow, and customer experience systems.",
      icon: "icon-shopping-online",
      delay: "300ms",
    },
    {
      title: "Healthcare Services",
      description:
        "Support secure records, scheduling, and service operations.",
      icon: "icon-heart",
      delay: "400ms",
    },
    {
      title: "Financial & Professional Services",
      description:
        "Streamline compliance-heavy processes and team productivity.",
      icon: "icon-report",
      delay: "500ms",
    },
    {
      title: "Education & Public Sector",
      description:
        "Modernize service delivery and internal administration tools.",
      icon: "icon-writer",
      delay: "600ms",
    },
  ];

  return (
    <>
      {/*Services Two Start*/}
      <section className="services-two">
        <div className="container">
          <div className="section-title-two text-center">
            <div className="section-title-two__tagline-box">
              <span className="section-title-two__tagline">
                Industries We Support
              </span>
            </div>
            <h2 className="section-title-two__title">
              Built for Real Operating Environments
            </h2>
          </div>

          <div className="row">
            <div className="col-xl-6">
              <div className="services-two__left">
                <div className="services-two__img">
                  <img
                    src="assets/images/services/services-two-img-1.jpg"
                    alt="Services"
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="services-two__right">
                <div className="row">
                  {/*Services Two Single Start*/}
                  {industryItems.map((item, index) => (
                    <div
                      key={`${item.title}-${index}`}
                      className="col-xl-6 col-lg-6 wow fadeInUp"
                      data-wow-delay={item.delay}
                    >
                      <div className="services-two__single-box">
                        <div className="services-two__single">
                          <div className="services-two__icon">
                            <span className={item.icon} />
                          </div>

                          <div className="services-two__content">
                            <h3 className="services-two__title">
                              <Link href="#">{item.title}</Link>
                            </h3>

                            <p className="services-two__text">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/*Services Two Single End*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Services Two End*/}
    </>
  );
}
