"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@sien/ui";
import { cn } from "@/lib/utils/cn";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "#studio", label: "Studio" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-[var(--z-navigation)] px-4 py-4 transition duration-500 md:px-8",
        scrolled ? "bg-[var(--sien-ink)]/72 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between rounded-full border border-white/10 bg-white/[.035] px-4 py-3 shadow-2xl shadow-black/10">
        <Link href="/" className="flex items-center gap-3" aria-label="SIEN Group home">
          <span className="relative h-9 w-9 overflow-hidden rounded-full border border-[var(--sien-moss)]/50 bg-white/8">
            <Image src="/assets/brand/sien-logo.png" alt="SIEN Group" fill sizes="36px" className="object-contain p-1" priority />
          </span>
          <span className="text-sm font-semibold tracking-[0.22em] text-white">SIEN</span>
        </Link>

        <nav className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.18em] text-white/64 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <Button href="#contact" className="hidden px-4 py-2 text-xs md:inline-flex">
          Start a Project
        </Button>
      </div>
    </header>
  );
}
