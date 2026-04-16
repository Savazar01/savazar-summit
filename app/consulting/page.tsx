"use client";

import { useState } from "react";
import { Heart, ShoppingCart, ChefHat, Briefcase, ShieldCheck, Server, ArrowRight, Globe, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import RegistrationModal from "@/components/RegistrationModal";

const industries = [
  {
    icon: <Heart size={28} />,
    title: "Healthcare Architecture",
    description: "Enterprise-grade digital transformation for hospital networks and diagnostic ecosystems. We implement secure, HIPAA-aligned content management with zero data leakage.",
    features: ["Governance Protocols", "Diagnostic Intelligence", "Secure Portals"],
  },
  {
    icon: <ShoppingCart size={28} />,
    title: "e-Commerce Orchestration",
    description: "Advanced WooCommerce strategy for high-volume retailers. We architect seamless catalog synchronization and automated order fulfillment on independent infrastructure.",
    features: ["Inventory Sync", "Resilient Payment", "Consumer Insights"],
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Insurance & FinTech",
    description: "Sovereign AI for risk assessment, claim automation, and personalized policy generation. Maintaining 100% PII confidentiality in highly regulated markets.",
    features: ["Risk Mapping AI", "Claims Automation", "PII Sequestration"],
  },
  {
    icon: <Globe size={28} />,
    title: "Government & Public Sector",
    description: "Secure document processing and policy analysis agents for public administration. We ensure data sovereignty and operational transparency.",
    features: ["Policy Analysis", "Citizen Service AI", "Sovereign Archives"],
  },
  {
    icon: <Cpu size={28} />,
    title: "Software Dev Companies",
    description: "Private AI coding assistants and automated code auditing tools. Protect your proprietary IP while tripling development velocity with local LLMs.",
    features: ["Local LLM Logic", "Auto Code Audit", "Secure DocGen"],
  },
  {
    icon: <Briefcase size={28} />,
    title: "Agencies & Consultancies",
    description: "High-fidelity creative orchestration and automated client reporting. We build private research agents that analyze data without cloud exposure.",
    features: ["Report Synthesis", "Market Intelligence", "Creative Agents"],
  },
  {
    icon: <ChefHat size={28} />,
    title: "Industrial & Food-Tech",
    description: "Custom digital infrastructure and AI-driven demand forecasting for restaurant chains and industrial production workflows.",
    features: ["Ordering Hubs", "Demand Forecasting", "Supply Chain AI"],
  },
  {
    icon: <ArrowRight size={28} />,
    title: "Training & Education",
    description: "Intelligent learning paths and automated grading assistance. We help training institutes scale knowledge delivery with private curriculum AI.",
    features: ["Curriculum Agents", "Grading Logic", "Adaptive Learning"],
  },
];

const edge = [
  {
    icon: <ShieldCheck size={20} />,
    title: "Zero-Trust Sovereignty",
    description: "Your intellectual property never leaves your infrastructure. We build air-gapped logic paths and private processing nodes.",
  },
  {
    icon: <Server size={20} />,
    title: "Optimized Performance Nodes",
    description: "Full configuration on elite infrastructure (Hostinger / SSDNodes) with custom Docker orchestration for 99.9% uptime.",
  },
  {
    icon: <ArrowRight size={20} />,
    title: "Architectural Independence",
    description: "Eliminate vendor lock-in with open-source excellence. Powered by n8n, Coolify, and dedicated local models.",
  },
];

const process = [
  { step: "01", title: "Intelligence Audit", desc: "We map your data-to-value pathways and identify compliance gaps." },
  { step: "02", title: "Architecture Hardening", desc: "Private VPS provisioning with enterprise-grade security protocols." },
  { step: "03", title: "Governance & Safety", desc: "Implementing proprietary AI guardrails and strict compliance monitoring." },
  { step: "04", title: "AI Orchestration", desc: "Deployment of agentic workflows built specifically for your vertical." },
  { step: "05", title: "Pilot & Stress Test", desc: "Simulating high-load scenarios to ensure system resilience and ROI." },
  { step: "06", title: "Strategic Handoff", desc: "Comprehensive training and transition for your internal intelligence team." },
];

export default function ConsultingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen hero-bg grid-pattern">
      <Navbar onRegisterClick={() => setModalOpen(true)} />

      {/* ─── HERO ─── */}
      <section className="pt-32 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="badge mb-4 inline-block">Enterprise AI Consulting</span>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-7xl font-900 leading-tight mb-6">
            Private Intelligence.{" "}
            <span className="text-gradient-purple">Proven ROI.</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Savazar India Pvt Ltd engineers sovereign AI ecosystems tailored to your unique operational DNA. We don&apos;t just consult; we build the infrastructure that powers your future.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            id="consulting-cta-top"
            className="btn-primary text-base px-10 py-4 inline-flex"
          >
            Book Consultation →
          </button>
        </div>
      </section>

      {/* ─── THE VISION ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading 
          badge="The Strategy"
          title="The Era of"
          highlight="Sovereign AI"
          subtitle="Stop contributing your corporate secrets to public model training. Own your intelligence."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <div className="glass-card p-8">
            <h3 className="font-headline text-2xl font-bold mb-6">Why Savazar India?</h3>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Public AI tools are sufficient for tasks; sovereign AI is built for business. We resolve the core tension between innovation and security by deploying state-of-the-art models inside your firewall.
            </p>
            <ul className="space-y-4">
              {[
                "100% Data Sovereignty — On-premise or private VPS execution.",
                "SaaS Tax Elimination — Replace recurring seat costs with open-source.",
                "Deep Vertical Expertise — Built for Healthcare, Food-Tech, and Finance.",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-full">
            <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full translate-y-12" />
            <div className="relative glass-card p-8 border-purple-500/20 flex flex-col h-full bg-[#0a0a0f]/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="font-headline text-2xl font-bold">Why Sovereign AI?</h3>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                Generic AI models are sufficient for general tasks, but they pose a significant risk to proprietary corporate data. Savazar enables businesses to implement <strong>Sovereign AI</strong>—private, industrial-grade intelligence that runs entirely within your secure infrastructure.
              </p>
              <div className="space-y-4 flex-grow">
                {[
                  { 
                    t: "Complete IP Sequestration", 
                    d: "Your corporate intelligence and strategic secrets never leave your firewall. Zero leakage to public model training." 
                  },
                  { 
                    t: "Immediate Operationalization", 
                    d: "We bypass the AI hype to deliver functional, local infrastructure that automates your specific high-value workflows." 
                  },
                  { 
                    t: "SaaS Tax Elimination", 
                    d: "Replace expensive per-seat subscriptions with open-source excellence (Llama 3, Mistral) on infrastructure you own." 
                  }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                    <h4 className="font-bold text-sm mb-1 text-purple-light">{item.t}</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <SectionHeading 
          badge="Sectors"
          title="Industries We"
          highlight="Serve"
          subtitle="Specific business challenges demand specific architectural solutions."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {industries.map((item, i) => (
            <div key={i} className="glass-card p-8 group hover:border-purple-500/50 transition-colors">
              <div className="mb-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 inline-block text-purple-400 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-[13px] mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.features.map((f, j) => (
                  <span key={j} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-white/10">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── THE EDGE ─── */}
      <section id="edge" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="section-divider mb-16" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="badge mb-4">The Savazar Edge</span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-6">
              AI Infrastructure <span className="text-gradient-gold">Without Vendor Lock-in</span>
            </h2>
            <p className="text-base mb-8" style={{ color: "var(--text-secondary)" }}>
              We don&apos;t sell you a black-box subscription. We sell you the blueprints and the implementation of a system you own forever.
            </p>
            <div className="space-y-6">
              {edge.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-8 border-yellow-500/10 glow-yellow flex items-center justify-center">
            <div className="text-center">
              <Server size={64} className="mx-auto mb-6 text-yellow-500/50" />
              <p className="italic text-lg mb-4">&ldquo;Savazar India India turned our massive legacy database into a searchable, agentic brain in three weeks, running entirely on our own VPS.&rdquo;</p>
              <p className="font-bold">— CTO, E-Commerce Logistics Hub</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="section-divider mb-16" />
        <SectionHeading 
          badge="Deployment"
          title="How We"
          highlight="Deploy"
          subtitle="Our 6-step architectural roadmap to taking your company from AI-curious to AI-sovereign."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {process.map((p, i) => (
            <div key={i} className="glass-card p-8 border-white/5 relative overflow-hidden group hover:border-purple-500/30 transition-all">
              <span className="absolute -right-4 -top-6 text-8xl font-black text-white/5 group-hover:text-purple-500/10 transition-all duration-500">
                {p.step}
              </span>
              <h4 className="font-headline text-xl font-bold mb-4 relative z-10">{p.title}</h4>
              <p className="text-sm leading-relaxed relative z-10" style={{ color: "var(--text-secondary)" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="logistics-box text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-500/5 blur-3xl rounded-full -translate-y-24" />
          <span className="badge mb-4 inline-block relative z-10">Strategic Session</span>
          <h2 className="font-headline text-3xl font-bold mb-4 relative z-10">
            Ready to Deploy <span className="text-gradient-gold">Sovereign AI</span>?
          </h2>
          <p className="text-base mb-8 relative z-10" style={{ color: "var(--text-secondary)" }}>
            Book a 60-minute AI Readiness Consultation (₹5000). We&apos;ll map your highest-value automation opportunities and show you exactly what&apos;s possible on your own private infrastructure.
          </p>
          <div className="flex flex-col items-center gap-4 relative z-10">
            <button
              onClick={() => setModalOpen(true)}
              id="consulting-cta-bottom"
              className="btn-primary text-base px-10 py-4 inline-flex shadow-xl shadow-purple-savazar/20"
            >
              Book Consultation →
            </button>
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-savazar/80">
                NOTE: Consulting fee will be waived if you sign up for implementation.
              </p>
              <p className="text-xs text-gray-500 italic">
                No commitment. No sales pressure. Pure strategic clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <RegistrationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        mode="consulting"
      />
    </main>
  );
}
