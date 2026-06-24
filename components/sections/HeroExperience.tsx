"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import type { Project } from "@sien/types";
import { Button } from "@sien/ui";
import { getGsap } from "@/lib/animation/gsap";
import { ArchitecturalCanvas } from "@/components/canvas/ArchitecturalCanvas";
import { SiteAtmosphere } from "@/components/visual/SiteAtmosphere";
import { StructuralGrid } from "@/components/visual/StructuralGrid";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { SplitHeading } from "@/components/primitives/SplitHeading";

export function HeroExperience({ featured }: { featured: Project[] }) {
  const ref = useRef<HTMLElement>(null);
  const heroProject = useMemo(() => featured[0], [featured]);

  useEffect(() => {
    const gsap = getGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-copy", { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 1.4 });
      gsap.to(".hero-image", {
        scale: 1.04,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      <SiteAtmosphere />
      <StructuralGrid />
      <ArchitecturalCanvas />

      <div className="absolute inset-0 z-[var(--z-media)]">
        {heroProject ? (
          <Image
            src={heroProject.coverImage.src}
            alt={heroProject.coverImage.alt}
            fill
            priority
            sizes="100vw"
            className="hero-image object-cover opacity-72"
          />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,31,24,.96)_0%,rgba(3,31,24,.82)_34%,rgba(3,31,24,.32)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,31,24,1),transparent_42%)]" />
      </div>

      <div className="relative z-[var(--z-content)] mx-auto grid min-h-screen max-w-[1500px] grid-cols-12 items-end gap-8 px-6 pb-16 pt-32 md:px-12 lg:px-20">
        <div className="hero-copy col-span-12 max-w-5xl lg:col-span-8">
          <SectionLabel>SIEN Group / Est. 2019</SectionLabel>
          <SplitHeading>Architecture. Engineering. Development.</SplitHeading>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            Designing refined residential, commercial, healthcare, hospitality and infrastructure projects across East Africa.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/projects">View Projects</Button>
            <Button href="#contact" variant="secondary">Start a Conversation</Button>
          </div>
        </div>

        <aside className="hero-copy col-span-12 rounded-[2rem] border border-white/12 bg-white/[.06] p-5 backdrop-blur-xl lg:col-span-4">
          <p className="text-xs uppercase tracking-[.28em] text-[var(--sien-moss)]">Featured work</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {featured.slice(0, 3).map((project) => (
              <div key={project.id} className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
                <Image src={project.coverImage.src} alt={project.coverImage.alt} fill sizes="160px" className="object-cover" />
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-white/64">A portfolio spanning private residences, healthcare facilities, hospitality destinations, commercial assets and civic infrastructure.</p>
        </aside>
      </div>
    </section>
  );
}
