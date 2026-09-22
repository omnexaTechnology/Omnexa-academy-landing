import { useTranslations } from "next-intl";
import { CreditCard } from "lucide-react";
import LegalSection from "./LegalSection";
import { LabeledBlock, LabeledPointList } from "./LegalAccordionItem";

export default function RefundPolicySection() {
  const t = useTranslations("legal.refund");

  return (
    <LegalSection
      id="refund-policy"
      icon={CreditCard}
      badge={t("badge")}
      title={t("title")}
      dateLabel={t("dateLabel")}
      date={t("date")}
      intro={t("intro")}
      tone="blue"
    >
      <LabeledBlock title={t("items.recorded.title")}>
        <LabeledPointList
          items={
            t.raw("items.recorded.points") as { label: string; body: string }[]
          }
        />
      </LabeledBlock>

      <LabeledBlock title={t("items.live.title")}>
        <LabeledPointList
          items={
            t.raw("items.live.points") as { label: string; body: string }[]
          }
        />
      </LabeledBlock>

      <LabeledBlock title={t("items.timeline.title")}>
        <p className="text-[15px] leading-relaxed text-[#636363] sm:text-base">
          {t("items.timeline.body")}
        </p>
      </LabeledBlock>
    </LegalSection>
  );
}
