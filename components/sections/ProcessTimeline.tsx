import { processSteps } from "@/data/process";
import { SectionLabel } from "@/components/primitives/SectionLabel";

export function ProcessTimeline() {
  return (
    <section id="process" className="relative overflow-hidden bg-[var(--sien-ink)] px-6 py-28 md:px-12 lg:px-20">
      <div className="arch-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[1500px]">
        <SectionLabel>Concept → approvals → engineering → build → handover</SectionLabel>
        <h2 className="display-heading mt-5 max-w-5xl text-[clamp(3rem,7vw,7rem)] font-black text-white">A controlled delivery path.</h2>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step) => (
            <article key={step.step} className="rounded-[2rem] border border-white/10 bg-white/[.045] p-6 backdrop-blur-xl">
              <p className="text-sm font-semibold text-[var(--sien-moss)]">{step.step}</p>
              <h3 className="mt-6 text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 leading-7 text-white/58">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
