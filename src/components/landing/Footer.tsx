import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");

  const quickLinks = [
    { label: t("links.home"), href: "#hero" },
    { label: t("links.about"), href: "#about" },
    { label: t("links.whyChoose"), href: "#features" },
    { label: t("links.services"), href: "#services" },
    { label: t("links.howToCreate"), href: "#steps" },
    { label: t("links.contact"), href: "#contact" },
  ];

  const contactItems = [
    {
      icon: Phone,
      label: t("internationalNumber"),
      value: t("internationalNumberValue"),
    },
    {
      icon: MessageCircle,
      label: t("whatsapp"),
      value: t("whatsappValue"),
    },
    {
      icon: Mail,
      label: t("email"),
      value: t("emailValue"),
    },
    {
      icon: MapPin,
      label: t("headOffice"),
      value: t("headOfficeValue"),
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
            <div
              className="flex h-[108px] w-[108px] shrink-0 items-center justify-center rounded-2xl"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >
              <span className="text-2xl font-bold text-white">OL</span>
            </div>

            {/* Description */}
            <p
              className="text-base leading-8"
              style={{ color: "#c3c3c3" }}
            >
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
            <h4
              className="text-xl font-semibold leading-[48px] text-white md:text-2xl"
            >
              {t("quickLinks")}
            </h4>
            <ul className="flex flex-col">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 py-1 text-base leading-[48px] transition-colors hover:text-white md:text-xl lg:text-2xl"
                    style={{ color: "#dddddd" }}
                  >
                    <span
                      className="h-3 w-3 shrink-0 rounded-full"
                      style={{ backgroundColor: "#c3c3c3" }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Contact Us ── */}
          <div className="flex flex-1 flex-col gap-6">
            <h4
              className="text-xl font-semibold leading-[48px] text-white md:text-2xl"
            >
              {t("contactUs")}
            </h4>
            <ul className="flex flex-col gap-6">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon
                    className="mt-0.5 h-8 w-8 shrink-0 text-white"
                  />
                  <div className="flex flex-col gap-0.5">
                    <span
                      className="text-base leading-6 md:text-lg lg:text-xl"
                      style={{ color: "#b4b4b4" }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-base leading-6 md:text-lg lg:text-xl"
                      style={{ color: "#dddddd" }}
                    >
                      {value}
                    </span>
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

        {/* ── Bottom bar: Copyright + WhatsApp badge ── */}
        <div className="flex items-center justify-between gap-4">
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

          {/* WhatsApp badge */}
          <a
            href="#contact"
            aria-label="WhatsApp"
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
            }}
          >
            <MessageCircle className="h-10 w-10 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
