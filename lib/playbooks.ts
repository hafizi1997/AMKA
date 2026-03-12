export type PlaybookArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Training & Consulting" | "Technical Services" | "Built Environment";
  hook: string;
  href: string;
  downloadPath: string;
  downloadFileName: string;
  niches: string;
};

export const PLAYBOOK_ARTICLES: PlaybookArticle[] = [
  {
    slug: "training-consulting",
    title: "Training & Consulting Professionals",
    excerpt:
      "Why many training and consulting practices struggle to grow, and what to do instead.",
    category: "Training & Consulting",
    hook: "Turn expertise into a repeatable growth system.",
    href: "/playbook-growth-engine",
    downloadPath:
      "/assets/documents/bd-playbook-training-consulting-professionals.pdf",
    downloadFileName: "bd-playbook-training-consulting-professionals.pdf",
    niches:
      "Corporate Trainers, Business Coaches, HR Consultants, Consultancies",
  },
  {
    slug: "technical-services",
    title: "Technical Services Companies",
    excerpt:
      "Why many technical services companies struggle to grow and how to fix it.",
    category: "Technical Services",
    hook: "Build predictable growth from relationships, trust, and visibility.",
    href: "/playbook-technical-services",
    downloadPath:
      "/assets/documents/bd-playbook-technical-services-companies.pdf",
    downloadFileName: "bd-playbook-technical-services-companies.pdf",
    niches:
      "Condition Monitoring, Testing & Inspection, Maintenance, Engineering Consultancy",
  },
  {
    slug: "built-environment",
    title: "Built Environment Professionals",
    excerpt:
      "How architecture, engineering, QS, and project management firms build a predictable growth engine.",
    category: "Built Environment",
    hook: "Move from founder-led hustle to a repeatable growth system.",
    href: "/playbook-built-environment",
    downloadPath:
      "/assets/documents/bd-playbook-built-environment-professionals.pdf",
    downloadFileName: "bd-playbook-built-environment-professionals.pdf",
    niches:
      "Architecture, Quantity Surveying, M&E, Project Management",
  },
];

export const PLAYBOOK_CATEGORIES = [
  "All",
  "Training & Consulting",
  "Technical Services",
  "Built Environment",
] as const;

export type PlaybookCategory = (typeof PLAYBOOK_CATEGORIES)[number];
