'use client';

import { Fragment, useCallback, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import CtaBand from '@/components/layout/CtaBand';
import ProjectCard from '@/components/work/ProjectCard';
import ProjectModal from '@/components/work/ProjectModal';
import { projectFilters, projects, type Project, type ProjectFilter } from '@/data/projects';
import { cn } from '@/lib/utils';

type Indexed = { project: Project; index: number };

function countLabel(n: number) {
  return `${String(n).padStart(2, '0')} ${n === 1 ? 'PROJECT' : 'PROJECTS'}`;
}

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  // Even indexes go to the left column, odd to the right (offset) column.
  const indexed: Indexed[] = filteredProjects.map((project, index) => ({ project, index }));
  const columns = [
    indexed.filter((_, i) => i % 2 === 0),
    indexed.filter((_, i) => i % 2 === 1),
  ];

  const activeProject =
    activeProjectIndex === null ? null : (filteredProjects[activeProjectIndex] ?? null);

  const closeModal = useCallback(() => setActiveProjectIndex(null), []);
  const total = filteredProjects.length;
  const nextProject = useCallback(() => {
    setActiveProjectIndex((i) => (i === null || total === 0 ? i : (i + 1) % total));
  }, [total]);

  function pickFilter(filter: ProjectFilter) {
    setActiveFilter(filter);
    setActiveProjectIndex(null);
  }

  return (
    <>
      <section className="bg-white pt-16 md:pt-32 md:pb-[72px]">
        <div className="max-w-content mx-auto px-6 md:px-10 grid grid-cols-1 gap-[18px] md:grid-cols-12 md:gap-6 md:items-end">
          <div className="flex flex-col gap-[18px] md:col-span-7 md:gap-5">
            <span className="font-bebas text-[13px] tracking-[0.24em] md:text-sm md:tracking-[0.28em] text-herb-cyan">
              PORTFOLIO
            </span>
            <h1 className="m-0 font-hammersmith font-normal text-[40px] md:text-[52px] leading-[1.1] tracking-[-0.01em] text-herb-ink">
              <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  Selected work.
                </motion.span>
              </span>
            </h1>
          </div>
          <p className="m-0 text-base md:text-[17px] leading-[1.6] text-herb-slate [text-wrap:pretty] md:col-start-9 md:col-span-4">
            Nine projects across e-commerce, full-stack products, corporate sites, and ongoing
            management.
          </p>
        </div>

        <div className="mt-11 md:mt-[72px] md:max-w-content md:mx-auto md:px-10">
          <div className="md:flex md:items-center md:justify-between md:gap-6 md:border-b md:border-[#E4E8EC]">
            <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-b border-[#E4E8EC] md:border-b-0 md:overflow-visible">
              <div
                role="group"
                aria-label="Filter projects"
                className="flex items-center w-max px-3 md:px-0"
              >
                {projectFilters.map((filter) => {
                  const active = filter === activeFilter;
                  return (
                    <Fragment key={filter}>
                      <button
                        type="button"
                        onClick={() => pickFilter(filter)}
                        aria-pressed={active}
                        className={cn(
                          'font-inter text-sm md:text-[15px] font-medium bg-transparent cursor-pointer whitespace-nowrap',
                          'h-12 px-3.5 md:h-auto md:px-[22px] md:py-3.5 -mb-px',
                          'border-0 border-b-2 transition-colors duration-[250ms] hover:text-herb-ink',
                          active ? 'text-herb-ink border-herb-cyan' : 'text-herb-slate border-transparent',
                        )}
                      >
                        {filter}
                      </button>
                      <span className="w-px h-3.5 md:h-4 bg-[#E4E8EC]" aria-hidden="true" />
                    </Fragment>
                  );
                })}
              </div>
            </div>
            <span
              className="block px-6 py-3.5 md:p-0 font-bebas text-[13px] tracking-[0.2em] md:text-sm md:tracking-[0.22em] text-herb-slate"
              aria-live="polite"
            >
              {countLabel(filteredProjects.length)}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-herb-fog pt-12 pb-20 md:pt-28 md:pb-36">
        {/* Mobile: columns collapse via display:contents and cards reorder by index.
            Desktop: two independent columns, the right one offset by 80px. */}
        <div className="max-w-content mx-auto px-6 md:px-10 flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-14 md:items-start">
          {columns.map((column, c) => (
            <div
              key={c}
              className={cn('contents md:flex md:flex-col md:gap-20', c === 1 && 'md:pt-20')}
            >
              {column.map(({ project, index }) => (
                <div key={project.slug} id={project.slug} style={{ order: index }}>
                  <ProjectCard project={project} onOpen={() => setActiveProjectIndex(index)} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={closeModal} onNext={nextProject} />
      )}

      <CtaBand variant="dark" />
    </>
  );
}
