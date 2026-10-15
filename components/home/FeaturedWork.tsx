import Image from 'next/image';
import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import { featuredProjects } from '@/data/projects';
import { cn } from '@/lib/utils';

// Desktop placement for the 7fr/5fr layout: items 1 and 3 stack on the left,
// item 2 sits in the right column offset down by 80px. Mobile keeps source order.
const placements = [
  'md:col-start-1 md:row-start-1',
  'md:col-start-2 md:row-start-1 md:row-span-2 md:pt-20',
  'md:col-start-1 md:row-start-2',
];

export default function FeaturedWork() {
  return (
    <section id="selected-work" className="pt-[72px] pb-20 md:pt-32 md:pb-[120px] bg-herb-fog">
      <div className="container-content">
        <div className="flex flex-col gap-3.5 md:gap-4 mb-10 md:mb-16">
          <Eyebrow className="text-[13px] tracking-[0.24em] md:text-sm md:tracking-[0.28em]">
            Selected work
          </Eyebrow>
          <h2 className="m-0 font-hammersmith font-normal text-herb-ink text-[30px] md:text-[36px] leading-[1.12] tracking-normal">
            Recent projects.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-y-12 md:gap-y-[72px] md:gap-x-12 items-start">
          {featuredProjects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work#${project.slug}`}
              className={cn('group flex flex-col gap-4 md:gap-[18px] text-herb-ink', placements[i])}
            >
              <div className="aspect-[16/10] rounded overflow-hidden bg-[#E9EDF0]">
                <Image
                  src={project.coverImage}
                  alt={`${project.name} cover`}
                  width={1600}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1 md:gap-1.5">
                  <h3 className="m-0 font-hammersmith font-normal text-[22px] md:text-2xl leading-[1.15] tracking-normal text-herb-ink">
                    {project.name}
                  </h3>
                  <span className="font-bebas text-sm tracking-[0.2em] md:tracking-[0.22em] text-herb-slate uppercase">
                    {project.category} · {project.year}
                  </span>
                </div>
                <span
                  className="text-lg md:text-xl text-herb-cyan transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 md:mt-24 flex justify-center">
          <Link
            href="/work"
            className="group w-full md:w-auto h-[52px] md:h-auto flex items-center justify-center gap-2.5 text-[15px] font-medium text-herb-ink rounded-full md:rounded-none border border-[#D5DBE0] md:border-0 md:pb-1 md:border-b-[1.5px] md:border-transparent md:hover:border-herb-cyan transition-colors duration-200"
          >
            View all work
            <span
              className="text-herb-cyan transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-x-1"
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
