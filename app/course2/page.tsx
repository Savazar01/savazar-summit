"use client";

import { useState } from "react";
import { Layers, Globe, GitBranch, Cloud, Shield, TrendingUp, Star, Tag, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import RegistrationModal from "@/components/RegistrationModal";

const curriculum = [
  {
    title: "Phase 1: Generative Architecture",
    desc: "Mastering the 'Sovereign UI' design language with Google Stitch and elite Antigravity prompting.",
    icon: <Star size={20} />,
  },
  {
    title: "Phase 2: Deployment Orchestration",
    desc: "Configuring hardened CI/CD pipelines with GitHub Actions and automated Coolify load-balancing.",
    icon: <GitBranch size={20} />,
  },
  {
    title: "Phase 3: Production Handoff",
    desc: "Deploying high-fidelity, enterprise-ready apps on SSDNodes with Cloudflare WAF protection.",
    icon: <Cloud size={20} />,
  },
];

const benefits = [
  "Strategic Architectural Workshop",
  "Full-stack AI Deployment Mastery",
  "Cloudflare WAF & Security Protocols",
  "Enterprise-Grade Live Portfolio",
];

const toolStack = [
  { name: "Next.js 15 (App Router)", category: "Core Framework" },
  { name: "SQLite + Better-SQLite3", category: "Performance Data" },
  { name: "Antigravity & Stitch", category: "Design Intelligence" },
  { name: "Coolify (Sovereign PaaS)", category: "Orchestration" },
  { name: "Cloudflare (Enterprise)", category: "Security & DNS" },
];

export default function Course2Page() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen hero-bg grid-pattern">
      <Navbar onRegisterClick={() => setModalOpen(true)} />

      {/* ─── HERO ─── */}
      <section className="pt-40 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex flex-col items-center gap-2">
            <span className="badge inline-block">Certification Part II (May 2-3, 2026)</span>
            <span className="text-[10px] text-yellow-savazar/60 italic">*Proposed dates, subject to change based on registration volume.</span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-7xl font-900 leading-tight mb-6">
            AI Solution <span className="text-gradient-purple">Architect</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Move beyond prompt engineering. Design, architect, and deploy end-to-end sovereign applications that solve real-world enterprise complexity.
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
          <div className="glass-card p-10 border-purple-500/20 glow-purple">
            <h2 className="font-headline text-2xl font-bold mb-4">Engineering the Intelligence Layer</h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              The future belongs to those who build the systems that others merely use. This advanced workshop track is designed for senior developers and technical leads. We dive deep into the technical stack utilized by Savazar India, focusing on high-fidelity design systems, hardened security protocols, and CI/CD pipelines that ensure your AI applications are robust, scalable, and sovereign.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-5 rounded-xl glass-card border-purple-500/30">
              <Shield className="text-purple-400" size={24} />
              <span className="text-sm font-semibold">Enterprise-Grade Security Hardening</span>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-xl glass-card border-yellow-500/30">
              <TrendingUp className="text-yellow-400" size={24} />
              <span className="text-sm font-semibold">High-Concurrency Performance Tuning</span>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-xl glass-card border-green-500/30">
              <Globe className="text-green-400" size={24} />
              <span className="text-sm font-semibold">Global Sovereign Infrastructure Scale</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TOOL STACK ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="section-divider mb-16" />
        <h3 className="text-center font-headline text-sm tracking-widest uppercase mb-10" style={{ color: "var(--text-secondary)" }}>
          The Sovereign Architecture Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {toolStack.map((tool, i) => (
            <div key={i} className="px-6 py-4 glass-card text-center min-w-[180px] hover:border-gold-500/30 transition-all">
              <p className="text-xs uppercase tracking-tighter mb-1 font-bold text-gradient-gold">{tool.category}</p>
              <p className="font-headline text-base">{tool.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CURRICULUM ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <SectionHeading 
          badge="The Path"
          title="Architectural"
          highlight="Curriculum"
          subtitle="Deep dive into the patterns used by Savazar India to orchestrate private enterprise AI."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {curriculum.map((item, i) => (
            <div key={i} className="glass-card p-10 group border-purple-500/10 hover:border-purple-500/40 transition-all">
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
        <div className="glass-card p-12 glow-purple text-center border-purple-500/20">
          <h2 className="font-headline text-3xl font-bold mb-8">Professional Outcomes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-3">
                <CheckCircle size={32} className="text-purple-400 mb-2" />
                <p className="text-xs font-bold uppercase tracking-widest leading-relaxed px-4">{b}</p>
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
              { label: "Date", value: "May 2–3, 2025" },
              { label: "Duration", value: "2 Full Days" },
              { label: "Format", value: "In-Person" },
              { label: "Output", value: "Live AI App" },
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
            <div className="space-y-3 text-center">
              <div>
                <p className="text-xs uppercase tracking-widest mb-1 flex items-center justify-center gap-1" style={{ color: "var(--text-secondary)" }}>
                  <Tag size={12} /> Discount Code
                </p>
                <span className="coupon-code">GVSS</span>
                <p className="text-xs mt-1" style={{ color: "#FCCB0B" }}>Apply for 10% OFF</p>
              </div>
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
