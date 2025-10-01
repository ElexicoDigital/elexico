"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Color glows */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_10%,rgba(36,99,235,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_80%_20%,rgba(0,219,222,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_20%_80%,rgba(130,87,230,0.18),transparent_60%)]" />

      {/* Floating glossy orbs */}
      <motion.div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),rgba(43,158,255,0.08)_40%,transparent_70%)] blur-2xl"
        animate={{ x: [0, 30, -10, 0], y: [0, 20, -10, 0], rotate: [0, 10, -5, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.22),rgba(0,219,222,0.1)_40%,transparent_70%)] blur-3xl"
        animate={{ x: [0, -40, 10, 0], y: [0, -15, 25, 0], rotate: [0, -8, 6, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 left-1/3 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.22),rgba(130,87,230,0.1)_40%,transparent_70%)] blur-3xl"
        animate={{ x: [0, 20, -20, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Slow moving sheen */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(75deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0.02) 100%)",
          maskImage: "radial-gradient(80% 80% at 50% 50%, black 20%, transparent 80%)",
        }}
        animate={{ backgroundPositionX: ["0%", "100%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
