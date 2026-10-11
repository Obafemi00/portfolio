import type { Phase } from '@/data/process';
import { cn } from '@/lib/utils';

type Props = {
  phase: Phase;
  index: number;
};

export default function PhaseSection({ phase, index }: Props) {
  return (
    <section className={cn(index % 2 === 0 ? 'bg-white' : 'bg-herb-fog')}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="h-px bg-herb-cyan/40" aria-hidden="true" />

        <div className="pt-16 pb-[72px] md:py-32 md:min-h-screen flex flex-col gap-5 md:grid md:grid-cols-12 md:gap-6 md:items-start">
          <div className="hidden md:block md:col-span-4 md:sticky md:top-[140px]" aria-hidden="true">
            <span
              className="block font-bebas text-[260px] leading-[0.8] tracking-[0.02em] text-transparent"
              style={{ WebkitTextStroke: '2px #05ABC4' }}
            >
              {phase.num}
            </span>
          </div>

          <div className="flex md:hidden items-end justify-between">
            <span
              className="font-bebas text-[128px] leading-[0.8] tracking-[0.02em] text-transparent"
              style={{ WebkitTextStroke: '1.5px #05ABC4' }}
              aria-hidden="true"
            >
              {phase.num}
            </span>
            <span className="font-bebas text-[13px] tracking-[0.24em] text-herb-cyan">
              PHASE {phase.num} / 06
            </span>
          </div>

          <div className="md:col-start-6 md:col-span-7 flex flex-col gap-5 md:gap-7 md:pt-3">
            <div className="hidden md:block font-bebas text-sm tracking-[0.28em] text-herb-cyan">
              PHASE {phase.num}
            </div>
            <h2 className="m-0 mt-3 md:mt-0 font-hammersmith font-normal tracking-normal text-[32px] leading-[1.12] md:text-[44px] md:leading-[1.1] text-herb-ink">
              {phase.title}
            </h2>
            <p className="m-0 font-inter text-base md:text-lg leading-[1.65] text-herb-ink max-w-[600px]">
              {phase.p1}
            </p>
            <p className="m-0 font-inter text-base md:text-[17px] leading-[1.65] text-herb-slate max-w-[600px]">
              {phase.p2}
            </p>

            <div className="mt-4 flex flex-col max-w-[600px]">
              <div className="font-bebas text-[13px] tracking-[0.24em] text-herb-slate pb-3">
                DELIVERABLES
              </div>
              <ul className="m-0 p-0 list-none">
                {phase.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 py-[13px] md:py-3.5 border-t border-[#E4E8EC] font-inter text-[15px] md:text-base text-herb-ink"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-herb-cyan flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
