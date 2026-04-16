"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Building2, BrainCircuit, ShieldCheck, Cpu, TrendingUp, ChevronRight, Layout, Workflow, Scale, Users, Rocket, Zap, Laptop, HardDrive, Lock, CreditCard, Target, Clock, Gamepad2, Server } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";
import PillarCard from "@/components/PillarCard";
import SectionHeading from "@/components/SectionHeading";
import RegistrationModal from "@/components/RegistrationModal";

const pillars = [
  {
    icon: <BrainCircuit size={24} />,
    badge: "Certification · April 25 – May 3",
    title: "Sovereign AI Elite Certification",
    subtitle: "Master the Full Stack. Own the Future.",
    description:
      "An intensive 2-weekend program covering the entire AI ecosystem. *Proposed dates subject to change based on registration volume.",
    features: [
      "Weekend 1: Agentic n8n Automation & Local LLMs",
      "Weekend 2: Full-Stack Architecture & Security",
      "Bare-Metal VPS Provisioning & Hardening",
      "Practical Multi-Agent Orchestration Mastery",
    ],
    price: "₹50,000",
    ctaLabel: "View Program Curriculum",
    ctaHref: "/course1",
    accentColor: "yellow" as const,
  },
  {
    icon: <Building2 size={24} />,
    badge: "For Enterprises",
    title: "B2B AI Strategy",
    subtitle: "Your Industry. Your Data. Your AI.",
    description:
      "Tailored private AI deployment for Healthcare, e-Commerce, and high-volume sectors. Sovereign infrastructure, open source, and full ownership.",
    features: [
      "Industry-specific AI solution design",
      "100% on-premise data sovereignty",
      "Open-source cost efficiency — no vendor lock-in",
      "Strategic AI Readiness Consultation",
    ],
    ctaLabel: "Explore Consulting",
    ctaHref: "/consulting",
    accentColor: "purple" as const,
  },
];

const pillarsWhy = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Data Sovereignty",
    description:
      "Your business data never leaves your infrastructure. No third-party cloud. No vendor access. 100% control — legally and technically.",
    color: "#6667AB",
  },
  {
    icon: <Cpu size={28} />,
    title: "Open-Source Efficiency",
    description:
      "Replace ₹5–50L annual SaaS subscriptions with powerful open-source tools. Same capability. 90% less cost. Full transparency.",
    color: "#FCCB0B",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Agentic Automation",
    description:
      "Deploy AI agents that think, decide, and act autonomously. Turn repetitive workflows into self-running digital employees.",
    color: "#8889C8",
  },
  {
    icon: <Layout size={28} />,
    title: "Agentic AI App Development",
    description:
      "Architect and deploy advanced applications and platforms, seamlessly blending traditional full-stack engineering with autonomous AI Agents.",
    color: "#6667AB",
  },
  {
    icon: <Workflow size={28} />,
    title: "Agentic AI Infrastructure",
    description:
      "Custom-engineered private AI infrastructure and DevOps pipelines, optimized to ensure high-velocity delivery and scalable results.",
    color: "#FCCB0B",
  },
  {
    icon: <Scale size={28} />,
    title: "Governance and Compliance",
    description:
      "Strategic governance frameworks and multi-layered compliance systems, ensuring your machine intelligence is ethical, secure, and observable.",
    color: "#8889C8",
  },
];

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"workshop" | "consulting">("workshop");

  const openModal = (mode: "workshop" | "consulting" = "workshop") => {
    setModalMode(mode);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen hero-bg grid-pattern">
      <Navbar onRegisterClick={() => openModal("workshop")} />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <HeroBackground />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="badge mb-6 inline-block">
              🇮🇳 Savazar India AI Summit 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-headline text-3xl sm:text-5xl lg:text-7xl font-900 leading-tight mb-4"
          >
            Savazar India <span className="text-gradient-gold">AI Summit 2026</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold tracking-widest uppercase opacity-80" style={{ color: "var(--purple-light)" }}>
              Elite Sovereign AI. Private Infrastructure.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Building the gap between AI hype and enterprise ROI through private, secure, and sovereign machine intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <button
              onClick={() => openModal("workshop")}
              id="hero-register-btn"
              className="btn-primary text-base px-10 py-4 inline-flex"
            >
              Register Interest for Workshop
            </button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="grid grid-cols-3 gap-2 sm:gap-6 mt-20 max-w-xl mx-auto"
          >
            {[
              { value: "2", label: "Weekends" },
              { value: "1", label: "Certification" },
              { value: "100%", label: "Sovereignty" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-headline text-3xl font-bold text-gradient-gold">{s.value}</p>
                <p className="text-xs mt-1 uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #1a1a2e)" }}
        />
      </section>

      {/* ─── WHY SAVAZAR ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <SectionHeading
          badge="Our Philosophy"
          title="Why"
          highlight="Savazar?"
          subtitle="We believe AI should be affordable, private, and fully under your control. Here&apos;s how we make that real."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillarsWhy.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-8 text-center"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: `rgba(${item.color === "#FCCB0B" ? "252,203,11" : item.color === "#6667AB" ? "102,103,171" : "136,137,200"},0.15)`, border: `1px solid ${item.color}40` }}
              >
                <span style={{ color: item.color }}>{item.icon}</span>
              </div>
              <h3 className="font-headline text-lg font-bold mb-4">{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── PILLAR CARDS ─── */}
      <section id="workshops" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="section-divider mb-16" />
        <SectionHeading
          badge="Summit Tracks"
          title="Choose Your"
          highlight="AI Journey"
          subtitle="Two intensive workshops and enterprise consulting — all built on the principle of AI sovereignty."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {pillars.map((card, i) => (
            <PillarCard key={i} {...card} index={i} />
          ))}
        </div>

        {/* Bundle Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 p-6 glass-card glow-yellow text-center"
        >
          <p className="font-headline text-sm font-bold text-gradient-gold mb-1">
            🎓 INTEGRATED CERTIFICATION
          </p>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Workshop I &amp; II are now combined into a single 2-weekend program. Gain mastery over the full sovereign AI stack in one comprehensive journey.
          </p>
        </motion.div>
      </section>

      {/* ─── WHO WILL BENEFIT ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
        <SectionHeading
          badge="Participant Profile"
          title="Who Will"
          highlight="Benefit?"
          subtitle="From ambitious students to enterprise founders, this workshop is designed for those who want to move beyond the AI hype."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Users size={24} />,
              title: "Students",
              desc: "High School, College, and University students or recent graduates looking to launch their career in AI engineering and related technology."
            },
            {
              icon: <Rocket size={24} />,
              title: "IT Professionals",
              desc: "Experienced Tech Consultants and developers in IT who are looking to upskill and gain hands-on mastery of sovereign AI technology."
            },
            {
              icon: <Building2 size={24} />,
              title: "Founders & Owners",
              desc: "Startup and SMB leaders aiming to learn, upskill, and deploy private, secure AI inside their organizations without vendor lock-in."
            },
            {
              icon: <Target size={24} />,
              title: "Strategic Roles",
              desc: "Project Managers, Product Managers, System Analysts, Architects, and Business Analysts looking to upskill their AI proficiency."
            }
          ].map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-savazar/20 border border-purple-savazar/30 flex items-center justify-center mb-4 text-purple-light">
                {group.icon}
              </div>
              <h3 className="font-headline text-lg font-bold mb-2">{group.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{group.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── KEY BENEFITS ─── */}
      <section className="bg-white/[0.02] border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Value Proposition"
            title="Key Benefits to"
            highlight="Attend the Summit?"
            subtitle="Stop consuming bite-sized hype. Start building production-ready sovereign intelligence."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            {[
              {
                icon: <Zap className="text-yellow-savazar" />,
                title: "Zero to Hero AI Skills",
                desc: "Pick up core AI engineering skills from the ground up. We skip the fluff and take you through a structured sequence."
              },
              {
                icon: <Clock className="text-purple-light" />,
                title: "Save Time & Skip the Noise",
                desc: "Avoid fragmented tutorials on YouTube, LinkedIn, or Facebook. Gain a cohesive, battle-tested roadmap in just 4 days."
              },
              {
                icon: <Gamepad2 className="text-yellow-savazar" />,
                title: "Hands-on Learning",
                desc: "Learn quickly by 'doing' with real-world scenarios. Spend your time in the code and workflow editor, not just watching."
              },
              {
                icon: <Server className="text-purple-light" />,
                title: "Working AI Infrastructure",
                desc: "Leave with a fully operational AI infrastructure on your own private server that you can use to continue learning and growing."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="mt-1">{benefit.icon}</div>
                <div>
                  <h3 className="font-headline text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRE-REQUISITES ─── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <SectionHeading
          badge="Requirements"
          title="Key Workshop"
          highlight="Pre-Requisites"
          subtitle="Please ensure you meet these technical requirements and commitments to ensure a smooth hands-on experience."
          center
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 border-yellow-savazar/20 glow-yellow"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Laptop className="text-yellow-savazar shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">Hardware Ownership</h4>
                  <p className="text-xs text-gray-400">Personal laptop with Windows 11, MacOS, or Linux. Must be owned by you with full administrator privileges.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <HardDrive className="text-yellow-savazar shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">Minimum Specs</h4>
                  <p className="text-xs text-gray-400">At least 8GB RAM (8MB minimum requested but 8GB assumed for AI) and 500GB available SSD storage.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Lock className="text-purple-light shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">Infrastructure Commitment</h4>
                  <p className="text-xs text-gray-400">Participants must be willing to sign up and pay for their own VPS hosting and necessary LLM API keys for various services.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CreditCard className="text-purple-light shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">Operational Fees</h4>
                  <p className="text-xs text-gray-400">Costs for VPS and AI service usage are paid directly to providers and are separate from the workshop fee.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-yellow-savazar/10 border border-yellow-savazar/20 rounded-xl text-center">
            <p className="text-xs text-yellow-savazar font-medium uppercase tracking-widest">
              A technical readiness audit will be available prior to Day 1.
            </p>
          </div>
        </motion.div>
      </section>


      {/* ─── FINAL CTA ─── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="section-divider mb-16" />
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="logistics-box"
        >
          <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4">
            Ready to Build Your{" "}
            <span className="text-gradient-gold">Sovereign AI</span>{" "}
            Stack?
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--text-secondary)" }}>
            Join the GVSS Summit and transform your relationship with AI — from consumer to creator.
          </p>
          <button
            onClick={() => openModal("workshop")}
            id="bottom-register-btn"
            className="btn-primary text-base px-10 py-4"
          >
            Register Interest for Workshop
          </button>
        </motion.div>
      </section>

      <Footer />
      <RegistrationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        mode={modalMode}
      />
    </main>
  );
}
