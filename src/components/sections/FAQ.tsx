"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

const ASSETS = {
  stars: "/assets/stars.svg",
};

const FAQ_KEYS = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"] as const;

// Plus icon — white variant (for open/active item header)
function PlusIconWhite() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 6.667v18.666M6.667 16h18.666"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Plus icon — blue variant (for closed items)
function PlusIconBlue() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 6.667v18.666M6.667 16h18.666"
        stroke="#4C4BE0"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  isRtl: boolean;
}

function FAQItem({ question, answer, isOpen, onToggle, isRtl }: FAQItemProps) {
  if (isOpen) {
    return (
      <div
        className="w-full h-fit flex flex-col overflow-hidden rounded-2xl bg-white"
        style={{ flex: "1 0 0" }}
      >
        {/* Open header — blue */}
        <button
          onClick={onToggle}
          className="flex w-full items-start justify-between rounded-t-2xl px-4 py-5 md:px-6 md:py-6 text-left"
          style={{ backgroundColor: "#4C4BE0" }}
          aria-expanded={true}
        >
          <span
            className="flex-1 text-base md:text-lg lg:text-xl leading-snug text-white"
            style={{
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontWeight: 600,
              textAlign: isRtl ? "right" : "left",
            }}
          >
            {question}
          </span>
          <span className={`shrink-0 ${isRtl ? "mr-4" : "ml-4"}`}>
            <PlusIconWhite />
          </span>
        </button>
        {/* Answer body */}
        <div className="px-4 md:px-6 pb-6 pt-2 text-sm md:text-base lg:text-lg leading-relaxed text-gray-500">
          <p
            style={{
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontWeight: 400,
              color: "#808080",
              textAlign: isRtl ? "right" : "left",
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={onToggle}
      className="w-full h-fit flex items-center justify-between rounded-2xl bg-white px-4 py-5 md:px-6 md:py-6 text-left"
      style={{ flex: "1 0 0" }}
      aria-expanded={false}
    >
      <span
        className="flex-1 text-base md:text-lg lg:text-xl leading-snug"
        style={{
          fontFamily: "IBM Plex Sans Arabic, sans-serif",
          fontWeight: 600,
          color: "#4C4C4C",
          textAlign: isRtl ? "right" : "left",
        }}
      >
        {question}
      </span>
      <span className={`shrink-0 ${isRtl ? "mr-4" : "ml-4"}`}>
        <PlusIconBlue />
      </span>
    </button>
  );
}

export default function FAQSection() {
  const t = useTranslations("faq");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden px-5 py-[80px] md:px-10 md:py-[120px]"
      style={{
        background:
          "linear-gradient(to bottom, rgba(248,248,248,0.12) 0%, rgba(0,152,223,0) 100%)",
      }}
    >
      {/* Stars decoration */}
      <div
        className="pointer-events-none absolute"
        style={{
          left: isRtl ? "auto" : 220,
          right: isRtl ? 220 : "auto",
          top: 64,
          width: 78,
          height: 78,
          transform: "rotate(-160.45deg) scaleY(-1)",
        }}
        aria-hidden="true"
      >
        <Image
          alt=""
          src={ASSETS.stars}
          width={78}
          height={78}
          className="block size-full"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-[80px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-14 text-center">
          <h2
            className="capitalize"
            style={{
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: "1.1",
              color: "#0d0d0d",
            }}
          >
            {t("titlePart1")}
            <span style={{ color: "#3938A8" }}>{t("titleHighlight")}</span>
          </h2>
          <p
            className="mx-auto max-w-[1024px]"
            style={{
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(16px, 2.5vw, 24px)",
              lineHeight: "48px",
              color: "#808080",
            }}
          >
            {t("subtitle")}
          </p>
        </div>

        {/* FAQ grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {FAQ_KEYS.map((key, index) => (
              <FAQItem
                key={key}
                question={t(`items.${key}.question`)}
                answer={t(`items.${key}.answer`)}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                isRtl={isRtl}
              />
            ))}

        </div>
      </div>
    </section>
  );
}
