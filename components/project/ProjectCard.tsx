"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@sien/types";
import { motion } from "framer-motion";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.045]"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image src={project.coverImage.src} alt={project.coverImage.alt} fill priority={priority} sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,31,24,.92),transparent_62%)]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="mb-4 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[.18em]">
            <span className="rounded-full bg-[var(--sien-moss)] px-3 py-1 text-[var(--sien-ink)]">{project.status}</span>
            <span className="rounded-full bg-white/12 px-3 py-1 text-white">{project.location}</span>
          </div>
          <p className="text-xs uppercase tracking-[.22em] text-[var(--sien-moss)]">{project.category}</p>
          <h3 className="display-heading mt-3 text-5xl font-black text-white">{project.title}</h3>
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/66">{project.shortDescription}</p>
        </div>
      </Link>
    </motion.article>
  );
}
