import { Search, Compass, Cpu, Settings } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Discovery & Assessment",
      description: "We audit your manual workflows, interview stakeholders, analyze existing tools, and isolate the highest-ROI automation opportunities.",
    },
    {
      num: "02",
      icon: Compass,
      title: "Solution Design",
      description: "We outline custom agent architectures, build detailed workflow mockups, and estimate exact infrastructure costs and saving metrics.",
    },
    {
      num: "03",
      icon: Cpu,
      title: "Implementation",
      description: "Our team develops, tests, and integrates your AI agents and workflows. We ensure sandboxed safety checks before pushing live.",
    },
    {
      num: "04",
      icon: Settings,
      title: "Continuous Optimization",
      description: "Post-launch, we monitor error rates, retrain models on new edge cases, and refine agents for maximum productivity gains.",
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#070c18]">
      {/* Background glow */}
      <div className="absolute top-[20%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-brand-violet/5 glow-blur -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="font-outfit text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            Our Blueprint
          </h2>
          <h3 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">
            From Assessment to Automated Execution
          </h3>
          <p className="text-gray-400">
            A structured, repeatable methodology built to reduce project risk and ensure reliable, secure integrations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Decorative connector line for desktop */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-brand-cyan/20 via-brand-violet/20 to-brand-cyan/20 -z-10" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="space-y-6 relative group text-center md:text-left">
                {/* Icon bubble */}
                <div className="flex justify-center md:justify-start">
                  <div className="relative w-14 h-14 rounded-2xl bg-[#0a0a14] border border-white/10 flex items-center justify-center group-hover:border-brand-cyan/50 transition-all duration-300">
                    <Icon className="w-6 h-6 text-brand-cyan" />
                    {/* Step number badge */}
                    <span className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-brand-violet flex items-center justify-center text-[10px] font-bold text-white font-mono">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h4 className="font-outfit text-lg font-bold text-white">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto md:mx-0">
                    {step.description}
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
