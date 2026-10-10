import Eyebrow from '@/components/ui/Eyebrow';
import { approvedTestimonials } from '@/data/testimonials';
import { projects } from '@/data/projects';

export default function TestimonialsMarquee() {
  const clientNames = projects.map((p) => p.name);

  return (
    <section className="py-section bg-white">
      <div className="container-content">
        <div className="flex flex-col gap-4 mb-16 max-w-2xl">
          <Eyebrow>Trusted by</Eyebrow>
          <h2 className="text-h2 font-hammersmith text-herb-ink balance">
            A partner to teams that ship.
          </h2>
        </div>

        <div className="overflow-hidden mb-16 py-8 border-y border-herb-fog">
          <div
            className="flex gap-16 animate-marquee whitespace-nowrap"
            style={{
              animation: 'marquee 40s linear infinite',
            }}
          >
            {[...clientNames, ...clientNames].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-hammersmith text-2xl text-herb-slate/50 hover:text-herb-cyan transition-colors flex-shrink-0"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {approvedTestimonials.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8">
            {approvedTestimonials.slice(0, 2).map((t) => (
              <blockquote
                key={t.slug}
                className="flex flex-col gap-4 p-8 bg-herb-fog rounded-sm"
              >
                <span
                  className="font-hammersmith text-5xl text-herb-cyan leading-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="font-hammersmith text-lg text-herb-ink leading-relaxed">
                  {t.quote}
                </p>
                <footer className="mt-2">
                  <div className="text-sm font-medium text-herb-ink">{t.author}</div>
                  <div className="text-sm text-herb-slate">
                    {t.role}, {t.company}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
