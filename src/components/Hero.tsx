import { ArrowRight, Bot, Sparkles, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Dynamic glow circles */}
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-brand-cyan/15 glow-blur animate-pulse-slow -z-10" />
      <div className="absolute bottom-[20%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-brand-violet/15 glow-blur animate-pulse-slow -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] -z-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="md:col-span-7 text-left space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-brand-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next-Generation AI Implementations</span>
          </div>

          <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            We Build Practical <span className="text-gradient">AI Solutions</span> That Drive Business Results
          </h1>

          <p className="text-lg text-gray-400 max-w-xl font-normal leading-relaxed">
            Plexonis AI designs custom agents, automates manual workflows, and integrates intelligent systems that reduce costs and scale operations.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-brand-violet to-brand-cyan hover:opacity-95 shadow-lg shadow-brand-cyan/15 transition-all duration-300"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>

          {/* Trust points */}
          <div className="pt-8 border-t border-white/5 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <p className="text-2xl font-bold text-white font-outfit">95%</p>
              <p className="text-xs text-gray-500">Task Automation</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white font-outfit">10x</p>
              <p className="text-xs text-gray-500">Operation Speed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white font-outfit">$150k+</p>
              <p className="text-xs text-gray-500">Avg. Annual Saved</p>
            </div>
          </div>
        </div>

        {/* Right Graphic - Interactive dashboard look */}
        <div className="md:col-span-5 relative w-full aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center">
          <div className="relative w-full max-w-[420px] p-6 rounded-2xl glass-card border border-white/10 shadow-2xl flex flex-col justify-between animate-float overflow-hidden">
            {/* Header glow */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-cyan/20 rounded-full blur-2xl" />

            <div className="flex items-center justify-between pb-6 border-b border-white/5 z-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white font-outfit">Plexonis Core Agent</h3>
                  <span className="text-[10px] text-green-400 flex items-center gap-1 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Active & Learning
                  </span>
                </div>
              </div>
              <div className="px-2.5 py-1 rounded bg-white/5 text-[10px] font-mono text-gray-400 border border-white/5">
                v2.4-stable
              </div>
            </div>

            {/* Simulated Live Activities */}
            <div className="flex-1 py-6 space-y-4 z-10">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray-400">Database Synchronization</span>
                  <span className="text-brand-cyan">100%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-brand-cyan h-full w-full rounded-full" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray-400">Custom Agent Model training</span>
                  <span className="text-brand-violet">84%</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-brand-cyan to-brand-violet h-full w-[84%] rounded-full" />
                </div>
              </div>

              <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-start space-x-3">
                <TrendingUp className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-white font-outfit">Workflow Efficiency Boost</p>
                  <p className="text-[10px] text-gray-400">Optimized 4 cross-app sync points, reducing overhead by 40%.</p>
                </div>
              </div>
            </div>

            {/* Bottom Status bar */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400 z-10">
              <span>Token Throughput: 8,420/s</span>
              <span>Latency: 14ms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
