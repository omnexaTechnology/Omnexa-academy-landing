import { useTranslations } from "next-intl";
import { ShieldCheck } from "lucide-react";
import LegalSection from "./LegalSection";
import {
  LegalAccordion,
  LegalAccordionItem,
  BulletList,
} from "./LegalAccordionItem";

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
      <LegalAccordion>
        <LegalAccordionItem value="item-0" title={t("items.collect.title")}>
          <p className="mb-3">{t("items.collect.intro")}</p>
          <BulletList items={t.raw("items.collect.points") as string[]} />
        </LegalAccordionItem>

        <LegalAccordionItem value="item-1" title={t("items.use.title")}>
          <p className="mb-3">{t("items.use.intro")}</p>
          <BulletList items={t.raw("items.use.points") as string[]} />
        </LegalAccordionItem>

        <LegalAccordionItem value="item-2" title={t("items.sharing.title")}>
          <p>{t("items.sharing.body")}</p>
        </LegalAccordionItem>

        <LegalAccordionItem value="item-3" title={t("items.protection.title")}>
          <p>{t("items.protection.body")}</p>
        </LegalAccordionItem>

        <LegalAccordionItem value="item-4" title={t("items.rights.title")}>
          <p className="mb-3">{t("items.rights.intro")}</p>
          <BulletList items={t.raw("items.rights.points") as string[]} />
          <p className="mt-4">{t("items.rights.outro")}</p>
        </LegalAccordionItem>
      </LegalAccordion>
    </LegalSection>
  );
}
