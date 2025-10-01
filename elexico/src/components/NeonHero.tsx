// src/components/HeroElectric.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function HeroElectric() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex items-center justify-center py-20 sm:py-24 md:py-28">
      <motion.div
        initial={reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-[95%] max-w-[1100px]"
      >
        <svg viewBox="0 0 1200 300" className="w-full h-auto" textRendering="geometricPrecision">
          <defs>
            <filter id="plasmaFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="3" seed="2" result="noise">
                <animate attributeName="seed" from="1" to="999" dur="0.5s" repeatCount="indefinite" />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
            </filter>
          </defs>

          {/* Force Ebrima here */}
          <g style={{ fontFamily: '"Ebrima","Segoe UI",Tahoma,Arial,sans-serif', fontWeight: 700, letterSpacing: 1 }}>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="100" className="base-text">
              ELEXICO DIGITAL LTD
            </text>

            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="100" className="electric-wave">
              ELEXICO DIGITAL LTD
            </text>

            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="100" className="electric-wave slow-wave">
              ELEXICO DIGITAL LTD
            </text>
          </g>
        </svg>
      </motion.div>

      <style jsx>{`
        .base-text {
          fill: none;
          stroke: #ffffff;
          stroke-width: 2.5;
          filter: drop-shadow(0 0 6px white);
          opacity: 0.9;
        }
        .electric-wave {
          fill: none;
          stroke-width: 3.5;
          stroke-dasharray: 300 500;
          stroke-dashoffset: 0;
          filter: url(#plasmaFilter) drop-shadow(0 0 50px currentColor);
          animation: moveWave 2s linear infinite, revolutionColors 40s linear infinite, glowPulse 2s ease-in-out infinite;
          mix-blend-mode: screen;
        }
        .electric-wave.slow-wave {
          animation: moveWave 5s linear infinite, revolutionColors 50s linear infinite, glowPulse 3s ease-in-out infinite;
          opacity: 0.6;
        }
        @keyframes moveWave {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -1200; }
        }
        @keyframes revolutionColors {
          0%,15% { stroke:#ff4de6; color:#ff4de6; }
          15%,17% { stroke:#ff00ff; }
          17%,19% { stroke:#00ffff; }
          19%,21% { stroke:#ff2222; }
          21%,23% { stroke:#32ff32; }
          23%,25% { stroke:#6825ff; }
          25%,27% { stroke:#ffff00; }
          27%,30% { stroke:#ffffff; }
          30%,45% { stroke:#00e5ff; color:#00e5ff; }
          45%,47% { stroke:#ff4de6; }
          47%,49% { stroke:#00ffcc; }
          49%,51% { stroke:#ff0000; }
          51%,53% { stroke:#32ff32; }
          53%,55% { stroke:#6825ff; }
          55%,57% { stroke:#ffff00; }
          57%,60% { stroke:#ffffff; }
          60%,75% { stroke:#ff2222; color:#ff2222; }
          75%,77% { stroke:#ff00ff; }
          77%,79% { stroke:#00ffff; }
          79%,81% { stroke:#ff2222; }
          81%,83% { stroke:#32ff32; }
          83%,85% { stroke:#6825ff; }
          85%,87% { stroke:#ffff00; }
          87%,90% { stroke:#ffffff; }
          90%,100% { stroke:#ff4de6; }
        }
        @keyframes glowPulse {
          0%,100% { filter: url(#plasmaFilter) drop-shadow(0 0 4px currentColor) drop-shadow(0 0 8px currentColor); }
          50% { filter: url(#plasmaFilter) drop-shadow(0 0 8px currentColor) drop-shadow(0 0 16px currentColor); }
        }
      `}</style>
    </section>
  );
}
