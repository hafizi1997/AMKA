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
                      <img
                        src="assets/images/icon/section-title-icon.png"
                        
                      />
                    </div>
                    <p className="section-title__tagline">
                      Technology Solution
                    </p>
                  </div>
                  <h2 className="section-title__title">
                    Latest Software Solutions
                    <br /> Customer
                  </h2>
                </div>
                <p className="faq-one__text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proide sunt in culpa qui officia
                  deserunt mollit anim id est laborum. perspiciatis unde omnis
                  iste natus error sit voluptatem
                </p>
                <div className="faq-one__img-and-system">
                  <div className="faq-one__img">
                    <img src="assets/images/resources/faq-one-img.jpg"  />
                  </div>
                  <div className="faq-one__system">
                    <h3 className="faq-one__system-title">
                      Optimize It System
                    </h3>
                    <p className="faq-one__system-text">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum
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
                      <h4>Completely Iterate Covalent Strategic Theme</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Excepteur sint occaecat cupidatat non proide sunt in
                          culpa qui off deserunt mollit anim id est laborum.
                          omnis iste natus error sit voluptate audantium, totam
                          rem aperiam,
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
                      <h4>Few Resons Why You Should Choose Us</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Excepteur sint occaecat cupidatat non proide sunt in
                          culpa qui off deserunt mollit anim id est laborum.
                          omnis iste natus error sit voluptate audantium, totam
                          rem aperiam,
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
                      <h4>How To Update Application New Features</h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Excepteur sint occaecat cupidatat non proide sunt in
                          culpa qui off deserunt mollit anim id est laborum.
                          omnis iste natus error sit voluptate audantium, totam
                          rem aperiam,
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
                      <h4>
                        How To Connect With The Support To Improve Experience
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Excepteur sint occaecat cupidatat non proide sunt in
                          culpa qui off deserunt mollit anim id est laborum.
                          omnis iste natus error sit voluptate audantium, totam
                          rem aperiam,
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
