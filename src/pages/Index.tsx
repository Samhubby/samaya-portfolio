import React from "react";
import { ThemeProvider } from "@/hooks/use-theme";
import EditorialNavbar from "@/components/EditorialNavbar";
import EditorialHero from "@/components/EditorialHero";
import MetricsBand from "@/components/MetricsBand";
import AboutSection from "@/components/AboutSection";
import EditorialExperience from "@/components/EditorialExperience";
import FeaturedSystems from "@/components/FeaturedSystems";
import ResearchAndWriting from "@/components/ResearchAndWriting";
import CredentialsSection from "@/components/CredentialsSection";
import EditorialContact from "@/components/EditorialContact";
import EditorialFooter from "@/components/EditorialFooter";

const Index: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-200">
        <EditorialNavbar />
        <main>
          <EditorialHero />
          <MetricsBand />
          <AboutSection />
          <EditorialExperience />
          <FeaturedSystems />
          <ResearchAndWriting />
          <CredentialsSection />
          <EditorialContact />
        </main>
        <EditorialFooter />
      </div>
    </ThemeProvider>
  );
};

export default Index;
