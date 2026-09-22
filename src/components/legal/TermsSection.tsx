import { useTranslations } from "next-intl";
import { Scale } from "lucide-react";
import LegalSection from "./LegalSection";
import { BulletList, LabeledBlock, NoticeBlock } from "./LegalAccordionItem";

export default function TermsSection() {
  const t = useTranslations("legal.terms");

  return (
    <LegalSection
      id="terms-conditions"
      icon={Scale}
      badge={t("badge")}
      title={t("title")}
      dateLabel={t("dateLabel")}
      date={t("date")}
      intro={t("intro")}
      tone="navy"
    >
      <LabeledBlock title={t("items.accounts.title")}>
        <BulletList items={t.raw("items.accounts.points") as string[]} />
      </LabeledBlock>

      <LabeledBlock title={t("items.acceptableUse.title")}>
        <BulletList items={t.raw("items.acceptableUse.points") as string[]} />
      </LabeledBlock>

      <LabeledBlock title={t("items.intellectualProperty.title")}>
        <p className="mb-5 text-[15px] leading-relaxed text-[#636363] sm:text-base">
          {t("items.intellectualProperty.body")}
        </p>
        <NoticeBlock
          label={t("items.intellectualProperty.noticeLabel")}
          body={t("items.intellectualProperty.noticeBody")}
        />
      </LabeledBlock>

      <LabeledBlock title={t("items.governingLaw.title")}>
        <p className="text-[15px] leading-relaxed text-[#636363] sm:text-base">
          {t("items.governingLaw.body")}
        </p>
      </LabeledBlock>
    </LegalSection>
  );
}
