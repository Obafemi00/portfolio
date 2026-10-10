import Eyebrow from '@/components/ui/Eyebrow';
import { services } from '@/data/services';

export default function ServicesGrid() {
  return (
    <section className="py-section bg-white">
      <div className="container-content">
        <div className="flex flex-col gap-4 mb-16 max-w-2xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="text-h2 font-hammersmith text-herb-ink balance">
            Services engineered for the long term.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-herb-fog border border-herb-fog">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group bg-white p-6 md:p-8 hover:bg-herb-fog transition-colors duration-300 ease-herb flex flex-col gap-3 min-h-[180px]"
            >
              <h3 className="font-hammersmith text-xl text-herb-ink">
                {service.name}
              </h3>
              <p className="text-sm text-herb-slate font-inter leading-relaxed">
                {service.summary}
              </p>
              <div className="mt-auto pt-4">
                <span className="inline-flex items-center gap-1 text-herb-cyan text-sm transition-transform duration-200 group-hover:translate-x-1">
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
