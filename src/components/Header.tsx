"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full bg-slate-900 border border-slate-800 p-1 text-xs font-semibold">
      <button
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 rounded-full transition-all ${
          language === "en"
            ? "bg-cyan-500 text-slate-950 font-bold"
            : "text-slate-400 hover:text-slate-200"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("es")}
        className={`px-2.5 py-1 rounded-full transition-all ${
          language === "es"
            ? "bg-cyan-500 text-slate-950 font-bold"
            : "text-slate-400 hover:text-slate-200"
        }`}
      >
        ES
      </button>
    </div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: t.nav.services, href: "#services" },
    { name: t.nav.methodology, href: "#process" },
    { name: t.nav.whyUs, href: "#benefits" },
    { name: t.nav.useCases, href: "#use-cases" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-slate-800/50 ${
        isOpen || scrolled
          ? "bg-[#070c18] backdrop-blur-md shadow-lg shadow-black/20 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Block */}
        <a href="/" className="flex items-center gap-3.5 group focus:outline-none">
          <div className="relative h-12 w-12 md:h-14 md:w-14 flex-shrink-0 flex items-center justify-center rounded-2xl bg-white/95 p-2 shadow-md shadow-cyan-500/10 border border-white/20 transition-all duration-200 group-hover:scale-105">
            <div className="relative h-full w-full">
              <Image
                src="/images/plexonis_Icon_v1.png"
                alt="Plexonis AI Logo Mark"
                fill
                sizes="56px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex items-center text-2xl font-bold tracking-tight">
            <span className="text-slate-50 transition-colors">Plexonis</span>
            <span className="ml-1 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-extrabold">
              AI
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button & Switcher */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 shadow-md shadow-cyan-500/10 transition-all duration-300"
          >
            {t.nav.getStarted}
            <ArrowUpRight className="ml-1.5 w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-full h-[calc(100dvh-70px)] z-40 bg-[#070c18] border-t border-slate-800/80 overflow-y-auto md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 space-y-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-200 hover:text-cyan-400 transition-colors border-b border-slate-800/70 pb-3"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-cyan-500/20"
          >
            {t.nav.getStarted}
            <ArrowUpRight className="ml-1.5 w-5 h-5" />
          </a>

          <div className="flex justify-center pt-2">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
