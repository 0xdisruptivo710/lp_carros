"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const beams = [
  { x1: "0%", y1: "0%", x2: "40%", y2: "100%", delay: 0, duration: 7, color: "blue" as const },
  { x1: "20%", y1: "0%", x2: "55%", y2: "100%", delay: 1.5, duration: 8, color: "blue" as const },
  { x1: "45%", y1: "0%", x2: "75%", y2: "100%", delay: 0.8, duration: 6.5, color: "pink" as const },
  { x1: "65%", y1: "0%", x2: "90%", y2: "100%", delay: 2, duration: 9, color: "blue" as const },
  { x1: "85%", y1: "0%", x2: "60%", y2: "100%", delay: 3, duration: 7.5, color: "pink" as const },
  { x1: "95%", y1: "0%", x2: "30%", y2: "100%", delay: 1, duration: 8.5, color: "blue" as const },
  { x1: "35%", y1: "0%", x2: "15%", y2: "100%", delay: 4, duration: 10, color: "pink" as const },
];

interface BackgroundBeamsProps {
  className?: string;
}

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg-beam-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(30,94,255,0)" />
            <stop offset="50%" stopColor="rgba(30,94,255,0.12)" />
            <stop offset="100%" stopColor="rgba(30,94,255,0)" />
          </linearGradient>
          <linearGradient id="bg-beam-pink" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,61,127,0)" />
            <stop offset="50%" stopColor="rgba(255,61,127,0.08)" />
            <stop offset="100%" stopColor="rgba(255,61,127,0)" />
          </linearGradient>
        </defs>
        {beams.map((beam, i) => (
          <motion.line
            key={i}
            x1={beam.x1}
            y1={beam.y1}
            x2={beam.x2}
            y2={beam.y2}
            stroke={beam.color === "blue" ? "url(#bg-beam-blue)" : "url(#bg-beam-pink)"}
            strokeWidth="1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: beam.duration,
              delay: beam.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
      {/* Ambient glow */}
      <div className="absolute left-1/4 top-0 h-[40%] w-[50%] bg-brand-blue/[0.03] blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-[30%] w-[40%] bg-brand-pink/[0.02] blur-[100px]" />
    </div>
  );
}
