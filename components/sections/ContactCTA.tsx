import { Button } from "@sien/ui";
import { SectionLabel } from "@/components/primitives/SectionLabel";

export function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--sien-ink)] px-6 py-28 md:px-12 lg:px-20">
      <div className="arch-grid absolute inset-0 opacity-35" />
      <div className="relative mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <SectionLabel>Connect with our team</SectionLabel>
          <h2 className="display-heading mt-5 text-[clamp(4rem,9vw,9rem)] font-black text-white">Start your next landmark.</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/64">Consult on architectural drafting, structural engineering, planning approvals, construction materials supplies and feasibility studies.</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[.055] p-7 backdrop-blur-xl lg:col-span-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Info label="Headquarters" value="Magharibi Place, Langata Road" />
            <Info label="Email" value="info@sien.co.ke" />
            <Info label="Phone" value="+254 726 541031 / +254 703 679534" />
            <Info label="Website" value="www.sien.co.ke" />
          </div>
          <Button href="mailto:info@sien.co.ke" className="mt-7 w-full">Inquire Today</Button>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-4">
      <p className="text-xs uppercase tracking-[.22em] text-[var(--sien-moss)]">{label}</p>
      <p className="mt-3 text-sm leading-6 text-white/72">{value}</p>
    </div>
  );
}
