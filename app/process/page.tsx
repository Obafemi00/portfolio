import type { Metadata } from 'next';
import Eyebrow from '@/components/ui/Eyebrow';
import CtaBand from '@/components/layout/CtaBand';

export const metadata: Metadata = {
  title: 'Process | HerbCodes Technology',
  description: 'How HerbCodes Technology approaches every engagement, from discovery to ongoing management.',
};

const phases = [
  { num: '01', title: 'Discover', body: 'Goals, audits, stakeholder interviews, technical scoping.' },
  { num: '02', title: 'Define', body: 'Information architecture, content strategy, technical requirements, success metrics.' },
  { num: '03', title: 'Design', body: 'Wireframes, visual direction, interaction design, prototypes.' },
  { num: '04', title: 'Develop', body: 'Build, review cycles, QA, performance and accessibility passes.' },
  { num: '05', title: 'Deploy', body: 'Launch preparation, DNS, SSL, analytics, handover.' },
  { num: '06', title: 'Manage', body: 'Ongoing maintenance, security, performance monitoring, content updates.' },
];

export default function ProcessPage() {
  return (
    <>
      <section className="py-section bg-white">
        <div className="container-content max-w-4xl">
          <Eyebrow>Our process</Eyebrow>
          <h1 className="text-h1 font-hammersmith text-herb-ink balance mt-4">
            How we work.
          </h1>
          <p className="text-lg text-herb-slate font-inter mt-8 leading-relaxed">
            Precision, clarity, engineered outcomes. Six phases from discovery to ongoing management.
          </p>
        </div>
      </section>

      {phases.map((phase, i) => (
        <section
          key={phase.num}
          className={`py-section ${i % 2 === 0 ? 'bg-herb-fog' : 'bg-white'}`}
        >
          <div className="container-content">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <span
                  className="font-bebas text-[8rem] leading-none text-herb-cyan/20"
                  style={{
                    WebkitTextStroke: '2px #05ABC4',
                    color: 'transparent',
                  }}
                >
                  {phase.num}
                </span>
              </div>
              <div className="md:col-span-7 md:col-start-6 flex flex-col gap-4">
                <h2 className="font-hammersmith text-4xl text-herb-ink">
                  {phase.title}
                </h2>
                <p className="font-inter text-lg text-herb-slate leading-relaxed">
                  {phase.body}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CtaBand variant="dark" />
    </>
  );
}
