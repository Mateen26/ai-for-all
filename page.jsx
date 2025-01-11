import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    (<main>
      <HeroSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </main>)
  );
}

