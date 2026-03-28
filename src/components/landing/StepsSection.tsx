import { useTranslations } from "next-intl";
import { UserPlus, BookOpen, GraduationCap } from "lucide-react";

const STEP_ICONS = [UserPlus, BookOpen, GraduationCap];

export default function StepsSection() {
  const t = useTranslations("steps");

  const steps = [
    {
      number: "01",
      icon: STEP_ICONS[0],
      title: t("step1.title"),
      description: t("step1.description"),
    },
    {
      number: "02",
      icon: STEP_ICONS[1],
      title: t("step2.title"),
      description: t("step2.description"),
    },
    {
      number: "03",
      icon: STEP_ICONS[2],
      title: t("step3.title"),
      description: t("step3.description"),
    },
  ];

  return (
    <section id="steps" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#000B58] sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Connector line (desktop) */}
          <div className="absolute left-1/6 right-1/6 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-[#006A67]/30 to-transparent md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#006A67]/20 bg-white shadow-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#006A67]">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#000B58] text-xs font-bold text-white">
                    {index + 1}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-semibold text-[#000B58]">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
