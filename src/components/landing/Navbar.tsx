"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SIGNUP_URL, SIGNIN_URL } from "@/lib/constants";

const flagSrcEn = "/images/en.svg";
const flagSrcAr = "/images/ar.svg";
const themIconSrc = "/images/660035fe26132c13cd2c856c8542e8f45225b432.svg";

const NAV_LINKS = [
  { href: "#hero", key: "home" as const, sectionId: "hero" },
  { href: "#about", key: "about" as const, sectionId: "about" },
  { href: "#plans", key: "plans" as const, sectionId: "plans" },
  { href: "#contact", key: "contact" as const, sectionId: "contact" },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Prefix anchor with "/" when not on home page so the browser navigates there first
  const navHref = (anchor: string) => (isHome ? anchor : `/${anchor}`);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_LINKS.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(sectionId);
        },
        { rootMargin: "-40% 0px -40% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=${365 * 24 * 60 * 60}`;
    window.location.reload();
  };

  // Dynamic logo based on locale
  const logoSrc = locale === "en" ? "/images/Logo-4-en.png" : "/images/Logo-9-ar.png";
  const flagSrc = locale === "en" ? flagSrcEn : flagSrcAr;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="flex items-center justify-between px-5 py-3 lg:px-10 xl:px-20">
        {/* Left: Logo + Nav */}
        <div className="flex flex-1 items-center gap-4 lg:gap-6 xl:gap-10">
          {/* Logo */}
          <a href={navHref("#hero")} className="shrink-0">
            <Image
              src={logoSrc}
              alt="Omnexa Learn"
              width={116}
              height={60}
              className="h-10 w-auto lg:h-[52px] xl:h-[60px]"
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden items-end gap-1 lg:flex xl:gap-2">
            {NAV_LINKS.map(({ href, key, sectionId }) => {
              const isActive = isHome && activeSection === sectionId;
              return (
                <a
                  key={href}
                  href={navHref(href)}
                  className={[
                    "whitespace-nowrap pb-4 px-2 lg:px-3 text-sm font-medium transition-colors lg:text-sm xl:text-base 2xl:text-xl",
                    isActive
                      ? "border-b-4 border-[#0098DF] font-semibold text-[#4C4BE0]"
                      : "text-[#636363] hover:text-[#4C4BE0]",
                  ].join(" ")}
                >
                  {t(key)}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Right: Language + Theme + Buttons */}
        <div className="hidden items-center gap-4 lg:flex lg:gap-4 xl:gap-8">
          {/* Language selector */}
          <div className="flex items-center gap-3 lg:gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-[#4C4C4C] transition-colors hover:text-[#4C4BE0]"
              aria-label="Toggle language"
            >
              <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full lg:h-8 lg:w-8">
                <Image
                  src={flagSrc}
                  alt="language flag"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-normal lg:text-sm xl:text-base 2xl:text-xl">
                {locale === "en" ? "English" : "العربية"}
              </span>
            </button>

            {/* Theme toggle */}
            {/* <button
              className="relative h-7 w-7 shrink-0 text-[#4C4C4C] transition-colors hover:text-[#4C4BE0] lg:h-8 lg:w-8"
              aria-label="Toggle theme"
            >
              <Image
                src={themIconSrc}
                alt="theme"
                fill
                className="object-contain"
              />
            </button> */}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 lg:gap-3 xl:gap-6">
            <a
              href={SIGNUP_URL}
              className="flex h-9 w-24 items-center justify-center rounded-full border-2 border-[#4C4BE0] text-xs font-normal text-[#4C4BE0] transition-colors hover:bg-[#4C4BE0]/5 lg:h-10 lg:w-28 lg:text-sm xl:h-12 xl:w-32 xl:text-base 2xl:h-16 2xl:w-[164px] 2xl:text-xl"
            >
              {t("signUp")}
            </a>
            <a
              href={SIGNIN_URL}
              className="flex h-9 items-center justify-center rounded-full bg-gradient-to-r from-[#0098DF] to-[#4C4BE0] px-4 text-xs font-semibold text-white transition-opacity hover:opacity-90 lg:h-10 lg:px-5 lg:text-sm xl:h-12 xl:px-6 xl:text-base 2xl:h-16 2xl:px-8 2xl:text-xl"
            >
              {t("signIn")}
            </a>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-sm text-[#4C4C4C]"
            aria-label="Toggle language"
          >
            <div className="relative h-5 w-5 overflow-hidden rounded-full">
              <Image
                src={flagSrc}
                alt="language flag"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs font-normal">
              {locale === "en" ? "EN" : "AR"}
            </span>
          </button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="rounded-md p-1.5 text-[#636363] hover:text-[#4C4BE0]"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="mt-8 flex flex-col gap-3">
                {NAV_LINKS.map(({ href, key, sectionId }) => {
                  const isActive = isHome && activeSection === sectionId;
                  return (
                    <a
                      key={href}
                      href={navHref(href)}
                      onClick={() => setOpen(false)}
                      className={[
                        "py-2 text-base font-medium transition-colors",
                        isActive
                          ? "font-semibold text-[#4C4BE0]"
                          : "text-[#636363] hover:text-[#4C4BE0]",
                      ].join(" ")}
                    >
                      {t(key)}
                    </a>
                  );
                })}
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href={SIGNUP_URL}
                    className="flex h-12 items-center justify-center rounded-full border-2 border-[#4C4BE0] text-base font-normal text-[#4C4BE0]"
                  >
                    {t("signUp")}
                  </a>
                  <a
                    href={SIGNIN_URL}
                    className="flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#0098DF] to-[#4C4BE0] text-base font-semibold text-white"
                  >
                    {t("signIn")}
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
