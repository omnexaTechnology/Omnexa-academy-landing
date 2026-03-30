"use client";

import { useTranslations, useLocale } from "next-intl";

// Figma Dev Mode asset URLs (localhost:3845 — replace with CDN URLs in production)
const ASSETS = {
  stars:
    "http://localhost:3845/assets/a53d3314b407a80cecfbfb2fd64396dc5d4e52c9.svg",
  whatsapp:
    "http://localhost:3845/assets/0d6318b92e1c044f4138525e2ecf897ca86ff1fa.svg",
};

function WhatsAppIcon() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
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
      className="w-full px-5 py-[80px] md:px-10 md:py-[120px]"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Gradient card */}
      <div
        className="relative mx-auto max-w-[1080px] overflow-hidden rounded-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, #4C4BE0 0%, #3B3AAD 50%, #29297A 100%)",
          padding: "64px 40px",
        }}
      >
        {/* Stars decoration — absolutely positioned */}
        <div
          className="pointer-events-none absolute hidden md:block"
          style={{
            [isRtl ? "right" : "left"]: 307,
            top: -47,
            width: 78,
            height: 78,
            transform: "rotate(-160.45deg) scaleY(-1)",
          }}
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={ASSETS.stars}
            className="block size-full"
          />
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-center" style={{ gap: 40 }}>
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
