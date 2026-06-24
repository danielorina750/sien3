import { services } from "@/data/services";
import { SectionLabel } from "@/components/primitives/SectionLabel";

export function ServicesGrid() {
  return (
    <section id="services" className="bg-[var(--sien-cream)] px-6 pb-28 text-[var(--sien-ink)] md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1500px]">
        <SectionLabel>Service engine</SectionLabel>
        <div className="mt-8 divide-y divide-[var(--sien-ink)]/14 border-y border-[var(--sien-ink)]/14">
          {services.map((service) => (
            <article key={service.number} className="group grid gap-6 py-8 md:grid-cols-12 md:items-center">
              <p className="text-sm font-semibold text-[var(--sien-ink)]/40 md:col-span-2">{service.number}</p>
              <h3 className="display-heading text-4xl font-black md:col-span-4 md:text-5xl">{service.title}</h3>
              <p className="text-lg leading-8 text-[var(--sien-ink)]/64 md:col-span-6">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
