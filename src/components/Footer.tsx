"use client";

import { Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  
  const copyrightText = language === "es" 
    ? "Todos los derechos reservados. Diseñado para la empresa moderna."
    : "All rights reserved. Built for modern business.";

  return (
    <footer className="border-t border-white/5 bg-[#070c18] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-violet to-brand-cyan p-[1px]">
            <div className="w-full h-full bg-[#0f172a] rounded-[7px] flex items-center justify-center">
              <Cpu className="w-4 h-4 text-brand-cyan" />
            </div>
          </div>
          <span className="font-outfit text-lg font-bold tracking-tight text-white animate-pulse-slow">
            Plexonis<span className="text-brand-cyan">.AI</span>
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
          <a href="#services" className="hover:text-gray-300 transition-colors">{t.nav.services}</a>
          <a href="#process" className="hover:text-gray-300 transition-colors">{t.nav.methodology}</a>
          <a href="#benefits" className="hover:text-gray-300 transition-colors">{t.nav.whyUs}</a>
          <a href="#use-cases" className="hover:text-gray-300 transition-colors">{t.nav.useCases}</a>
        </div>

        {/* Meta / Copyright */}
        <p className="text-xs text-gray-600 text-center md:text-right">
          &copy; {new Date().getFullYear()} Plexonis AI. {copyrightText}
        </p>
      </div>
    </footer>
  );
}
