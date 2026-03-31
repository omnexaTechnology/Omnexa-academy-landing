"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const ASSETS = {
  stars: "/assets/stars.svg",
  whatsapp: "/assets/whatsapp.svg",
  bg: "/assets/contact-bg.svg",
};

function WhatsAppIcon() {
  return (
    <Image
      src={ASSETS.whatsapp}
      alt=""
      aria-hidden="true"
      width={32}
      height={32}
      style={{ display: "block", width: 32, height: 32 }}
    />
  );
}

export default function ContactSection() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section
      id="contact"
      className="w-full px-5 py-[80px] md:px-10 md:py-[120px]"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Gradient card */}
      <div
        className="relative mx-auto w-full max-w-[1080px] md:max-w-[1200px] lg:max-w-[1400px] xl:max-w-[1600px] overflow-hidden rounded-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, #4C4BE0 0%, #3B3AAD 50%, #29297A 100%)",
          padding: "64px 40px",
        }}
      >
        {/* Gradient background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, #4C4BE0 0%, #3B3AAD 50%, #29297A 100%)",
          }}
        />

        {/* SVG background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src={ASSETS.bg}
            alt=""
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative flex items-center justify-center">
          <div
            className="pointer-events-none hidden md:block"
            style={{
              [isRtl ? "right" : "left"]: "-60px",
              top: "10%",
            }}
          >
            <Image
              alt=""
              src={ASSETS.stars}
              width={60}
              height={60}
              className="opacity-90"
            />
          </div>
          {/* Heading */}
          <h2
            className="capitalize text-center text-white"
            style={{
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: "1.4",
            }}
          >
            {t("heading")}
          </h2>
        </div>
        {/* Stars decoration — absolutely positioned */}

        {/* Content */}
        <div
          className="relative flex flex-col items-center"
          style={{ gap: 40 }}
        >
          {/* Description */}
          <p
            className="mx-auto max-w-[800px] text-center"
            style={{
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 2.5vw, 24px)",
              lineHeight: "48px",
              color: "#DDDDDD",
            }}
          >
            {t("descriptionPart1")}
            <span style={{ fontWeight: 600, color: "#FFFFFF" }}>
              {t("descriptionHighlight")}
            </span>
            {t("descriptionPart2")}
          </p>

          {/* WhatsApp CTA button */}
          <a
            href={t("whatsappUrl")}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center whitespace-nowrap ${
              isRtl ? "flex-row-reverse" : "flex-row"
            }`}
            style={{
              backgroundColor: "#25d366",
              borderRadius: 40,
              height: 80,
              paddingLeft: 24,
              paddingRight: 24,
              gap: 8,
              textDecoration: "none",
            }}
          >
            <WhatsAppIcon />
            <span
              style={{
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(16px, 2.5vw, 24px)",
                lineHeight: "48px",
                color: "#FFFFFF",
              }}
            >
              {t("buttonText")}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
