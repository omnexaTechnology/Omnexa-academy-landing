import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CreditCard } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import LegalPageHero from "@/components/legal/LegalPageHero";
import RefundPolicySection from "@/components/legal/RefundPolicySection";
import LegalCTA from "@/components/legal/LegalCTA";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("legal.refundMeta");
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/refund-policy" },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "/refund-policy",
      type: "website",
    },
  };
}

export default async function RefundPolicyPage() {
  const t = await getTranslations("legal.refundHero");

  return (
    <main>
      <Navbar />
      <LegalPageHero
        badge={t("badge")}
        title={t("title")}
        description={t("description")}
        lastUpdatedLabel={t("lastUpdatedLabel")}
        lastUpdatedDate={t("lastUpdatedDate")}
        icon={CreditCard}
      />
      <RefundPolicySection />
      <LegalCTA />
      <Footer />
    </main>
  );
}
