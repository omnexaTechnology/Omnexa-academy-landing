"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight, ArrowLeft, Shield } from "lucide-react";

interface Section {
  heading: string;
  body: string;
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: Section[];
}

export default function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
}: LegalPageProps) {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const BackArrow = isRtl ? ArrowRight : ArrowLeft;

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(160deg, #f8f7ff 0%, #eef0ff 100%)" }}
    >
      {/* Hero Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1b1a4e 0%, #4c4be0 100%)",
        }}
        className="relative overflow-hidden pt-24 pb-16 px-5 md:px-10 lg:px-20"
      >
        {/* Decorative orbs */}
        <div
          className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #7b7bf5 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-10 h-40 w-40 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #0098df 0%, transparent 70%)" }}
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Back link */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
          >
            <BackArrow className="h-4 w-4" />
            {isRtl ? "العودة للرئيسية" : "Back to Home"}
          </Link>

          {/* Icon + Title */}
          <div className="flex items-center gap-4 mb-4">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <Shield className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {title}
            </h1>
          </div>

          <p className="text-white/60 text-sm">{lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-5 py-14 md:px-10">
        {/* Intro card */}
        <div
          className="mb-10 rounded-2xl border border-indigo-100 p-6 md:p-8"
          style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)" }}
        >
          <p className="text-base leading-8 text-gray-700 md:text-lg">{intro}</p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-6">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-indigo-50 p-6 md:p-8 transition-shadow hover:shadow-md"
              style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)" }}
            >
              <div className="flex items-start gap-4">
                {/* Section number pill */}
                <span
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #4c4be0 0%, #0098df 100%)",
                  }}
                >
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <h2 className="mb-3 text-lg font-semibold text-[#1b1a4e] md:text-xl">
                    {section.heading}
                  </h2>
                  <p className="text-base leading-8 text-gray-600">{section.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 rounded-2xl border border-indigo-100 p-6 text-center"
          style={{ background: "rgba(255,255,255,0.7)" }}
        >
          <p className="text-sm text-gray-500">
            {isRtl
              ? "للتواصل معنا بأي استفسار: "
              : "For any inquiries, contact us: "}
            <a
              href="mailto:info@omnexa.com"
              className="font-medium text-indigo-600 hover:underline"
            >
              info@omnexa.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
