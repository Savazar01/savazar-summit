"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  FileText,
  CheckCircle2,
  Loader2,
  ExternalLink,
  Tag,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: "workshop" | "consulting";
}

const INDUSTRIES = [
  "IT",
  "Technology",
  "Business Management",
  "Healthcare",
  "Insurance",
  "Government",
  "Manufacturing",
  "Education",
  "Finance",
  "Retail",
  "Other",
];

const TECH_SKILLS_OPTIONS = [
  "IAAS",
  "PAAS",
  "SAAS",
  "Operating Systems",
  "Software Development",
  "Cloud Architecture",
  "DevOps",
  "Cybersecurity",
];

const AI_SKILLS_OPTIONS = [
  "LLMs",
  "Fine-Tuning",
  "RAG",
  "Vector DB",
  "Multi-Agent Systems",
  "MCP",
  "n8n / Automation",
  "Open Source Models",
  "Claude / Antigravity",
];

const ROLES = [
  "Student",
  "Professional",
  "SMB Owner",
  "Senior Executive",
  "Developer / Engineer",
  "Consultant",
  "Other",
];

const EXP_LABELS: Record<number, string> = {
  1: "Beginner — Just starting out",
  2: "Curious — Explored a few tools",
  3: "Intermediate — Built some projects",
  4: "Advanced — Deployed AI solutions",
  5: "Expert — I build AI systems",
};

interface FlyerLink {
  title: string;
  url: string;
}

interface SuccessData {
  message: string;
  coupon_discount?: string | null;
  flyers: FlyerLink[];
}

export default function RegistrationModal({ isOpen, onClose, mode = "workshop" }: RegistrationModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    whatsapp: "",
    city: "",
    country: "",
    role: "",
    years_experience: "",
    ai_experience: 1,
    coupon_code: "",
    company_name: "",
    proposed_time: "",
    additional_details: "",
    referrer_name: "",
    referrer_email: "",
    company_size: "",
    turnover: "",
    company_location: "",
    requirement_description: "",
    consulting_industry: "",
  });

  const [interests, setInterests] = useState<string[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);
  const [techSkills, setTechSkills] = useState<string[]>([]);
  const [aiSkills, setAiSkills] = useState<string[]>([]);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState<SuccessData | null>(null);

  const isConsulting = mode === "consulting";
  const showTechGroup = industries.includes("IT") || industries.includes("Technology");
  const showAiGroup = form.ai_experience >= 3;

  // Default to Certification if in workshop mode
  useEffect(() => {
    if (!isConsulting && interests.length === 0) {
      setInterests(["Sovereign AI Elite Certification (April 25 – May 3)"]);
    }
  }, [isConsulting, interests]);

  function toggleItem(list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, item: string) {
    setError(""); // Clear error when interacting
    setList((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  }

  const nextStep = () => {
    setError("");
    if (step === 1) {
      if (!form.full_name || !form.email || !form.whatsapp || !form.city || !form.country) {
        setError("Please fill in contact details (Name, Email, WhatsApp, City, Country).");
        return;
      }
    }
    if (step === 2) {
      if (isConsulting) {
        if (!form.company_name || !form.proposed_time) {
          setError("Please provide company name and proposed time.");
          return;
        }
        // Ensure interests (focus areas) are selected if we want to be strict, 
        // but user didn't explicitly ask for mandatory focus areas. 
        // I'll keep it as is for now.
      } else {
        if (interests.length === 0) {
          setError("Please confirm the Certification Program selection.");
          return;
        }
      }
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    // Client-side validation final check
    if (!isConsulting) {
      if (!form.role || !form.years_experience || industries.length === 0) {
        setError("Please select your Professional Role, Years of Experience, and at least one Industry.");
        if (modalRef.current) {
          modalRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }
    } else {
      // Consulting validation
      if (!form.company_size || !form.turnover || !form.consulting_industry || !form.requirement_description) {
        setError("Please complete all business profile fields (Size, Turnover, Industry, and Requirement).");
        if (modalRef.current) {
          modalRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }
    }

    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          ...form, 
          interests, 
          industries,
          tech_skills: techSkills,
          ai_skills: aiSkills,
          request_type: mode 
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Submission failed. Please try again.");
        if (modalRef.current) {
          modalRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        setSuccess(data);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    onClose();
    setTimeout(() => {
      setSuccess(null);
      setError("");
      setStep(1);
      setForm({ 
        full_name: "", 
        email: "",
        whatsapp: "", 
        city: "",
        country: "",
        role: "", 
        years_experience: "",
        ai_experience: 3, 
        coupon_code: "",
        company_name: "",
        proposed_time: "",
        additional_details: "",
        referrer_name: "",
        referrer_email: "",
        company_size: "",
        turnover: "",
        company_location: "",
        requirement_description: "",
        consulting_industry: "",
      });
      setInterests([]);
      setIndustries([]);
      setTechSkills([]);
      setAiSkills([]);
    }, 300);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
              className="glass-modal w-full max-w-xl max-h-[95vh] overflow-y-auto relative scroll-smooth"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 p-6 border-b border-purple-savazar/20 bg-[#0f0f1a]/80 backdrop-blur-xl flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold opacity-80">
                    {isConsulting ? "Consultation Fee: ₹5000" : "Program Fee: ₹50,000"} 
                    <span className="ml-2 py-0.5 px-2 bg-gradient-gold text-black text-[10px] rounded-full uppercase tracking-tighter">
                      10% OFF with code GVSS
                    </span>
                  </p>
                  <h2 className="font-headline text-2xl font-bold flex items-center gap-2">
                    {isConsulting ? "Consultation Request" : "Workshop Registration"}
                    {!success && <span className="text-xs bg-purple-savazar/20 text-purple-light px-2 py-0.5 rounded-full border border-purple-savazar/40">Step {step}/3</span>}
                  </h2>
                  <div className="flex flex-col mt-1">
                    <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                      Savazar India AI Summit 2026 · Lead Intelligence Portal
                    </p>
                    {isConsulting && !success && (
                      <div className="mt-2 text-[10px] font-bold uppercase tracking-wider text-yellow-savazar flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-yellow-savazar animate-pulse" />
                        Professional Consultation Fee: ₹5000 (Waiver Applicable)
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-xl hover:bg-purple-savazar/20 transition-all text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Progress Bar */}
              {!success && (
                <div className="h-1 w-full bg-purple-savazar/10 flex">
                  {[1, 2, 3].map(s => (
                    <div 
                      key={s} 
                      className={`h-full flex-grow transition-all duration-500 ${step >= s ? "bg-gradient-to-right from-purple-savazar to-purple-light shadow-[0_0_10px_rgba(102,103,171,0.5)]" : "bg-transparent"}`}
                    />
                  ))}
                </div>
              )}

              {/* Body */}
              <div className="p-8">
                {success ? (
                  /* Success State */
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 text-center py-6">
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-yellow-savazar/10 flex items-center justify-center mb-6 border border-yellow-savazar/30 shadow-[0_0_20px_rgba(252,203,11,0.1)]">
                        <CheckCircle2 size={40} className="text-yellow-savazar" />
                      </div>
                      <h3 className="font-headline text-3xl font-bold mb-3">
                        {isConsulting ? "Request Sent!" : "Registration Complete!"}
                      </h3>
                      <div className="space-y-4">
                        <p className="text-gray-400 max-w-sm mx-auto leading-relaxed text-sm">
                          {success.message}
                        </p>
                        {isConsulting && (
                          <div className="bg-yellow-savazar/5 border border-yellow-savazar/10 p-5 rounded-xl max-w-sm mx-auto text-left">
                            <p className="text-xs text-yellow-savazar/90 leading-relaxed">
                              <span className="font-bold block mb-1 text-yellow-savazar">Strategic Intake Note:</span>
                              A professional consulting fee of <strong>₹5000</strong> applies for the 60-minute strategy session. This fee is fully <strong>waived</strong> should you choose to proceed with any of our implementation packages.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {success.coupon_discount && (
                      <div className="p-4 rounded-xl bg-yellow-savazar/5 border border-yellow-savazar/20 flex items-center justify-center gap-2">
                        <Tag size={16} className="text-yellow-savazar" />
                        <span className="text-sm font-bold text-yellow-savazar uppercase tracking-widest">{success.coupon_discount}</span>
                      </div>
                    )}

                    {!isConsulting && (
                      <div className="space-y-3 pt-4 border-t border-purple-savazar/20">
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">Secure Your Resources</p>
                        <div className="grid grid-cols-1 gap-3">
                          {success.flyers.map((flyer, i) => (
                            <a
                              key={i}
                              href={flyer.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-4 p-4 rounded-xl bg-purple-savazar/5 border border-purple-savazar/10 hover:border-purple-savazar/40 transition-all group"
                            >
                              <div className="w-10 h-10 rounded-lg bg-purple-savazar/20 flex items-center justify-center">
                                <FileText size={20} className="text-purple-light" />
                              </div>
                              <div className="text-left flex-grow">
                                <p className="text-sm font-bold">{flyer.title}</p>
                                <p className="text-[10px] text-gray-500">PDF Document · Instant Access</p>
                              </div>
                              <ExternalLink size={16} className="text-gray-600 group-hover:text-purple-light transition-colors" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    <button onClick={handleClose} className="btn-primary w-full justify-center h-14 rounded-xl font-bold text-lg">
                      Finish
                    </button>
                  </motion.div>
                ) : (
                  /* Form Flow */
                  <form onSubmit={handleSubmit} className="space-y-8 min-h-[400px]">
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="sm:col-span-2">
                              <label className="form-label">Full Name *</label>
                              <input 
                                type="text" className="form-input h-12" placeholder="e.g. Arjun Sharma" 
                                value={form.full_name} onChange={e => setForm({...form, full_name: e.target.value})} required 
                              />
                            </div>
                            <div className="sm:col-span-2">
                              <label className="form-label">Email Address *</label>
                              <input 
                                type="email" className="form-input h-12" placeholder="e.g. arjun@example.com" 
                                value={form.email} onChange={e => setForm({...form, email: e.target.value})} required 
                              />
                            </div>
                            <div>
                              <label className="form-label">WhatsApp Number *</label>
                              <input 
                                type="tel" className="form-input h-12" placeholder="+91 98XXX XXXXX" 
                                value={form.whatsapp} onChange={e => setForm({...form, whatsapp: e.target.value})} required 
                              />
                            </div>
                            <div>
                              <label className="form-label">City *</label>
                              <input 
                                type="text" className="form-input h-12" placeholder="e.g. Hyderabad" 
                                value={form.city} onChange={e => setForm({...form, city: e.target.value})} required 
                              />
                            </div>
                            <div>
                              <label className="form-label">Country *</label>
                              <input 
                                type="text" className="form-input h-12" placeholder="e.g. India" 
                                value={form.country} onChange={e => setForm({...form, country: e.target.value})} required 
                              />
                            </div>
                            <div className="sm:col-span-2">
                              <label className="form-label text-yellow-savazar/80">Referred By (Name)</label>
                              <input 
                                type="text" className="form-input h-12 border-yellow-savazar/10 focus:border-yellow-savazar/40" placeholder="Lead Generator Name (Optional)" 
                                value={form.referrer_name} onChange={e => setForm({...form, referrer_name: e.target.value})} 
                              />
                            </div>
                            <div className="sm:col-span-2">
                              <label className="form-label text-yellow-savazar/80">Referred By (Email)</label>
                              <input 
                                type="email" className="form-input h-12 border-yellow-savazar/10 focus:border-yellow-savazar/40" placeholder="Lead Generator Email (Optional)" 
                                value={form.referrer_email} onChange={e => setForm({...form, referrer_email: e.target.value})} 
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                          {isConsulting ? (
                            <div className="space-y-6">
                              <div>
                                <label className="form-label">Company Name *</label>
                                <input type="text" className="form-input h-12" value={form.company_name} onChange={e => setForm({...form, company_name: e.target.value})} placeholder="e.g. Acme Innovations" required />
                              </div>
                                <div>
                                  <label className="form-label">Proposed Time * (At least 3 days from now)</label>
                                  <input 
                                    type="date" 
                                    className="form-input h-12" 
                                    value={form.proposed_time} 
                                    onChange={e => setForm({...form, proposed_time: e.target.value})} 
                                    min={(() => {
                                      const d = new Date();
                                      d.setDate(d.getDate() + 3);
                                      return d.toISOString().split("T")[0];
                                    })()}
                                    required 
                                  />
                                </div>
                                <div>
                                  <label className="form-label">Strategic Focus Areas</label>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {[
                                      "AI Transformation Strategy", 
                                      "Build Agentic AI Apps/Websites", 
                                      "AI Agent Automation", 
                                      "Private AI Infrastructure", 
                                      "Provide AI Training", 
                                      "Modernize current website/apps"
                                    ].map(opt => (
                                      <button
                                        key={opt} type="button" onClick={() => toggleItem(interests, setInterests, opt)}
                                        className={`text-left p-3 rounded-xl border transition-all flex items-center justify-between ${interests.includes(opt) ? "bg-purple-savazar/20 border-purple-savazar text-purple-light" : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30"}`}
                                      >
                                        <span className="text-[10px] font-bold uppercase tracking-tight">{opt}</span>
                                        {interests.includes(opt) && <CheckCircle2 size={14} />}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>
                          ) : (
                            <div className="space-y-6">
                               <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-yellow-savazar/40 pl-4">
                                 You are registering for the <b>Integrated Certification Program</b> (₹50,000). This covers both intensive weekends of training.
                               </p>
                               <div className="grid grid-cols-1 gap-3">
                                 {[
                                   { id: "Sovereign AI Elite Certification (April 25 – May 3, 2026)", desc: "Agentic Automation (W1) + Solution Architecture (W2). *Proposed dates subject to change based on registrations." },
                                 ].map(workshop => (
                                   <button
                                     key={workshop.id} type="button" 
                                     className={`text-left p-5 rounded-xl border transition-all flex gap-4 bg-yellow-savazar/10 border-yellow-savazar/50 ring-1 ring-yellow-savazar/20`}
                                   >
                                     <div className={`w-6 h-6 rounded-md flex items-center justify-center mt-1 border bg-yellow-savazar border-transparent text-black`}>
                                       <CheckCircle2 size={14} />
                                     </div>
                                     <div className="flex-grow">
                                       <p className="font-bold text-white">{workshop.id}</p>
                                       <p className="text-xs text-gray-500 mt-1">{workshop.desc}</p>
                                     </div>
                                   </button>
                                 ))}
                               </div>
                               
                               <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                                 <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                   <Tag size={12} /> Promo Code
                                 </label>
                                 <input 
                                   type="text" className="form-input h-10 text-sm uppercase" 
                                   placeholder="ENTER CODE (e.g. GVSS)" 
                                   value={form.coupon_code}
                                   onChange={e => setForm({...form, coupon_code: e.target.value.toUpperCase()})}
                                 />
                                 {form.coupon_code === "GVSS" && (
                                   <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 text-yellow-savazar text-[10px] font-bold">
                                     <CheckCircle2 size={12} />
                                     10% CERTIFICATION DISCOUNT APPLIED
                                   </motion.div>
                                 )}
                               </div>
                             </div>
                          )}
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8 pb-4">
                          {isConsulting ? (
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                  <label className="form-label">Company Size (Employees) *</label>
                                  <select 
                                    className="form-input h-12" 
                                    value={form.company_size} 
                                    onChange={e => setForm({...form, company_size: e.target.value})}
                                    required
                                  >
                                    <option value="">Select Size…</option>
                                    <option value="1-10">1-10 (Startup)</option>
                                    <option value="11-50">11-50 (SMB)</option>
                                    <option value="51-200">51-200 (Growth)</option>
                                    <option value="201-500">201-500 (Enterprise Mid)</option>
                                    <option value="500+">500+ (Corporate)</option>
                                  </select>
                                </div>
                                <div>
                                  <label className="form-label">Annual Turnover *</label>
                                  <input 
                                    type="text" className="form-input h-12" 
                                    placeholder="e.g. ₹5 Cr or $1M" 
                                    value={form.turnover} 
                                    onChange={e => setForm({...form, turnover: e.target.value})}
                                    required 
                                  />
                                </div>
                                <div className="sm:col-span-2">
                                  <label className="form-label">Industry Classification *</label>
                                  <input 
                                    type="text" className="form-input h-12" 
                                    placeholder="Specify your industry (e.g. FinTech, Pharma)" 
                                    value={form.consulting_industry} 
                                    onChange={e => setForm({...form, consulting_industry: e.target.value})}
                                    required 
                                  />
                                </div>
                                <div className="sm:col-span-2">
                                  <label className="form-label">Company Location (City, Country) *</label>
                                  <input 
                                    type="text" className="form-input h-12" 
                                    placeholder="e.g. Bangalore, India" 
                                    value={form.company_location} 
                                    onChange={e => setForm({...form, company_location: e.target.value})}
                                    required 
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="form-label">Describe your requirement *</label>
                                <textarea 
                                  className="form-input py-3 min-h-[120px] text-sm" 
                                  placeholder="Please provide details about your project scope, timeline, and core AI objectives…"
                                  value={form.requirement_description}
                                  onChange={e => setForm({...form, requirement_description: e.target.value})}
                                  required
                                />
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className="p-6 rounded-2xl bg-purple-savazar/10 border border-purple-savazar/20 space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                  <div>
                                    <label className="form-label text-white">Professional Role *</label>
                                    <select 
                                      className={`form-input h-12 ${!form.role && error.includes("Role") ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]" : ""}`}
                                      value={form.role} 
                                      onChange={e => {
                                        setForm({...form, role: e.target.value});
                                        if(error) setError("");
                                      }} 
                                      required
                                    >
                                      <option value="">Select Role…</option>
                                      {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                                    </select>
                                  </div>
                                  <div>
                                    <label className="form-label text-white">Years of Experience *</label>
                                    <select 
                                      className={`form-input h-12 ${!form.years_experience && error.includes("Experience") ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)]" : ""}`}
                                      value={form.years_experience} 
                                      onChange={e => {
                                        setForm({...form, years_experience: e.target.value});
                                        if(error) setError("");
                                      }} 
                                      required
                                    >
                                      <option value="">Select Range…</option>
                                      {["0-2 years", "3-5 years", "6-10 years", "10+ years"].map(r => <option key={r} value={r}>{r}</option>)}
                                    </select>
                                  </div>
                                </div>

                                <div>
                                  <label className="form-label text-white">Industry Classification *</label>
                                  <div className="flex flex-wrap gap-2">
                                    {INDUSTRIES.map(ind => (
                                      <button
                                        key={ind} type="button" onClick={() => toggleItem(industries, setIndustries, ind)}
                                        className={`px-4 py-2 rounded-full text-xs border transition-all ${industries.includes(ind) ? "bg-purple-savazar text-white border-transparent shadow-[0_4px_12px_rgba(102,103,171,0.4)]" : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30"}`}
                                      >
                                        {ind}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {showTechGroup && (
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                                  <p className="text-sm font-bold text-purple-light underline decoration-purple-savazar/40 underline-offset-4">Technical Skill Sets</p>
                                  <div className="grid grid-cols-2 gap-3">
                                    {TECH_SKILLS_OPTIONS.map(skill => (
                                      <label key={skill} className="flex items-center gap-2 cursor-pointer group">
                                        <input 
                                          type="checkbox" checked={techSkills.includes(skill)} 
                                          onChange={() => toggleItem(techSkills, setTechSkills, skill)}
                                          className="hidden"
                                        />
                                        <div className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${techSkills.includes(skill) ? "bg-purple-savazar border-transparent" : "bg-transparent border-white/20 group-hover:border-white/40"}`}>
                                          {techSkills.includes(skill) && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                                        </div>
                                        <span className={`text-xs transition-colors ${techSkills.includes(skill) ? "text-white" : "text-gray-500"}`}>{skill}</span>
                                      </label>
                                    ))}
                                  </div>
                                </motion.div>
                              )}

                              <div>
                                <label className="form-label flex justify-between">
                                  AI Experience Level
                                  <span className="text-purple-light font-bold">Level {form.ai_experience}/5</span>
                                </label>
                                <input 
                                  type="range" min={1} max={5} value={form.ai_experience} 
                                  onChange={e => setForm({...form, ai_experience: Number(e.target.value)})}
                                  className="w-full h-1.5 mt-4 bg-white/10 rounded-full appearance-none cursor-pointer accent-purple-savazar" 
                                />
                                <p className="text-[10px] mt-2 text-gray-500 italic tracking-wider uppercase">{EXP_LABELS[form.ai_experience]}</p>
                              </div>

                              {showAiGroup && (
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-6 rounded-2xl bg-purple-savazar/[0.02] border border-purple-savazar/20 space-y-4">
                                  <p className="text-sm font-bold text-yellow-savazar underline decoration-yellow-savazar/40 underline-offset-4">Advanced AI Capabilities</p>
                                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {AI_SKILLS_OPTIONS.map(skill => (
                                      <button
                                        key={skill} type="button" onClick={() => toggleItem(aiSkills, setAiSkills, skill)}
                                        className={`p-2.5 rounded-lg text-[10px] font-bold border transition-all ${aiSkills.includes(skill) ? "bg-yellow-savazar/20 border-yellow-savazar text-yellow-savazar" : "bg-black/40 border-white/10 text-gray-500"}`}
                                      >
                                        {skill}
                                      </button>
                                    ))}
                                  </div>
                                </motion.div>
                              )}

                              <div>
                                <label className="form-label">Additional Intelligence / Needs</label>
                                <textarea 
                                  className="form-input py-3 min-h-[100px] text-xs" 
                                  placeholder="Tell us about specific challenges or goals you have…"
                                  value={form.additional_details}
                                  onChange={e => setForm({...form, additional_details: e.target.value})}
                                />
                              </div>
                            </>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="flex gap-4 pt-6 border-t border-white/10">
                      {step > 1 && (
                        <button type="button" onClick={prevStep} className="btn-secondary h-14 px-8 rounded-xl flex items-center gap-2 group">
                          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                          Back
                        </button>
                      )}
                      {step < 3 ? (
                        <button type="button" onClick={nextStep} className="btn-primary flex-grow h-14 rounded-xl flex items-center justify-center gap-2 font-bold group">
                          Next Stage
                          <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </button>
                      ) : (
                        <button type="submit" disabled={loading} className="btn-primary flex-grow h-14 rounded-xl flex items-center justify-center gap-3 font-bold group">
                          {loading ? <Loader2 size={18} className="animate-spin" /> : (
                            <>
                              Complete Intelligence Profile
                              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </form>
                )}

                {error && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-2">
                    <X size={16} />
                    {error}
                  </motion.div>
                )}

                <p className="text-[10px] text-center mt-8 text-gray-600 uppercase tracking-widest leading-loose">
                  Data Security Enabled · Encryption: AES-256 · Compliance: India DPDP 2023
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
