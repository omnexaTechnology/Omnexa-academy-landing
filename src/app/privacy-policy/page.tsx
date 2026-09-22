import { getTranslations } from "next-intl/server";
import LegalPage from "@/components/landing/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Omnexa Learn",
  description:
    "Learn how Omnexa Learn collects, uses, and protects your personal data and privacy.",
};

export default async function PrivacyPolicyPage() {
  const t = await getTranslations("privacyPolicy");

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
