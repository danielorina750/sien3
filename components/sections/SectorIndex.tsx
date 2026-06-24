import type { Project } from "@sien/types";
import { PROJECT_CATEGORIES } from "@sien/types";
import { SectionLabel } from "@/components/primitives/SectionLabel";

export function SectorIndex({ projects }: { projects: Project[] }) {
  return (
    <section className="bg-[var(--sien-cream)] px-6 py-28 text-[var(--sien-ink)] md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1500px]">
        <SectionLabel>Sectors</SectionLabel>
        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {PROJECT_CATEGORIES.map((category) => {
            const count = projects.filter((project) => project.category === category).length;
            return (
              <a href={`/projects?sector=${encodeURIComponent(category)}`} key={category} className="group rounded-[2rem] border border-[var(--sien-ink)]/12 p-7 transition hover:-translate-y-1 hover:bg-white">
                <p className="text-5xl font-black text-[var(--sien-ink)]/18">{String(count).padStart(2, "0")}</p>
                <h3 className="mt-12 text-xl font-semibold">{category}</h3>
                <p className="mt-3 text-sm text-[var(--sien-ink)]/52">View selected work</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
