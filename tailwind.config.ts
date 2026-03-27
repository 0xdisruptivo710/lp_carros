import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: {
          DEFAULT: "#0A1628",
          alt: "#0E1D33",
        },
        brand: {
          blue: "#1E5EFF",
          red: "#E8001D",
          pink: "#FF3D7F",
          green: "#25D366",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      keyframes: {
        "shimmer-slide": {
          to: { transform: "translate(calc(100cqw - 100%), 0)" },
        },
        "spin-around": {
          "0%": { transform: "translateZ(0) rotate(0)" },
          "15%, 35%": { transform: "translateZ(0) rotate(90deg)" },
          "65%, 85%": { transform: "translateZ(0) rotate(270deg)" },
          "100%": { transform: "translateZ(0) rotate(360deg)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "orb-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(50px, -35px) scale(1.06)" },
          "66%": { transform: "translate(-30px, 45px) scale(0.94)" },
        },
        "wa-pulse": {
          "0%, 100%": {
            boxShadow: "0 4px 22px rgba(37,211,102,0.4)",
          },
          "50%": {
            boxShadow:
              "0 4px 22px rgba(37,211,102,0.4), 0 0 0 14px rgba(37,211,102,0.06)",
          },
        },
        "badge-pulse": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 0 0 rgba(30,94,255,0.4)",
          },
          "50%": {
            opacity: "0.5",
            boxShadow: "0 0 0 6px rgba(30,94,255,0)",
          },
        },
      },
      animation: {
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        scroll: "scroll 35s linear infinite",
        "orb-drift": "orb-drift 28s ease-in-out infinite",
        "wa-pulse": "wa-pulse 3.5s ease-in-out infinite",
        "badge-pulse": "badge-pulse 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
