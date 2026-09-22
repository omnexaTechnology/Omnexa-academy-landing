import { CalendarClock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
  lastUpdatedLabel: string;
  lastUpdatedDate: string;
  icon: LucideIcon;
  tone?: "indigo" | "blue" | "navy";
}

const TONE_BADGE: Record<string, string> = {
  indigo: "teal",
  blue: "teal",
  navy: "teal",
};

export default function LegalPageHero({
  badge,
  title,
  description,
  lastUpdatedLabel,
  lastUpdatedDate,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Top-right glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{ insetInlineEnd: -100, top: -81, width: 440, height: 440 }}
      >
        <div className="absolute" style={{ inset: "-50.91%" }}>
          <svg
            viewBox="0 0 840 840"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%", overflow: "visible" }}
          >
            <g filter="url(#legal-hero-glow-tr)">
              <circle cx="420" cy="420" r="220" fill="#4C4BE0" fillOpacity="0.12" />
            </g>
            <defs>
              <filter
                id="legal-hero-glow-tr"
                x="0"
                y="0"
                width="840"
                height="840"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Bottom-left glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{ insetInlineStart: -78, bottom: -140, width: 440, height: 440 }}
      >
        <div className="absolute" style={{ inset: "-50.91%" }}>
          <svg
            viewBox="0 0 840 840"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%", overflow: "visible" }}
          >
            <g filter="url(#legal-hero-glow-bl)">
              <circle cx="420" cy="420" r="220" fill="#0098DF" fillOpacity="0.1" />
            </g>
            <defs>
              <filter
                id="legal-hero-glow-bl"
                x="0"
                y="0"
                width="840"
                height="840"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-5 py-[64px] text-center sm:px-10 md:gap-8 md:py-[96px] xl:px-20">
        <Badge
          variant="teal"
          className="px-4 py-1.5 text-sm font-semibold tracking-wide"
        >
          {badge}
        </Badge>

        <h1
          className="max-w-[900px] leading-tight sm:leading-[1.15]"
          style={{
            fontWeight: 700,
            fontSize: "clamp(2rem, 5vw, 56px)",
            color: "#0d0d0d",
          }}
        >
          {title}
        </h1>

        <p
          className="mx-auto max-w-[720px]"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 22px)",
            lineHeight: "clamp(28px, 4vw, 40px)",
            color: "#636363",
          }}
        >
          {description}
        </p>

        <div className="mt-2 flex items-center gap-3 rounded-full border border-black/5 bg-[#F8F8F8] px-5 py-3">
          <CalendarClock className="h-5 w-5 shrink-0 text-[#4C4BE0]" aria-hidden="true" />
          <span className="text-sm text-[#808080] sm:text-base">{lastUpdatedLabel}</span>
          <span className="h-4 w-px bg-black/10" aria-hidden="true" />
          <span className="text-sm font-semibold text-[#0d0d0d] sm:text-base">
            {lastUpdatedDate}
          </span>
        </div>
      </div>
    </section>
  );
}
