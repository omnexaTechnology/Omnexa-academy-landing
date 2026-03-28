"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageToggle } from "./LanguageToggle";
import { SIGNUP_URL } from "@/lib/constants";

export default function Navbar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#hero", label: t("home") },
    { href: "#features", label: t("features") },
    { href: "#pricing", label: t("pricing") },
    { href: "#faq", label: t("faq") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#000B58]">
            <span className="text-sm font-bold text-white">OL</span>
          </div>
          <span className="text-lg font-bold text-[#000B58]">Omnexa Learn</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-[#006A67]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle className="text-gray-600" />
          <Button variant="teal" size="sm" asChild>
            <a href={SIGNUP_URL}>{t("startTrial")}</a>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle className="text-gray-600" />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-8 flex flex-col gap-4">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-gray-600 transition-colors hover:text-[#006A67]"
                  >
                    {link.label}
                  </a>
                ))}
                <Button variant="teal" asChild>
                  <a href={SIGNUP_URL}>{t("startTrial")}</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
