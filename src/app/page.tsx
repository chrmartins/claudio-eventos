import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function HomePage() {
  return (
    <>
      <HeroSection videoId="dQw4w9WgXcQ" />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
    </>
  );
}
