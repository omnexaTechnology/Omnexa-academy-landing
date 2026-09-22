import { getTranslations } from "next-intl/server";
import LegalPage from "@/components/landing/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Omnexa Learn",
  description:
    "Understand the refund and cancellation policy for Omnexa Learn subscriptions.",
};

export default async function RefundPolicyPage() {
  const t = await getTranslations("refundPolicy");

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
