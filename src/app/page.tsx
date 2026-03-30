import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PlatformPreview from "@/components/landing/PlatformPreview";
import JoiningOmnexaSection from "@/components/landing/JoiningOmnexaSection";
import DashboardPreview from "@/components/landing/DashboardPreview";
import StepsSection from "@/components/landing/StepsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <PlatformPreview />
      <JoiningOmnexaSection />
      <DashboardPreview />
      <StepsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
