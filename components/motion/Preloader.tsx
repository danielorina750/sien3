"use client";

import { useEffect, useRef, useState } from "react";
import { getGsap } from "@/lib/animation/gsap";

export function Preloader() {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const gsap = getGsap();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        onComplete: () => setHidden(true),
      });
      tl.fromTo(".preloader-mark", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
        .fromTo(".preloader-line", { scaleX: 0 }, { scaleX: 1, duration: 0.9 }, "-=.2")
        .to(ref.current, { yPercent: -100, duration: 0.9, ease: "power4.inOut", delay: 0.25 });
    }, ref);
    return () => ctx.revert();
  }, []);

  if (hidden) return null;

  return (
    <div ref={ref} className="fixed inset-0 z-[999] flex items-center justify-center bg-[var(--sien-ink)]">
      <div className="w-full max-w-sm px-8 text-center">
        <div className="preloader-mark text-sm font-semibold uppercase tracking-[.32em] text-[var(--sien-moss)]">SIEN Group</div>
        <div className="mt-6 h-px origin-left scale-x-0 bg-[var(--sien-moss)] preloader-line" />
        <p className="mt-5 text-xs uppercase tracking-[.24em] text-white/48">Loading designed systems</p>
      </div>
    </div>
  );
}
