"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <main className="min-h-screen hero-bg grid-pattern">
      <Navbar />

      <section className="pt-40 pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge badge-yellow mb-4 inline-block">Legal Policy</span>
          <h1 className="font-headline text-4xl sm:text-5xl font-900 leading-tight mb-4">
            {title}
          </h1>
          <p className="text-sm opacity-60" style={{ color: "var(--text-secondary)" }}>
            Last Updated: {lastUpdated}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-12 prose prose-invert prose-purple max-w-none legal-content"
        >
          {children}
        </motion.div>
      </section>

      <Footer />

      <style jsx global>{`
        .legal-content h2 {
          font-family: var(--font-headline);
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #fff;
        }
        .legal-content h3 {
          font-family: var(--font-headline);
          font-size: 1.125rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: var(--purple-light);
        }
        .legal-content p {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.7;
        }
        .legal-content ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
        }
        .legal-content li {
          margin-bottom: 0.5rem;
        }
        .legal-content strong {
          color: #fff;
        }
      `}</style>
    </main>
  );
}
