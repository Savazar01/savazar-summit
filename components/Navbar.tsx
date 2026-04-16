"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Summit" },
  { href: "/course1", label: "Workshop I" },
  { href: "/course2", label: "Workshop II" },
  { href: "/consulting", label: "Consulting" },
];

interface NavbarProps {
  onRegisterClick?: () => void;
}

export default function Navbar({ onRegisterClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-purple-savazar/20 print-nav shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-10 w-32 transition-transform group-hover:scale-105 active:scale-95">
              <Image
                src="/images/savazar-logo.png"
                alt="Savazar Logo"
                fill
                sizes="(max-width: 768px) 100px, 128px"
                className="object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
                priority
              />
            </div>
            <div className="ml-4 hidden sm:block border-l border-white/20 pl-4 h-6 flex items-center no-print">
              <span className="block text-sm font-black text-white tracking-[0.15em] uppercase leading-none opacity-100">
                SAVAZAR INDIA AI SUMMIT 2026
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 no-print">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-purple-light"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block no-print">
            {onRegisterClick ? (
              <button onClick={onRegisterClick} className="btn-primary text-xs py-2 px-5">
                Register Interest for Workshop
              </button>
            ) : (
              <Link href="/" className="btn-primary text-xs py-2 px-5">
                Register Interest for Workshop
              </Link>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg glass no-print"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-purple-savazar/20 bg-[#1a1a2e]/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium py-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/" className="btn-primary text-center text-xs">
                Register Interest for Workshop
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
