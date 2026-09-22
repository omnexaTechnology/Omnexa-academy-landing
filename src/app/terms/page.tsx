import { getTranslations } from "next-intl/server";
import LegalPage from "@/components/landing/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Omnexa Learn",
  description:
    "Read the terms and conditions governing your use of the Omnexa Learn platform.",
};

export default async function TermsPage() {
  const t = await getTranslations("terms");

  const sections = t.raw("sections") as Array<{
    heading: string;
    body: string;
  }>;

  return (
    <LegalPage
      title={t("title")}
      lastUpdated={t("lastUpdated")}
      intro={t("intro")}
      sections={sections}
    />
  );
}
