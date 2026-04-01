"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { SIGNUP_URL } from "@/lib/constants";

const ASSETS = {
  ellipseRight: "/assets/plans-ellipse-right.svg",
  ellipseLeft: "/assets/plans-ellipse-left.svg",
  bgDecoration: "/assets/plans-bg-decoration.svg",
  stars: "/assets/stars.svg",
  cardBgDark: "/assets/plans-card-bg-dark.svg",
  checkIcon: "/assets/plans-check-icon.svg",
  cardBgHighlight: "/assets/plans-card-bg-dark.svg",
};

type BillingPeriod = "monthly" | "annual";

// ── Feature row ───────────────────────────────────────────────────────────────

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-[8px] w-full">
      <div
        className="relative shrink-0"
        style={{ width: 18.457, height: 18.457 }}
      >
        <Image
          alt=""
          fill
          src={ASSETS.checkIcon}
          className="absolute block size-full max-w-none"
        />
      </div>
      <p
        style={{
          fontFamily: "IBM Plex Sans Arabic, sans-serif",
          fontWeight: 400,
          fontSize: 20,
          lineHeight: "36px",
          color: "#f8f8f8",
        }}
      >
        {text}
      </p>
    </div>
  );
}

// ── Section label (divider between base and extra features) ───────────────────

function SectionLabel({ text }: { text: string }) {
  return (
    <p
      style={{
        fontFamily: "IBM Plex Sans Arabic, sans-serif",
        fontWeight: 600,
        fontSize: 18,
        lineHeight: "32px",
        color: "#dddddd",
        width: "100%",
      }}
    >
      {text}
    </p>
  );
}

// ── Dark plan card (left / right) ─────────────────────────────────────────────

interface DarkCardProps {
  name: string;
  pricePrefix?: string;
  price: string;
  period: string;
  savingsNote?: string;
  isAnnual: boolean;
  features: Array<{ type: "check" | "label"; text: string }>;
  cta: string;
}

function DarkCard({
  name,
  pricePrefix,
  price,
  period,
  savingsNote,
  isAnnual,
  features,
  cta,
}: DarkCardProps) {
  return (
    <div
      className="relative flex flex-col lg:w-[23%] scale-95 opacity-90 h-full justify-between flex-1 items-center gap-[40px] overflow-hidden px-[24px] py-[32px] rounded-[24px] min-w-0 hover:scale-100 transition-all duration-300"
      style={{ background: "#1b1a4e" }}
    >
      {/* Card background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{ width: 411, height: 562, left: -0.33, top: -0.36 }}
      >
        <Image
          alt=""
          fill
          src={ASSETS.cardBgDark}
          className="absolute block size-full max-w-none"
        />
      </div>

      {/* Top content */}
      <div className="relative z-10 flex flex-col gap-[40px] items-center w-full">
        {/* Plan name badge */}
        <div
          className="flex items-center justify-center w-full px-[10px] py-[24px] rounded-[80px]"
          style={{ background: "#222265" }}
        >
          <p
            style={{
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontWeight: 600,
              fontSize: 24,
              lineHeight: "48px",
              color: "#ffffff",
            }}
          >
            {name}
          </p>
        </div>

        {/* Price */}
        <div className="flex flex-col items-center gap-[4px] w-full">
          {pricePrefix && (
            <p
              style={{
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "24px",
                color: "#dddddd",
              }}
            >
              {pricePrefix}
            </p>
          )}
          <p className="text-center w-full capitalize" style={{ lineHeight: "0" }}>
            <span
              style={{
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: 500,
                fontSize: 40,
                lineHeight: "72px",
                color: "#ffffff",
              }}
            >
              {price}{" "}
            </span>
            <span
              style={{
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: 400,
                fontSize: 24,
                lineHeight: "48px",
                color: "#dddddd",
              }}
            >
              {period}
            </span>
          </p>
          {isAnnual && savingsNote && (
            <p
              style={{
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "22px",
                color: "#a0cfff",
              }}
            >
              ({savingsNote})
            </p>
          )}
        </div>

        {/* Features */}
        <div className="flex flex-col gap-[24px] items-start w-full">
          {features.map((feature, i) =>
            feature.type === "label" ? (
              <SectionLabel key={i} text={feature.text} />
            ) : (
              <FeatureItem key={i} text={feature.text} />
            )
          )}
        </div>
      </div>

      {/* CTA */}
      <a
        href={SIGNUP_URL}
        className="relative z-10 mt-auto flex items-center justify-center w-full rounded-[40px] transition-opacity hover:opacity-90"
        style={{
          background: "linear-gradient(90deg, #4c4be0 0%, #0098df 100%)",
          height: 64,
          padding: "10px 24px",
          textDecoration: "none",
        }}
      >
        <p
          style={{
            fontFamily: "IBM Plex Sans Arabic, sans-serif",
            fontWeight: 600,
            fontSize: 20,
            lineHeight: "48px",
            color: "#ffffff",
            whiteSpace: "nowrap",
          }}
        >
          {cta}
        </p>
      </a>
    </div>
  );
}

// ── Highlighted plan card (center) ────────────────────────────────────────────

interface HighlightCardProps {
  name: string;
  badge?: string;
  price: string;
  period: string;
  savingsNote?: string;
  isAnnual: boolean;
  features: Array<{ type: "check" | "label"; text: string }>;
  cta: string;
}

function HighlightCard({
  name,
  badge,
  price,
  period,
  savingsNote,
  isAnnual,
  features,
  cta,
}: HighlightCardProps) {
  return (
    <div
      className="relative flex flex-col lg:w-[31%] scale-105 z-10 flex-1 h-full justify-between items-center overflow-hidden px-[24px] py-[32px] rounded-[24px] min-w-0 hover:scale-110 transition-all duration-300"
      style={{
        background: "linear-gradient(180deg, #4c4be0 0%, #0098df 100%)",
        border: "4px solid #ffffff",
        boxShadow: "0px 12px 40px 0px rgba(0,0,0,0.24)",
      }}
    >
      {/* Card background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{ width: 416.002, height: 637.779, left: -5.67, top: 0 }}
      >
        <Image
          alt=""
          fill
          src={ASSETS.cardBgHighlight}
          className="absolute block size-full max-w-none"
        />
      </div>

      {/* Top content */}
      <div className="relative z-10 flex flex-col gap-[40px] items-center w-full">
        {/* Plan name badge */}
        <div
          className="flex flex-col items-center justify-center w-full px-[10px] py-[16px] rounded-[80px]"
          style={{ background: "#3938a8" }}
        >
          <p
            style={{
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontWeight: 600,
              fontSize: 24,
              lineHeight: "48px",
              color: "#ffffff",
            }}
          >
            {name}
          </p>
          {badge && (
            <p
              style={{
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "20px",
                color: "#c0c0ff",
              }}
            >
              {badge}
            </p>
          )}
        </div>

        {/* Price */}
        <div className="flex flex-col items-center gap-[4px] w-full">
          <p className="text-center w-full capitalize" style={{ lineHeight: 0 }}>
            <span
              style={{
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: 500,
                fontSize: 40,
                lineHeight: "72px",
                color: "#ffffff",
              }}
            >
              {price}{" "}
            </span>
            <span
              style={{
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: 400,
                fontSize: 24,
                lineHeight: "48px",
                color: "#dddddd",
              }}
            >
              {period}
            </span>
          </p>
          {isAnnual && savingsNote && (
            <p
              style={{
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "22px",
                color: "#c0e0ff",
              }}
            >
              ({savingsNote})
            </p>
          )}
        </div>

        {/* Features */}
        <div className="flex flex-col gap-[24px] items-start w-full">
          {features.map((feature, i) =>
            feature.type === "label" ? (
              <SectionLabel key={i} text={feature.text} />
            ) : (
              <FeatureItem key={i} text={feature.text} />
            )
          )}
        </div>
      </div>

      {/* CTA — white with blue text */}
      <a
        href={SIGNUP_URL}
        className="relative z-10 mt-auto flex items-center justify-center w-full rounded-[40px] transition-opacity hover:opacity-90"
        style={{
          background: "#ffffff",
          height: 64,
          padding: "10px 24px",
          textDecoration: "none",
        }}
      >
        <p
          style={{
            fontFamily: "IBM Plex Sans Arabic, sans-serif",
            fontWeight: 600,
            fontSize: 20,
            lineHeight: "48px",
            color: "#4c4be0",
            whiteSpace: "nowrap",
          }}
        >
          {cta}
        </p>
      </a>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────

export default function PlansSection() {
  const t = useTranslations("plansSection");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  const isAnnual = billing === "annual";

  const planKeys = ["starter", "growth", "professional", "enterprise"] as const;

  function buildFeatures(
    key: (typeof planKeys)[number]
  ): Array<{ type: "check" | "label"; text: string }> {
    const streaming = isAnnual
      ? t(`${key}.streamingAnnual`)
      : t(`${key}.streamingMonthly`);

    const base: Array<{ type: "check" | "label"; text: string }> = [
      { type: "check", text: t(`${key}.feature1`) },
      { type: "check", text: t(`${key}.feature2`) },
      { type: "check", text: t(`${key}.feature3`) },
      { type: "check", text: streaming },
    ];

    // Section divider for plans that inherit from previous tier
    const hasSectionLabel =
      key === "growth" || key === "professional" || key === "enterprise";
    if (hasSectionLabel) {
      base.push({ type: "label", text: t(`${key}.sectionLabel`) });
    }

    // Extra features per plan
    const extraCount =
      key === "starter"
        ? 5
        : key === "growth"
        ? 6
        : key === "professional"
        ? 4
        : 4;

    for (let i = 5; i <= 4 + extraCount; i++) {
      base.push({ type: "check", text: t(`${key}.feature${i}`) });
    }

    return base;
  }

  return (
    <section
      id="plans"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #eef0ff 100%)",
      }}
    >
      {/* ── Right glow ellipse ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute hidden xl:block"
        style={{ right: 0, top: 109, width: 340, height: 340 }}
      >
        <div className="absolute" style={{ inset: "-65.88%" }}>
          <Image
            alt=""
            fill
            src={ASSETS.ellipseRight}
            className="block size-full max-w-none"
          />
        </div>
      </div>

      {/* ── Left glow ellipse ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute hidden xl:block"
        style={{
          left: -78,
          width: 840,
          height: 840,
          top: "calc(50% + 109.5px)",
          transform: "translateY(-50%)",
        }}
      >
        <div className="absolute" style={{ inset: "-26.67%" }}>
          <Image
            alt=""
            fill
            src={ASSETS.ellipseLeft}
            className="block size-full max-w-none"
          />
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-5 py-[80px] md:gap-16 md:px-10 md:py-[100px] lg:gap-[80px] lg:px-20 lg:py-[120px]">
        {/* ── Header ── */}
        <div className="relative flex flex-col items-center gap-6 w-full">
          {/* ── Title with background and side stars ── */}
          <div className="relative flex items-center justify-center w-full gap-4">
            {/* Background image behind the title */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none -z-10 scale-[1.7]">
              <Image
                alt=""
                src={ASSETS.bgDecoration}
                fill
                className="object-contain"
              />
            </div>

            {/* Stars decoration to the left */}
            <div aria-hidden style={{ width: 56, height: 56 }}>
              <Image alt="" src={ASSETS.stars} width={56} height={56} />
            </div>

            {/* Title */}
            <h2
              className="text-center relative z-10"
              style={{
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 48px)",
                lineHeight: "140%",
                color: "#0d0d0d",
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>{t("title")}</span>
              <span style={{ color: "#3938a8" }}>{t("titleHighlight")}</span>
            </h2>
          </div>

          {/* Main subtitle heading */}
          <p
            className="relative z-10 text-center"
            style={{
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(1rem, 2.5vw, 30px)",
              lineHeight: "130%",
              color: "#1a1a2e",
              maxWidth: 700,
              margin: 0,
            }}
          >
            {isAnnual ? t("subtitleAnnual") : t("subtitle")}
          </p>

          {/* Description */}
          <p
            className="relative z-10 text-center"
            style={{
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(0.875rem, 1.4vw, 18px)",
              lineHeight: "1.8",
              color: "#808080",
              maxWidth: 620,
              margin: 0,
            }}
          >
            {t("description")}
          </p>

          {/* ── Billing toggle ── */}
          <div
            className="relative flex items-center rounded-[40px] p-[4px]"
            style={{ background: "#e8e8f0", marginTop: 8 }}
          >
            {/* Sliding indicator */}
            <div
              className="absolute top-[4px] bottom-[4px] rounded-[36px] transition-all duration-300"
              style={{
                width: "calc(50% - 4px)",
                background: "linear-gradient(90deg, #4c4be0 0%, #0098df 100%)",
                left: isRtl
                  ? isAnnual
                    ? "4px"
                    : "calc(50%)"
                  : isAnnual
                  ? "calc(50%)"
                  : "4px",
              }}
            />
            <button
              onClick={() => setBilling("monthly")}
              className="relative z-10 rounded-[36px] transition-colors duration-300"
              style={{
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: 600,
                fontSize: 16,
                lineHeight: "28px",
                color: billing === "monthly" ? "#ffffff" : "#555577",
                padding: "8px 28px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                minWidth: 150,
              }}
            >
              {t("toggleMonthly")}
            </button>
            <button
              onClick={() => setBilling("annual")}
              className="relative z-10 rounded-[36px] transition-colors duration-300 flex items-center gap-[8px]"
              style={{
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: 600,
                fontSize: 16,
                lineHeight: "28px",
                color: billing === "annual" ? "#ffffff" : "#555577",
                padding: "8px 28px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                minWidth: 150,
              }}
            >
              {t("toggleAnnual")}
              <span
                style={{
                  fontFamily: "IBM Plex Sans Arabic, sans-serif",
                  fontWeight: 700,
                  fontSize: 11,
                  lineHeight: "16px",
                  color: billing === "annual" ? "#ffffff" : "#4c4be0",
                  background:
                    billing === "annual"
                      ? "rgba(255,255,255,0.25)"
                      : "#dde0ff",
                  borderRadius: 20,
                  padding: "2px 8px",
                  whiteSpace: "nowrap",
                }}
              >
                {t("savingsBadge")}
              </span>
            </button>
          </div>
        </div>

        {/* ── Plan cards ── */}
        <div className="flex flex-col lg:flex-row items-stretch gap-[24px] w-full max-w-[1400px]">
          {planKeys.map((key, index) => {
            const name = t(`${key}.name`);
            const price = isAnnual
              ? t(`${key}.priceAnnual`)
              : t(`${key}.priceMonthly`);
            const period = isAnnual ? t("perYear") : t("perMonth");
            const savingsNote = t(`${key}.savingsNote`);
            const cta = t("cta");
            const features = buildFeatures(key);

            // Enterprise has a "Starting from" prefix
            const pricePrefix =
              key === "enterprise" ? t("enterprise.pricePrefix") : undefined;

            // Growth (index 1) is the highlighted card
            if (index === 1) {
              const badge = t(`${key}.badge`);
              return (
                <HighlightCard
                  key={key}
                  name={name}
                  badge={badge}
                  price={price}
                  period={period}
                  savingsNote={savingsNote}
                  isAnnual={isAnnual}
                  features={features}
                  cta={cta}
                />
              );
            }

            return (
              <DarkCard
                key={key}
                name={name}
                pricePrefix={pricePrefix}
                price={price}
                period={period}
                savingsNote={savingsNote}
                isAnnual={isAnnual}
                features={features}
                cta={cta}
              />
            );
          })}
        </div>

        {/* ── Footer note ── */}
        <p
          className="text-center"
          style={{
            fontFamily: "IBM Plex Sans Arabic, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(0.75rem, 1.2vw, 16px)",
            lineHeight: "1.7",
            color: "#808080",
            maxWidth: 800,
            margin: 0,
          }}
        >
          {isAnnual ? t("footerNoteAnnual") : t("footerNote")}
        </p>
      </div>
    </section>
  );
}
