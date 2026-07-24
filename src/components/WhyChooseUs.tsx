import { Shield, Sparkles, TrendingUp, Users } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Results-Driven Approach",
      description: "We align project scope directly with business metrics. If it doesn't reduce manual hours or save cloud costs, we don't build it.",
    },
    {
      icon: Sparkles,
      title: "Tailored Solutions",
      description: "No generic chat prompts or wrapper scripts. We write custom integrations mapped exactly to your legacy databases and APIs.",
    },
    {
      icon: Shield,
      title: "Practical AI, Not Hype",
      description: "We focus on mature, reliable libraries and self-healing error catchers, ensuring your AI agents don't crash when APIs change.",
    },
    {
      icon: Users,
      title: "Ongoing Partnership",
      description: "Your system changes, and so should your AI. We provide monthly audits, safety compliance checks, and prompt tuning.",
    },
  ];

  return (
    <section id="benefits" className="py-24 relative overflow-hidden bg-[#05050b]/40">
      {/* Glow highlight */}
      <div className="absolute top-[30%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-brand-cyan/5 glow-blur -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
        {/* Left Column - Headline & Stats */}
        <div className="md:col-span-5 space-y-6">
          <h2 className="font-outfit text-xs font-semibold uppercase tracking-widest text-brand-cyan">
            Why Partner With Us
          </h2>
          <h3 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            We Bridge the Gap Between Research and Production
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Most AI projects fail due to poor data integration and unstable prompts. We engineer custom architectures designed for security, deterministic actions, and maximum reliability.
          </p>

          <div className="pt-6 grid grid-cols-2 gap-6">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <p className="text-3xl font-extrabold text-white font-outfit">100%</p>
              <p className="text-xs text-gray-500 mt-1">IP Ownership Retained</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <p className="text-3xl font-extrabold text-white font-outfit">24/7</p>
              <p className="text-xs text-gray-500 mt-1">Uptime & Monitoring</p>
            </div>
          </div>
        </div>

        {/* Right Column - Benefit Cards */}
        <div className="md:col-span-7 grid sm:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card border border-white/5 hover:border-brand-violet/20 flex flex-col justify-start space-y-4"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-violet/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-violet" />
                </div>
                <div>
                  <h4 className="font-outfit text-base font-bold text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
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
