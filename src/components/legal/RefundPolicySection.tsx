import { useTranslations } from "next-intl";
import { CreditCard } from "lucide-react";
import LegalSection from "./LegalSection";
import {
  LegalAccordion,
  LegalAccordionItem,
  LabeledPointList,
} from "./LegalAccordionItem";

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
      <LegalAccordion>
        <LegalAccordionItem value="item-0" title={t("items.recorded.title")}>
          <LabeledPointList
            items={
              t.raw("items.recorded.points") as {
                label: string;
                body: string;
              }[]
            }
          />
        </LegalAccordionItem>

        <LegalAccordionItem value="item-1" title={t("items.live.title")}>
          <LabeledPointList
            items={
              t.raw("items.live.points") as { label: string; body: string }[]
            }
          />
        </LegalAccordionItem>

        <LegalAccordionItem value="item-2" title={t("items.timeline.title")}>
          <p>{t("items.timeline.body")}</p>
        </LegalAccordionItem>
      </LegalAccordion>
    </LegalSection>
  );
}
