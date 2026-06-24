import Image from "next/image";
import { SectionLabel } from "@/components/primitives/SectionLabel";

export function StudioStatement() {
  return (
    <section id="studio" className="bg-[var(--sien-cream)] px-6 py-28 text-[var(--sien-ink)] md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <SectionLabel>Full-cycle infrastructure studio</SectionLabel>
          <h2 className="display-heading mt-5 text-[clamp(3.4rem,8vw,8rem)] font-black leading-[.9]">One studio. One accountable delivery framework.</h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-xl leading-9 text-[var(--sien-ink)]/72">
            SIEN unites architectural design, engineering control, planning intelligence, cost discipline and site execution into one coordinated framework for long-term spatial and commercial asset value.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
            {["Architecture", "Engineering", "Planning", "MEP", "QS", "Construction Management"].map((item) => (
              <div key={item} className="rounded-full border border-[var(--sien-ink)]/14 px-4 py-3 font-semibold">{item}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 grid max-w-[1500px] gap-5 md:grid-cols-4">
        {["/assets/projects/asembo-bay-kendu.jpg", "/assets/projects/kimuka-resort.jpg", "/assets/projects/kisii-school-stem-complex.jpg", "/assets/projects/kisii-stadium.jpg"].map((src) => (
          <div key={src} className="project-frame relative aspect-[4/3] overflow-hidden bg-black">
            <Image src={src} alt="SIEN studio portfolio preview" fill sizes="25vw" className="object-cover transition duration-700 hover:scale-105" />
          </div>
        ))}
      </div>
    </section>
  );
}
