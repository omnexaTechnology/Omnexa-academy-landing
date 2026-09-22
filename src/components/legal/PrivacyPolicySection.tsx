import { useTranslations } from "next-intl";
import { ShieldCheck } from "lucide-react";
import LegalSection from "./LegalSection";
import { BulletList, LabeledBlock } from "./LegalAccordionItem";

export default function PrivacyPolicySection() {
  const t = useTranslations("legal.privacy");

  return (
    <LegalSection
      id="privacy-policy"
      icon={ShieldCheck}
      badge={t("badge")}
      title={t("title")}
      dateLabel={t("dateLabel")}
      date={t("date")}
      intro={t("intro")}
      tone="indigo"
    >
      <LabeledBlock title={t("items.collect.title")}>
        <p className="mb-4 text-[15px] leading-relaxed text-[#636363] sm:text-base">
          {t("items.collect.intro")}
        </p>
        <BulletList items={t.raw("items.collect.points") as string[]} />
      </LabeledBlock>

      <LabeledBlock title={t("items.use.title")}>
        <p className="mb-4 text-[15px] leading-relaxed text-[#636363] sm:text-base">
          {t("items.use.intro")}
        </p>
        <BulletList items={t.raw("items.use.points") as string[]} />
      </LabeledBlock>

      <LabeledBlock title={t("items.sharing.title")}>
        <p className="text-[15px] leading-relaxed text-[#636363] sm:text-base">
          {t("items.sharing.body")}
        </p>
      </LabeledBlock>

      <LabeledBlock title={t("items.protection.title")}>
        <p className="text-[15px] leading-relaxed text-[#636363] sm:text-base">
          {t("items.protection.body")}
        </p>
      </LabeledBlock>

      <LabeledBlock title={t("items.rights.title")}>
        <p className="mb-4 text-[15px] leading-relaxed text-[#636363] sm:text-base">
          {t("items.rights.intro")}
        </p>
        <BulletList items={t.raw("items.rights.points") as string[]} />
        <p className="mt-4 text-[15px] leading-relaxed text-[#636363] sm:text-base">
          {t("items.rights.outro")}
        </p>
      </LabeledBlock>
    </LegalSection>
  );
}
