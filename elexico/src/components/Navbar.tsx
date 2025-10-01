"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Item = { label: string; href: string };

const NAV: Item[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

function GlassBar({ children }: { children: React.ReactNode }) {
  // Glass shell with inner highlights and a subtle animated top line.
  return (
    <div className="relative w-full">
      <div className="w-full bg-white/8 backdrop-blur-xl border-b border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.55)]">
        {/* Inner top reflection */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/0 via-white/60 to-white/0 opacity-70" />
        {/* Soft highlight band */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08),rgba(255,255,255,0)_35%)]" />
        {children}
      </div>
    </div>
  );
}

function GlossyButton({ href, children }: { href: string; children: React.ReactNode }) {
  // Clipped glossy sweep confined to the button area.
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-flex items-center justify-center overflow-hidden
                 rounded-xl px-4 py-2 text-sm font-semibold
                 text-black border border-white/30
                 bg-gradient-to-b from-white to-white/85
                 shadow-[inset_0_1px_0_rgba(255,255,255,.75),0_8px_24px_rgba(0,0,0,.35)]
                 hover:shadow-[inset_0_1px_0_rgba(255,255,255,.85),0_12px_28px_rgba(0,0,0,.45)]
                 transition"
    >
      {children}

      {/* Top internal glaze */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-xl bg-gradient-to-b from-white/45 to-transparent" />

      {/* Tilted sweep, fully clipped by overflow-hidden */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[-35%] w-[55%] -skew-x-12
                   rounded-xl bg-gradient-to-r from-white/0 via-white/70 to-white/0
                   mix-blend-screen"
        initial={reduce ? { opacity: 0 } : { x: "-55%", opacity: 0 }}
        animate={
          reduce
            ? { opacity: 0 }
            : hovered
            ? { x: "150%", opacity: 1 }
            : { x: "-55%", opacity: 0 }
        }
        transition={{ duration: hovered ? 0.9 : 1.15, ease: "easeInOut" }}
      />
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);

  const activeIndex = useMemo(
    () => NAV.findIndex((i) => i.href === pathname),
    [pathname]
  );

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <GlassBar>
          <nav className="mx-auto px-3 sm:px-5 lg:px-8">
            <div className="h-16 grid grid-cols-3 items-center">
              {/* Left: brand */}
              <Link href="/" className="flex items-center gap-3">
                <div className="h-7 w-7 rounded-md bg-gradient-to-br from-white/85 via-white/35 to-transparent shadow-[inset_0_1px_1px_rgba(255,255,255,.65)]" />
                <span className="text-sm sm:text-base font-semibold tracking-wide">
                  ELEXICO DIGITAL
                </span>
              </Link>

              {/* Center: nav list with animated glass pill */}
              <div className="hidden md:flex items-center justify-center">
                <div
                  className="relative flex items-center gap-1 rounded-2xl border border-white/10
                             bg-white/5 backdrop-blur-xl px-1.5 py-1
                             shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_8px_30px_rgba(0,0,0,.35)]"
                  onMouseLeave={() => setHovered(null)}
                >
                  {NAV.map((item, i) => {
                    const active = i === activeIndex;
                    const isHover = hovered === item.href;
                    return (
                      <div key={item.href} className="relative">
                        {/* Shared animated background pill */}
                        {(active || isHover) && mounted && (
                          <motion.span
                            layoutId="glass-pill"
                            className="absolute inset-0 rounded-xl bg-white/10 border border-white/15"
                            transition={{ type: "spring", stiffness: 450, damping: 38 }}
                          />
                        )}

                        <Link
                          href={item.href}
                          onMouseEnter={() => setHovered(item.href)}
                          className="relative z-10 px-3.5 py-2 text-[0.92rem]
                                     text-white/80 hover:text-white
                                     transition-colors"
                        >
                          <motion.span
                            initial={reduce ? false : { y: 6, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.28 }}
                            className="relative select-none"
                          >
                            {item.label}
                          </motion.span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: auth */}
              <div className="hidden md:flex items-center justify-end gap-2">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium
                             border border-white/12 bg-white/6 hover:bg-white/10
                             text-white transition backdrop-blur-xl
                             shadow-[inset_0_1px_0_rgba(255,255,255,.25)]"
                >
                  Login
                </Link>
                <GlossyButton href="/register">Register</GlossyButton>
              </div>

              {/* Mobile burger */}
              <button
                className="md:hidden justify-self-end inline-flex h-10 w-10 items-center justify-center
                           rounded-md border border-white/12 bg-white/6 backdrop-blur-xl
                           hover:bg-white/10 transition"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
        </GlassBar>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed top-16 inset-x-0 z-40 px-3 sm:px-5"
          >
            <div className="rounded-2xl border border-white/12 bg-white/6 backdrop-blur-2xl p-3
                            shadow-[0_10px_40px_rgba(0,0,0,.55)]">
              <ul className="divide-y divide-white/10">
                {NAV.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between py-3 px-2 text-[0.95rem] ${
                          active ? "text-white" : "text-white/80 hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        {active && (
                          <span className="h-[2px] w-10 rounded bg-gradient-to-r from-white/70 via-white to-white/70" />
                        )}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-3 flex gap-2">
                  <Link
                    href="/login"
                    className="flex-1 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium
                               border border-white/12 bg-white/6 hover:bg-white/10
                               text-white transition backdrop-blur-xl
                               shadow-[inset_0_1px_0_rgba(255,255,255,.25)]"
                  >
                    Login
                  </Link>
                  <GlossyButton href="/register">Register</GlossyButton>
                </li>
              </ul>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Spacer below fixed header */}
      <div className="h-16" />
    </>
  );
}
