"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { cubicBezier } from "framer-motion";

/* Counter (animated number increment) */
function Counter({
  from = 0,
  to,
  suffix = "",
  duration = 3,
  decimals = 0,
}: {
  from?: number;
  to: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
}) {
  const [value, setValue] = useState(from);
  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const current = from + (to - from) * progress;
      setValue(parseFloat(current.toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [from, to, duration, decimals]);
  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

/* Configuration (copied to match your sample exactly) */
const cfg = {
  layout: {
    maxWidth: "max-w-7xl",
    paddingX: "px-6 md:px-12",
    paddingY: "py-12",
    spacing: "space-y-8",
  },

  heading: {
    text: "Crafting digital excellence with design, innovation, and technology",
    classes: "grad-text font-extrabold leading-snug tracking-tight",
    fontSizes: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
    anim: {
      initial: { opacity: 0, y: -40 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1, ease: cubicBezier(0.25, 1, 0.5, 1) },
    },
  },

  desc: {
    text:
      "At Elexico Digital, we merge creativity, engineering, and research to deliver solutions at the forefront of technology. From web design to smart electronics, our projects are precise, efficient, and premium standard.",
    classes: "text-gray-300 leading-relaxed tracking-normal font-light",
    fontSizes: "text-sm sm:text-base md:text-lg lg:text-xl",
    anim: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 1, delay: 0.2, ease: cubicBezier(0.25, 1, 0.5, 1) },
    },
  },

  ctas: {
    container: "flex gap-4 mt-6",
    size: "px-6 py-3 text-sm sm:text-base md:text-lg",
    primary: {
      text: "Get Started",
      link: "/get-started",
      style: "btn-shine-wrap relative rounded-lg font-semibold text-white overflow-hidden group",
      bg: "bg-gradient-to-r from-[var(--brand)] to-[var(--brand-2)]",
    },
    secondary: {
      text: "About Us",
      link: "/about",
      style:
        "rounded-lg border border-white/25 text-gray-100 hover:text-[var(--brand-2)] hover:border-[var(--brand-2)] transition",
    },
  },

  highlights: {
    container: "flex flex-wrap gap-6 sm:gap-10 mt-10",
    item: "flex flex-col items-start min-w-[120px]",
    title:
      "text-base sm:text-lg md:text-xl font-bold text-purple-400 transition-all duration-300 group-hover:scale-110 group-hover:text-sky-400",
    sub: "text-[10px] sm:text-xs md:text-sm text-gray-400",
  },
};

/* Main component */
function TaglineInner() {
  return (
    <section
      className={`relative ${cfg.layout.maxWidth} ${cfg.layout.paddingX} ${cfg.layout.paddingY} ${cfg.layout.spacing}`}
    >
      {/* Heading */}
      <motion.h2
        className={`${cfg.heading.classes} ${cfg.heading.fontSizes}`}
        initial={cfg.heading.anim.initial}
        whileInView={cfg.heading.anim.animate}
        viewport={{ once: true, amount: 0.6 }}
        transition={cfg.heading.anim.transition}
        whileHover={{ scale: 1.05 }}
        drag
        dragElastic={0.25}
        dragSnapToOrigin
      >
        {cfg.heading.text}
      </motion.h2>

      {/* Description */}
      <motion.p
        className={`${cfg.desc.classes} ${cfg.desc.fontSizes}`}
        initial={cfg.desc.anim.initial}
        whileInView={cfg.desc.anim.animate}
        viewport={{ once: true, amount: 0.6 }}
        transition={cfg.desc.anim.transition}
        whileHover={{ scale: 1.02 }}
        drag
        dragElastic={0.25}
        dragSnapToOrigin
      >
        {cfg.desc.text}
      </motion.p>

      {/* CTAs */}
      <motion.div
        className={cfg.ctas.container}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {/* Primary (shine) */}
        <motion.a
          href={cfg.ctas.primary.link}
          className={`${cfg.ctas.size} ${cfg.ctas.primary.style} ${cfg.ctas.primary.bg}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="relative z-10">{cfg.ctas.primary.text}</span>
          <span className="btn-shine absolute inset-0" />
        </motion.a>

        {/* Secondary */}
        <a href={cfg.ctas.secondary.link} className={`${cfg.ctas.size} ${cfg.ctas.secondary.style}`}>
          {cfg.ctas.secondary.text}
        </a>
      </motion.div>

      {/* Highlights */}
      <motion.div
        className={cfg.highlights.container}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: cubicBezier(0.25, 1, 0.5, 1) }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div className={cfg.highlights.item} whileHover={{ scale: 1.1 }} drag dragSnapToOrigin>
          <p className={cfg.highlights.title}>
            <Counter to={5} suffix="+" duration={6} /> Years
          </p>
          <p className={cfg.highlights.sub}>Experienced Software Team</p>
        </motion.div>

        <motion.div className={cfg.highlights.item} whileHover={{ scale: 1.1 }} drag dragSnapToOrigin>
          <p className={cfg.highlights.title}>
            <Counter to={2} suffix="+" duration={5} /> AI Based
          </p>
          <p className={cfg.highlights.sub}>AI Agritech Research</p>
        </motion.div>

        <motion.div className={cfg.highlights.item} whileHover={{ scale: 1.1 }} drag dragSnapToOrigin>
          <p className={cfg.highlights.title}>
            <Counter to={5} suffix="+" duration={5} /> Next Gen
          </p>
          <p className={cfg.highlights.sub}>Smart & Highly Efficient Amplifiers</p>
        </motion.div>

        <motion.div className={cfg.highlights.item} whileHover={{ scale: 1.1 }} drag dragSnapToOrigin>
          <p className={cfg.highlights.title}>
            <Counter to={50} suffix="+" duration={7} /> Trusted
          </p>
          <p className={cfg.highlights.sub}>50+ Trusted Clients</p>
        </motion.div>
      </motion.div>

      {/* Styles kept inside the component to match sample exactly */}
      <style jsx>{`
        :global(:root) {
          --brand: #00e5ff;
          --brand-2: #8b5cf6;
        }
        .grad-text {
          background: linear-gradient(90deg, var(--brand), var(--brand-2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .btn-shine-wrap {
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 8px 28px rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.25);
        }
        .btn-shine::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 0.5rem;
          background:
            linear-gradient(to bottom, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0) 50%) 0 0/100% 60% no-repeat,
            linear-gradient(75deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)) 0 0/40% 100% no-repeat;
          mix-blend-mode: screen;
          transform: translateX(-160%) skewX(-12deg);
          animation: sweep 1.8s ease-in-out infinite;
        }
        @keyframes sweep {
          0% { transform: translateX(-160%) skewX(-12deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateX(160%) skewX(-12deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
}

/* Export with SSR disabled (same as your sample) */
export default dynamic(() => Promise.resolve(TaglineInner), { ssr: false });
