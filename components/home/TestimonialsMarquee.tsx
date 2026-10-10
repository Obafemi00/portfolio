import Eyebrow from '@/components/ui/Eyebrow';
import { approvedTestimonials, testimonials } from '@/data/testimonials';

const clientNames = [
  'Ituen Basi',
  'Bakonery',
  'Founder Groundworks',
  'Katy Express Track',
  'Creator Playbook',
  'Realxworld',
  'Studio SDK CGI',
  'LeapCrest',
  '1010 Coding',
];

const marqueeMask = 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)';

export default function TestimonialsMarquee() {
  // Show an approved quote when one exists, otherwise the flagged placeholder.
  const featured = approvedTestimonials[0] ?? testimonials[0];

  return (
    <section className="py-[72px] md:py-[120px] bg-white">
      <div className="container-content mb-7 md:mb-10">
        <Eyebrow className="text-[13px] tracking-[0.24em] md:text-sm md:tracking-[0.28em]">
          Trusted by
        </Eyebrow>
      </div>

      <div
        className="overflow-hidden border-y border-[#E4E8EC]"
        style={{ maskImage: marqueeMask, WebkitMaskImage: marqueeMask }}
      >
        <div className="marquee-track flex w-max py-6 md:py-9">
          {[...clientNames, ...clientNames].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-hammersmith text-[22px] md:text-[30px] leading-none text-[#A3ACB4] px-[26px] md:px-11 whitespace-nowrap cursor-default hover:text-herb-cyan transition-colors duration-200"
              aria-hidden={i >= clientNames.length ? true : undefined}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <div className="container-content pt-12 md:pt-24 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {featured && (
          <figure className="m-0 py-8 px-6 md:p-12 bg-herb-fog rounded flex flex-col gap-5 md:gap-6">
            <div className="flex items-start justify-between">
              <span
                className="font-hammersmith text-[72px] md:text-[88px] leading-[0.7] h-9 md:h-11 text-herb-cyan"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              {featured.badge && (
                <span className="font-bebas text-xs md:text-[13px] tracking-[0.2em] md:tracking-[0.22em] text-herb-purple border border-herb-purple bg-transparent rounded-full whitespace-nowrap pt-[3px] pb-0.5 px-2.5 md:px-3">
                  {featured.badge}
                </span>
              )}
            </div>
            <blockquote className="m-0 font-hammersmith text-xl md:text-[22px] leading-[1.4] text-herb-ink">
              {featured.quote}
            </blockquote>
            <figcaption className="text-[13px] md:text-sm text-herb-slate">
              {featured.role}, {featured.company}
            </figcaption>
          </figure>
        )}
        <div className="h-[120px] md:h-auto p-12 border border-dashed border-[#C9D0D6] rounded flex items-center justify-center">
          <span className="font-mono text-[11px] md:text-xs text-herb-slate">
            testimonial slot: next client quote
          </span>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 45s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
