import { phases } from '@/data/process';

export default function DeliverablesGrid() {
  return (
    <section className="bg-herb-fog pt-[72px] pb-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="mb-9 md:mb-16 flex flex-col gap-3">
          <div className="font-bebas text-[13px] tracking-[0.24em] md:text-sm md:tracking-[0.28em] text-herb-cyan">
            DELIVERABLES
          </div>
          <h2 className="m-0 font-hammersmith font-normal tracking-normal text-[30px] md:text-[36px] leading-[1.12] text-herb-ink">
            What you get.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-px bg-[#E4E8EC] border border-[#E4E8EC]">
          {phases.map((phase) => (
            <div
              key={phase.num}
              className="bg-white pt-5 px-4 pb-6 md:pt-7 md:px-[22px] md:pb-9 flex flex-col gap-3.5 md:gap-[18px]"
            >
              <div className="flex flex-col gap-1">
                <span className="font-bebas text-sm tracking-[0.2em] text-herb-cyan">{phase.num}</span>
                <h3 className="m-0 font-hammersmith font-normal tracking-normal text-lg md:text-xl text-herb-ink">
                  {phase.title}
                </h3>
              </div>
              <ul className="m-0 p-0 list-none flex flex-col gap-2 md:gap-2.5">
                {phase.summaryItems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 font-inter text-[13px] md:text-[15px] leading-[1.45] text-herb-slate"
                  >
                    <span className="mt-2 w-[5px] h-[5px] rounded-full bg-herb-cyan flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
