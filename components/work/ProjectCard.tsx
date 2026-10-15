'use client';

import Image from 'next/image';
import type { Project } from '@/data/projects';

type Props = {
  project: Project;
  onOpen: () => void;
};

// Native <button> gives Enter and Space activation and focus for free.
// Children are spans so the markup stays valid phrasing content.
export default function ProjectCard({ project, onOpen }: Props) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      aria-label={`${project.name} case study`}
      className="group relative flex w-full flex-col gap-[18px] pb-[22px] text-left text-herb-ink bg-transparent border-0 p-0 cursor-pointer"
    >
      <span className="block aspect-[16/10] rounded overflow-hidden bg-[#E9EDF0]">
        <Image
          src={project.coverImage}
          alt={`${project.name} cover`}
          width={1600}
          height={1000}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(.2,.8,.2,1)] motion-safe:group-hover:scale-[1.03] motion-safe:group-focus-visible:scale-[1.03]"
        />
      </span>

      <span className="flex items-end justify-between gap-4">
        <span className="flex flex-col gap-1.5">
          <span className="font-hammersmith text-[22px] leading-[1.15] text-herb-ink">
            {project.name}
          </span>
          <span className="font-bebas text-sm tracking-[0.22em] text-herb-slate uppercase">
            {project.category} · {project.year.toUpperCase()}
          </span>
        </span>
        <span
          className="text-lg text-herb-cyan transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-x-1 group-focus-visible:translate-x-1"
          aria-hidden="true"
        >
          →
        </span>
      </span>

      <span
        className="absolute left-0 right-0 bottom-0 h-0.5 bg-herb-cyan shadow-[0_2px_12px_rgba(5,171,196,0.55)] origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
        aria-hidden="true"
      />
    </button>
  );
}
