import { useTranslations } from "next-intl";
import {
  BookOpen,
  Users,
  Video,
  BarChart3,
  Palette,
  Award,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const FEATURE_ICONS = [BookOpen, Users, Video, BarChart3, Palette, Award];
const FEATURE_KEYS = [
  "courseBuilder",
  "studentManagement",
  "liveSessions",
  "analytics",
  "branding",
  "certificates",
] as const;

export default function FeaturesSection() {
  const t = useTranslations("features");

  return (
    <section id="features" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#000B58] sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_KEYS.map((key, index) => {
            const Icon = FEATURE_ICONS[index];
            return (
              <Card
                key={key}
                className="border border-gray-100 transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-[#000B58]/10">
                    <Icon className="h-6 w-6 text-[#000B58]" />
                  </div>
                  <CardTitle className="text-lg">
                    {t(`items.${key}.title`)}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {t(`items.${key}.description`)}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
