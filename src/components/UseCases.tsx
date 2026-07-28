"use client";

import { useState } from "react";
import { Bot, FileText, CheckCircle2, ChevronRight, BarChart3, Users, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function UseCases() {
  const { t } = useLanguage();

  const useCasesList = [
    { id: "sales", icon: Users },
    { id: "docs", icon: FileText },
    { id: "support", icon: Bot },
    { id: "analytics", icon: BarChart3 },
    { id: "workflow", icon: Zap },
  ];

  const useCases = useCasesList.map((uc, idx) => ({
    ...uc,
    tabTitle: t.useCases.cases[idx]?.tabTitle || "",
    title: t.useCases.cases[idx]?.title || "",
    problem: t.useCases.cases[idx]?.problem || "",
    solution: t.useCases.cases[idx]?.solution || "",
    metric: t.useCases.cases[idx]?.metric || "",
    impact: t.useCases.cases[idx]?.impact || [],
  }));

  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const activeData = useCases.find((uc) => uc.id === activeTab) || useCases[0];
  const ActiveIcon = activeData.icon;

  return (
    <section id="use-cases" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background glow circle */}
      <div className="absolute bottom-[10%] left-[5%] w-[35vw] h-[35vw] rounded-full bg-cyan-500/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold tracking-wide text-cyan-400">
            <span>{t.useCases.badge}</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-50 tracking-tight">
            {t.useCases.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.useCases.subtitle}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {useCases.map((uc) => {
            const TabIcon = uc.icon;
            const isActive = activeTab === uc.id;
            return (
              <button
                key={uc.id}
                onClick={() => setActiveTab(uc.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 border-transparent text-white shadow-md shadow-cyan-500/20"
                    : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-100 hover:bg-slate-800"
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{uc.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Active Content Showcase */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          {/* Detailed Info Column */}
          <div className="md:col-span-7 p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <ActiveIcon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-outfit text-xl font-bold text-slate-100">
                  {activeData.title}
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    {t.useCases.problemLabel}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeData.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                    {t.useCases.solutionLabel}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeData.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Key benefits list */}
            <div className="pt-6 border-t border-slate-800 mt-6 grid sm:grid-cols-3 gap-4">
              {activeData.impact.map((imp, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs text-slate-400 leading-snug">{imp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight Metrics Column */}
          <div className="md:col-span-5 p-8 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -z-10" />
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">
              {t.useCases.outcomeLabel}
            </span>
            <p className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-50 leading-tight mb-6">
              {activeData.metric}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center self-center px-6 py-3 rounded-full text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-300"
            >
              {t.useCases.cta}
              <ChevronRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}