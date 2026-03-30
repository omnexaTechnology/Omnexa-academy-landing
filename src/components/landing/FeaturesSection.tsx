import Image from "next/image";

const ASSETS = {
  stars: "/assets/stars.svg",
  rocketIcon: "/assets/features-rocket.svg",
  studentsIcon: "/assets/features-students.svg",
  dashboardIcon: "/assets/features-dashboard.svg",
  infrastructureIcon: "/assets/features-infrastructure.svg",
  decorativeCircle: "/assets/features-decorative-circle.svg",
};

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative flex flex-col items-center gap-12 overflow-hidden px-5 py-[80px] md:gap-16 md:px-10 md:py-[100px] lg:gap-20 lg:px-20 lg:py-[120px]"
      style={{
        background: "linear-gradient(to bottom, #3938a8, #161642)",
      }}
    >
      {/* Decorative circular graphic behind the title */}
      <div className="pointer-events-none absolute bottom-[82.74%] left-[5.56%] right-3/4 top-[5.01%]">
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
            <div className="absolute left-[-62px] top-[-56px] flex size-[78px] items-center justify-center">
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
              Why choose omnexa learn?
            </h2>

            <p
              className="text-[16px] font-medium leading-[32px] text-[#ddd] md:text-[20px] md:leading-[40px] lg:text-[24px] lg:leading-[48px]"
              style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
            >
              Omnexa learn is more than an e-learning platform. It&apos;s a
              complete solution to launch and manage your digital academy, while
              we handle the technology so you can focus on teaching and content
              creation.
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
                Quick launch for your academy
              </p>
              <p
                className="w-full text-[16px] font-normal leading-[32px] text-[#ddd] md:text-[20px] md:leading-[40px] lg:text-[24px] lg:leading-[48px]"
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                Launch your platform in minutes and start teaching.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row: three feature cards */}
        <div
          className="flex w-full flex-col items-center gap-6 md:flex-row"
          style={{ background: "rgba(237, 237, 252, 0.04)" }}
        >
          {/* Students Platform */}
          <div
            className="flex min-h-px min-w-0 flex-1 flex-col items-center justify-center gap-10 rounded-2xl px-6 py-14"
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
                students platform
              </p>
              <p
                className="w-full text-[16px] font-normal leading-[32px] text-[#ddd] md:text-[20px] md:leading-[40px] lg:text-[24px] lg:leading-[48px]"
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                A professional platform to present your courses and learning
                content
              </p>
            </div>
          </div>

          {/* Smart Dashboard */}
          <div
            className="flex min-h-px min-w-0 flex-1 flex-col items-center justify-center gap-10 rounded-2xl px-6 py-14"
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
                Smart Dashboard
              </p>
              <p
                className="w-full text-[16px] font-normal leading-[32px] text-[#ddd] md:text-[20px] md:leading-[40px] lg:text-[24px] lg:leading-[48px]"
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                Smart dashboard to manage your academy and track courses,
                students, and performance.
              </p>
            </div>
          </div>

          {/* Reliable Infrastructure */}
          <div
            className="flex min-h-px min-w-0 flex-1 flex-col items-center justify-center gap-10 rounded-2xl px-6 py-14"
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
                Reliable infrastructure
              </p>
              <p
                className="w-full text-[16px] font-normal leading-[32px] text-[#ddd] md:text-[20px] md:leading-[40px] lg:text-[24px] lg:leading-[48px]"
                style={{ fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}
              >
                We handle hosting, updates, and security to ensure your platform
                is always stable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
