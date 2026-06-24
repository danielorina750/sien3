"use client";

import type { Project } from "@sien/types";
import { ProjectCard } from "@/components/project/ProjectCard";
import { SectionLabel } from "@/components/primitives/SectionLabel";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  const primary = projects.filter((project) => project.featured).slice(0, 6);

  return (
    <section id="projects" className="relative bg-[var(--sien-ink)] px-6 py-28 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>Selected project portfolio</SectionLabel>
            <h2 className="display-heading mt-4 max-w-4xl text-[clamp(3rem,7vw,7.2rem)] font-black text-white">Project-led proof.</h2>
          </div>
          <p className="max-w-md text-base leading-7 text-white/58">Residential, hospitality, healthcare, commercial, industrial, education, sports and master-planning work presented as case studies.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {primary.map((project, index) => (
            <ProjectCard key={project.id} project={project} priority={index < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
