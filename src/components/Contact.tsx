"use client";

import { useState } from "react";
import { Mail, Check, Calendar, ArrowRight, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "automations",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "automations",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#05050b]/40">
      {/* Background glow */}
      <div className="absolute top-[40%] left-[-15%] w-[40vw] h-[40vw] rounded-full bg-brand-cyan/5 glow-blur -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-brand-violet/5 glow-blur -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: CTAs & Information */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h2 className="font-outfit text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                Get In Touch
              </h2>
              <h3 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Let's Build Your Automated Future
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Have a manual operation you want off your plate? Or need a custom agent built? Fill out the form or schedule a discovery call with one of our AI architects.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <div className="p-5 bg-white/5 rounded-2xl border border-white/5 flex items-start space-x-4">
                <Calendar className="w-5 h-5 text-brand-cyan shrink-0 mt-1" />
                <div>
                  <h4 className="font-outfit text-sm font-bold text-white">Book a Discovery Call</h4>
                  <p className="text-xs text-gray-400 mt-1 mb-3">
                    Prefer video? Schedule a direct 15-minute scoping call via our calendar.
                  </p>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Calendar modal / link placeholder");
                    }}
                    className="inline-flex items-center text-xs font-bold text-brand-cyan hover:underline"
                  >
                    Select a time slot
                    <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="p-5 bg-white/5 rounded-2xl border border-white/5 flex items-start space-x-4">
                <Mail className="w-5 h-5 text-brand-violet shrink-0 mt-1" />
                <div>
                  <h4 className="font-outfit text-sm font-bold text-white">Email Us Directly</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    Send blueprints, scope documents, or custom RFCs.
                  </p>
                  <span className="text-xs font-mono text-brand-violet mt-2 block">
                    hello@plexonis.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-7 p-8 rounded-2xl glass-card border border-white/5 flex flex-col justify-center">
            {status === "success" ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-brand-cyan/10 border border-brand-cyan/30 rounded-full flex items-center justify-center mx-auto text-brand-cyan">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-outfit text-xl font-bold text-white">
                  Message Received!
                </h4>
                <p className="text-sm text-gray-400 max-w-sm mx-auto">
                  One of our lead engineers will analyze your request and reach out within 1 business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full bg-[#0a0a14] border border-white/10 focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full bg-[#0a0a14] border border-white/10 focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full bg-[#0a0a14] border border-white/10 focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Interest Area
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a14] border border-white/10 focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 rounded-xl px-4 py-3.5 text-sm text-white outline-none transition-all"
                    >
                      <option value="automations">AI Automations</option>
                      <option value="agents">Custom AI Agents</option>
                      <option value="consulting">Strategic AI Consulting</option>
                      <option value="integrations">Intelligent System Integrations</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the workflow or problem you're looking to solve with AI..."
                    className="w-full bg-[#0a0a14] border border-white/10 focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-violet to-brand-cyan hover:opacity-95 shadow-md shadow-brand-cyan/10 transition-all duration-300 disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="animate-spin mr-2 w-4 h-4" />
                      Analyzing details...
                    </>
                  ) : (
                    "Submit Project Brief"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
