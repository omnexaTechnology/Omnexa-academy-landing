import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function LegalCTA() {
  const t = useTranslations("legal.cta");

  return (
    <section className="w-full px-5 py-[64px] sm:px-10 md:py-[96px] xl:px-20">
      <div
        className="relative mx-auto flex w-full max-w-[900px] flex-col items-center gap-6 overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-14"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, #4C4BE0 0%, #3B3AAD 50%, #29297A 100%)",
        }}
      >
        <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
          {t("title")}
        </h2>
        <p className="max-w-[560px] text-base leading-relaxed text-[#DDDDDD] sm:text-lg">
          {t("description")}
        </p>
        <Button
          asChild
          size="lg"
          className="mt-2 h-14 rounded-full bg-white px-8 text-base font-semibold text-[#3938A8] hover:bg-white/90"
        >
          <a href="/#contact">{t("button")}</a>
        </Button>
      </div>
    </section>
  );
}
