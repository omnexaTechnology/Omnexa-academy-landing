import Image from "next/image"; // <-- add this import at the top
import { useTranslations, useLocale } from "next-intl";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

const ASSETS = {
  whatsapp: "/assets/whatsapp.svg", // path to your WhatsApp icon
};

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const logoSrc = locale === "en" ? "/images/Logo-4-en.png" : "/images/Logo-9-ar.png";

  const quickLinks = [
    { label: t("links.home"), href: "#hero" },
    { label: t("links.about"), href: "#about" },
    { label: t("links.whyChoose"), href: "#features" },
    { label: t("links.services"), href: "#services" },
    { label: t("links.howToCreate"), href: "#steps" },
    { label: t("links.contact"), href: "#contact" },
    { label: t("links.privacyPolicy"), href: "/privacy-policy" },
  ];

  const contactItems = [
    {
      icon: Phone,
      label: t("internationalNumber"),
      value: t("internationalNumberValue"),
      type: "phone",
    },
    {
      icon: Phone,
      label: t("whatsapp"),
      value: t("whatsappValue"),
      type: "phone",
    },
    {
      icon: Mail,
      label: t("email"),
      value: t("emailValue"),
      type: "text",
    },
    {
      icon: MapPin,
      label: t("headOffice"),
      value: t("headOfficeValue"),
      type: "address",
    },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1b1a4e 0%, #4c4be0 100%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:px-20 lg:py-20">
        {/* Main 3-column grid */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* ── Column 1: Logo + Description + Socials ── */}
          <div className="flex flex-1 flex-col gap-8">
            {/* Logo placeholder */}
            <div className="flex flex-1 flex-col gap-8">
              {/* Logo */}
              <div className="flex h-[108px] w-[108px] shrink-0 items-center justify-center rounded-2xl bg-white/12">
                <Image
                  src={logoSrc}
                  alt="Logo"
                  width={108}
                  height={108}
                  className="object-contain brightness-0 invert"
                />
              </div>

              {/* Rest of your description + socials here */}
            </div>

            {/* Description */}
            <p className="text-base leading-8" style={{ color: "#c3c3c3" }}>
              {t("description")}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[80px] transition-opacity hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(135deg, #4c4be0 0%, #0098df 100%)",
                }}
              >
                <Facebook className="h-8 w-8 text-white" />
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[80px] transition-opacity hover:opacity-90"
                style={{ background: "#ededfc" }}
              >
                <Instagram className="h-8 w-8" style={{ color: "#e1306c" }} />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[80px] transition-opacity hover:opacity-90"
                style={{ background: "#ededfc" }}
              >
                <Linkedin className="h-8 w-8" style={{ color: "#0077b5" }} />
              </a>
            </div>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div className="flex flex-1 flex-col gap-6">
            <h4 className="text-xl font-semibold leading-[48px] text-white md:text-2xl">
              {t("quickLinks")}
            </h4>
            <ul className="flex flex-col">
              {quickLinks.map((link) => {
                const linkClassName =
                  "flex items-center gap-2 py-1 text-base leading-[48px] transition-colors hover:text-white md:text-xl lg:text-2xl";
                const dot = (
                  <span
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: "#c3c3c3" }}
                  />
                );

                return (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        className={linkClassName}
                        style={{ color: "#dddddd" }}
                      >
                        {dot}
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className={linkClassName}
                        style={{ color: "#dddddd" }}
                      >
                        {dot}
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ── Column 3: Contact Us ── */}
          <div className="flex flex-1 flex-col gap-6">
            <h4 className="text-xl font-semibold leading-[48px] text-white md:text-2xl">
              {t("contactUs")}
            </h4>
            <ul className="flex flex-col gap-6">
              {contactItems.map(({ icon: Icon, label, value, type }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-8 w-8 shrink-0 text-white" />
                  <div className="flex flex-col gap-0.5">
                    <span
                      className="text-base leading-6 md:text-lg lg:text-xl"
                      style={{ color: "#b4b4b4" }}
                    >
                      {label}
                    </span>
                    {type === "phone" ? (
                      <span
                        dir="ltr"
                        className="text-base leading-6 md:text-lg lg:text-xl"
                        style={{ color: "#dddddd" }}
                      >
                        {value}
                      </span>
                    ) : type === "address" ? (
                      <div className="flex flex-col gap-1">
                        {value.split("\n").map((line, i) => (
                          <span
                            key={i}
                            className="text-base leading-6 md:text-lg lg:text-xl"
                            style={{ color: "#dddddd" }}
                          >
                            {line}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span
                        className="text-base leading-6 md:text-lg lg:text-xl"
                        style={{ color: "#dddddd" }}
                      >
                        {value}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          className="mb-10 mt-10 h-px"
          style={{ backgroundColor: "#9c9c9c" }}
        />

        {/* ── Bottom bar: Copyright + Legal Links + WhatsApp badge ── */}
        <div className="flex flex-col items-center gap-4">
          {/* Legal links row */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              href="/privacy-policy"
              className="text-sm transition-colors hover:text-white md:text-base"
              style={{ color: "#b4b4b4" }}
            >
              {t("links.privacyPolicy")}
            </Link>
            <span className="h-4 w-px" style={{ backgroundColor: "#555" }} />
            <Link
              href="/terms"
              className="text-sm transition-colors hover:text-white md:text-base"
              style={{ color: "#b4b4b4" }}
            >
              {t("links.terms")}
            </Link>
            <span className="h-4 w-px" style={{ backgroundColor: "#555" }} />
            <Link
              href="/refund-policy"
              className="text-sm transition-colors hover:text-white md:text-base"
              style={{ color: "#b4b4b4" }}
            >
              {t("links.refundPolicy")}
            </Link>
          </div>

          {/* Copyright */}
          <p
            className="text-base leading-relaxed md:text-lg lg:text-xl"
            style={{ color: "#dddddd" }}
          >
            {t("copyrightPart1")}
            <strong className="font-semibold text-white">
              {t("copyrightBrand")}
            </strong>
            {t("copyrightPart2")}
          </p>
        </div>

        {/* WhatsApp floating badge */}
        <a
          href="https://wa.me/966550483401"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="fixed right-5 bottom-5 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-opacity hover:opacity-90 sm:right-10 sm:bottom-10"
          style={{
            background: "linear-gradient(135deg, #25D366 0%, #25D366 100%)",
          }}
        >
          <Image
            src={ASSETS.whatsapp}
            alt="WhatsApp"
            width={24}
            height={24}
            className="block"
          />
        </a>
      </div>
    </footer>
  );
}
