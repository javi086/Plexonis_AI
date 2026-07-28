"use client";

import { Search, Compass, ShieldCheck, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  const stepsList = [
    { num: "01", icon: Search },
    { num: "02", icon: Compass },
    { num: "03", icon: ShieldCheck },
    { num: "04", icon: TrendingUp },
  ];

  const steps = stepsList.map((step, idx) => ({
    ...step,
    title: t.process.steps[idx]?.title || "",
    description: t.process.steps[idx]?.desc || "",
  }));

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background soft lighting */}
      <div className="absolute top-[30%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-cyan-500/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold tracking-wide text-cyan-400">
            <span>{t.process.badge}</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-50 tracking-tight">
            {t.process.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between group hover:border-slate-700 transition-all duration-300 relative"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:border-cyan-400/40 transition-colors">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-2xl font-black font-outfit text-slate-700 group-hover:text-cyan-400/40 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-outfit text-lg font-bold text-slate-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Accent Bar */}
                <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}