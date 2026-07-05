import Image from "next/image";
import { useTranslations } from "next-intl";

const ASSETS = {
  stars: "/assets/stars.svg",
  rocketIcon: "/assets/features-rocket.svg",
  studentsIcon: "/assets/features-students.svg",
  dashboardIcon: "/assets/features-dashboard.svg",
  infrastructureIcon: "/assets/features-infrastructure.svg",
  decorativeCircle: "/assets/features-decorative-circle.svg",
};

export default function FeaturesSection() {
  const t = useTranslations("featuresSection");
  return (
    <section
      id="features"
      className="relative flex flex-col items-center gap-12 overflow-hidden px-5 py-[80px] md:gap-16 md:px-10 md:py-[100px] lg:gap-20 lg:px-20 lg:py-[120px]"
      style={{
        background: "linear-gradient(to bottom, #3938a8, #161642)",
      }}
    >
      {/* Decorative circular graphic behind the title */}
      <div className="pointer-events-none absolute left-[3.40%] top-[20px] h-[160px] w-[160px] md:top-[5.01%] md:bottom-[81.74%] md:h-auto md:w-auto md:right-3/4">
        <Image
          alt=""
          fill
          className="absolute block size-full max-w-none"
          src={ASSETS.decorativeCircle}
        />
      </div>

      <div className="flex w-full flex-col items-center gap-20">
        {/* Top row: heading + main feature card */}
        <div className="flex w-full flex-col items-start gap-10 md:flex-row md:gap-14">
          {/* Left: title + description */}
          <div className="relative flex min-w-0 flex-1 flex-col gap-14">
            {/* Decorative stars */}
            <div className="absolute left-0 top-[-48px] flex size-[78px] items-center justify-center md:left-[-62px] md:top-[-56px]">
              <div
                className="flex-none"
                style={{ transform: "scaleY(-1) rotate(-160.45deg)" }}
              >
                <Image
                  alt=""
                  width={61}
                  height={61}
                  src={ASSETS.stars}
                />
              </div>
            </div>

            <h2
              className="text-[28px] font-semibold capitalize leading-normal text-white md:text-[36px] lg:text-[48px]"
              style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
            >
              {t("heading")}
            </h2>

            <p
              className="text-[16px] font-medium leading-[32px] text-[#ddd] md:text-[20px] md:leading-[40px] lg:text-[24px] lg:leading-[48px]"
              style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
            >
              {t("description")}
            </p>
          </div>

          {/* Right: Quick Launch card */}
          <div
            className="flex min-w-0 flex-1 flex-col items-center justify-center gap-10 rounded-2xl px-6 py-14"
            style={{
              background: "rgba(237, 237, 252, 0.04)",
              borderTop: "12px solid #0086e3",
            }}
          >
            <div className="relative size-20 overflow-hidden">
              <Image
                alt="Quick launch icon"
                fill
                className="absolute block size-full max-w-none"
                src={ASSETS.rocketIcon}
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-8 text-center">
              <p
                className="w-full text-[22px] font-semibold capitalize leading-[40px] text-[#f8f8f8] md:text-[28px] md:leading-[48px] lg:text-[32px] lg:leading-[64px]"
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                {t("quickLaunchTitle")}
              </p>
              <p
                className="w-full text-[16px] font-normal leading-[32px] text-[#ddd] md:text-[20px] md:leading-[40px] lg:text-[24px] lg:leading-[48px]"
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                {t("quickLaunchDescription")}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row: three feature cards */}
        <div
          className="flex w-full flex-col items-stretch gap-6 md:flex-row"
          style={{ background: "rgba(237, 237, 252, 0.04)" }}
        >
          {/* Students Platform */}
          <div
            className="flex min-h-px min-w-0 flex-1 flex-col items-center justify-start gap-10 rounded-2xl px-6 py-14"
            style={{
              background: "rgba(237, 237, 252, 0.04)",
              borderTop: "12px solid #0086e3",
            }}
          >
            <div className="relative size-20 overflow-hidden">
              <div className="absolute inset-[0_0.15%]">
                <Image
                  alt="Students platform icon"
                  fill
                  className="absolute block size-full max-w-none"
                  src={ASSETS.studentsIcon}
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-8 text-center">
              <p
                className="w-full text-[22px] font-semibold capitalize leading-[40px] text-[#f8f8f8] md:text-[28px] md:leading-[48px] lg:text-[32px] lg:leading-[56px]"
                style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                {t("studentsPlatformTitle")}
              </p>
              <p
                className="w-full text-[16px] font-normal leading-[32px] text-[#ddd] md:text-[20px] md:leading-[40px] lg:text-[24px] lg:leading-[48px]"
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                {t("studentsPlatformDescription")}
              </p>
            </div>
          </div>

          {/* Smart Dashboard */}
          <div
            className="flex min-h-px min-w-0 flex-1 flex-col items-center justify-start gap-10 rounded-2xl px-6 py-14"
            style={{
              background: "rgba(237, 237, 252, 0.04)",
              borderTop: "12px solid #0086e3",
            }}
          >
            <div className="relative size-20 overflow-hidden">
              <div className="absolute inset-[0.16%_0_9.84%_0]">
                <Image
                  alt="Smart dashboard icon"
                  fill
                  className="absolute block size-full max-w-none"
                  src={ASSETS.dashboardIcon}
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-8 text-center">
              <p
                className="w-full text-[22px] font-semibold capitalize leading-[40px] text-[#f8f8f8] md:text-[28px] md:leading-[48px] lg:text-[32px] lg:leading-[64px]"
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                {t("smartDashboardTitle")}
              </p>
              <p
                className="w-full text-[16px] font-normal leading-[32px] text-[#ddd] md:text-[20px] md:leading-[40px] lg:text-[24px] lg:leading-[48px]"
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                {t("smartDashboardDescription")}
              </p>
            </div>
          </div>

          {/* Reliable Infrastructure */}
          <div
            className="flex min-h-px min-w-0 flex-1 flex-col items-center justify-start gap-10 rounded-2xl px-6 py-14"
            style={{
              background: "rgba(237, 237, 252, 0.04)",
              borderTop: "12px solid #0086e3",
            }}
          >
            <div className="relative size-20 overflow-hidden">
              <div className="absolute inset-[6.4%_12.78%_6.25%_12.75%]">
                <Image
                  alt="Reliable infrastructure icon"
                  fill
                  className="absolute block size-full max-w-none"
                  src={ASSETS.infrastructureIcon}
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-8 text-center">
              <p
                className="w-full text-[22px] font-semibold capitalize leading-[40px] text-[#f8f8f8] md:text-[28px] md:leading-[48px] lg:text-[32px] lg:leading-[64px]"
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                {t("reliableInfrastructureTitle")}
              </p>
              <p
                className="w-full text-[16px] font-normal leading-[32px] text-[#ddd] md:text-[20px] md:leading-[40px] lg:text-[24px] lg:leading-[48px]"
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                {t("reliableInfrastructureDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
