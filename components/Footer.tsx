import Link from "next/link";
import { Zap, Mail, MessageCircle, Globe } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="print-footer border-t border-purple-savazar/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative h-12 w-48 transition-transform hover:scale-105">
                <Image
                  src="/images/savazar-logo.png"
                  alt="Savazar India"
                  fill
                  className="object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
            </div>
            <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
              Sovereign AI. Private Infrastructure. Bridging the gap between AI potential and enterprise reality through local-first innovation.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:summit@savazar.com"
                className="p-2 glass-card hover:border-purple-savazar/50 transition-colors"
                aria-label="Email"
              >
                <Mail size={16} style={{ color: "var(--purple-light)" }} />
              </a>
              <a
                href="https://wa.me/91"
                className="p-2 glass-card hover:border-purple-savazar/50 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} style={{ color: "var(--purple-light)" }} />
              </a>
              <a
                href="https://savazar.com"
                className="p-2 glass-card hover:border-purple-savazar/50 transition-colors"
                aria-label="Website"
              >
                <Globe size={16} style={{ color: "var(--purple-light)" }} />
              </a>
            </div>
          </div>

          {/* Summit Pages */}
          <div>
            <h4 className="font-headline text-xs font-600 mb-4 tracking-widest uppercase" style={{ color: "var(--purple-light)" }}>
              Summit Tracks
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li><Link href="/" className="hover:text-white transition-colors">Summit Home</Link></li>
              <li><Link href="/course1" className="hover:text-white transition-colors">Workshop I</Link></li>
              <li><Link href="/course2" className="hover:text-white transition-colors">Workshop II</Link></li>
              <li><Link href="/consulting" className="hover:text-white transition-colors">Consulting</Link></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h4 className="font-headline text-xs font-600 mb-4 tracking-widest uppercase" style={{ color: "var(--purple-light)" }}>
              Legal
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition-colors">Cookies Notice</Link></li>
              <li><Link href="/data-privacy" className="hover:text-white transition-colors">Data Privacy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Event Details */}
          <div>
            <h4 className="font-headline text-xs font-600 mb-4 tracking-widest uppercase" style={{ color: "var(--purple-light)" }}>
              Event Details
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li>📅 Workshop I: April 25, 2026</li>
              <li>📅 Workshop II: May 2–3, 2026</li>
              <li className="text-[10px] text-yellow-savazar/60 italic leading-tight mt-1">
                *Proposed dates subject to change based on registrations.
              </li>
              <li>📍 India — Private Venue</li>
              <li>🌐 summit.savazar.com</li>
            </ul>
          </div>
        </div>

        <div className="section-divider" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs" style={{ color: "var(--text-secondary)" }}>
          <p>© 2026 Savazar India Pvt Ltd. All rights reserved.</p>
          <p>Savazar India AI Summit 2026 — Sovereign AI for the Indian Enterprise</p>
        </div>
      </div>
    </footer>
  );
}
