import { useTranslations } from "next-intl";
import { SIGNUP_URL } from "@/lib/constants";

function StarShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 51 49" fill="currentColor" className={className}>
      <path d="M25.5 0L31.5 18.4H51L36.2 29.8L42.2 48.2L25.5 37.5L8.8 48.2L14.8 29.8L0 18.4H19.5L25.5 0Z" />
    </svg>
  );
}

// Placeholder silhouette for where real images will go
function PersonSilhouette({ tint }: { tint: string }) {
  return (
    <svg viewBox="0 0 160 280" className="h-full w-full" fill="currentColor">
      <ellipse cx="80" cy="72" rx="42" ry="48" className={tint} opacity="0.25" />
      <path
        d="M10 280 C10 160 150 160 150 280"
        className={tint}
        opacity="0.20"
      />
    </svg>
  );
}

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#080C1A] pb-0 pt-16 md:pt-20"
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(109,93,255,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        {/* ── Text block ── */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline + stars */}
          <div className="relative inline-block">
            {/* Stars — positioned at the end (right in LTR, left in RTL) */}
            <span className="absolute -top-5 end-0 flex flex-col items-end gap-0.5 text-yellow-400">
              <StarShape className="h-7 w-7 drop-shadow-[0_0_6px_rgba(250,204,21,0.7)]" />
              <StarShape className="h-4 w-4 me-4 drop-shadow-[0_0_4px_rgba(250,204,21,0.6)]" />
            </span>

            <h1 className="pe-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {t("headlinePart1")}{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #6C63FF 0%, #A855F7 50%, #C084FC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t("headlinePart2")}
              </span>
            </h1>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
            {t("description")}
          </p>

          {/* CTA */}
          <div className="mt-10">
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
              style={{
                background:
                  "linear-gradient(90deg, #4F6EFF 0%, #7C3AED 60%, #9333EA 100%)",
                boxShadow: "0 8px 32px rgba(124,58,237,0.35)",
              }}
            >
              {t("cta")}
            </a>
          </div>
        </div>

        {/* ── People section ── */}
        <div className="relative mt-14 flex items-end justify-center gap-2 sm:gap-3 md:gap-5">
          {/* Person 1 — Arab man (teal/turquoise oval) */}
          <div
            className="relative h-56 w-36 flex-shrink-0 overflow-hidden rounded-[60px] sm:h-64 sm:w-40 md:h-80 md:w-52"
            style={{ background: "linear-gradient(160deg,#00D8CE 0%,#009B97 100%)" }}
          >
            {/* Replace the div below with <Image> once photos are ready */}
            <div className="absolute inset-0 flex items-end justify-center">
              <PersonSilhouette tint="fill-white" />
            </div>
          </div>

          {/* Person 2 — Woman in hijab (warm beige oval) */}
          <div
            className="relative h-64 w-40 flex-shrink-0 overflow-hidden rounded-[60px] sm:h-72 sm:w-44 md:h-96 md:w-56"
            style={{ background: "linear-gradient(160deg,#F0E9D8 0%,#E0D5BF 100%)" }}
          >
            <div className="absolute inset-0 flex items-end justify-center">
              <PersonSilhouette tint="fill-stone-400" />
            </div>
          </div>

          {/* Centre — speech bubble + small avatar */}
          <div className="mb-8 flex flex-col items-center gap-3 sm:mb-14">
            {/* Speech bubble card */}
            <div
              className="relative w-40 rounded-2xl border border-white/10 p-3.5 text-center text-sm leading-relaxed text-white sm:w-48 md:w-56"
              style={{ background: "rgba(20,24,40,0.92)", backdropFilter: "blur(8px)" }}
            >
              {t("speechBubble")}
              {/* Pointer — aligns to start (right in RTL) */}
              <span
                className="absolute -bottom-[7px] start-1/4 block h-3.5 w-3.5 rotate-45 border-b border-e border-white/10"
                style={{ background: "rgba(20,24,40,0.92)" }}
              />
            </div>

            {/* Small round avatar */}
            <div
              className="h-14 w-14 overflow-hidden rounded-full border-2 border-white/20 sm:h-16 sm:w-16"
              style={{ background: "linear-gradient(135deg,#2A3252 0%,#1E2540 100%)" }}
            >
              <svg
                viewBox="0 0 40 40"
                className="h-full w-full"
                fill="currentColor"
              >
                <circle cx="20" cy="14" r="7" className="fill-white/25" />
                <path
                  d="M4 40 C4 26 36 26 36 40"
                  className="fill-white/20"
                />
              </svg>
            </div>
          </div>

          {/* Person 3 — Business woman (cream oval) */}
          <div
            className="relative h-64 w-40 flex-shrink-0 overflow-hidden rounded-[60px] sm:h-72 sm:w-44 md:h-96 md:w-56"
            style={{ background: "linear-gradient(160deg,#F5EDE0 0%,#EADec8 100%)" }}
          >
            <div className="absolute inset-0 flex items-end justify-center">
              <PersonSilhouette tint="fill-stone-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
