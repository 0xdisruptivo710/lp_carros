"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Problemas", href: "#problemas" },
  { label: "Solução", href: "#solucao" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Resultados", href: "#resultados" },
  { label: "Como Funciona", href: "#como-funciona" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      setMobileOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled
            ? "bg-deep/82 py-3.5 shadow-lg backdrop-blur-2xl backdrop-saturate-[1.2] border-b border-brand-blue/[0.07]"
            : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6">
          <a href="#" className="font-display text-[1.45rem] font-extrabold tracking-tight z-[1001]">
            AIOS<span className="text-brand-blue">CRM</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="group relative text-sm font-medium text-gray-300 transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-brand-blue transition-all duration-400 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#formulario"
            onClick={(e) => handleClick(e, "#formulario")}
            className="hidden rounded-xl bg-brand-blue px-6 py-2.5 text-[0.85rem] font-semibold text-white shadow-[0_0_24px_rgba(30,94,255,0.25)] transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_4px_32px_rgba(30,94,255,0.45)] lg:inline-flex"
          >
            Falar com especialista
          </a>

          {/* Mobile toggle */}
          <button
            className="relative z-[1001] flex h-11 w-11 items-center justify-center text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center gap-9 bg-deep/97 backdrop-blur-[30px]"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="font-display text-[1.6rem] font-bold text-gray-100 transition-colors hover:text-brand-blue"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#formulario"
              onClick={(e) => handleClick(e, "#formulario")}
              className="mt-2 rounded-xl bg-brand-blue px-8 py-4 font-semibold text-white shadow-[0_0_32px_rgba(30,94,255,0.28)]"
            >
              Quero uma demonstração
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
