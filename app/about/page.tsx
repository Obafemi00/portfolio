import type { Metadata } from 'next';
import Image from 'next/image';
import CtaBand from '@/components/layout/CtaBand';

export const metadata: Metadata = {
  title: 'About | HerbCodes Technology',
  description: 'HerbCodes Technology. A studio focused on web design, development, and management.',
};

const h1Lines = [
  { text: 'Engineered systems,', delay: '[--mask-reveal-delay:150ms]' },
  { text: 'built with care.', delay: '[--mask-reveal-delay:270ms]' },
];

const principles = [
  { num: '01', title: 'Precision', body: 'Details are the work. We sweat them so you don\'t have to.' },
  { num: '02', title: 'Reliability', body: 'Sites that keep working, months and years after launch.' },
  { num: '03', title: 'Clarity', body: 'Direct communication, honest scoping, no surprises.' },
  { num: '04', title: 'Long-term thinking', body: 'Every decision considers what comes next.' },
];

const capabilities = [
  'Next.js', 'React', 'Drupal', 'Shopify', 'WordPress',
  'AWS', 'Vercel', 'Supabase', 'Tailwind', 'Node.js',
  'Cloudflare', 'DNS/SSL', 'SEO',
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/femi-herbert/' },
  { label: 'GitHub', href: 'https://github.com/Obafemi00' },
];

const eyebrow = 'font-bebas text-herb-cyan text-[13px] tracking-[0.24em] md:text-sm md:tracking-[0.28em]';
const sectionH2 = 'm-0 font-hammersmith font-normal tracking-normal text-herb-ink text-[30px] md:text-[36px] leading-[1.12]';

export default function AboutPage() {
  return (
    <>
      <section className="bg-white pt-[72px] pb-24 md:pt-40 md:pb-36">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:items-end">
          <div className="md:col-span-8 flex flex-col gap-5 md:gap-6">
            <div className={eyebrow}>ABOUT</div>
            <h1 className="m-0 font-hammersmith font-normal text-herb-ink text-[40px] md:text-[52px] leading-[1.1] tracking-[-0.01em] max-w-[720px]">
              {h1Lines.map((line) => (
                <span key={line.text} className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
                  <span className={`mask-reveal-line block ${line.delay}`}>{line.text}</span>
                </span>
              ))}
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="m-0 mt-4 font-inter text-base md:text-lg leading-[1.65] text-herb-slate max-w-[620px]">
              HerbCodes builds modern, reliable, scalable digital systems for teams that need work done right the first time. Web design, development, and management under one roof.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-herb-fog py-[72px] md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 md:items-center">
          <div className="md:col-span-5">
            <div className="w-full max-w-[420px] aspect-[1/1.08] rounded-md overflow-hidden flex items-center justify-center">
              <Image
                src="/femi-portrait.jpeg"
                alt="Portrait of Femi, founder of HerbCodes Technology"
                width={840}
                height={907}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-start-7 md:col-span-5 flex flex-col gap-3.5">
            <h2 className="m-0 font-hammersmith font-normal tracking-normal text-herb-ink text-[32px] md:text-[40px] leading-[1.1]">
              Femi
            </h2>
            <div className="font-bebas text-herb-cyan text-[13px] md:text-[15px] tracking-[0.26em]">
              FOUNDER, WEB DESIGNER AND DEVELOPER
            </div>
            <p className="m-0 mt-[18px] font-inter text-base md:text-lg leading-[1.65] text-herb-ink max-w-[480px]">
              Femi is the founder of HerbCodes Technology, a studio focused on web design, development, and management. Five-plus years building systems that quietly hold up under real use.
            </p>
            <div className="mt-5 flex gap-4 md:gap-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-sm font-medium text-herb-ink pb-[3px] border-b-[1.5px] border-transparent transition-colors duration-[250ms] hover:border-herb-cyan focus-visible:border-herb-cyan"
                >
                  {s.label} <span className="text-herb-cyan" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-[72px] md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="mb-9 md:mb-16 flex flex-col gap-3">
            <div className={eyebrow}>PRINCIPLES</div>
            <h2 className={sectionH2}>How we think.</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 md:gap-8">
            {principles.map((p) => (
              <div key={p.num} className="pt-6 border-t border-[#E4E8EC] flex flex-col gap-3.5">
                <span className="font-bebas text-sm tracking-[0.2em] text-herb-slate">{p.num}</span>
                <h3 className="m-0 font-hammersmith font-normal tracking-normal text-[22px] leading-[1.2] text-herb-cyan">
                  {p.title}
                </h3>
                <p className="m-0 font-inter text-base leading-[1.6] text-herb-slate max-w-[260px]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-herb-fog py-[72px] md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className={eyebrow}>CAPABILITIES</div>
            <h2 className={sectionH2}>What we work with.</h2>
          </div>
          <div className="md:col-start-6 md:col-span-7 flex flex-wrap content-start gap-3 md:pt-2">
            {capabilities.map((tag) => (
              <span
                key={tag}
                className="font-bebas text-[15px] md:text-[17px] leading-none tracking-[0.14em] text-herb-cyan border border-herb-cyan rounded-full whitespace-nowrap pt-2 px-3.5 pb-1.5 md:pt-2.5 md:px-[18px] md:pb-2"
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
