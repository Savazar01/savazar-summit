"use client";

import { useState } from "react";
import { Bot, Server, Workflow, ShieldCheck, Clock, IndianRupee, Tag, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import RegistrationModal from "@/components/RegistrationModal";

const curriculum = [
  {
    title: "Phase 1: Sovereign Foundation",
    desc: "Bare-metal VPS provisioning, Linux hardening, and private Docker orchestration via Coolify.",
    icon: <Server size={20} />,
  },
  {
    title: "Phase 2: Agentic Intelligence",
    desc: "Architecting decision-making logic using high-parameter open-source LLMs and n8n nodes.",
    icon: <Workflow size={20} />,
  },
  {
    title: "Phase 3: ROI Deployment",
    desc: "Launching autonomous Lead Acquisition and Financial Intelligence pipelines for your business.",
    icon: <Bot size={20} />,
  },
];

const benefits = [
  "Absolute Data Sovereignty",
  "Zero SaaS Subscription Tax",
  "Scalable B2B Infrastructure",
  "Perpetual Ownership of IP",
];

export default function Course1Page() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen hero-bg grid-pattern">
      <Navbar onRegisterClick={() => setModalOpen(true)} />

      {/* ─── HERO ─── */}
      <section className="pt-40 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex flex-col items-center gap-2">
            <span className="badge inline-block">Certification Part I (April 25-26, 2026)</span>
            <span className="text-[10px] text-yellow-savazar/60 italic">*Proposed dates, subject to change based on registration volume.</span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-7xl font-900 leading-tight mb-6">
            Agentic AI <span className="text-gradient-gold">Automation</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Stop renting intelligence by the seat. Build, host, and own your digital workforce on private infrastructure. 100% Control. 0% SaaS Fees.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setModalOpen(true)}
              className="btn-primary text-base px-10 py-4"
            >
              Register Interest for Workshop
            </button>
          </div>
        </div>
      </section>

      {/* ─── HOOK ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-10">
            <Clock className="text-purple-400 mb-6" size={40} />
            <h2 className="font-headline text-2xl font-bold mb-4">Reclaiming Human Capital</h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Repetitive administrative tasks are the largest hidden cost in modern business. In this intensive hands-on workshop, we move beyond chat prompts to true **orchestration**. By the end of the summit, you will have a live, hardened AI engine running on your sovereign VPS, executing workflows that save your firm 40+ billable hours every month.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 glow-purple-sm">
              <ShieldCheck className="text-green-400 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-base mb-1">Corporate Sovereignty</h4>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Your institutional knowledge, customer data, and API keys stay behind your firewall. Guaranteed.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 glow-gold-sm">
              <Bot className="text-yellow-400 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-base mb-1">High-Fidelity Automation</h4>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Execute complex, multi-step chains that think and pivot based on live data, not just static scripts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CURRICULUM ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <SectionHeading 
          badge="Architectural Path"
          title="The Implementation"
          highlight="Roadmap"
          subtitle="From infrastructure provisioning to live ROI in 48 technical hours."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {curriculum.map((item, i) => (
            <div key={i} className="glass-card p-10 group hover:border-purple-500/50 transition-all">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="glass-card p-12 glow-purple text-center">
          <h2 className="font-headline text-3xl font-bold mb-8">Why This Workshop?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-sm font-bold">
                <CheckCircle size={18} className="text-gradient-gold" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOGISTICS ─── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="logistics-box">
          <h2 className="font-headline text-2xl font-bold mb-6 text-center">Event Details</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Date", value: "April 25th & 26th" },
              { label: "Duration", value: "Full Weekend" },
              { label: "Format", value: "In-Person" },
              { label: "Seats", value: "Limited" },
            ].map((d, i) => (
              <div key={i} className="text-center">
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-secondary)" }}>{d.label}</p>
                <p className="font-headline font-bold text-sm">{d.value}</p>
              </div>
            ))}
          </div>

          <div className="section-divider" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-6">
            <div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-secondary)" }}>Total Program Investment</p>
              <p className="font-headline text-4xl font-bold text-gradient-gold">₹50,000</p>
              <p className="text-[10px] text-gray-400 mt-1 italic">Includes Part I &amp; II + Full Certification</p>
            </div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest mb-2 flex items-center gap-1" style={{ color: "var(--text-secondary)" }}>
                <Tag size={12} /> Discount Code
              </p>
              <span className="coupon-code">GVSS</span>
              <p className="text-xs mt-2" style={{ color: "#FCCB0B" }}>Apply for 10% OFF</p>
            </div>
          </div>

          <button 
            onClick={() => setModalOpen(true)}
            className="btn-primary w-full justify-center mt-8 text-sm"
          >
            Register Interest for Workshop
          </button>
        </div>
      </section>

      <Footer />
      <RegistrationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        mode="workshop"
      />
    </main>
  );
}
