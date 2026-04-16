"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface PillarCardProps {
  icon: ReactNode;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  price?: string;
  ctaLabel: string;
  ctaHref: string;
  accentColor?: "purple" | "yellow";
  index?: number;
}

export default function PillarCard({
  icon,
  badge,
  title,
  subtitle,
  description,
  features,
  price,
  ctaLabel,
  ctaHref,
  accentColor = "purple",
  index = 0,
}: PillarCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const glowClass = accentColor === "yellow" ? "glow-yellow" : "glow-purple";
  const borderColor =
    accentColor === "yellow"
      ? "rgba(252,203,11,0.4)"
      : "rgba(102,103,171,0.4)";
  const accentHex = accentColor === "yellow" ? "#FCCB0B" : "#6667AB";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className={`glass-card p-6 flex flex-col h-full relative overflow-hidden`}
      >
        {/* Top glow line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${accentHex}, transparent)` }}
        />

        {/* Icon badge */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          style={{
            background: `rgba(${accentColor === "yellow" ? "252,203,11" : "102,103,171"},0.15)`,
            border: `1px solid ${borderColor}`,
          }}
        >
          <span style={{ color: accentHex }}>{icon}</span>
        </div>

        {/* Badge */}
        <span className={`badge mb-3 self-start ${accentColor === "yellow" ? "badge-yellow" : ""}`}>
          {badge}
        </span>

        {/* Title */}
        <h3 className="font-headline text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm mb-3" style={{ color: accentHex }}>
          {subtitle}
        </p>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span style={{ color: accentHex }} className="mt-0.5 flex-shrink-0">▹</span>
              <span style={{ color: "var(--text-secondary)" }}>{f}</span>
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="mt-auto">
          {price && (
            <p className="font-headline text-2xl font-bold mb-4" style={{ color: accentHex }}>
              {price}
            </p>
          )}
          <a
            href={ctaHref}
            className={accentColor === "yellow" ? "btn-primary w-full justify-center text-sm" : "btn-secondary w-full justify-center text-sm"}
          >
            {ctaLabel} →
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
