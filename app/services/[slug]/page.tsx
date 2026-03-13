import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import {
  serviceCategories,
  servicesBySlug,
  type ServiceCategory,
} from "../_data";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return serviceCategories.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = servicesBySlug[params.slug as ServiceCategory["slug"]];

  if (!service) {
    return buildPageMetadata({
      title: "Service Not Found",
      description:
        "The requested AMKA service page is not available. Explore our digital solution services instead.",
      path: "/services",
    });
  }

  return buildPageMetadata({
    title: `${service.title} | AMKA Services`,
    description: `${service.shortDescription} ${service.businessImpact}`,
    path: `/services/${service.slug}`,
  });
}

const industryUseCases: Partial<Record<ServiceCategory["slug"], string[]>> = {
  digitalization: [
    "Operating model digitization for multi-team organizations",
    "Legacy process modernization with phased transition controls",
    "Cross-function data visibility for management reporting",
  ],
  "software-development": [
    "Custom portals for operations, sales, and service management",
    "System integration between finance, CRM, and workflow platforms",
    "Secure business application delivery with long-term maintainability",
  ],
  "business-ai-analytics": [
    "Executive dashboards for KPI visibility and trend monitoring",
    "Analytics to support pricing, growth, and operational decisions",
    "Data-driven reporting for management and performance reviews",
  ],
  "cloud-infrastructure": [
    "Cloud migration for critical business workloads",
    "Resilient infrastructure for high-availability operations",
    "Governed cloud environments with backup and recovery readiness",
  ],
  "automation-ai": [
    "Process automation for repetitive approval and reporting tasks",
    "AI-assisted operations for customer response and triage",
    "Decision support dashboards for faster management action",
  ],
};

export default function ServiceDetailPage({ params }: PageProps) {
  const { slug } = params;
  const service = servicesBySlug[slug as ServiceCategory["slug"]];

  if (!service) {
    notFound();
  }

  const useCases = industryUseCases[service.slug] ?? [];

  return (
    <Layout
      headerStyle={3}
      footerStyle={1}
      breadcrumbTitle={service.title}
      description="AMKA Digital Solution Sdn Bhd | Part of AMKA Technologies Sdn Bhd"
      backgroundImage="/assets/images/backgrounds/service-bg2.png"
    >
      <section className="services-details">
        <div className="container">
          <div className="section-title text-left">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-icon">
                <img src="/assets/images/icon/section-title-icon.png" />
              </div>
              <p className="section-title__tagline">Solution Overview</p>
            </div>
            <h2 className="section-title__title">{service.title}</h2>
          </div>

          <p className="services-details__text">{service.shortDescription}</p>

          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="services-details__left">
                <h3 className="services-details__title">What We Deliver</h3>
                <ul className="services-details__points list-unstyled">
                  {service.whatWeDeliver.map((item) => (
                    <li key={item}>
                      <div className="icon">
                        <span className="icon-check" />
                      </div>
                      <div className="text">
                        <p>{item}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <h3 className="services-details__title">Business Impact</h3>
                <p className="services-details__text">
                  {service.businessImpact}
                </p>

                {useCases.length > 0 && (
                  <>
                    <h3 className="services-details__title">
                      Typical Use Cases
                    </h3>
                    <ul className="services-details__points-2 list-unstyled">
                      {useCases.map((item) => (
                        <li key={item}>
                          <div className="services-details__points-two-shape" />
                          <p>{item}</p>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>

            <div className="col-xl-4 col-lg-5">
              <div className="services-details__right">
                <div className="sidebar__single sidebar__category">
                  <div className="sidebar__title-box">
                    <h3 className="sidebar__title">Explore Solutions</h3>
                  </div>
                  <ul className="sidebar__category-list list-unstyled">
                    {serviceCategories.map((item) => (
                      <li key={item.slug}>
                        <Link href={`/services/${item.slug}`}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="about-one__btn-box">
            <Link href="/services" className="about-one__btn thm-btn">
              Back to All Services
              <span className="icon-right-arrow1" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
