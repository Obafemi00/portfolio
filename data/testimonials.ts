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
