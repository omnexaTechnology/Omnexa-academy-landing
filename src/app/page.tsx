import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PlatformPreview from "@/components/landing/PlatformPreview";
import FeaturesSection from "@/components/landing/FeaturesSection";
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
      <PlatformPreview />
      <FeaturesSection />
      <DashboardPreview />
      <StepsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
