import { useTranslations } from "next-intl";

export default function DashboardPreview() {
  const t = useTranslations("dashboardPreview");

  return (
    <section id="dashboard" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Text */}
          <div className="max-w-lg text-center lg:text-start">
            <h2 className="text-3xl font-bold text-[#000B58] sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {t("description")}
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Real-time enrollment tracking",
                "Revenue & payout analytics",
                "Student progress monitoring",
                "Content performance insights",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <div className="h-5 w-5 shrink-0 rounded-full bg-[#006A67] flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dashboard mockup */}
          <div className="w-full max-w-2xl rounded-2xl bg-[#000B58] p-6 shadow-2xl">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <div className="h-4 w-32 rounded bg-white/30" />
              <div className="flex gap-2">
                <div className="h-8 w-20 rounded-md bg-[#006A67]" />
                <div className="h-8 w-8 rounded-md bg-white/10" />
              </div>
            </div>

            {/* Chart area */}
            <div className="mb-4 rounded-xl bg-white/5 p-4">
              <div className="mb-3 h-3 w-24 rounded bg-white/30" />
              <div className="flex items-end gap-2 h-28">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-[#006A67]/70"
                      style={{ height: `${h}%` }}
                    />
                  )
                )}
              </div>
            </div>

            {/* Table rows */}
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2"
                >
                  <div className="h-8 w-8 rounded-full bg-white/20" />
                  <div className="flex-1">
                    <div className="mb-1 h-2.5 w-24 rounded bg-white/40" />
                    <div className="h-2 w-16 rounded bg-white/20" />
                  </div>
                  <div className="h-2.5 w-14 rounded bg-[#006A67]/60" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
