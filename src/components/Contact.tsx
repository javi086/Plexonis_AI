"use client";

import { useState } from "react";
import { Mail, Check, MessageSquare, ArrowRight, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "lead-agents",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email Validation using Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_CONTACT_WEBHOOK_URL;
      
      if (webhookUrl) {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error("Webhook submission failed");
        }
      } else {
        // Fallback simulated network request for testing
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "lead-agents",
        message: "",
      });
    } catch (err) {
      setStatus("error");
    }
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
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background ambient lighting */}
      <div className="absolute top-[40%] left-[-15%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/5 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-600/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Action & Info */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold tracking-wide text-cyan-400">
                <span>{t.contact.badge}</span>
              </div>
              <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-50 leading-tight tracking-tight">
                {t.contact.title}
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Quick Actions Cards */}
            <div className="space-y-4">
              {/* Chatbot Card */}
              <div 
                className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 flex items-start space-x-4 hover:border-slate-700 transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
                <div>
                  <h3 className="font-outfit text-sm font-bold text-slate-100">{t.contact.chatbotTitle}</h3>
                  <p className="text-xs text-slate-400 mt-1 mb-3">
                    {t.contact.chatbotDesc}
                  </p>
                  <span className="inline-flex items-center text-xs font-bold text-cyan-400 ">
                    {t.contact.chatbotBtn}
                    <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Direct Contact Card */}
              <div className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 flex items-start space-x-4 hover:border-slate-700 transition-colors">
                <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                <div>
                  <h3 className="font-outfit text-sm font-bold text-slate-100">{t.contact.emailTitle}</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {t.contact.emailDesc}
                  </p>
                  <a 
                    href="mailto:plexonisai@gmail.com" 
                    className="text-xs font-mono text-cyan-400 mt-2 block hover:underline"
                  >
                    plexonisai@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="md:col-span-7 p-8 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-center relative">
            {status === "success" ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto text-cyan-400">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-outfit text-2xl font-bold text-slate-50">
                  {t.contact.form.successTitle}
                </h3>
                <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                  {t.contact.form.successDesc}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-200 transition-colors"
                >
                  {t.contact.form.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Company Input */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {t.contact.form.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all"
                    />
                  </div>

                  {/* Refined Interest Dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {t.contact.form.goal}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl px-4 py-3 text-sm text-slate-100 outline-none transition-all"
                    >
                      <option value="lead-agents">{t.contact.form.dropdownOptions.leadAgents}</option>
                      <option value="workflows">{t.contact.form.dropdownOptions.workflows}</option>
                      <option value="web-design">{t.contact.form.dropdownOptions.webDesign}</option>
                      <option value="knowledge-base">{t.contact.form.dropdownOptions.knowledgeBase}</option>
                      <option value="integrations">{t.contact.form.dropdownOptions.integrations}</option>
                    </select>
                  </div>
                </div>

                {/* Project Details Textarea */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {t.contact.form.overview}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.overviewPlaceholder}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all resize-none animate-pulse-slow"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-cyan-500/10 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="animate-spin mr-2 w-4 h-4" />
                      {t.contact.form.submittingBtn}
                    </>
                  ) : (
                    t.contact.form.submitBtn
                  )}
                </button>
                
                {status === "error" && (
                  <p className="text-xs text-red-400 text-center font-semibold mt-2">
                    Please ensure you have entered a valid email address and try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}