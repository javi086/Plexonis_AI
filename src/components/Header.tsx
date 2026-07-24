"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Cpu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Methodology", href: "#process" },
    { name: "Why Us", href: "#benefits" },
    { name: "Use Cases", href: "#use-cases" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "glass-header shadow-lg shadow-black/20 py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2.5 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-violet to-brand-cyan p-[1px] transition-transform duration-300 group-hover:rotate-6">
            <div className="w-full h-full bg-[#0a0a14] rounded-[11px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-brand-cyan group-hover:text-brand-violet transition-colors duration-300" />
            </div>
          </div>
          <span className="font-outfit text-xl font-bold tracking-tight text-white">
            Plexonis<span className="text-brand-cyan">.AI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-violet to-brand-cyan hover:opacity-90 shadow-md shadow-brand-cyan/10 transition-all duration-300"
          >
            Get Started
            <ArrowUpRight className="ml-1.5 w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[73px] z-40 bg-[#030303]/98 backdrop-blur-xl md:hidden transition-all duration-300 transform ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
      >
        <nav className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors border-b border-white/5 pb-3"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-brand-violet to-brand-cyan"
          >
            Get Started
            <ArrowUpRight className="ml-1.5 w-5 h-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
