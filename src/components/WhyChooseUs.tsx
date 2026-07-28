"use client";

import { Shield, Sparkles, TrendingUp, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const benefitsList = [
    { icon: TrendingUp },
    { icon: Sparkles },
    { icon: Shield },
    { icon: Users },
  ];

  const benefits = benefitsList.map((benefit, idx) => ({
    ...benefit,
    title: t.whyUs.benefits[idx]?.title || "",
    description: t.whyUs.benefits[idx]?.desc || "",
  }));

  return (
    <section id="benefits" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background glow highlight */}
      <div className="absolute top-[30%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-cyan-500/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
        {/* Left Column - Headline & Key Proof Points */}
        <div className="md:col-span-5 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold tracking-wide text-cyan-400">
            <span>{t.whyUs.badge}</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-50 leading-tight tracking-tight">
            {t.whyUs.title}
          </h2>

          <p className="text-slate-400 text-base leading-relaxed">
            {t.whyUs.subtitle}
          </p>

          {/* High-Impact Stat Boxes */}
          <div className="pt-4 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <p className="text-3xl font-extrabold text-slate-50 font-outfit">{t.whyUs.stats.stat1}</p>
              <p className="text-xs text-slate-400 mt-1 font-medium">{t.whyUs.stats.label1}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <p className="text-3xl font-extrabold text-slate-50 font-outfit">{t.whyUs.stats.stat2}</p>
              <p className="text-xs text-slate-400 mt-1 font-medium">{t.whyUs.stats.label2}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Benefit Cards Grid */}
        <div className="md:col-span-7 grid sm:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-start space-y-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                  <Icon className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-outfit text-base font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}