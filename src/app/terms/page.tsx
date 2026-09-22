import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Scale } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import LegalPageHero from "@/components/legal/LegalPageHero";
import TermsSection from "@/components/legal/TermsSection";
import LegalCTA from "@/components/legal/LegalCTA";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("legal.termsMeta");
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/terms" },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "/terms",
      type: "website",
    },
  };
}

export default async function TermsPage() {
  const t = await getTranslations("legal.termsHero");

  return (
    <main>
      <Navbar />
      <LegalPageHero
        badge={t("badge")}
        title={t("title")}
        description={t("description")}
        lastUpdatedLabel={t("lastUpdatedLabel")}
        lastUpdatedDate={t("lastUpdatedDate")}
        icon={Scale}
      />
      <TermsSection />
      <LegalCTA />
      <Footer />
    </main>
  );
}
