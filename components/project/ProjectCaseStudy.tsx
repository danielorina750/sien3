import Image from "next/image";
import Link from "next/link";
import type { Project } from "@sien/types";
import { Button } from "@sien/ui";
import { ProjectCard } from "./ProjectCard";

export function ProjectCaseStudy({ project, related }: { project: Project; related: Project[] }) {
  const gallery = [project.coverImage, ...project.gallery];
  return (
    <main className="bg-[var(--sien-ink)]">
      <section className="relative min-h-[92vh] overflow-hidden px-6 pb-16 pt-36 md:px-12 lg:px-20">
        <Image src={project.coverImage.src} alt={project.coverImage.alt} fill priority sizes="100vw" className="object-cover opacity-62" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,31,24,1),rgba(3,31,24,.22))]" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-[1500px] flex-col justify-end">
          <p className="text-xs font-semibold uppercase tracking-[.28em] text-[var(--sien-moss)]">{project.category} / {project.status}</p>
          <h1 className="display-heading mt-5 max-w-5xl text-[clamp(4rem,10vw,10rem)] font-black text-white">{project.title}</h1>
          <div className="mt-7 grid max-w-5xl gap-6 md:grid-cols-3">
            <Meta label="Location" value={project.location} />
            <Meta label="Scale" value={project.size ?? "Project scope"} />
            <Meta label="Phase" value={project.status} />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[.28em] text-[var(--sien-moss)]">Design story</p>
            <h2 className="display-heading mt-5 text-6xl font-black text-white">Spatial intent.</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-2xl leading-10 text-white/76">{project.fullDescription}</p>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div key={highlight} className="rounded-2xl border border-white/10 bg-white/[.045] p-5 text-white/72">{highlight}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-[1500px] gap-5 md:grid-cols-2">
          {gallery.map((image) => (
            <div key={image.id} className="project-frame relative aspect-[4/3] overflow-hidden bg-white/5">
              <Image src={image.src} alt={image.alt} fill sizes="50vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {related.length > 0 ? (
        <section className="px-6 pb-28 md:px-12 lg:px-20">
          <div className="mx-auto max-w-[1500px]">
            <div className="flex items-end justify-between gap-8">
              <h2 className="display-heading text-6xl font-black text-white">Related work.</h2>
              <Button href="/projects" variant="secondary">All Projects</Button>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((item) => <ProjectCard key={item.id} project={item} />)}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.06] p-5 backdrop-blur-xl">
      <p className="text-xs uppercase tracking-[.22em] text-white/42">{label}</p>
      <p className="mt-3 font-semibold text-white">{value}</p>
    </div>
  );
}
