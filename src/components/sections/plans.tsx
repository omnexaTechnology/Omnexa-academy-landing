"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { SIGNUP_URL } from "@/lib/constants";

const ASSETS = {
  ellipseRight: "/assets/plans-ellipse-right.svg",
  ellipseLeft: "/assets/plans-ellipse-left.svg",
  bgDecoration: "/assets/plans-bg-decoration.svg",
  stars: "/assets/stars.svg",
  cardBgDark: "/assets/plans-card-bg-dark.svg",
  checkIcon: "/assets/plans-check-icon.svg",
  cardBgHighlight: "/assets/plans-card-bg-highlight.svg",
};

// ── Feature row ───────────────────────────────────────────────────────────────

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-[8px] w-full">
      <div className="relative shrink-0" style={{ width: 18.457, height: 18.457 }}>
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
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </p>
    </div>
  );
}

// ── Dark plan card (left / right) ─────────────────────────────────────────────

interface DarkCardProps {
  name: string;
  price: string;
  perMonth: string;
  features: string[];
  cta: string;
}

function DarkCard({ name, price, perMonth, features, cta }: DarkCardProps) {
  return (
    <div
      className="relative flex flex-1 flex-col items-center gap-[40px] overflow-hidden px-[24px] py-[32px] rounded-[24px] min-w-0"
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
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </p>
        </div>

        {/* Price */}
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
            {perMonth}
          </span>
        </p>

        {/* Features */}
        <div className="flex flex-col gap-[32px] items-start w-full">
          {features.map((feature, i) => (
            <FeatureItem key={i} text={feature} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href={SIGNUP_URL}
        className="relative z-10 flex items-center justify-center w-full rounded-[40px] transition-opacity hover:opacity-90"
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
            fontSize: 24,
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
  price: string;
  perMonth: string;
  features: string[];
  cta: string;
}

function HighlightCard({
  name,
  price,
  perMonth,
  features,
  cta,
}: HighlightCardProps) {
  return (
    <div
      className="relative flex flex-1 flex-col items-center justify-between overflow-hidden px-[24px] py-[32px] rounded-[24px] min-w-0 lg:h-[640px]"
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
          className="flex items-center justify-center w-full px-[10px] py-[24px] rounded-[80px]"
          style={{ background: "#3938a8" }}
        >
          <p
            style={{
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontWeight: 600,
              fontSize: 24,
              lineHeight: "48px",
              color: "#ffffff",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </p>
        </div>

        {/* Price */}
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
            {perMonth}
          </span>
        </p>

        {/* Features */}
        <div className="flex flex-col gap-[32px] items-start w-full">
          {features.map((feature, i) => (
            <FeatureItem key={i} text={feature} />
          ))}
        </div>
      </div>

      {/* CTA — white with blue text */}
      <a
        href={SIGNUP_URL}
        className="relative z-10 mt-[40px] lg:mt-0 flex items-center justify-center w-full rounded-[40px] transition-opacity hover:opacity-90"
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
            fontSize: 24,
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

  const planKeys = ["starter", "pro", "enterprise"] as const;

  return (
    <section id="plans" className="relative overflow-hidden bg-white">
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
        style={{ left: -78, width: 840, height: 840, top: "calc(50% + 109.5px)", transform: "translateY(-50%)" }}
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

      {/* ── Stars decoration ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[64px] flex items-center justify-center"
        style={{
          [isRtl ? "right" : "left"]: 452,
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
        className="relative z-10 mx-auto max-w-[1440px] flex flex-col items-center"
        style={{ padding: "120px 80px", gap: 80 }}
      >
        {/* ── Header ── */}
        <div className="relative flex flex-col items-center justify-center gap-[56px] w-full">
          {/* Background title decoration */}
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{ inset: "-54.24% 40% 38.12% 38.13%" }}
          >
            <Image
              alt=""
              fill
              src={ASSETS.bgDecoration}
              className="absolute block size-full max-w-none"
            />
          </div>

          {/* Title + subtitle */}
          <div className="relative z-10 flex flex-col items-center gap-[56px] w-full">
            {/* H2 */}
            <h2
              className="text-center capitalize"
              style={{
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(2rem, 3.5vw, 48px)",
                lineHeight: "100%",
                color: "#0d0d0d",
                margin: 0,
              }}
            >
              <span>{t("title")}</span>
              <span style={{ color: "#3938a8" }}>{t("titleHighlight")}</span>
            </h2>

            {/* H3 subtitle */}
            <p
              className="text-center capitalize"
              style={{
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(1.5rem, 3vw, 40px)",
                lineHeight: "72px",
                color: "#636363",
                margin: 0,
              }}
            >
              {t("subtitle")}
            </p>
          </div>

          {/* Description */}
          <p
            className="relative z-10 text-center"
            style={{
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1rem, 1.8vw, 24px)",
              lineHeight: "48px",
              color: "#808080",
              maxWidth: 874,
              margin: 0,
            }}
          >
            {t("description")}
          </p>
        </div>

        {/* ── Plan cards ── */}
        <div className="flex flex-col lg:flex-row items-stretch gap-[24px] w-full max-w-[1280px]">
          {planKeys.map((key, index) => {
            const name = t(`${key}.name`);
            const price = t(`${key}.price`);
            const perMonth = t("perMonth");
            const cta = t("cta");
            const features = [
              t(`${key}.feature1`),
              t(`${key}.feature2`),
              t(`${key}.feature3`),
              t(`${key}.feature4`),
              t(`${key}.feature5`),
            ];

            if (index === 1) {
              return (
                <HighlightCard
                  key={key}
                  name={name}
                  price={price}
                  perMonth={perMonth}
                  features={features}
                  cta={cta}
                />
              );
            }
            return (
              <DarkCard
                key={key}
                name={name}
                price={price}
                perMonth={perMonth}
                features={features}
                cta={cta}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
