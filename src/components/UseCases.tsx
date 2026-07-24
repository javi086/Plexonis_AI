"use client";

import { useState } from "react";
import { Bot, FileText, CheckCircle2, ChevronRight, BarChart3, Users, Zap, Mail } from "lucide-react";

export default function UseCases() {
  const useCases = [
    {
      id: "support",
      tabTitle: "Customer Support",
      icon: Bot,
      title: "AI-Powered Customer Support",
      problem: "Support queues overflow, raising SLA times and ballooning customer service agent overhead.",
      solution: "Deploy a RAG-powered custom agent connected directly to Zendesk and your internal wiki. It resolves 65% of Tier-1 queries instantly while seamlessly handing off complex issues to human agents.",
      metric: "65% Support Deflection",
      impact: ["Instant 24/7 replies", "Reduced ticket resolution time", "Custom tone calibration"],
    },
    {
      id: "docs",
      tabTitle: "Document Processing",
      icon: FileText,
      title: "Intelligent Document Parsing",
      problem: "Operations teams spend hours copying data from vendor PDFs, invoices, and shipping receipts into CRMs.",
      solution: "An intelligent OCR pipeline powered by custom Vision LLMs extracting key-value pairs from complex, unstructured files. It validates data with 99.8% accuracy and automatically triggers billing entries.",
      metric: "90% Faster Invoicing",
      impact: ["Eliminated manual typing errors", "Instantly indexes files", "Integrates with QuickBooks/NetSuite"],
    },
    {
      id: "sales",
      tabTitle: "Lead Qualification",
      icon: Users,
      title: "Sales & Lead Qualification Bot",
      problem: "Inbound sales leads sit cold for hours before a sales rep reviews and schedules a call.",
      solution: "A dynamic email/web bot that matches lead data with Clearbit and LinkedIn APIs, scores the lead quality, and schedules a Zoom call directly onto your sales team's Google Calendar.",
      metric: "4x Inbound Booking Rate",
      impact: ["Response time under 2 mins", "Auto CRM updates", "Filtered low-intent spam"],
    },
    {
      id: "analytics",
      tabTitle: "Data Analysis",
      icon: BarChart3,
      title: "Business Intelligence Agent",
      problem: "Executives wait days for data analysts to build SQL dashboards and monthly reports.",
      solution: "We build a secure private database LLM connector allowing non-technical leaders to ask natural language questions (e.g., 'What was our Q3 churn rate?') and instantly receive graphs and summaries.",
      metric: "Zero SQL Bottlenecks",
      impact: ["Natural language UI", "Instant chart rendering", "Strict secure-role permissions"],
    },
    {
      id: "workflow",
      tabTitle: "Workflow Automation",
      icon: Zap,
      title: "Cross-App Operations Sync",
      problem: "Marketing, sales, and operations tools operate in silos, requiring manual data synchronization.",
      solution: "We establish robust, self-healing Zapier/Make and custom Node.js scripts to synchronize customer logs, support updates, and lead scoring in real-time across your stack.",
      metric: "40+ Hours Saved/Month",
      impact: ["Zero lost logs", "Real-time Slack alerts", "Automated executive weekly digests"],
    },
  ];

  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const activeData = useCases.find((uc) => uc.id === activeTab) || useCases[0];
  const ActiveIcon = activeData.icon;

  return (
    <section id="use-cases" className="py-24 relative overflow-hidden bg-[#030303]">
      {/* Background glow circle */}
      <div className="absolute bottom-[10%] left-[5%] w-[35vw] h-[35vw] rounded-full bg-brand-cyan/5 glow-blur -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-outfit text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            Real Impact
          </h2>
          <h3 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">
            Proven AI Applications In Action
          </h3>
          <p className="text-gray-400">
            See how Plexonis AI structures custom automations to tackle actual operational bottlenecks.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {useCases.map((uc) => {
            const TabIcon = uc.icon;
            return (
              <button
                key={uc.id}
                onClick={() => setActiveTab(uc.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${activeTab === uc.id
                    ? "bg-gradient-to-r from-brand-violet to-brand-cyan border-transparent text-white shadow-md shadow-brand-cyan/10"
                    : "bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10"
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
          <div className="md:col-span-7 p-8 rounded-2xl glass-card flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center">
                  <ActiveIcon className="w-5 h-5 text-brand-cyan" />
                </div>
                <h4 className="font-outfit text-xl font-bold text-white">
                  {activeData.title}
                </h4>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    The Pain Point
                  </h5>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {activeData.problem}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-1">
                    Our Solution
                  </h5>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {activeData.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Key benefits list */}
            <div className="pt-6 border-t border-white/5 mt-6 grid sm:grid-cols-3 gap-4">
              {activeData.impact.map((imp, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span className="text-[11px] text-gray-400 leading-snug">{imp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight Metrics Column */}
          <div className="md:col-span-5 p-8 rounded-2xl bg-gradient-to-br from-brand-violet/10 to-brand-cyan/10 border border-brand-cyan/20 flex flex-col justify-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl -z-10" />
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase mb-2">
              Projected ROI
            </span>
            <p className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              {activeData.metric}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center self-center px-6 py-3 rounded-full text-xs font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
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
