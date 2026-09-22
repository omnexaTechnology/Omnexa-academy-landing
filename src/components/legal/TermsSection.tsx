import { useTranslations } from "next-intl";
import { Scale } from "lucide-react";
import LegalSection from "./LegalSection";
import {
  LegalAccordion,
  LegalAccordionItem,
  BulletList,
} from "./LegalAccordionItem";

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
      <LegalAccordion>
        <LegalAccordionItem value="item-0" title={t("items.accounts.title")}>
          <BulletList items={t.raw("items.accounts.points") as string[]} />
        </LegalAccordionItem>

        <LegalAccordionItem
          value="item-1"
          title={t("items.acceptableUse.title")}
        >
          <BulletList
            items={t.raw("items.acceptableUse.points") as string[]}
          />
        </LegalAccordionItem>

        <LegalAccordionItem
          value="item-2"
          title={t("items.intellectualProperty.title")}
        >
          <p className="mb-4">{t("items.intellectualProperty.body")}</p>
          <div className="rounded-xl border border-[#4C4BE0]/15 bg-[#4C4BE0]/5 p-4">
            <p className="mb-1 font-semibold text-[#0d0d0d]">
              {t("items.intellectualProperty.noticeLabel")}
            </p>
            <p>{t("items.intellectualProperty.noticeBody")}</p>
          </div>
        </LegalAccordionItem>

        <LegalAccordionItem
          value="item-3"
          title={t("items.governingLaw.title")}
        >
          <p>{t("items.governingLaw.body")}</p>
        </LegalAccordionItem>
      </LegalAccordion>
    </LegalSection>
  );
}
