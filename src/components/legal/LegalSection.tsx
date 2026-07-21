import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface LegalSectionProps {
  id: string;
  icon: LucideIcon;
  badge: string;
  title: string;
  dateLabel: string;
  date: string;
  intro?: string;
  tone: "indigo" | "blue" | "navy";
  children: ReactNode;
}

const TONE_GRADIENTS: Record<LegalSectionProps["tone"], string> = {
  indigo: "linear-gradient(135deg, #4C4BE0 0%, #7E95EB 100%)",
  blue: "linear-gradient(135deg, #0098DF 0%, #4C4BE0 100%)",
  navy: "linear-gradient(135deg, #1b1a4e 0%, #3938a8 100%)",
};

export default function LegalSection({
  id,
  icon: Icon,
  badge,
  title,
  dateLabel,
  date,
  intro,
  tone,
  children,
}: LegalSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 w-full px-5 py-[64px] sm:px-10 md:py-[80px] xl:px-20"
    >
      <div className="mx-auto flex w-full max-w-[900px] flex-col gap-10">
        {/* Section header */}
        <div className="flex flex-col items-start gap-5 text-start">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-white shadow-md"
            style={{ background: TONE_GRADIENTS[tone] }}
            aria-hidden="true"
          >
            <Icon className="h-8 w-8" />
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#4C4BE0]">
              {badge}
            </span>
            <h2
              className="text-[26px] font-semibold leading-tight text-[#0d0d0d] sm:text-[32px] md:text-[40px]"
            >
              {title}
            </h2>
            <p className="text-sm text-[#808080] sm:text-base">
              {dateLabel}: <span className="font-medium text-[#4C4C4C]">{date}</span>
            </p>
          </div>

          {intro && (
            <p className="max-w-[820px] text-base leading-relaxed text-[#636363] sm:text-lg sm:leading-8">
              {intro}
            </p>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
