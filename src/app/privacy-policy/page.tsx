import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import LegalHero from "@/components/legal/LegalHero";
import PrivacyPolicySection from "@/components/legal/PrivacyPolicySection";
import RefundPolicySection from "@/components/legal/RefundPolicySection";
import TermsSection from "@/components/legal/TermsSection";
import LegalCTA from "@/components/legal/LegalCTA";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("legal.meta");
  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    alternates: {
      canonical: "/privacy-policy",
    },
    openGraph: {
      title,
      description,
      url: "/privacy-policy",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />
      <LegalHero />
      <PrivacyPolicySection />
      <RefundPolicySection />
      <TermsSection />
      <LegalCTA />
      <Footer />
    </main>
  );
}
