export type Testimonial = {
  slug: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  photo?: string;
  badge?: string;
  approved: boolean;
};

export const testimonials: Testimonial[] = [
  {
    slug: 'sav-studio-sdk',
    quote:
      "Working with Herbcodes was so natural and seamless. He tried to understand my goals and customized the projects to align with them, asking for my input along the way. It was a collaborative experience and he made sure I was satisfied with each project. I can’t recommend him enough.",
    author: 'Sav',
    role: 'Founder',
    company: 'Studio SDK',
    approved: true,
  },
  {
    slug: 'bakonery',
    quote:
      'HerbCodes rebuilt our storefront and connected our Etsy listings without missing an order. The site has run cleanly since launch. (Real quote pending.)',
    author: 'PLACEHOLDER',
    role: 'Co-founder',
    company: 'Bakonery Bits + Bobs',
    badge: 'PLACEHOLDER QUOTE',
    approved: false,
  },
];

export const approvedTestimonials = testimonials.filter((t) => t.approved);
