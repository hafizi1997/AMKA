"use client";
import CounterUp from "@/components/elements/CounterUp";
export default function Funfact() {
  return (
    <>
      {/*Counter Two Start*/}
      <section className="counter-two">
        <div
          className="counter-two__shape-1 img-bounce"
          style={{
            backgroundImage:
              "url(assets/images/shapes/counter-two-shape-1.png)",
          }}
        />
        <div className="container">
          <ul className="list-unstyled counter-two__list">
            <li>
              <div className="counter-two__single">
                <div className="counter-two__icon">
                  <span className="icon-award" />
                </div>
                <p className="counter-two__text">Complete Project</p>
                <h3>
                  <CounterUp end={12} />
                </h3>
              </div>
            </li>
            <li>
              <div className="counter-two__single">
                <div className="counter-two__icon">
                  <span className="icon-download" />
                </div>
                <p className="counter-two__text">Total Download</p>
                <h3>
                  <CounterUp end={10} />
                </h3>
              </div>
            </li>
            <li>
              <div className="counter-two__single">
                <div className="counter-two__icon">
                  <span className="icon-feedback" />
                </div>
                <p className="counter-two__text">SME Companies</p>
                <h3>
                  <CounterUp end={12} />
                </h3>
              </div>
            </li>
            <li>
              <div className="counter-two__single">
                <div className="counter-two__icon">
                  <span className="icon-group" />
                </div>
                <p className="counter-two__text">Team Members</p>
                <h3>
                  <CounterUp end={6} />
                </h3>
              </div>
            </li>
            <li>
              <div className="counter-two__single">
                <div className="counter-two__icon">
                  <span className="icon-solution-1" />
                </div>
                <p className="counter-two__text">Years of Experience</p>
                <h3>
                  <CounterUp end={3} />
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/*Counter Two End*/}
    </>
  );
}
