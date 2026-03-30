import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PlatformPreview from "@/components/landing/PlatformPreview";
import JoiningOmnexaSection from "@/components/landing/JoiningOmnexaSection";
import PlansSection from "@/components/sections/plans";
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
      <PlansSection />
      <Footer />
    </main>
  );
}
