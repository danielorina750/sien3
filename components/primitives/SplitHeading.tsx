import type { ReactNode } from "react";

export function SplitHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  const text = String(children);
  return (
    <h1 className={`display-heading text-[clamp(4.4rem,12vw,12rem)] font-black text-white ${className}`}>
      {text.split(".").filter(Boolean).map((line) => (
        <span key={line} className="block">
          {line.trim()}.
        </span>
      ))}
    </h1>
  );
}
