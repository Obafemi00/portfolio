import type { Metadata } from 'next';
import Eyebrow from '@/components/ui/Eyebrow';
import CtaBand from '@/components/layout/CtaBand';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Work | HerbCodes Technology',
  description: 'Selected projects by HerbCodes Technology.',
};

export default function WorkPage() {
  return (
    <>
      <section className="py-section bg-white">
        <div className="container-content">
          <div className="flex flex-col gap-4 mb-16 max-w-3xl">
            <Eyebrow>Portfolio</Eyebrow>
            <h1 className="text-h1 font-hammersmith text-herb-ink balance">
              Selected work.
            </h1>
            <p className="text-lg text-herb-slate font-inter">
              Nine projects across e-commerce, full-stack products, corporate sites, and ongoing management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, i) => (
              <a
                key={project.slug}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                id={project.slug}
                className={`group flex flex-col gap-4 ${i % 2 === 1 ? 'md:mt-20' : ''}`}
              >
                <div className="aspect-[16/10] bg-herb-slate/10 overflow-hidden rounded-sm relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-herb-cyan/10 to-herb-purple/10 group-hover:scale-105 transition-transform duration-500 ease-herb flex items-center justify-center">
                    <span className="font-hammersmith text-3xl text-herb-slate/40 text-center px-4">
                      {project.name}
                    </span>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <h2 className="font-hammersmith text-2xl text-herb-ink">
                      {project.name}
                    </h2>
                    <span className="font-bebas tracking-widest text-xs text-herb-slate uppercase">
                      {project.category} · {project.year}
                    </span>
                  </div>
                  <span
                    className="text-herb-cyan text-lg transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBand variant="dark" />
    </>
  );
}
