import { AboutSection } from "@/components/sections/about-section";
import { ClientsSection } from "@/components/sections/clients-section";
import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ImpactSection />
      {/* <ServicesSection /> */}
      <PortfolioSection />
      <AboutSection />
      <CtaSection />
    </>
  );
}
