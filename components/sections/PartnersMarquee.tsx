import Image from "next/image";
import { partners } from "@/data/partners";
import { SectionLabel } from "@/components/primitives/SectionLabel";

export function PartnersMarquee() {
  const loop = [...partners, ...partners];
  return (
    <section className="overflow-hidden bg-[var(--sien-ink)] py-24">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1500px]">
          <SectionLabel>Strategic partners</SectionLabel>
          <h2 className="display-heading mt-5 max-w-4xl text-[clamp(3rem,7vw,7rem)] font-black text-white">Built with a wider delivery ecosystem.</h2>
        </div>
      </div>
      <div className="mt-14 flex w-max animate-[marquee_34s_linear_infinite] gap-4 px-6 hover:[animation-play-state:paused]">
        {loop.map((partner, index) => (
          <div key={`${partner.name}-${index}`} className="flex h-28 w-64 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[.045] px-8 backdrop-blur-xl grayscale transition hover:grayscale-0">
            <Image src={partner.logo} alt={partner.name} width={180} height={64} className="max-h-14 w-auto object-contain" />
          </div>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}
