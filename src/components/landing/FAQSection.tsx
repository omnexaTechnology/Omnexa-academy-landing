import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_KEYS = ["q1", "q2", "q3", "q4", "q5"] as const;

export default function FAQSection() {
  const t = useTranslations("faq");

  return (
    <section id="faq" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#000B58] sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_KEYS.map((key) => (
              <AccordionItem key={key} value={key}>
                <AccordionTrigger className="text-start text-base font-medium text-[#000B58] hover:no-underline hover:text-[#006A67]">
                  {t(`items.${key}.question`)}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {t(`items.${key}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
