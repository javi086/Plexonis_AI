"use client";

import { useState } from "react";
import { Bot, FileText, CheckCircle2, ChevronRight, BarChart3, Users, Zap } from "lucide-react";

export default function UseCases() {
  const useCases = [
    {
      id: "sales",
      tabTitle: "Lead Qualification",
      icon: Users,
      title: "Speed-to-Lead & WhatsApp AI Agent",
      problem: "Inbound sales leads sit cold for hours before a team member reviews and schedules a discovery call.",
      solution: "An instant AI assistant (WhatsApp, Web & Social) that engages inbound leads in under 60 seconds, answers initial questions, qualifies the prospect, and books a call directly onto your team's calendar.",
      metric: "< 60s Lead Response",
      impact: ["Responds 24/7 on WhatsApp & Web", "Automatically syncs with your CRM", "Filters low-intent spam leads"],
    },
    {
      id: "docs",
      tabTitle: "Document Processing",
      icon: FileText,
      title: "Automated Document Data Capture",
      problem: "Operations teams waste hours manually typing information from PDF invoices, receipts, and client forms into software.",
      solution: "An intelligent document processing workflow that automatically reads uploaded PDFs or images, extracts exact key data fields, and writes them straight into your accounting or database tools.",
      metric: "90% Faster Invoice Capture",
      impact: ["Eliminates manual entry errors", "Processes files in seconds", "Connects to your financial software"],
    },
    {
      id: "support",
      tabTitle: "Customer Support",
      icon: Bot,
      title: "24/7 Customer Support Assistant",
      problem: "Support inboxes get overwhelmed with repetitive questions, causing long response times and unhappy customers.",
      solution: "A custom AI support assistant trained on your company's FAQs, product guides, and policies. It answers routine client questions instantly while escalating complex tickets to your human team.",
      metric: "65% Support Deflection",
      impact: ["Instant answers 24 hours a day", "Saves staff time on repetitive tickets", "Customized to match your brand voice"],
    },
    {
    id: "analytics",
    tabTitle: "Data & Insights",
    icon: BarChart3,
    title: "Instant Business Intelligence",
    problem: "Business owners and managers wait days for staff to compile spreadsheet summaries and weekly reports.",
    solution: "An internal AI query assistant that lets company leaders ask questions in natural language (e.g., 'What were our top 3 lead sources this month?') and receive instant summaries and visual charts.",
    metric: "Instant Performance Reports",
    impact: ["Ask questions in natural language", "Real-time performance summaries", "Secure & private data handling"],
    },
    {
      id: "workflow",
      tabTitle: "Operations Sync",
      icon: Zap,
      title: "Cross-System Workflow Sync",
      problem: "Your CRM, email platform, and internal software operate in silos, requiring duplicate manual data entry.",
      solution: "We build background automation pipelines that automatically keep customer records, lead updates, and team notifications synchronized across all your software in real time.",
      metric: "40+ Hours Saved / Month",
      impact: ["Zero lost records", "Instant team notifications on Slack", "Automated weekly business updates"],
    },
  ];

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
            <span>Real Business Impact</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-50 tracking-tight">
            Proven AI Applications In Action
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            See how Plexonis AI builds tailored automations to solve actual operational bottlenecks.
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
                    The Pain Point
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeData.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                    Our Solution
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
              Expected Outcome
            </span>
            <p className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-50 leading-tight mb-6">
              {activeData.metric}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center self-center px-6 py-3 rounded-full text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-300"
            >
              Build this for your company
              <ChevronRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}