import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import { featuredProjects } from '@/data/projects';

export default function FeaturedWork() {
  return (
    <section className="py-section bg-herb-fog">
      <div className="container-content">
        <div className="flex flex-col gap-4 mb-16 max-w-2xl">
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="text-h2 font-hammersmith text-herb-ink balance">
            Recent projects.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {featuredProjects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work#${project.slug}`}
              className={`group flex flex-col gap-4 ${i % 2 === 1 ? 'md:mt-20' : ''}`}
            >
              <div className="aspect-[16/10] bg-herb-slate/10 overflow-hidden rounded-sm relative">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-herb-cyan/10 to-herb-purple/10 group-hover:scale-105 transition-transform duration-500 ease-herb flex items-center justify-center"
                >
                  <span className="font-hammersmith text-4xl text-herb-slate/40">
                    {project.name}
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-hammersmith text-2xl text-herb-ink">
                    {project.name}
                  </h3>
                  <span className="font-bebas tracking-widest text-xs text-herb-slate uppercase">
                    {project.category}
                  </span>
                </div>
                <span
                  className="text-herb-cyan text-lg transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-inter text-herb-ink hover:text-herb-cyan transition-colors group"
          >
            <span>View all work</span>
            <span
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
