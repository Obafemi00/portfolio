import Eyebrow from '@/components/ui/Eyebrow';
import { services } from '@/data/services';

const mailto = 'mailto:obafemi00@gmail.com';

export default function ServicesGrid() {
  return (
    <section className="py-[72px] md:py-[120px] bg-white">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-9 md:mb-16 items-end">
          <div className="md:col-span-7 flex flex-col gap-3.5 md:gap-4">
            <Eyebrow className="text-[13px] tracking-[0.24em] md:text-sm md:tracking-[0.28em]">
              What we do
            </Eyebrow>
            <h2 className="m-0 font-hammersmith font-normal text-herb-ink text-[30px] md:text-[36px] leading-[1.12] tracking-normal">
              Services engineered for the long term.
            </h2>
          </div>
          <p className="hidden md:block md:col-start-9 md:col-span-4 m-0 text-base text-herb-slate font-inter">
            Eleven ways we work with teams, from a first build to years of ongoing management.
          </p>
        </div>

        {/* Desktop: grid with a dark 12th cell */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E4E8EC] border border-[#E4E8EC]">
          {services.map((service) => (
            <a
              key={service.slug}
              href={mailto}
              className="group relative flex flex-col gap-3 min-h-[220px] pt-8 px-8 pb-16 bg-white hover:bg-herb-fog transition-colors duration-300"
            >
              <span className="font-bebas text-sm tracking-[0.2em] text-herb-slate">
                {service.num}
              </span>
              <h3 className="m-0 font-hammersmith font-normal text-xl leading-[1.2] tracking-normal text-herb-ink">
                {service.name}
              </h3>
              <p className="m-0 text-[15px] leading-[1.55] text-herb-slate font-inter max-w-[320px]">
                {service.summary}
              </p>
              <span
                className="absolute right-7 bottom-6 text-lg text-herb-cyan transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          ))}
          <a
            href={mailto}
            className="flex flex-col justify-end gap-2.5 min-h-[220px] p-8 bg-herb-ink hover:bg-[#121A22] text-white transition-colors duration-300"
          >
            <span className="text-[15px] text-[#A9B2BA]">Not sure which fits?</span>
            <span className="font-hammersmith text-xl text-white">
              Start a project <span className="text-herb-cyan" aria-hidden="true">→</span>
            </span>
          </a>
        </div>

        {/* Mobile: numbered list */}
        <div className="md:hidden">
          <ul className="flex flex-col border-t border-[#E4E8EC]">
            {services.map((service) => (
              <li key={service.slug}>
                <a
                  href={mailto}
                  className="grid grid-cols-[32px_minmax(0,1fr)_20px] gap-3 py-[22px] border-b border-[#E4E8EC] active:bg-herb-fog"
                >
                  <span className="font-bebas text-sm tracking-[0.16em] text-herb-slate pt-0.5">
                    {service.num}
                  </span>
                  <span className="flex flex-col gap-1.5">
                    <span className="font-hammersmith text-[19px] leading-[1.2] text-herb-ink">
                      {service.name}
                    </span>
                    <span className="text-sm leading-[1.55] text-herb-slate">
                      {service.summary}
                    </span>
                  </span>
                  <span className="text-base text-herb-cyan pt-0.5" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={mailto}
            className="flex flex-col gap-1.5 mt-6 py-7 px-6 bg-herb-ink rounded text-white"
          >
            <span className="text-sm text-[#A9B2BA]">Not sure which fits?</span>
            <span className="font-hammersmith text-xl text-white">
              Start a project <span className="text-herb-cyan" aria-hidden="true">→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
