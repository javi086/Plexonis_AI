import { Bot, Zap, Network, Lightbulb, ArrowUpRight } from "lucide-react";

export default function Services() {
  const servicesList = [
    {
      icon: Zap,
      title: "AI Automations",
      description: "Replace repetitive manual admin work with self-running AI workflows. From email routing to automated invoicing, we connect your systems for seamless operation.",
      tags: ["Workflow Automation", "API Integration", "Automated Ops"],
    },
    {
      icon: Bot,
      title: "Custom AI Agents",
      description: "We train and deploy intelligent, context-aware agents to handle customer support, execute complex data lookups, and perform specialized workflow tasks.",
      tags: ["Autonomous Agents", "RAG Systems", "Custom LLMs"],
    },
    {
      icon: Lightbulb,
      title: "Strategic AI Consulting",
      description: "Confused about where AI fits in your business? We conduct feasibility assessments, define implementation roadmaps, and select the right tech stack for your goals.",
      tags: ["AI Roadmaps", "Feasibility Audits", "Tech Selection"],
    },
    {
      icon: Network,
      title: "Intelligent System Integrations",
      description: "Unify your business tools. We weave modern AI systems directly into your existing CRMs, ERPs, and legacy applications without interrupting daily work.",
      tags: ["CRM & ERP Integrations", "Secure Data Pipelines", "Legacy Upgrades"],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#05050b]/40">
      {/* Background soft light */}
      <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-cyan/5 glow-blur -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-outfit text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            Our Core Expertise
          </h2>
          <h3 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">
            High-Impact AI Solutions Built for Business Scale
          </h3>
          <p className="text-gray-400">
            We don't do hype. We build robust, production-ready AI services that optimize your operating margins and free up your team.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl glass-card flex flex-col justify-between group"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-brand-violet group-hover:to-brand-cyan transition-all duration-300">
                      <Icon className="w-6 h-6 text-brand-cyan group-hover:text-white transition-colors duration-300" />
                    </div>
                    <a
                      href="#contact"
                      className="text-gray-500 group-hover:text-brand-cyan transition-colors duration-300"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>

                  <h4 className="font-outfit text-xl font-bold text-white mb-3">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
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
