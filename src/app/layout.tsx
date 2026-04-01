import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omnexa Learn — Launch Your Online Academy",
  description:
    "Create, manage, and grow your online academy with Omnexa Learn. Everything you need to educate your students in one platform.",
  openGraph: {
    title: "Omnexa Learn — Launch Your Online Academy",
    description:
      "Create, manage, and grow your online academy with Omnexa Learn.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/images/footer-logo.png", type: "image/png" },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  const isRtl = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${ibmPlexSans.variable} ${ibmPlexSansArabic.variable}`}
    >
      <body
        className={
          isRtl ? "font-ibm-plex-arabic" : "font-ibm-plex-sans"
        }
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
