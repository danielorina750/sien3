"use client";

import dynamic from "next/dynamic";

export const ArchitecturalCanvas = dynamic(
  () => import("./ArchitecturalCanvasInner").then((module) => module.ArchitecturalCanvasInner),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-[var(--sien-ink)]/20" />,
  },
);
