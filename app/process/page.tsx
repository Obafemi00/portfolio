'use client';

import { useRef } from 'react';
import { phases } from '@/data/process';
import ProgressRail from '@/components/process/ProgressRail';
import PhaseSection from '@/components/process/PhaseSection';
import DeliverablesGrid from '@/components/process/DeliverablesGrid';
import CtaBand from '@/components/layout/CtaBand';

export default function ProcessPage() {
  const phasesRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ProgressRail targetRef={phasesRef} />

      <section className="relative bg-white pt-[72px] pb-32 md:pt-40 md:pb-[200px]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 flex flex-col gap-5 md:gap-6">
            <div className="font-bebas text-[13px] tracking-[0.24em] md:text-sm md:tracking-[0.28em] text-herb-cyan">
              OUR PROCESS
            </div>
            <h1 className="m-0 font-hammersmith font-normal text-[40px] md:text-[52px] leading-[1.1] tracking-[-0.01em] text-herb-ink">
              <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
                <span className="process-h1-reveal block">How we work.</span>
              </span>
            </h1>
            <p className="m-0 font-inter text-base md:text-lg leading-[1.6] text-herb-slate max-w-[540px]">
              Precision, clarity, engineered outcomes. Six phases from discovery to ongoing management.
            </p>
          </div>
        </div>

        <div
          className="absolute left-1/2 bottom-8 md:bottom-12 -translate-x-1/2 w-px h-[52px] md:h-16 bg-herb-cyan/30"
          aria-hidden="true"
        >
          <span className="process-cue-dot absolute -left-[2.5px] top-0 w-1.5 h-1.5 rounded-full bg-herb-cyan" />
        </div>
      </section>

      <div ref={phasesRef}>
        {phases.map((p, i) => (
          <PhaseSection key={p.num} phase={p} index={i} />
        ))}
      </div>

      <DeliverablesGrid />

      <CtaBand variant="dark" />
    </>
  );
}
