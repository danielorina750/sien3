"use client";

import Lenis from "lenis";
import { ReactNode, useEffect } from "react";
import { getGsap, ScrollTrigger } from "@/lib/animation/gsap";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const gsap = getGsap();
    const lenis = new Lenis({
      duration: 1.08,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return children;
}
