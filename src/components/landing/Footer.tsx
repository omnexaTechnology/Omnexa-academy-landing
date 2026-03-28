import { useTranslations } from "next-intl";
import { Mail, Twitter, Linkedin, Github, Youtube } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");

  const productLinks = [
    { label: t("links.features"), href: "#features" },
    { label: t("links.pricing"), href: "#pricing" },
    { label: t("links.integrations"), href: "#" },
    { label: t("links.changelog"), href: "#" },
  ];

  const companyLinks = [
    { label: t("links.about"), href: "#" },
    { label: t("links.blog"), href: "#" },
    { label: t("links.careers"), href: "#" },
    { label: t("links.press"), href: "#" },
  ];

  const supportLinks = [
    { label: t("links.helpCenter"), href: "#" },
    { label: t("links.documentation"), href: "#" },
    { label: t("links.status"), href: "#" },
    { label: t("links.contact"), href: "#" },
  ];

  return (
    <footer className="bg-[#000B58] text-white">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10">
                <span className="text-sm font-bold text-white">OL</span>
              </div>
              <span className="text-lg font-bold">Omnexa Learn</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-blue-200">
              {t("description")}
            </p>
            <div className="flex items-center gap-1 text-sm text-blue-200">
              <Mail className="h-4 w-4 shrink-0" />
              <a
                href={`mailto:${t("contactEmail")}`}
                className="hover:text-white transition-colors"
              >
                {t("contactEmail")}
              </a>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Github, label: "GitHub" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-blue-200 transition-colors hover:bg-white/20 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-300">
              {t("product")}
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-blue-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-300">
              {t("company")}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-blue-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-300">
              {t("support")}
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-blue-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-blue-300">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
