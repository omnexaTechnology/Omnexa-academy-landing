import { useTranslations } from "next-intl";

export default function PlatformPreview() {
  const t = useTranslations("platformPreview");

  return (
    <section id="platform" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#000B58] sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            {t("description")}
          </p>
        </div>

        {/* Platform mockup */}
        <div className="relative mx-auto max-w-5xl">
          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-4 shadow-2xl sm:p-8">
            <div className="overflow-hidden rounded-xl bg-white shadow-lg">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <div className="mx-4 flex h-6 flex-1 items-center rounded-full bg-white px-3">
                  <span className="text-xs text-gray-400">
                    app.omnexalearn.com/dashboard
                  </span>
                </div>
              </div>

              {/* Mock platform UI */}
              <div className="min-h-[300px] bg-[#000B58] p-6 md:min-h-[420px]">
                {/* Sidebar + content layout */}
                <div className="flex gap-4 h-full">
                  {/* Sidebar */}
                  <div className="hidden w-48 shrink-0 rounded-lg bg-white/10 p-4 sm:block">
                    <div className="mb-4 h-8 w-28 rounded-md bg-white/30" />
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`mb-2 h-8 rounded-md ${i === 1 ? "bg-[#006A67]" : "bg-white/10"} flex items-center px-3`}
                      >
                        <div className="h-2 w-16 rounded bg-white/50" />
                      </div>
                    ))}
                  </div>

                  {/* Main content */}
                  <div className="flex-1">
                    {/* Stats row */}
                    <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {[
                        { label: "Students", value: "1,284" },
                        { label: "Courses", value: "12" },
                        { label: "Revenue", value: "$8,430" },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-lg bg-white/10 p-3"
                        >
                          <div className="mb-1 text-xs text-white/60">
                            {stat.label}
                          </div>
                          <div className="text-lg font-bold text-white">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Course grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="rounded-lg border border-white/10 bg-white/5 p-3"
                        >
                          <div className="mb-2 h-2 w-20 rounded bg-white/40" />
                          <div className="mb-1 h-3 w-28 rounded bg-white/60" />
                          <div className="flex items-center gap-1 mt-2">
                            <div className="h-1.5 flex-1 rounded-full bg-white/20">
                              <div
                                className="h-1.5 rounded-full bg-[#006A67]"
                                style={{ width: `${30 + i * 15}%` }}
                              />
                            </div>
                            <span className="text-xs text-white/50">
                              {30 + i * 15}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
