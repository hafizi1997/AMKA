export type ServiceCategory = {
  slug:
    | "digitalization"
    | "software-development"
    | "mobile-solutions"
    | "cloud-infrastructure"
    | "automation-ai";
  title: string;
  shortDescription: string;
  whatWeDeliver: string[];
  businessImpact: string;
  iconClass: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "digitalization",
    title: "Digitize Your Business",
    shortDescription:
      "Modernize core operations with strategy-led digital programs designed for measurable performance improvement.",
    whatWeDeliver: [
      "Digital maturity and process assessment",
      "Transformation roadmap and priority planning",
      "Cross-department workflow redesign",
      "Implementation governance and KPI tracking",
    ],
    businessImpact:
      "Stronger operational visibility, faster decision cycles, and lower execution risk during transformation.",
    iconClass: "icon-project-management",
  },
  {
    slug: "software-development",
    title: "Custom Your Software",
    shortDescription:
      "Build tailored systems that connect teams, data, and workflows across your business.",
    whatWeDeliver: [
      "Business system architecture and integration design",
      "Custom web portals and internal operation platforms",
      "API development and third-party system integration",
      "Performance tuning, security hardening, and long-term support",
    ],
    businessImpact:
      "Reduced manual workload, improved process consistency, and scalable systems aligned to business growth.",
    iconClass: "icon-software",
  },
  {
    slug: "mobile-solutions",
    title: "Mobile & Customer Experience Solutions",
    shortDescription:
      "Create high-value mobile and customer-facing experiences that improve engagement and service delivery.",
    whatWeDeliver: [
      "Customer journey mapping and mobile experience design",
      "Native and cross-platform mobile application delivery",
      "Client portal and service interaction platforms",
      "Analytics-driven optimization of user behavior and retention",
    ],
    businessImpact:
      "Higher customer satisfaction, better service responsiveness, and stronger digital channel conversion.",
    iconClass: "icon-ux-design",
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud & Scalable Infrastructure",
    shortDescription:
      "Enable resilient digital operations with secure cloud foundations and growth-ready infrastructure.",
    whatWeDeliver: [
      "Cloud migration and workload modernization",
      "Infrastructure design for scalability and reliability",
      "Security baseline, access control, and backup strategy",
      "Monitoring, cost optimization, and operational support",
    ],
    businessImpact:
      "Improved service uptime, stronger platform security, and infrastructure that scales with business demand.",
    iconClass: "icon-cloud-database",
  },
  {
    slug: "automation-ai",
    title: "Automation & Smart Solutions",
    shortDescription:
      "Automate repetitive work and unlock operational intelligence with practical AI-enabled workflows.",
    whatWeDeliver: [
      "Workflow automation and rule-based process orchestration",
      "Intelligent reporting and decision support dashboards",
      "AI-assisted service operations and productivity enhancements",
      "Automation governance to ensure reliability and control",
    ],
    businessImpact:
      "Lower operating cost, faster execution, and better business outcomes through data-driven automation.",
    iconClass: "icon-content-management-1",
  },
];

export const servicesBySlug = Object.fromEntries(
  serviceCategories.map((service) => [service.slug, service]),
) as Record<ServiceCategory["slug"], ServiceCategory>;
