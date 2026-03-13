import Layout from "@/components/layout/Layout";
import Link from "next/link";

const programTracks = [
  {
    tag: "Featured",
    title: "Condition Monitoring Intensive",
    details:
      "Hands-on thermography and partial discharge training for real electrical assets and live operational scenarios.",
  },
  {
    tag: "Core",
    title: "Thermography Field Application",
    details:
      "Build practical competency in infrared inspection workflow, anomaly identification, and reporting.",
  },
  {
    tag: "Core",
    title: "Partial Discharge Assessment",
    details:
      "Apply TEV and ultrasound methods to detect early fault signatures and reduce unplanned downtime.",
  },
];

const packagePlans = [
  {
    name: "Thermography",
    duration: "2 Days",
    groupPrice: "RM 9,800 / group (up to 5 pax)",
    individualPrice: "RM 2,200 / pax",
    addOn: "Additional pax: RM 1,600",
  },
  {
    name: "Partial Discharge",
    duration: "2 Days",
    groupPrice: "RM 10,800 / group (up to 5 pax)",
    individualPrice: "RM 2,400 / pax",
    addOn: "Additional pax: RM 1,700",
  },
  {
    name: "Combined Program",
    duration: "4 Days",
    groupPrice: "RM 18,600 / group (up to 5 pax)",
    individualPrice: "RM 4,200 / pax",
    addOn: "Additional pax: RM 2,900",
  },
];

const idealFor = [
  "Maintenance engineers and reliability teams",
  "Electrical technicians and supervisors",
  "Facility and plant operations managers",
  "Organizations building internal condition monitoring capability",
];

export default function AcademyPage() {
  return (
    <Layout
      headerStyle={3}
      footerStyle={1}
      wrapperCls="academy-page"
      breadcrumbTitle="AMKA Academy"
      description="Practical training and certification for thermography, partial discharge assessment, and reliability-focused maintenance."
      backgroundImage="/assets/images/backgrounds/academy-page-bg.svg"
    >
      <section className="academy-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="academy-hero__content">
                <p className="academy-hero__kicker">Industry Training</p>
                <h1 className="academy-hero__title">
                  Build Practical Skills for Real-World Electrical Reliability
                  Challenges
                </h1>
                <p className="academy-hero__text">
                  AMKA Academy helps teams strengthen thermography and partial
                  discharge capabilities through applied training. Every module
                  is designed for real facility environments, not just
                  classroom theory.
                </p>
                <div className="about-two__btn">
                  <Link href="#academy-packages">Explore Courses</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="academy-hero__media">
                <img
                  src="/assets/images/resources/academy-hero-visual.svg"
                  alt="AMKA Academy training visual"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="academy-section">
        <div className="container">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-icon">
                <img src="/assets/images/icon/section-title-icon.png" />
              </div>
              <p className="section-title__tagline">Program Tracks</p>
            </div>
            <h2 className="section-title__title">
              Training pathways tailored for reliability teams
            </h2>
          </div>

          <div className="row">
            {programTracks.map((track) => (
              <div key={track.title} className="col-lg-4 col-md-6">
                <article className="academy-card">
                  <p className="academy-card__tag">{track.tag}</p>
                  <h3 className="academy-card__title">{track.title}</h3>
                  <p className="academy-card__text">{track.details}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="academy-packages" className="academy-section academy-section--muted">
        <div className="container">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-icon">
                <img src="/assets/images/icon/section-title-icon.png" />
              </div>
              <p className="section-title__tagline">Course Packages</p>
            </div>
            <h2 className="section-title__title">
              Flexible package options for teams and individuals
            </h2>
          </div>

          <div className="row">
            {packagePlans.map((plan) => (
              <div key={plan.name} className="col-lg-4 col-md-6">
                <article className="academy-package">
                  <h3 className="academy-package__name">{plan.name}</h3>
                  <p className="academy-package__duration">{plan.duration}</p>
                  <ul className="academy-package__list">
                    <li>{plan.groupPrice}</li>
                    <li>{plan.individualPrice}</li>
                    <li>{plan.addOn}</li>
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="academy-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="academy-panel">
                <h3 className="academy-panel__title">What your team gets</h3>
                <ul className="academy-panel__list">
                  <li>Instructor-led practical sessions using current tools</li>
                  <li>
                    Structured diagnostic workflow for thermography and PD
                  </li>
                  <li>Actionable reporting templates for field deployment</li>
                  <li>Completion certification from AMKA Academy</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="academy-panel">
                <h3 className="academy-panel__title">Perfect for</h3>
                <ul className="academy-panel__list">
                  {idealFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="academy-note">
            Note: Packages may be adjusted based on site conditions, class
            size, and equipment access requirements.
          </p>

          <div className="academy-cta">
            <h3 className="academy-cta__title">
              Need a tailored in-house training proposal?
            </h3>
            <p className="academy-cta__text">
              Share your objectives and team size. We will recommend the right
              module sequence and training format for your operations.
            </p>
            <div className="about-two__btn">
              <Link href="/contact">Get Quote & Proposal</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
