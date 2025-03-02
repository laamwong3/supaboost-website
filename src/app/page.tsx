import { Container } from "@/components/layout/container";
import { AboutSection } from "@/components/sections/about";
import { ComparisonPreview } from "@/components/sections/comparison-preview";
import { ContactCta } from "@/components/sections/contact-cta";
import { ExpertAdvice } from "@/components/sections/expert-advice";
import { Hero } from "@/components/sections/hero";
import { InsightsSection } from "@/components/sections/insights";
import { LegislativeUpdates } from "@/components/sections/legislative-updates";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />

      <Container className="py-12 md:py-16">
        <AboutSection />
      </Container>

      <Container className="bg-muted/50 py-12 md:py-16">
        <InsightsSection />
      </Container>

      <Container className="py-12 md:py-16">
        <ComparisonPreview />
      </Container>

      <Container className="bg-muted/50 py-12 md:py-16">
        <LegislativeUpdates />
      </Container>

      <Container className="py-12 md:py-16">
        <ExpertAdvice />
      </Container>

      <Container className="bg-primary py-12 text-primary-foreground md:py-16">
        <ContactCta />
      </Container>
    </main>
  );
}
