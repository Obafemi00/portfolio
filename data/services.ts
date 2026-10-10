export type Service = {
  slug: string;
  name: string;
  summary: string;
  num: string; // zero-padded ordinal, e.g. "01"
};

export const services: Service[] = [
  {
    slug: 'web-development',
    name: 'Web Development',
    summary: 'Custom websites and web apps built for performance and maintainability.',
    num: '01',
  },
  {
    slug: 'shopify-ecommerce',
    name: 'Shopify and E-Commerce',
    summary: 'Storefronts, channel sync, and conversion-focused product experiences.',
    num: '02',
  },
  {
    slug: 'redesign-revamp',
    name: 'Website Redesign and Revamp',
    summary: 'Modernizing legacy sites without losing what worked.',
    num: '03',
  },
  {
    slug: 'management-maintenance',
    name: 'Website Management and Maintenance',
    summary: 'Ongoing updates, monitoring, and support that keeps sites healthy.',
    num: '04',
  },
  {
    slug: 'cloud-devops',
    name: 'Cloud and DevOps',
    summary: 'Deployment pipelines, hosting, and infrastructure that scales cleanly.',
    num: '05',
  },
  {
    slug: 'digital-marketing-seo',
    name: 'Digital Marketing and SEO',
    summary: 'Technical SEO, analytics, and campaigns that connect the site to real growth.',
    num: '06',
  },
  {
    slug: 'automation-integration',
    name: 'Automation and Systems Integration',
    summary: 'Connecting the tools you already use so work moves faster.',
    num: '07',
  },
  {
    slug: 'technical-consulting',
    name: 'Technical Consulting',
    summary: 'Independent guidance on architecture, stack choices, and roadmap.',
    num: '08',
  },
  {
    slug: 'training-education',
    name: 'Technical Training and Education',
    summary: 'Upskilling teams on the platforms and practices they depend on.',
    num: '09',
  },
  {
    slug: 'brand-product-support',
    name: 'Brand and Digital Product Support',
    summary: 'Design, content, and asset work that keeps the product coherent.',
    num: '10',
  },
  {
    slug: 'ongoing-partnership',
    name: 'Ongoing Partnership',
    summary: 'Long-term retainers for teams that need a reliable web partner.',
    num: '11',
  },
];
