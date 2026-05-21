"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

// ── Sub-components ────────────────────────────────────────────────────────────

function ChevronLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Vertical timeline indicator — 3 steps, `active` is highlighted */
function VerticalTimeline({ active }: { active: number }) {
  const steps = [0, 1, 2];
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
      {steps.map((step, i) => (
        <div key={step} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* dot */}
          <div
            style={{
              width: step === active ? 16 : 10,
              height: step === active ? 16 : 10,
              borderRadius: "50%",
              background: step === active ? "#FFFFFF" : "rgba(255,255,255,0.3)",
              transition: "all 0.3s ease",
              flexShrink: 0,
            }}
          />
          {/* connector line (not after last dot) */}
          {i < steps.length - 1 && (
            <div
              style={{
                width: 2,
                height: 60,
                background:
                  step < active
                    ? "rgba(255,255,255,0.6)"
                    : "rgba(255,255,255,0.2)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/** Browser chrome wrapper around dashboard content */
function BrowserMockup() {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: "12.98px",
        overflow: "hidden",
        boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
      }}
    >
      {/* ── Browser chrome bar ── */}
      <div
        style={{
          background: "#1e1c2e",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        {/* Traffic-light dots */}
        <div style={{ display: "flex", gap: 6, alignItems: "center", flexShrink: 0 }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
        </div>
        {/* Nav arrows */}
        <div style={{ display: "flex", gap: 4, flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 11L5 7L9 3" stroke="#716D8E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 3L9 7L5 11" stroke="#716D8E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {/* URL bar */}
        <div
          style={{
            flex: 1,
            background: "rgba(113,109,142,0.2)",
            borderRadius: "6.5px",
            padding: "4px 12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Mulish, sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: "#B4B4B4",
            }}
          >
            you-omnexa-learn.com
          </span>
        </div>
        <div style={{ width: 48, flexShrink: 0 }} />
      </div>

      {/* ── Dashboard content ── */}
      <div
        style={{
          background: "#0f0e1a",
          padding: "20px 20px 0 20px",
        }}
      >
        {/* ── Stat cards ── */}
        <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Total Students", value: "1,234" },
            { label: "Total Views", value: "45,678" },
            { label: "Engagement", value: "8,901" },
            { label: "Revenue", value: "67,890" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                background: "#1b1a2e",
                borderRadius: 8,
                padding: "12px 14px",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: "#808080",
                  marginBottom: 6,
                  fontFamily: "IBM Plex Sans Arabic, sans-serif",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: "IBM Plex Sans Arabic, sans-serif",
                }}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* ── Area chart ── */}
        <div
          style={{
            background: "#1b1a2e",
            borderRadius: 8,
            padding: "12px 14px",
            marginBottom: 16,
            border: "1px solid rgba(255,255,255,0.07)",
            height: 110,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ fontSize: 10, color: "#808080", marginBottom: 8, fontFamily: "IBM Plex Sans Arabic, sans-serif" }}>
            Enrollment Trend
          </div>
          <svg
            width="100%"
            height="72"
            viewBox="0 0 560 72"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4C4BE0" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#4C4BE0" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,68 C40,58 80,14 130,22 C180,30 210,8 260,12 C310,16 350,44 400,30 C450,16 500,26 560,20 L560,72 L0,72 Z"
              fill="url(#chart-fill)"
            />
            <path
              d="M0,68 C40,58 80,14 130,22 C180,30 210,8 260,12 C310,16 350,44 400,30 C450,16 500,26 560,20"
              stroke="#4C4BE0"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* ── Data table ── */}
        <div
          style={{
            background: "#1b1a2e",
            borderRadius: "8px 8px 0 0",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
            borderBottom: "none",
          }}
        >
          {/* Table header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 2fr 1fr 1fr 1.2fr 1.2fr",
              padding: "8px 14px",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            {["Name", "Email", "Status", "Type", "Created At", "Updated At"].map((h) => (
              <span
                key={h}
                style={{
                  fontSize: 9,
                  color: "#808080",
                  fontFamily: "IBM Plex Sans Arabic, sans-serif",
                  fontWeight: 600,
                }}
              >
                {h}
              </span>
            ))}
          </div>
          {/* Table rows */}
          {[
            { name: "Mahmoud E.", email: "mahmoud@mail.com", status: "Active", type: "Premium", created: "2024-01-10", updated: "2024-03-12" },
            { name: "Mohamed O.", email: "mohamed@mail.com", status: "Inactive", type: "Basic", created: "2024-01-14", updated: "2024-02-28" },
            { name: "Heba H.", email: "heba@mail.com", status: "Active", type: "Premium", created: "2024-02-03", updated: "2024-03-15" },
          ].map((row, i, arr) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 2fr 1fr 1fr 1.2fr 1.2fr",
                padding: "9px 14px",
                borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 9, color: "#fff", fontFamily: "IBM Plex Sans Arabic, sans-serif" }}>{row.name}</span>
              <span style={{ fontSize: 9, color: "#808080", fontFamily: "IBM Plex Sans Arabic, sans-serif" }}>{row.email}</span>
              <span>
                <span
                  style={{
                    fontSize: 8,
                    fontFamily: "IBM Plex Sans Arabic, sans-serif",
                    color: row.status === "Active" ? "#4C4BE0" : "#FF5F57",
                    background: row.status === "Active" ? "rgba(76,75,224,0.18)" : "rgba(255,95,87,0.18)",
                    borderRadius: 4,
                    padding: "2px 7px",
                    fontWeight: 600,
                  }}
                >
                  {row.status}
                </span>
              </span>
              <span style={{ fontSize: 9, color: "#808080", fontFamily: "IBM Plex Sans Arabic, sans-serif" }}>{row.type}</span>
              <span style={{ fontSize: 9, color: "#808080", fontFamily: "IBM Plex Sans Arabic, sans-serif" }}>{row.created}</span>
              <span style={{ fontSize: 9, color: "#808080", fontFamily: "IBM Plex Sans Arabic, sans-serif" }}>{row.updated}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────

const SERVICES = ["service1", "service2", "service3"] as const;

export default function PlatformPreview() {
  const t = useTranslations("platformPreview");
  const [active, setActive] = useState(0);
  const isRtl = useLocale() === "ar";

  function prev() {
    setActive((a) => (a - 1 + SERVICES.length) % SERVICES.length);
  }
  function next() {
    setActive((a) => (a + 1) % SERVICES.length);
  }

  const serviceKey = SERVICES[active];
  const serviceTitle = t(`${serviceKey}Title`);
  const serviceDesc = t(`${serviceKey}Description`);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white"
    >
      {/* ── Main content ── */}
      <div
        className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center gap-10 px-5 py-[80px] md:gap-14 md:px-10 md:py-[100px] lg:gap-16 lg:px-20 lg:py-[120px]"
      >
        {/* ── Header ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            position: "relative",
          }}
        >
          {/* Decorative background arc */}
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{ top: -40, left: "50%", transform: "translateX(-50%)", width: 560, height: 120, zIndex: 0 }}
          >
            <svg viewBox="0 0 560 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", overflow: "visible" }}>
              <g filter="url(#services-arc-blur)">
                <ellipse cx="280" cy="60" rx="200" ry="30" fill="#4C4BE0" fillOpacity="0.12" />
              </g>
              <defs>
                <filter id="services-arc-blur" x="-60%" y="-200%" width="220%" height="500%" colorInterpolationFilters="sRGB">
                  <feGaussianBlur stdDeviation="24" />
                </filter>
              </defs>
            </svg>
          </div>

          <h2
            className="relative z-10 text-center"
            style={{
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(2rem, 3.5vw, 48px)",
              lineHeight: "100%",
              margin: 0,
              textTransform: "capitalize",
            }}
          >
            <span style={{ color: "#3938A8" }}>{t("sectionTitle1")}</span>
            <span style={{ color: "#0D0D0D" }}>{t("sectionTitle2")}</span>
          </h2>

          <p
            className="relative z-10 text-center"
            style={{
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1rem, 1.8vw, 24px)",
              lineHeight: "48px",
              color: "#808080",
              maxWidth: 832,
              margin: 0,
            }}
          >
            {t("sectionSubtitle")}
          </p>
        </div>

        {/* ── Main card ── */}
        <div
          className="flex w-full flex-col gap-8 overflow-hidden px-5 py-8 md:gap-10 md:px-10 md:py-10 lg:gap-12 lg:px-16 lg:py-16"
          style={{
            background: "linear-gradient(180deg, #4C4BE0 0%, #1B1A4E 100%)",
            borderRadius: 32,
          }}
        >
          {/* Background glow ellipse */}
          <div
            aria-hidden
            className="pointer-events-none absolute"
            style={{
              width: 1024,
              height: 1024,
              borderRadius: "50%",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, rgba(76,75,224,0.25) 0%, rgba(27,26,78,0) 70%)",
              zIndex: 0,
            }}
          />

          {/* ── Content row ── */}
          <div
            className="relative z-10 flex flex-col gap-8 md:flex-row md:items-start md:gap-10"
          >
            {/* Left: timeline + service name */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 24,
                flexShrink: 0,
                alignItems: "flex-start",
              }}
            >
              <VerticalTimeline active={active} />
              <h3
                style={{
                  fontFamily: "IBM Plex Sans Arabic, sans-serif",
                  fontWeight: 600,
                  fontSize: 32,
                  lineHeight: "64px",
                  color: "#FFFFFF",
                  margin: 0,
                  textTransform: "capitalize",
                  width: 215,
                }}
              >
                {serviceTitle}
              </h3>
            </div>

            {/* Right: description + browser mockup */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 32, minWidth: 0 }}>
              <p
                style={{
                  fontFamily: "IBM Plex Sans Arabic, sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(1rem, 1.8vw, 24px)",
                  lineHeight: "48px",
                  color: "#DDDDDD",
                  margin: 0,
                  maxWidth: 809,
                }}
              >
                {serviceDesc}
              </p>
              <BrowserMockup />
            </div>
          </div>

          {/* ── Pagination ── */}
          <div
            className="relative z-10"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 24,
            }}
          >
            {/* Prev arrow */}
            <button
              onClick={prev}
              aria-label="Previous service"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
            >
              {isRtl ? <ChevronRight /> : <ChevronLeft />}
            </button>

            {/* Dots */}
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {SERVICES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Service ${i + 1}`}
                  style={{
                    width: i === active ? 28 : 10,
                    height: 10,
                    borderRadius: 5,
                    background: i === active ? "#FFFFFF" : "rgba(255,255,255,0.3)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            {/* Next arrow */}
            <button
              onClick={next}
              aria-label="Next service"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
            >
              {isRtl ? <ChevronLeft /> : <ChevronRight />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
