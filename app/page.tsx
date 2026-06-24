import { getProjects } from "@/lib/projects/getProjects";
import { HeroExperience } from "@/components/sections/HeroExperience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { StudioStatement } from "@/components/sections/StudioStatement";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { SectorIndex } from "@/components/sections/SectorIndex";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { CompliancePanel } from "@/components/sections/CompliancePanel";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default async function HomePage() {
  const projects = await getProjects();
  const featured = projects.filter((project) => project.featured).slice(0, 5);

  return (
    <main>
      <HeroExperience featured={featured} />
      <FeaturedProjects projects={projects} />
      <StudioStatement />
      <ServicesGrid />
      <ProcessTimeline />
      <SectorIndex projects={projects} />
      <PartnersMarquee />
      <CompliancePanel />
      <ContactCTA />
    </main>
  );
}
