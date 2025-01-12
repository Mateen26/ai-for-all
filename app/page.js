import { ContactSection } from "@/components/contact-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center py-20 px-4 md:px-16">
        <HeroSection />
        <FeaturesSection />
        <ContactSection />
       </main>
    <Footer />
    </>
  );
}
