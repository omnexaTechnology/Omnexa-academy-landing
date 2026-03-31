"use client";

import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { SIGNUP_URL } from "@/lib/constants";

const ASSETS = {
  ellipsePurple: "/assets/joining-ellipse-purple.svg",
  ellipseBlue: "/assets/joining-ellipse-blue.svg",
  bgDecoration: "/assets/joining-bg-decoration.svg",
  cardDecoration: "/assets/joining-card-decoration.svg",
  stars: "/assets/stars.svg",
};

// ── Step card ─────────────────────────────────────────────────────────────────

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

function StepCard({
  number,
  title,
  description,
}: StepCardProps) {
  const [highlighted, setHighlighted] = React.useState(false);

  return (
    <div
      className="relative flex flex-col gap-[40px] items-center text-center px-[16px] py-[40px] rounded-[16px] cursor-pointer transition-all duration-300"
      onMouseEnter={() => setHighlighted(true)}
      onMouseLeave={() => setHighlighted(false)}
      style={
        highlighted
          ? {
            background:
              "linear-gradient(270deg, #0098df 0%, #00354e 91.85%)",
          }
          : {}
      }
    >
      {/* Card background decoration (highlighted card only) */}
      {highlighted && (
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{ inset: "33.54% 14.36% 33.47% 14.36%" }}
        >
          <Image
            alt=""
            fill
            src={ASSETS.cardDecoration}
            className="absolute block size-full max-w-none"
          />
        </div>
      )}

      {/* Step number icon */}
      <div className="relative size-[64px] shrink-0">
        {/* Gradient circle */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-full"
          style={{
            background: highlighted
              ? "linear-gradient(180deg, #0098df 0%, #ffffff 100%)"
              : "linear-gradient(180deg, #4c4be0 0%, #0098df 100%)",
          }}
        >
          <span
            style={{
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "28px",
              color: "white",
            }}
          >
            {number}
          </span>
        </div>
        {/* Dashed ring */}
        <div
          aria-hidden
          className="pointer-events-none absolute opacity-80"
          style={{ width: 80, height: 80, left: -8, top: -8 }}
        >
          <Image
            alt=""
            width={80}
            height={80}
            src={highlighted ? ASSETS.ellipseBlue : ASSETS.ellipsePurple}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-col gap-[32px] items-center w-full">
        <p
          style={{
            fontFamily: "IBM Plex Sans Arabic, sans-serif",
            fontWeight: 600,
            fontSize: 24,
            lineHeight: "48px",
            color: highlighted ? "#ffffff" : "#0d0d0d",
            width: "100%",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: "IBM Plex Sans Arabic, sans-serif",
            fontWeight: 400,
            fontSize: 20,
            lineHeight: "36px",
            color: highlighted ? "#dddddd" : "#808080",
            width: "100%",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────

export default function JoiningOmnexaSection() {
  const t = useTranslations("joiningOmnexa");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const steps = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
  ];

  return (
    <section
      id="how-to-join"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #f8f8f8 0%, rgba(248,248,248,0) 100%)",
      }}
    >
      {/* ── Stars decoration ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[64px] flex items-center justify-center"
        style={{
          [isRtl ? "right" : "left"]: 26,
          width: 77.9,
          height: 77.9,
        }}
      >
        <div
          style={{
            transform: "scaleY(-1) rotate(-160.45deg)",
            width: 61,
            height: 61,
          }}
        >
          <Image alt="" src={ASSETS.stars} width={61} height={61} />
        </div>
      </div>

      {/* ── Main content ── */}
      <div
        className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-12 px-5 py-[80px] md:gap-16 md:px-10 md:py-[100px] lg:gap-[80px] lg:px-20 lg:py-[120px]"
      >
        {/* ── Header row ── */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-14">
          {/* Background watermark decoration */}
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{
              top: "-28.19%",
              right: isRtl ? "0" : "78.13%",
              left: isRtl ? "78.13%" : "0",
              bottom: "67.83%",
            }}
          >
            <Image 
              alt=""
              fill
              src={ASSETS.bgDecoration}
              className="absolute block size-full max-w-none"
              style={{ transform: isRtl ? "scaleX(-1)" : undefined }}
            />
          </div>

          {/* Heading + subtitle */}
          <div
            className="relative z-10 flex flex-col gap-[56px]"
            style={{ maxWidth: 767 }}
          >
            <h2
              className="capitalize"
              style={{
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(2rem, 3.5vw, 48px)",
                lineHeight: "100%",
                color: "#0d0d0d",
                margin: 0,
              }}
            >
              <span style={{ color: "#3938a8" }}>{t("headingHighlight")}</span>
              {t("headingNormal")}
            </h2>

            <p
              style={{
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(1rem, 1.8vw, 24px)",
                lineHeight: "48px",
                color: "#808080",
                margin: 0,
              }}
            >
              {t("subtitlePrefix")}
              <span style={{ color: "#0098df", fontWeight: 600 }}>
                {t("subtitleHighlight1")}
              </span>
              {t("subtitleMiddle")}
              <span style={{ color: "#0098df", fontWeight: 600 }}>
                {t("subtitleHighlight2")}
              </span>
              {t("subtitleSuffix")}
            </p>
          </div>

          {/* CTA button */}
          <a
            href={SIGNUP_URL}
            className="relative z-10 shrink-0 inline-flex items-center justify-center transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(90deg, #4c4be0 0%, #0098df 100%)",
              borderRadius: 40,
              minHeight: 56,
              padding: "10px 24px",
              color: "white",
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontSize: "clamp(1rem, 1.8vw, 24px)",
              fontWeight: 600,
              lineHeight: "1.5",
              textDecoration: "none",
              whiteSpace: "nowrap",
              boxShadow: "0 8px 32px rgba(76,75,224,0.25)",
            }}
          >
            {t("cta")}
          </a>
        </div>

        {/* ── Steps grid ── */}

        {/* Desktop (xl+): 4-column zigzag */}
        <div className="hidden xl:flex items-start gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flex-1"
              style={{ marginTop: i % 2 === 1 ? 140 : 0 }}
            >
              <StepCard
                number={step.number}
                title={t(`step${step.number}.title`)}
                description={t(`step${step.number}.description`)}
              />
            </div>
          ))}
        </div>

        {/* Mobile / Tablet: 1 col on mobile, 2 cols on md */}
        <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={i % 2 === 1 ? "md:mt-[80px]" : ""}
            >
              <StepCard
                number={step.number}
                title={t(`step${step.number}.title`)}
                description={t(`step${step.number}.description`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
