import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1a1a2e",
          light: "#16213e",
          dark: "#0f0f1a",
        },
        purple: {
          savazar: "#6667AB",
          light: "#8889C8",
          dark: "#4445899",
          glow: "rgba(102,103,171,0.4)",
        },
        yellow: {
          cta: "#FCCB0B",
          glow: "rgba(252,203,11,0.3)",
        },
        gold: {
          soft: "#FEE499",
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse at 50% 0%, rgba(102,103,171,0.3) 0%, rgba(26,26,46,0) 70%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(102,103,171,0.1) 0%, rgba(26,26,46,0.6) 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #FCCB0B 0%, #FEE499 100%)",
      },
      boxShadow: {
        "glow-purple": "0 0 20px rgba(102,103,171,0.5), 0 0 40px rgba(102,103,171,0.2)",
        "glow-yellow": "0 0 20px rgba(252,203,11,0.5), 0 0 40px rgba(252,203,11,0.2)",
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulse_glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        pulse_glow: "pulse_glow 2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
