import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SIGNUP_URL } from "@/lib/constants";

type PlanKey = "starter" | "professional" | "enterprise";

const PLANS: { key: PlanKey; popular?: boolean }[] = [
  { key: "starter" },
  { key: "professional", popular: true },
  { key: "enterprise" },
];

export default function PricingSection() {
  const t = useTranslations("pricing");

  return (
    <section id="pricing" className="bg-[#000B58] py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-200">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLANS.map(({ key, popular }) => {
            const features = t.raw(`plans.${key}.features`) as string[];

            return (
              <div
                key={key}
                className={`relative flex flex-col rounded-2xl p-8 ${
                  popular
                    ? "border-2 border-[#006A67] bg-white/10 shadow-2xl"
                    : "border border-white/10 bg-white/5"
                }`}
              >
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="teal" className="px-4 py-1 text-sm">
                      {t("popular")}
                    </Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white">
                    {t(`plans.${key}.name`)}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      {t(`plans.${key}.price`)}
                    </span>
                    <span className="text-blue-200">{t("monthly")}</span>
                  </div>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {features.map((feature: string) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#006A67]">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-blue-100">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={SIGNUP_URL}
                  className={`block rounded-lg py-3 text-center text-sm font-semibold transition-colors ${
                    popular
                      ? "bg-[#006A67] text-white hover:bg-[#005552]"
                      : "border border-white/30 text-white hover:bg-white/10"
                  }`}
                >
                  {t("cta")}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
