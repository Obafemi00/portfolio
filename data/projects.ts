export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  client: string;
  role: string;
  stack: string[];
  liveUrl: string;
  overview: string;
  problem: string;
  approach: string;
  outcome: string;
  featured: boolean;
  coverImage: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: 'realxworld',
    name: 'Realxworld',
    category: 'Full-stack Web App',
    year: '2025',
    client: 'Realxworld',
    role: 'Full-stack design and development, Phase 1 and Phase 2',
    stack: ['Next.js', 'PostgreSQL', 'Prisma', 'Redis', 'Cloudinary', 'Cloudflare'],
    liveUrl: 'https://realxworld.net',
    overview: 'A multi-phase full-stack product build.',
    problem:
      'The project needed a performant, scalable foundation covering data access, caching, media handling, and edge delivery across two development phases.',
    approach:
      'Architected on Next.js with PostgreSQL and Prisma for the data layer, Redis for caching, Cloudinary for media, and Cloudflare at the edge. Delivered across Phase 1 and Phase 2 engagements.',
    outcome:
      'A production-grade application stack delivered across two phases at a development fee of NGN 1.5M.',
    featured: true,
    coverImage: '/projects/realxworld-cover.png',
    gallery: [
      '/projects/realxworld-gallery-01.png',
      '/projects/realxworld-gallery-02.png',
      '/projects/realxworld-gallery-03.png',
    ],
  },
  {
    slug: 'ituen-basi',
    name: 'Ituen Basi',
    category: 'Fashion E-commerce',
    year: '2025',
    client: 'Ituen Basi (IBL)',
    role: 'Complete rebuild, design and development',
    stack: ['E-commerce platform', 'Calendly', 'DHL'],
    liveUrl: 'https://ituenbasi.com',
    overview: 'A complete rebuild for a Nigerian luxury fashion label.',
    problem:
      'The brand needed a rebuild positioned around minimal luxury rather than an overly elaborate fashion aesthetic, with e-commerce for roughly 21 products, public pricing, and both Nigeria and international shipping.',
    approach:
      'Full sitemap and information architecture, e-commerce build with clean product presentation, mobile-responsive premium visual system, DHL shipping context, Calendly-based consultation flow, and integrated social links. Typography and visual system tuned for editorial restraint.',
    outcome: 'A minimal, premium e-commerce experience aligned with the brand positioning.',
    featured: true,
    coverImage: '/projects/ituenbasi-cover.png',
    gallery: [
      '/projects/ituenbasi-gallery-01.png',
      '/projects/ituenbasi-gallery-02.png',
      '/projects/ituenbasi-gallery-03.png',
    ],
  },
  {
    slug: 'studio-sdk-cgi',
    name: 'Studio SDK CGI',
    category: 'Creative Agency Website',
    year: '2025',
    client: 'Studio SDK CGI',
    role: 'Design and frontend development',
    stack: ['Next.js', 'GSAP'],
    liveUrl: 'https://www.studiosdk.art',
    overview: 'A monochrome, editorial site for a creative and CGI studio.',
    problem:
      'The studio needed a distinct identity that felt premium and editorial without becoming a direct copy of the Jeton-inspired reference.',
    approach:
      'Monochrome palette (#FFFFFF and #2B2B2B), Didot typography, minimal interface, and a bottom pill navigation. Motion driven by GSAP, custom UI built on Next.js. Adapted the reference into a distinct Studio SDK CGI identity.',
    outcome: 'A premium editorial site with a signature navigation pattern and considered motion.',
    featured: true,
    coverImage: '/projects/studiosdk-cover.png',
    gallery: [
      '/projects/studiosdk-gallery-01.png',
      '/projects/studiosdk-gallery-02.png',
      '/projects/studiosdk-gallery-03.png',
    ],
  },
  {
    slug: 'leapcrest',
    name: 'LeapCrest',
    category: 'Corporate Website',
    year: '2025',
    client: 'LeapCrest',
    role: 'Design and development',
    stack: ['Next.js'],
    liveUrl: 'https://www.leapcrest.in',
    overview: 'A corporate website for an international client.',
    problem: 'The company needed a corporate web presence built on a modern, maintainable stack.',
    approach: 'Full site design and build in Next.js delivered as an international engagement.',
    outcome: 'Delivered at a project value of $50,000.',
    featured: false,
    coverImage: '/projects/leapcrest-cover.png',
    gallery: [
      '/projects/leapcrest-gallery-01.png',
      '/projects/leapcrest-gallery-02.png',
      '/projects/leapcrest-gallery-03.png',
    ],
  },
  {
    slug: 'creator-playbook',
    name: 'Creator Playbook',
    category: 'Digital Product',
    year: '2025',
    client: 'Creator Playbook',
    role: 'Full-stack development and payments integration',
    stack: ['Next.js', 'Supabase', 'Stripe'],
    liveUrl: 'https://www.mycreatorplaybook.com',
    overview: 'A digital product platform with subscription payments.',
    problem:
      'The platform needed authenticated access, a data layer, and Stripe-based payments configured end to end.',
    approach:
      'Built on Next.js with Supabase for data and auth and Stripe for payments. Handled Supabase project configuration and Stripe payment flows as part of the build.',
    outcome: 'Delivered at NGN 300,000 with three months of maintenance.',
    featured: false,
    coverImage: '/projects/creatorplaybook-cover.png',
    gallery: [
      '/projects/creatorplaybook-gallery-01.png',
      '/projects/creatorplaybook-gallery-02.png',
      '/projects/creatorplaybook-gallery-03.png',
    ],
  },
  {
    slug: 'founder-groundworks',
    name: 'Founder Groundworks',
    category: 'Business Website',
    year: '2025',
    client: 'Founder Groundworks (Sav)',
    role: 'Custom web development and workspace setup',
    stack: ['Next.js', 'Supabase', 'Google Workspace'],
    liveUrl: 'https://www.foundergroundworks.com',
    overview: 'A custom business site with productivity setup.',
    problem:
      'The client needed a custom-built web presence rather than a template site, with Google Workspace configured for operations.',
    approach:
      'Built on Next.js and Supabase, paired with a Google Workspace setup and three months of maintenance.',
    outcome: 'Delivered at NGN 350,000 with three months of maintenance.',
    featured: false,
    coverImage: '/projects/foundergroundworks-cover.png',
    gallery: [
      '/projects/foundergroundworks-gallery-01.png',
      '/projects/foundergroundworks-gallery-02.png',
      '/projects/foundergroundworks-gallery-03.png',
    ],
  },
  {
    slug: 'katy-express-track',
    name: 'Katy Express Track',
    category: 'Logistics Website',
    year: '2025',
    client: 'Katy Express Track',
    role: 'Website revamp and ongoing maintenance',
    stack: ['Wix'],
    liveUrl: 'https://www.katyexpresstrack.org',
    overview: 'A revamp and maintenance engagement for a logistics operator.',
    problem: 'The existing Wix site needed a revamp and continuing technical support.',
    approach:
      'Revamped the site on Wix and continued with monthly maintenance covering updates and technical support.',
    outcome: 'Delivered at NGN 200,000 plus NGN 50,000 per month for ongoing maintenance.',
    featured: false,
    coverImage: '/projects/katyexpress-cover.png',
    gallery: [
      '/projects/katyexpress-gallery-01.png',
      '/projects/katyexpress-gallery-02.png',
      '/projects/katyexpress-gallery-03.png',
    ],
  },
  {
    slug: 'bakonery',
    name: 'Bakonery Bits + Bobs',
    category: 'E-commerce',
    year: '2025',
    client: 'Bakonery Bits + Bobs',
    role: 'Shopify theme development and channel management',
    stack: ['Shopify', 'Dawn theme', 'Liquid', 'Sellbrite', 'Etsy'],
    liveUrl: 'https://bakonerystudio.com',
    overview: 'A Shopify store with Etsy channel sync and ongoing store operations.',
    problem:
      'The store needed Dawn theme customization plus reliable Shopify to Etsy sync via Sellbrite, with recurring channel disconnection and shipping data issues to resolve.',
    approach:
      'Dawn theme customization in Liquid, front-end modifications, and Sellbrite integration for Etsy sync. Ongoing troubleshooting of product parity between Shopify and Etsy, shipping data, and channel reconnection issues.',
    outcome: 'A working multi-channel e-commerce operation with continuing store management.',
    featured: false,
    coverImage: '/projects/bakonery-cover.png',
    gallery: [
      '/projects/bakonery-gallery-01.png',
      '/projects/bakonery-gallery-02.png',
      '/projects/bakonery-gallery-03.png',
    ],
  },
  {
    slug: '1010-coding',
    name: '1010 Coding',
    category: 'Website Management and Education',
    year: 'Ongoing',
    client: '1010 Coding',
    role: 'Web Manager and coding instructor',
    stack: ['WordPress', 'LearnPress', 'Elementor', 'CSS'],
    liveUrl: 'https://1010coding.com',
    overview: 'An ongoing website management role paired with online coding instruction.',
    problem:
      'The platform needed continuing management of its WordPress and LearnPress stack alongside instruction for young learners.',
    approach:
      'Ongoing website management: page-speed optimization, header and sidebar fixes, typography, responsive fixes, and general maintenance. Online instruction covering Python for children and digital literacy.',
    outcome: 'A continuing engagement combining web management with education delivery.',
    featured: false,
    coverImage: '/projects/1010coding-cover.png',
    gallery: [
      '/projects/1010coding-gallery-01.png',
      '/projects/1010coding-gallery-02.png',
      '/projects/1010coding-gallery-03.png',
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
