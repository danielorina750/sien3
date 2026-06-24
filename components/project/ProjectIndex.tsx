import type { Project } from "@sien/types";
import { PROJECT_CATEGORIES } from "@sien/types";
import { ProjectCard } from "./ProjectCard";

export function ProjectIndex({ projects }: { projects: Project[] }) {
  return (
    <main className="bg-[var(--sien-ink)] px-6 pb-28 pt-36 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1500px]">
        <p className="text-xs font-semibold uppercase tracking-[.28em] text-[var(--sien-moss)]">Project portfolio</p>
        <h1 className="display-heading mt-5 text-[clamp(4rem,10vw,10rem)] font-black text-white">Selected works.</h1>
        <div className="mt-8 flex flex-wrap gap-2">
          {PROJECT_CATEGORIES.map((category) => (
            <span key={category} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/62">{category}</span>
          ))}
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} priority={index < 3} />
          ))}
        </div>
      </div>
    </main>
  );
}
