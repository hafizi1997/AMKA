"use client";
import { useState } from "react";

export default function Process() {
  const processes = [
    {
      title: "Discovery",
      description:
        "We identify operational flow, users, pain points, constraints, and future needs.",
      icon: "icon-zoom-in",
      delay: "100ms",
    },
    {
      title: "Architecture",
      description:
        "We build structural diagrams, wireframes, and data flow frameworks before building interfaces.",
      icon: "icon-test",
      delay: "200ms",
    },
    {
      title: "Develop",
      description: "Our team builds scalable, secure, and efficient solutions.",
      icon: "icon-self-development",
      delay: "300ms",
    },
    {
      title: "Launch",
      description:
        "We implement stable modules, layering functionality in stages that reduce risk and improve feedback cycles.",
      icon: "icon-new-product",
      delay: "400ms",
    },
    {
      title: "Support",
      description:
        "Continuous monitoring, optimization, and long-term support in maintenance.",
      icon: "icon-solution-1",
      delay: "500ms",
    },
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isActive = activeIndex !== null;
  return (
    <>
      <section className="process-one">
        <div className="process-one__inner">
          <div className="process-one__shape-1 float-bob-y-2">
            <img src="assets/images/shapes/process-one-shape-1.png" />
          </div>
          <div className="container">
            <ul className="process-one__process-list list-unstyled">
              {processes.map((process, index) => (
                <li
                  className="wow fadeInUp"
                  data-wow-delay={process.delay}
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className="process-one__single">
                    <div className="process-one__icon">
                      <span className={process.icon} />
                    </div>
                    <p className="process-one__text">{process.title}</p>
                    <div className="process-one__count" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            {isActive ? (
              <p className="process-one__desc is-active" key={activeIndex}>
                {processes[activeIndex].description}
              </p>
            ) : (
              <p
                className="process-one__desc is-idle"
                key="idle"
                style={{ color: "var(--zeena-base)" }}
              >
                Hover on a step to see details
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
