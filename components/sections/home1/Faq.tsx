"use client";
import { useState } from "react";
export default function Faq() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      {/*FAQ One Start*/}
      <section className="faq-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="faq-one__left">
                <div className="section-title text-left">
                  <div className="section-title__tagline-box">
                    <div className="section-title__tagline-icon">
                      <img src="assets/images/icon/section-title-icon.png" />
                    </div>
                    <p className="section-title__tagline">
                      Frequently Asked Questions
                    </p>
                  </div>
                  <h2 className="section-title__title">
                    Answers Before You Get
                    <br /> Started
                  </h2>
                </div>
                <p className="faq-one__text">
                  We work with businesses that want clarity before committing to
                  a digital project. Below are some of the most common questions
                  we receive about our approach, process, and how we work with
                  clients.
                </p>
                <div className="faq-one__img-and-system">
                  <div className="faq-one__img">
                    <img src="assets/images/resources/faq-one-img.jpg" />
                  </div>
                  <div className="faq-one__system">
                    <h3 className="faq-one__system-title">
                      Designed for Real Operations
                    </h3>
                    <p className="faq-one__system-text">
                      We design systems that fit how businesses actually
                      operate, scale, and grow.
                    </p>
                    <div className="faq-one__system-points">
                      <div className="icon">
                        <span className="icon-check" />
                      </div>
                      <div className="text">
                        <p>The Perfect Business Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="faq-one__right">
                <div
                  className="accrodion-grp faq-one-accrodion"
                  data-grp-name="faq-one-accrodion"
                >
                  <div
                    className={
                      isActive.key == 1 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(1)}
                  >
                    <div className="accrodion-title">
                      <h4>Do you only build websites?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          No. We focus on building digital systems — websites
                          are just one part of that. Our work often includes
                          workflows, CRM integration, dashboards, performance
                          optimization, and long-term system planning.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 2 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <div className="accrodion-title">
                      <h4>Who do you usually work with?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          We primarily work with SMEs that are serious about
                          growth. Our systems are designed to scale, so clients
                          can start small and expand without rebuilding
                          everything later.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 3 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(3)}
                  >
                    <div className="accrodion-title">
                      <h4>Do you offer fixed pricing?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          We don’t believe in one-size-fits-all pricing. Each
                          project is scoped based on real requirements,
                          complexity, and long-term goals to ensure the solution
                          actually works for your business.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                  <div
                    className={
                      isActive.key == 4 ? "accrodion active" : "accrodion"
                    }
                    onClick={() => handleToggle(4)}
                  >
                    <div className="accrodion-title">
                      <h4>What makes AMKA Digital different?</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          We combine strategy and execution. Instead of just
                          delivering features, we help clients think through
                          structure, scalability, and operational impact before
                          building anything.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*FAQ One End*/}
    </>
  );
}
