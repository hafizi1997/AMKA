import Link from "next/link";
export default function Service() {
  return (
    <>
      {/*Services One Start*/}
      <section className="services-one">
        <div className="container">
          <div className="section-title text-center">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-icon">
                <img src="assets/images/icon/section-title-icon.png" />
              </div>
              <p className="section-title__tagline">
                Experts in Building Digital Systems
              </p>
            </div>
            <h2 className="section-title__title">
              Secure and Reliable Solutions
            </h2>
          </div>
          <div className="services-one__inner">
            <ul className="services-one__services-list list-unstyled">
              <li>
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-coding" />
                  </div>
                  <h3 className="services-one__title">
                    Product
                    <br /> Development
                  </h3>
                </div>
              </li>
              <li>
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-cloud-database" />
                  </div>
                  <h3 className="services-one__title">
                    Cloud
                    <br /> Computing
                  </h3>
                </div>
              </li>
              <li>
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-ux-design" />
                  </div>
                  <h3 className="services-one__title">
                    UI/UX
                    <br /> Designing
                  </h3>
                </div>
              </li>
              <li>
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-cyber-security" />
                  </div>
                  <h3 className="services-one__title">
                    Cyber
                    <br /> Security
                  </h3>
                </div>
              </li>
            </ul>
            <ul className="services-one__services-list list-unstyled">
              <li>
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-event-management" />
                  </div>
                  <h3 className="services-one__title">
                    Event
                    <br /> Processing
                  </h3>
                </div>
              </li>
              <li>
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-content-management-1" />
                  </div>
                  <h3 className="services-one__title">
                    Content
                    <br /> Management
                  </h3>
                </div>
              </li>
              <li>
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-cyber-security" />
                  </div>
                  <h3 className="services-one__title">
                    Cyber
                    <br /> Security
                  </h3>
                </div>
              </li>
              <li>
                <div className="services-one__single">
                  <div className="services-one__icon">
                    <span className="icon-backup" />
                  </div>
                  <h3 className="services-one__title">
                    Backup
                    <br /> &amp; Recovery
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*Services One End*/}
    </>
  );
}
