"use client";

import { Bot, Zap, MessageSquareCode, Database, ArrowUpRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const servicesList = [
    {
      icon: MessageSquareCode,
      title: t.services.items.leadAgents.title,
      description: t.services.items.leadAgents.desc,
      tags: t.services.items.leadAgents.tags,
      badge: t.services.items.leadAgents.badge,
    },
    {
      icon: Zap,
      title: t.services.items.workflows.title,
      description: t.services.items.workflows.desc,
      tags: t.services.items.workflows.tags,
      badge: null,
    },
    {
      icon: Database,
      title: t.services.items.knowledgeBase.title,
      description: t.services.items.knowledgeBase.desc,
      tags: t.services.items.knowledgeBase.tags,
      badge: null,
    },
    {
      icon: Globe,
      title: t.services.items.webDesign.title,
      description: t.services.items.webDesign.desc,
      tags: t.services.items.webDesign.tags,
      badge: null,
    },
    {
      icon: Bot,
      title: t.services.items.integrations.title,
      description: t.services.items.integrations.desc,
      tags: t.services.items.integrations.tags,
      badge: null,
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background ambient glow */}
      <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/5 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-600/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold tracking-wide text-cyan-400">
            <span>{t.services.badge}</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-50 tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between group hover:border-slate-700 transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual highlight badge if featured */}
                {service.badge && (
                  <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 animate-pulse">
                    {service.badge}
                  </span>
                )}

                <div>
                  {/* Icon & CTA Link */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                      <Icon className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <a
                      href="#contact"
                      className="text-slate-500 group-hover:text-cyan-400 transition-colors duration-300 p-1"
                      aria-label={`Inquire about ${service.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="font-outfit text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Service Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-slate-400 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}