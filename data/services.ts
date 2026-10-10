export type Service = {
  slug: string;
  name: string;
  summary: string;
};

export const services: Service[] = [
  {
    slug: 'web-development',
    name: 'Web Development',
    summary: 'Custom websites and web apps built for performance and maintainability.',
  },
  {
    slug: 'shopify-ecommerce',
    name: 'Shopify and E-Commerce',
    summary: 'Storefronts, channel sync, and conversion-focused product experiences.',
  },
  {
    slug: 'redesign-revamp',
    name: 'Website Redesign and Revamp',
    summary: 'Modernizing legacy sites without losing what worked.',
  },
  {
    slug: 'management-maintenance',
    name: 'Website Management and Maintenance',
    summary: 'Ongoing updates, monitoring, and support that keeps sites healthy.',
  },
  {
    slug: 'cloud-devops',
    name: 'Cloud and DevOps',
    summary: 'Deployment pipelines, hosting, and infrastructure that scales cleanly.',
  },
  {
    slug: 'digital-marketing-seo',
    name: 'Digital Marketing and SEO',
    summary: 'Technical SEO, analytics, and campaigns that connect the site to real growth.',
  },
  {
    slug: 'automation-integration',
    name: 'Automation and Systems Integration',
    summary: 'Connecting the tools you already use so work moves faster.',
  },
  {
    slug: 'technical-consulting',
    name: 'Technical Consulting',
    summary: 'Independent guidance on architecture, stack choices, and roadmap.',
  },
  {
    slug: 'training-education',
    name: 'Technical Training and Education',
    summary: 'Upskilling teams on the platforms and practices they depend on.',
  },
  {
    slug: 'brand-product-support',
    name: 'Brand and Digital Product Support',
    summary: 'Design, content, and asset work that keeps the product coherent.',
  },
  {
    slug: 'ongoing-partnership',
    name: 'Ongoing Partnership',
    summary: 'Long-term retainers for teams that need a reliable web partner.',
  },
];
