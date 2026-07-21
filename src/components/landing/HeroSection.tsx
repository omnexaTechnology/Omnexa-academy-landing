import Image from "next/image";
import { useTranslations } from "next-intl";
import { SIGNUP_URL } from "@/lib/constants";

const ASSETS = {
  chevron: "/assets/hero-chevron.png",
  person1: "/assets/hero-person1.png",
  person2Portrait: "/assets/hero-person2-portrait.png",
  person2Circle: "/assets/hero-person2-circle.png",
  person3Portrait: "/assets/hero-person3-portrait.png",
  person4: "/assets/13.png",
};

function StarsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#hero-stars-clip)">
        <path
          d="M29.1923 23.8167C29.6117 22.5586 31.3883 22.5586 31.8077 23.8167L34.2668 31.2015C34.808 32.8249 35.72 34.2998 36.9303 35.5095C38.1407 36.7192 39.6161 37.6304 41.2398 38.1708L48.6208 40.6298C49.8789 41.0492 49.8789 42.8258 48.6208 43.2452L41.236 45.7043C39.6126 46.2455 38.1376 47.1575 36.928 48.3678C35.7183 49.5782 34.8071 51.0537 34.2668 52.6773L31.8077 60.0583C31.7173 60.3338 31.5422 60.5737 31.3073 60.7438C31.0725 60.9139 30.79 61.0055 30.5 61.0055C30.21 61.0055 29.9275 60.9139 29.6927 60.7438C29.4578 60.5737 29.2827 60.3338 29.1923 60.0583L26.7333 52.6735C26.1924 51.0505 25.281 49.5758 24.0713 48.3662C22.8617 47.1565 21.387 46.2451 19.764 45.7043L12.3792 43.2452C12.1037 43.1548 11.8638 42.9797 11.6937 42.7448C11.5236 42.51 11.432 42.2275 11.432 41.9375C11.432 41.6475 11.5236 41.365 11.6937 41.1302C11.8638 40.8953 12.1037 40.7202 12.3792 40.6298L19.764 38.1708C21.387 37.6299 22.8617 36.7185 24.0713 35.5088C25.281 34.2992 26.1924 32.8245 26.7333 31.2015L29.1923 23.8167ZM14.4646 4.37675C14.5193 4.21165 14.6246 4.06797 14.7656 3.96614C14.9066 3.86431 15.0761 3.8095 15.25 3.8095C15.4239 3.8095 15.5934 3.86431 15.7344 3.96614C15.8754 4.06797 15.9807 4.21165 16.0354 4.37675L17.5108 8.80688C18.1704 10.7818 19.7183 12.3296 21.6931 12.9892L26.1233 14.4646C26.2884 14.5193 26.432 14.6246 26.5339 14.7656C26.6357 14.9066 26.6905 15.0761 26.6905 15.25C26.6905 15.4239 26.6357 15.5934 26.5339 15.7344C26.432 15.8754 26.2884 15.9807 26.1233 16.0354L21.6931 17.5108C20.7191 17.8353 19.8341 18.3822 19.1082 19.1082C18.3822 19.8341 17.8353 20.7191 17.5108 21.6931L16.0354 26.1233C15.9807 26.2884 15.8754 26.432 15.7344 26.5339C15.5934 26.6357 15.4239 26.6905 15.25 26.6905C15.0761 26.6905 14.9066 26.6357 14.7656 26.5339C14.6246 26.432 14.5193 26.2884 14.4646 26.1233L12.9892 21.6931C12.6647 20.7191 12.1178 19.8341 11.3918 19.1082C10.6659 18.3822 9.78087 17.8353 8.80687 17.5108L4.37675 16.0354C4.21165 15.9807 4.06797 15.8754 3.96614 15.7344C3.86431 15.5934 3.8095 15.4239 3.8095 15.25C3.8095 15.0761 3.86431 14.9066 3.96614 14.7656C4.06797 14.6246 4.21165 14.5193 4.37675 14.4646L8.80687 12.9892C9.78087 12.6647 10.6659 12.1178 11.3918 11.3918C12.1178 10.6659 12.6647 9.78087 12.9892 8.80688L14.4646 4.37675ZM41.4152 0.377438C41.4528 0.268882 41.5233 0.174749 41.617 0.108129C41.7106 0.0415077 41.8226 0.00570872 41.9375 0.00570872C42.0524 0.00570872 42.1644 0.0415077 42.258 0.108129C42.3517 0.174749 42.4222 0.268882 42.4598 0.377438L43.4434 3.32831C43.8819 4.64744 44.9151 5.68062 46.2342 6.11906L49.1851 7.10269C49.2936 7.14032 49.3878 7.21085 49.4544 7.30446C49.521 7.39806 49.5568 7.5101 49.5568 7.625C49.5568 7.73989 49.521 7.85194 49.4544 7.94554C49.3878 8.03915 49.2936 8.10968 49.1851 8.14731L46.2342 9.13094C45.5841 9.34719 44.9934 9.71203 44.509 10.1965C44.0245 10.6809 43.6597 11.2716 43.4434 11.9217L42.4598 14.8726C42.4222 14.9811 42.3517 15.0753 42.258 15.1419C42.1644 15.2085 42.0524 15.2443 41.9375 15.2443C41.8226 15.2443 41.7106 15.2085 41.617 15.1419C41.5233 15.0753 41.4528 14.9811 41.4152 14.8726L40.4316 11.9217C40.2153 11.2716 39.8505 10.6809 39.366 10.1965C38.8816 9.71203 38.2909 9.34719 37.6408 9.13094L34.6938 8.14731C34.5852 8.10968 34.4911 8.03915 34.4244 7.94554C34.3578 7.85194 34.322 7.73989 34.322 7.625C34.322 7.5101 34.3578 7.39806 34.4244 7.30446C34.4911 7.21085 34.5852 7.14032 34.6938 7.10269L37.6446 6.11906C38.9637 5.68062 39.9969 4.64744 40.4354 3.32831L41.4152 0.377438Z"
          fill="url(#hero-stars-gradient)"
        />
      </g>
      <defs>
        <linearGradient
          id="hero-stars-gradient"
          x1="26.687"
          y1="0.00570872"
          x2="26.687"
          y2="61.0055"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EBA352" />
          <stop offset="1" stopColor="#F7EE13" />
        </linearGradient>
        <clipPath id="hero-stars-clip">
          <rect width="61" height="61" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function SquigglyLines({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 61 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.9456 42.4604C12.35 35.8453 15.0985 20.3798 14.8574 11.4385"
        stroke="#00354E"
        strokeWidth="3.07158"
        strokeLinejoin="round"
      />
      <path
        d="M27.4487 52.5194C33.5478 49.5983 47.4807 42.3451 54.4199 36.7012"
        stroke="#00354E"
        strokeWidth="3.07158"
        strokeLinejoin="round"
      />
      <path
        d="M20.1032 44.2554C23.1552 40.9861 29.8584 33.224 32.2552 28.3292"
        stroke="#00354E"
        strokeWidth="3.07158"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      {/* ── Top-left glow: blurred yellow circle ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{ left: -102, top: -74, width: 440, height: 440 }}
      >
        <div className="absolute" style={{ inset: "-45.45%" }}>
          <svg
            viewBox="0 0 840 840"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%", overflow: "visible" }}
          >
            <g filter="url(#hero-glow-tl)">
              <circle cx="420" cy="420" r="220" fill="#FFCB3C" fillOpacity="0.04" />
            </g>
            <defs>
              <filter
                id="hero-glow-tl"
                x="0"
                y="0"
                width="840"
                height="840"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* ── Bottom-right glow: blurred blue circle ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{ left: 1204, bottom: -190, width: 540, height: 540 }}
      >
        <div className="absolute" style={{ inset: "-37.04%" }}>
          <svg
            viewBox="0 0 940 940"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%", overflow: "visible" }}
          >
            <g filter="url(#hero-glow-br)">
              <circle cx="470" cy="470" r="270" fill="#4C4BE0" fillOpacity="0.12" />
            </g>
            <defs>
              <filter
                id="hero-glow-br"
                x="0"
                y="0"
                width="940"
                height="940"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* ── Left chevron tiles (opacity 4%) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 hidden xl:block"
        style={{ width: 338, opacity: 0.5 }}
      >
        {([0, 353.43, 705.57] as number[]).map((top, i) => (
          <div
            key={i}
            className="absolute flex items-center justify-center"
            style={{ left: 0, top, width: 338, height: 353.43 }}
          >
            <div style={{ transform: "rotate(90deg)" }}>
              <Image
                alt=""
                src={ASSETS.chevron}
                width={354}
                height={338}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ── Right chevron tiles (opacity 2%) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 hidden xl:block"
        style={{ left: 1102, opacity: 0.5 }}
      >
        {([0, 353.43, 705.57] as number[]).map((top, i) => (
          <div
            key={i}
            className="absolute flex items-center justify-center"
            style={{ left: 0, top, width: 338, height: 353.43 }}
          >
            <div style={{ transform: "rotate(90deg) scaleY(-1)" }}>
              <Image
                alt=""
                src={ASSETS.chevron}
                width={354}
                height={338}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ── Stars icon (top-left, rotated) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute hidden md:block"
        style={{ left: 212.9, top: 28.4, width: 77.9, height: 77.9 }}
      >
        <div
          style={{
            transform: "scaleY(-1) rotate(-160.45deg)",
            width: 61,
            height: 61,
            margin: "auto",
            marginTop: (77.9 - 61) / 2,
          }}
        >
          <StarsIcon className="w-full h-full" />
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pt-10 sm:px-10 md:pt-16 xl:px-20">
        {/* Text + CTA */}
        <div className="mx-auto flex max-w-[1062px] flex-col items-center gap-8 text-center md:gap-[56px]">
          <div className="flex w-full flex-col items-center gap-6 md:gap-[56px]">
            {/* Headline */}
            <h1
              className="capitalize leading-tight sm:leading-[96px]"
              style={{
                fontWeight: 700,
                fontSize: "clamp(2rem, 5vw, 56px)",
                color: "#0d0d0d",
              }}
            >
              <span style={{ color: "#3938a8" }}>{t("headlineHighlight1")}</span>
              {t("headlineMid")}
              <span style={{ color: "#3938a8" }}>{t("headlineHighlight2")}</span>
              {t("headlineEnd")}
            </h1>

            {/* Description */}
            <p
              className="mx-auto"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 24px)",
                lineHeight: "clamp(28px, 5vw, 48px)",
                color: "#636363",
                maxWidth: 834,
              }}
            >
              {t("description")}
            </p>
          </div>

          {/* CTA button */}
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(90deg, #4c4be0 0%, #0098df 100%)",
              borderRadius: 40,
              minHeight: 56,
              padding: "10px 24px",
              color: "white",
              fontSize: "clamp(1rem, 2vw, 24px)",
              fontWeight: 600,
              lineHeight: "1.5",
              textDecoration: "none",
              whiteSpace: "nowrap",
              boxShadow: "0 8px 32px rgba(76,75,224,0.25)",
            }}
          >
            {t("cta")}
          </a>
        </div>

        {/* ── People / images section ── */}
        <div className="relative mx-auto mt-8 flex w-full max-w-[1032px] items-center justify-center gap-3 overflow-hidden md:mt-14 md:gap-4 xl:gap-6">
          {/* Person 1 — tall pill, hidden on mobile */}
          <div
            className="relative hidden shrink-0 overflow-hidden md:block md:h-[280px] md:w-[180px] lg:h-[364px] lg:w-[240px]"
            style={{ borderRadius: 324 }}
          >
            <Image
              alt="Omnexa Academy student"
              src={ASSETS.person1}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Column 2 — portrait + circle */}
          <div
            className="flex w-[140px] shrink-0 flex-col items-center gap-4 md:w-[180px] md:gap-5 lg:w-[240px] lg:gap-6"
          >
            <div
              className="relative w-full overflow-hidden"
              style={{ height: 180, borderRadius: 124 }}
            >
              <Image
                alt="Omnexa Academy student"
                src={ASSETS.person2Portrait}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div
              className="relative overflow-hidden"
              style={{ width: 90, height: 90, borderRadius: "50%" }}
            >
              <Image
                alt="Omnexa Academy student"
                src={ASSETS.person2Circle}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Squiggly decorative lines (absolutely positioned between col 2 and col 3) */}
          <div
            aria-hidden
            className="pointer-events-none absolute hidden xl:flex items-center justify-center"
            style={{
              left: "70.71%",
              right: "21.42%",
              top: "-5.91%",
              bottom: "88.77%",
            }}
          >
            <div style={{ transform: "rotate(-104.57deg) scaleY(-1)", width: 61, height: 68 }}>
              <SquigglyLines className="w-full h-full" />
            </div>
          </div>

          {/* Column 3 — speech bubble + portrait */}
          <div
            className="relative flex w-[140px] shrink-0 flex-col items-center gap-4 md:w-[180px] md:gap-6 lg:w-[240px] lg:gap-8"
          >
            {/* Speech bubble card + triangle pointer */}
            <div className="relative w-full">
              <div
                className="flex w-full items-center justify-center"
                style={{
                  backgroundColor: "#b0dff5",
                  borderRadius: 80,
                  padding: "12px 8px",
                }}
              >
                <p
                  className="text-center"
                  style={{
                    color: "#00354e",
                    fontSize: 13,
                    lineHeight: "20px",
                  }}
                >
                  {t("speechBubble")}
                </p>
              </div>
              {/* Down-pointing triangle pointer */}
              <div
                className="absolute flex items-center justify-center"
                style={{ left: "38.33%", top: "100%", marginTop: -4, width: 56, height: 40 }}
              >
                <svg
                  viewBox="0 0 44.13 28.82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: 56, height: 40, transform: "scaleY(-1)" }}
                >
                  <path
                    d="M20.5088 0.742763C21.3093 -0.247587 22.8192 -0.247588 23.6197 0.742762L43.6802 25.5612C44.7373 26.8691 43.8065 28.8184 42.1248 28.8184H2.00377C0.322071 28.8184 -0.608802 26.8691 0.448346 25.5612L20.5088 0.742763Z"
                    fill="#B0DFF5"
                  />
                </svg>
              </div>
            </div>

            {/* Portrait */}
            <div
              className="relative w-full overflow-hidden"
              style={{ height: 180, borderRadius: 124, marginTop: 16 }}
            >
              <Image
                alt="Omnexa Academy student"
                src={ASSETS.person3Portrait}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Person 4 — tall pill, hidden on mobile */}
          <div
            className="relative hidden shrink-0 overflow-hidden md:block md:h-[280px] md:w-[180px] lg:h-[364px] lg:w-[240px]"
            style={{ borderRadius: 324 }}
          >
            <Image
              alt="Omnexa Academy student"
              src={ASSETS.person4}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
