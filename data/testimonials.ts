export type Testimonial = {
  slug: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  photo?: string;
  approved: boolean;
};

export const testimonials: Testimonial[] = [
  {
    slug: 'bakonery',
    quote:
      'PLACEHOLDER: real quote pending from the Bakonery Bits + Bobs co-founder. Swap this text once approved.',
    author: 'PLACEHOLDER',
    role: 'Co-founder',
    company: 'Bakonery Bits + Bobs',
    approved: false,
  },
];

export const approvedTestimonials = testimonials.filter((t) => t.approved);
