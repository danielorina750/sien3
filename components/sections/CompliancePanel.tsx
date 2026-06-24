import Image from "next/image";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { Button } from "@sien/ui";

const docs = [
  { title: "Certificate of Incorporation", image: "/assets/certificates/certificate-of-incorporation.jpg" },
  { title: "KRA PIN Certificate", image: "/assets/certificates/kra-pin-certificate.jpg" },
];

export function CompliancePanel() {
  return (
    <section className="bg-[var(--sien-cream)] px-6 py-28 text-[var(--sien-ink)] md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel>Compliance</SectionLabel>
          <h2 className="display-heading mt-5 text-[clamp(3.2rem,7vw,7rem)] font-black">Registered. Compliant. Project-ready.</h2>
          <p className="mt-8 text-lg leading-8 text-[var(--sien-ink)]/64">Statutory documents are presented clearly without overwhelming the portfolio experience.</p>
          <Button href="/assets/docs/SIEN-Group-Profile.pdf" className="mt-8" download>Download Profile</Button>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:col-span-7">
          {docs.map((doc) => (
            <article key={doc.title} className="rounded-[2rem] border border-[var(--sien-ink)]/12 bg-white p-4 shadow-2xl shadow-[var(--sien-ink)]/8">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.4rem] bg-[var(--sien-cream)]">
                <Image src={doc.image} alt={doc.title} fill sizes="420px" className="object-contain p-5" />
              </div>
              <h3 className="px-2 py-5 text-center text-sm font-bold uppercase tracking-[.16em] text-[var(--sien-green)]">{doc.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
