"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  children?: ReactNode;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  center = false,
  children,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {badge && (
        <div className={`mb-4 ${center ? "flex justify-center" : ""}`}>
          <span className="badge">{badge}</span>
        </div>
      )}

      <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
        {title}{" "}
        {highlight && <span className="text-gradient-gold">{highlight}</span>}
      </h2>

      {subtitle && (
        <p
          className="text-lg max-w-2xl leading-relaxed"
          style={{ color: "var(--text-secondary)", ...(center && { margin: "0 auto" }) }}
        >
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
}
