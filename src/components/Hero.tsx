import { ArrowRight, Bot, Sparkles, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-950">
      {/* Dynamic glow circles */}
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="md:col-span-7 text-left space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold tracking-wide text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous AI & Workflow Engineering</span>
          </div>

          <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-50">
            Transform Your Business Operations Into <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Autonomous AI</span> Systems.
          </h1>

          <p className="text-lg text-slate-400 max-w-xl font-normal leading-relaxed">
            We design autonomous agents, improve business workflows, and integrate intelligent software to optimize your operations and stop lead leaks.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-cyan-500/10 transition-all duration-300"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>

          {/* Trust points */}
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <p className="text-2xl font-bold text-slate-50 font-outfit">&lt; 60s</p>
              <p className="text-xs text-slate-400">Response Speed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-50 font-outfit">+30%</p>
              <p className="text-xs text-slate-400">Booked Consults</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-50 font-outfit">24/7</p>
              <p className="text-xs text-slate-400">Always Available</p>
            </div>
          </div>
        </div>

        {/* Right Graphic - Interactive System Status */}
        <div className="md:col-span-5 relative w-full aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center">
          <div className="relative w-full max-w-[420px] p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl flex flex-col justify-between overflow-hidden backdrop-blur-xl">
            
            <div className="flex items-center justify-between pb-5 border-b border-slate-800 z-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                  <Bot className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-100 font-outfit">Plexonis System Engine</h3>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Autonomous Mode Active
                  </span>
                </div>
              </div>
              <div className="px-2.5 py-1 rounded bg-slate-800 text-[10px] font-mono text-slate-400 border border-slate-700">
                Enterprise v2.4
              </div>
            </div>

            {/* Simulated Live Activities */}
            <div className="flex-1 py-5 space-y-4 z-10">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">CRM & Lead Intake Sync</span>
                  <span className="text-cyan-400">Active (100%)</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-cyan-400 h-full w-full rounded-full" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">AI Lead Qualification Engine</span>
                  <span className="text-blue-400">Processing</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-600 h-full w-[92%] rounded-full" />
                </div>
              </div>

              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-start space-x-3">
                <Zap className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-slate-100 font-outfit">Autonomous Workflow Execution</p>
                  <p className="text-[10px] text-slate-400">Inbound ad lead qualified & scheduled in &lt; 30 seconds.</p>
                </div>
              </div>
            </div>

            {/* Bottom Status bar */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400 z-10">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Enterprise SLA</span>
              <span>Uptime: 99.9%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}