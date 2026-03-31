import Image from "next/image";
import { useTranslations } from "next-intl";
import { SIGNUP_URL } from "@/lib/constants";

const ASSETS = {
  imgLeft: "/assets/about-left.png",
  imgCenter: "/assets/about-center.png",
  imgRight: "/assets/about-right.png",
  decorativeCircle: "/assets/about-decorative-circle.svg",
};

function StarsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#about-stars-clip)">
        <path
          d="M29.1923 23.8167C29.6117 22.5586 31.3883 22.5586 31.8077 23.8167L34.2668 31.2015C34.808 32.8249 35.72 34.2998 36.9303 35.5095C38.1407 36.7192 39.6161 37.6304 41.2398 38.1708L48.6208 40.6298C49.8789 41.0492 49.8789 42.8258 48.6208 43.2452L41.236 45.7043C39.6126 46.2455 38.1376 47.1575 36.928 48.3678C35.7183 49.5782 34.8071 51.0537 34.2668 52.6773L31.8077 60.0583C31.7173 60.3338 31.5422 60.5737 31.3073 60.7438C31.0725 60.9139 30.79 61.0055 30.5 61.0055C30.21 61.0055 29.9275 60.9139 29.6927 60.7438C29.4578 60.5737 29.2827 60.3338 29.1923 60.0583L26.7333 52.6735C26.1924 51.0505 25.281 49.5758 24.0713 48.3662C22.8617 47.1565 21.387 46.2451 19.764 45.7043L12.3792 43.2452C12.1037 43.1548 11.8638 42.9797 11.6937 42.7448C11.5236 42.51 11.432 42.2275 11.432 41.9375C11.432 41.6475 11.5236 41.365 11.6937 41.1302C11.8638 40.8953 12.1037 40.7202 12.3792 40.6298L19.764 38.1708C21.387 37.6299 22.8617 36.7185 24.0713 35.5088C25.281 34.2992 26.1924 32.8245 26.7333 31.2015L29.1923 23.8167ZM14.4646 4.37675C14.5193 4.21165 14.6246 4.06797 14.7656 3.96614C14.9066 3.86431 15.0761 3.8095 15.25 3.8095C15.4239 3.8095 15.5934 3.86431 15.7344 3.96614C15.8754 4.06797 15.9807 4.21165 16.0354 4.37675L17.5108 8.80688C18.1704 10.7818 19.7183 12.3296 21.6931 12.9892L26.1233 14.4646C26.2884 14.5193 26.432 14.6246 26.5339 14.7656C26.6357 14.9066 26.6905 15.0761 26.6905 15.25C26.6905 15.4239 26.6357 15.5934 26.5339 15.7344C26.432 15.8754 26.2884 15.9807 26.1233 16.0354L21.6931 17.5108C20.7191 17.8353 19.8341 18.3822 19.1082 19.1082C18.3822 19.8341 17.8353 20.7191 17.5108 21.6931L16.0354 26.1233C15.9807 26.2884 15.8754 26.432 15.7344 26.5339C15.5934 26.6357 15.4239 26.6905 15.25 26.6905C15.0761 26.6905 14.9066 26.6357 14.7656 26.5339C14.6246 26.432 14.5193 26.2884 14.4646 26.1233L12.9892 21.6931C12.6647 20.7191 12.1178 19.8341 11.3918 19.1082C10.6659 18.3822 9.78087 17.8353 8.80687 17.5108L4.37675 16.0354C4.21165 15.9807 4.06797 15.8754 3.96614 15.7344C3.86431 15.5934 3.8095 15.4239 3.8095 15.25C3.8095 15.0761 3.86431 14.9066 3.96614 14.7656C4.06797 14.6246 4.21165 14.5193 4.37675 14.4646L8.80687 12.9892C9.78087 12.6647 10.6659 12.1178 11.3918 11.3918C12.1178 10.6659 12.6647 9.78087 12.9892 8.80688L14.4646 4.37675ZM41.4152 0.377438C41.4528 0.268882 41.5233 0.174749 41.617 0.108129C41.7106 0.0415077 41.8226 0.00570872 41.9375 0.00570872C42.0524 0.00570872 42.1644 0.0415077 42.258 0.108129C42.3517 0.174749 42.4222 0.268882 42.4598 0.377438L43.4434 3.32831C43.8819 4.64744 44.9151 5.68062 46.2342 6.11906L49.1851 7.10269C49.2936 7.14032 49.3878 7.21085 49.4544 7.30446C49.521 7.39806 49.5568 7.5101 49.5568 7.625C49.5568 7.73989 49.521 7.85194 49.4544 7.94554C49.3878 8.03915 49.2936 8.10968 49.1851 8.14731L46.2342 9.13094C45.5841 9.34719 44.9934 9.71203 44.509 10.1965C44.0245 10.6809 43.6597 11.2716 43.4434 11.9217L42.4598 14.8726C42.4222 14.9811 42.3517 15.0753 42.258 15.1419C42.1644 15.2085 42.0524 15.2443 41.9375 15.2443C41.8226 15.2443 41.7106 15.2085 41.617 15.1419C41.5233 15.0753 41.4528 14.9811 41.4152 14.8726L40.4316 11.9217C40.2153 11.2716 39.8505 10.6809 39.366 10.1965C38.8816 9.71203 38.2909 9.34719 37.6408 9.13094L34.6938 8.14731C34.5852 8.10968 34.4911 8.03915 34.4244 7.94554C34.3578 7.85194 34.322 7.73989 34.322 7.625C34.322 7.5101 34.3578 7.39806 34.4244 7.30446C34.4911 7.21085 34.5852 7.14032 34.6938 7.10269L37.6446 6.11906C38.9637 5.68062 39.9969 4.64744 40.4354 3.32831L41.4152 0.377438Z"
          fill="url(#about-stars-gradient)"
        />
      </g>
      <defs>
        <linearGradient
          id="about-stars-gradient"
          x1="26.687"
          y1="0.00570872"
          x2="26.687"
          y2="61.0055"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EBA352" />
          <stop offset="1" stopColor="#F7EE13" />
        </linearGradient>
        <clipPath id="about-stars-clip">
          <rect width="61" height="61" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function FourPointedStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 124 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M62 0C62 0 58.5 34 44 48C30 62 0 62 0 62C0 62 30 62 44 76C58.5 90 62 124 62 124C62 124 65.5 90 80 76C94 62 124 62 124 62C124 62 94 62 80 48C65.5 34 62 0 62 0Z"
        fill="#4C4BE0"
      />
    </svg>
  );
}

export default function AboutSection() {
  const t = useTranslations("aboutSection");

  return (
    <section id="about" className="relative overflow-hidden bg-white">
      {/* ── Background radial gradient overlay ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ opacity: 0.4 }}
      >
        <svg
          viewBox="0 0 1440 1207"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          style={{ width: "100%", height: "100%" }}
        >
          <g filter="url(#about-bg-blur)">
            <ellipse
              cx="720"
              cy="603.5"
              rx="720"
              ry="603.5"
              fill="url(#about-bg-gradient)"
            />
          </g>
          <defs>
            <radialGradient
              id="about-bg-gradient"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(720 603.5) scale(720 603.5)"
            >
              <stop stopColor="#B0DFF5" stopOpacity="0" />
              <stop offset="0.5" stopColor="#7E95EB" stopOpacity="0.5" />
              <stop offset="0.75" stopColor="#6570E5" stopOpacity="0.75" />
              <stop offset="1" stopColor="#4C4BE0" />
            </radialGradient>
            <filter
              id="about-bg-blur"
              x="-10%"
              y="-10%"
              width="120%"
              height="120%"
              filterUnits="objectBoundingBox"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="40" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* ── Top-right decorative ellipse glow ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{ right: -100, top: -81, width: 440, height: 440 }}
      >
        <div className="absolute" style={{ inset: "-50.91%" }}>
          <svg
            viewBox="0 0 840 840"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%", overflow: "visible" }}
          >
            <g filter="url(#about-glow-tr)">
              <circle
                cx="420"
                cy="420"
                r="220"
                fill="#4C4BE0"
                fillOpacity="0.15"
              />
            </g>
            <defs>
              <filter
                id="about-glow-tr"
                x="0"
                y="0"
                width="840"
                height="840"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="100"
                  result="effect1_foregroundBlur"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* ── Bottom-left decorative ellipse glow ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{ left: -78, bottom: -100, width: 540, height: 540 }}
      >
        <div className="absolute" style={{ inset: "-41.48%" }}>
          <svg
            viewBox="0 0 940 940"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%", overflow: "visible" }}
          >
            <g filter="url(#about-glow-bl)">
              <circle
                cx="470"
                cy="470"
                r="270"
                fill="#4C4BE0"
                fillOpacity="0.12"
              />
            </g>
            <defs>
              <filter
                id="about-glow-bl"
                x="0"
                y="0"
                width="940"
                height="940"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="100"
                  result="effect1_foregroundBlur"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* ── Main content ── */}
      <div
        className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-5 py-[80px] md:gap-16 md:px-10 md:py-[100px] lg:gap-[80px] lg:px-20 lg:py-[120px]"
      >
        {/* Text + CTA block */}
        <div className="flex w-full flex-col items-center gap-8 md:gap-[56px]">
          <div className="relative w-full ">
            {/* Circle */}
            <Image
  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
             z-0 pointer-events-none 
             w-[180px] md:w-[240px] lg:w-[300px] h-auto opacity-80"
  width={300}
  height={300}
  alt="Decorative circle"
  src={ASSETS.decorativeCircle}
/>
              {/* Heading */}
              <h2
              className=" relative text-center z-10"
              // className=" relative z-10 text-center leading-tight"
              style={{
                fontFamily: "IBM Plex Sans Arabic, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(2rem, 3.5vw, 48px)",
                lineHeight: "100%",
                margin: 0,
              }}
            >
              <span style={{ color: "#3938a8" }}>{t("headingHighlight")}</span>
              <span style={{ color: "#0d0d0d" }}>{t("headingNormal")}</span>
            </h2>

          </div>


          {/* Subheading */}
          <p
            // className="text-center"
              className="text-center text-gray-500 max-w-[1082px] leading-relaxed 
             text-base md:text-lg lg:text-xl"
            style={{
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontSize: "clamp(1rem, 2vw, 27px)",
              fontWeight: 500,
            }}
          >
            <span style={{ color: "#636363" }}>{t("subheadingPart1")}</span>
            <span style={{ fontWeight: 600, color: "#1b1a4e" }}>
              {t("subheadingPart2")}
            </span>
          </p>

          {/* Body text */}
          <p
            className="text-center"
            style={{
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1rem, 1.8vw, 24px)",
              lineHeight: "48px",
              color: "#808080",
              maxWidth: 1082,
              margin: 0,
              whiteSpace: "pre-wrap",
            }}
          >
            {t("description")}
          </p>

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
              fontFamily: "IBM Plex Sans Arabic, sans-serif",
              fontSize: "clamp(1rem, 1.8vw, 24px)",
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

        {/* ── Image gallery ── */}
        <div className="flex w-full max-w-[1280px] flex-col items-stretch gap-5 md:flex-row md:items-end">
          {/* Left image — tall */}
          <div
            className="relative min-h-[240px] flex-1 md:h-[340px] lg:h-[440px]"
            style={{ borderRadius: 21.684, overflow: "hidden" }}
          >
            <Image
              alt="Omnexa Academy students learning together"
              src={ASSETS.imgLeft}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Center column — star decoration + shorter image */}
          <div className="relative flex min-w-0 flex-1 flex-col items-center">
            {/* 4-pointed star decoration above center image */}
            <div className="mb-3" style={{ width: 62, height: 62, flexShrink: 0 }}>
              <FourPointedStar className="w-full h-full" />
            </div>
            <div
              className="relative w-full"
              style={{ height: 220, borderRadius: 21.684, overflow: "hidden" }}
            >
              <Image
                alt="Omnexa Academy online course"
                src={ASSETS.imgCenter}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Right image — tall */}
          <div
            className="relative min-h-[240px] flex-1 md:h-[340px] lg:h-[440px]"
            style={{ borderRadius: 21.684, overflow: "hidden" }}
          >
            <Image
              alt="Omnexa Academy instructor"
              src={ASSETS.imgRight}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
