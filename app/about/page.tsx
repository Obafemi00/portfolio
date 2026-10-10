import type { Metadata } from 'next';
import Eyebrow from '@/components/ui/Eyebrow';
import CtaBand from '@/components/layout/CtaBand';

export const metadata: Metadata = {
  title: 'About | HerbCodes Technology',
  description: 'HerbCodes Technology. A studio focused on web design, development, and management.',
};

const values = [
  { title: 'Precision', body: 'Details are the work. We sweat them so you don\'t have to.' },
  { title: 'Reliability', body: 'Sites that keep working, months and years after launch.' },
  { title: 'Clarity', body: 'Direct communication, honest scoping, no surprises.' },
  { title: 'Long-term thinking', body: 'Every decision considers what comes next.' },
];

const capabilities = [
  'Next.js', 'React', 'Drupal', 'Shopify', 'WordPress',
  'AWS', 'Vercel', 'Supabase', 'Tailwind', 'Node.js',
  'Cloudflare', 'DNS/SSL', 'SEO',
];

export default function AboutPage() {
  return (
    <>
      <section className="py-section bg-white">
        <div className="container-content max-w-4xl">
          <Eyebrow>About</Eyebrow>
          <h1 className="text-h1 font-hammersmith text-herb-ink balance mt-4">
            Engineered systems, built with care.
          </h1>
          <p className="text-lg text-herb-slate font-inter mt-8 leading-relaxed">
            HerbCodes builds modern, reliable, scalable digital systems for teams that need work done right the first time. Web design, development, and management under one roof.
          </p>
        </div>
      </section>

      <section className="py-section bg-herb-fog">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl">
            <div className="flex justify-center md:justify-start">
              <div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden"
                aria-label="Femi portrait placeholder"
              >
                <span className="font-hammersmith text-6xl text-herb-cyan">F</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-hammersmith text-4xl text-herb-ink">Femi</h2>
              <span className="font-bebas text-herb-cyan tracking-widest uppercase text-sm">
                Founder, Web Designer and Developer
              </span>
              <p className="font-inter text-base text-herb-ink leading-relaxed mt-4">
                Femi is the founder of HerbCodes Technology, a studio focused on web design, development, and management. Five-plus years building systems that quietly hold up under real use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="container-content">
          <div className="flex flex-col gap-4 mb-12 max-w-2xl">
            <Eyebrow>Principles</Eyebrow>
            <h2 className="text-h2 font-hammersmith text-herb-ink">How we think.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col gap-3">
                <h3 className="font-hammersmith text-xl text-herb-cyan">{v.title}</h3>
                <p className="font-inter text-sm text-herb-slate leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section bg-herb-fog">
        <div className="container-content">
          <div className="flex flex-col gap-4 mb-12">
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="text-h2 font-hammersmith text-herb-ink">What we work with.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {capabilities.map((tag) => (
              <span
                key={tag}
                className="font-bebas uppercase tracking-widest text-sm px-4 py-2 border border-herb-cyan text-herb-cyan"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand variant="dark" />
    </>
  );
}
