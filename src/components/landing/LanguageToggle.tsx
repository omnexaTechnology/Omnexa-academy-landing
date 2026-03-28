"use client";

import { useLocale } from "next-intl";

export function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();

  const toggle = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=${365 * 24 * 60 * 60}`;
    window.location.reload();
  };

  return (
    <button
      onClick={toggle}
      className={`text-sm font-medium transition-colors hover:text-[#006A67] ${className ?? ""}`}
      aria-label="Toggle language"
    >
      {locale === "en" ? "العربية" : "English"}
    </button>
  );
}
