import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import type { AbstractIntlMessages } from "next-intl";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value ?? "en";
  const safeLocale = locale === "ar" ? "ar" : "en";

  const rawMessages =
    safeLocale === "ar"
      ? (await import("../locales/ar")).default
      : (await import("../locales/en")).default;

  return {
    locale: safeLocale,
    messages: rawMessages as unknown as AbstractIntlMessages,
  };
});
