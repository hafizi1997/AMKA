"use client";
import Link from "next/link";
import { useState } from "react";

export default function Article3() {
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
      {/*FAQ Two Start*/}
      <section className="faq-two">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 order-2 order-lg-1">
              <div className="faq-two__right">
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
                      <h4>
                        Why Do Many Technical Services Firms Struggle To Grow
                        Consistently?
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Many technical firms rely heavily on referrals, past
                          relationships, or occasional project opportunities.
                          While this may work in the early stages, it often
                          leads to unpredictable pipelines and long gaps between
                          projects. Without a structured business development
                          system, even highly capable firms struggle to build
                          consistent growth.
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
                      <h4>
                        What Drives Growth In Professional Services Businesses?
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Most successful professional services firms grow by
                          improving three key variables: network size, client
                          conversion rate, and average engagement value. By
                          expanding the right relationships, strengthening trust
                          with decision-makers, and increasing the value of
                          engagements, companies can create predictable and
                          scalable revenue growth.
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
                      <h4>
                        Why Is Trust So Important In Business Development?
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          In professional services, clients rarely buy based on
                          technical capability alone. They choose firms they
                          trust to understand their problems and deliver
                          reliable solutions. Trust is built through
                          credibility, consistent delivery, and meaningful
                          relationships with decision-makers over time.
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
                        How Do Successful Firms Turn One Project Into Long-Term
                        Clients?
                      </h4>
                    </div>
                    <div className="accrodion-content">
                      <div className="inner">
                        <p>
                          Leading firms focus on building advisory relationships
                          instead of simply delivering one-off services. By
                          understanding the client’s broader challenges,
                          providing valuable insights, and maintaining
                          consistent communication after project delivery,
                          companies can move from short-term projects to
                          long-term strategic partnerships.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 order-1 order-lg-2">
              <div className="faq-two__left">
                <div className="section-title-two text-left">
                  <div className="section-title-two__tagline-box">
                    <span className="section-title-two__tagline">
                      Inside The Playbook
                    </span>
                  </div>
                  <h2 className="section-title-two__title">
                    Common Bussiness Growth Questions
                  </h2>
                </div>
                <div className="faq-two__img">
                  <img src="assets/images/resources/playbook_built.png" />
                </div>
                <div className="about-two__btn mt-4">
                  <Link href="/playbook-built-environment">Discover More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*FAQ Two End*/}
    </>
  );
}
