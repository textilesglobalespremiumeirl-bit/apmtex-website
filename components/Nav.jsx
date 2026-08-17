"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { C, F } from "./theme";
import Logo from "./Logo";
import GoldButton from "./GoldButton";

const ITEMS = [
  { id: "inicio", label: "Inicio", href: "/" },
  { id: "programa", label: "Programa", href: "/programa" },
  { id: "aplicar", label: "Aplicar", href: "/aplicar" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md transition-shadow duration-300"
      style={{
        background: scrolled ? "rgba(10,21,36,0.96)" : "rgba(10,21,36,0.85)",
        borderBottom: `1px solid ${C.line}`,
        boxShadow: scrolled ? "0 8px 24px -12px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-10">
          {ITEMS.map((it) => {
            const active = pathname === it.href;
            return (
              <Link
                key={it.id}
                href={it.href}
                style={{
                  fontFamily: F.mono,
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  color: active ? C.gold : C.muted,
                  textTransform: "uppercase",
                }}
                className="relative pb-1 transition-colors hover:text-[#E8C87A]"
              >
                {it.label}
                <span
                  className="absolute left-0 -bottom-0.5 h-[1.5px] transition-all duration-300"
                  style={{ width: active ? "100%" : "0%", background: C.gold }}
                />
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <GoldButton href="/aplicar" icon={false}>
            Aplicar
          </GoldButton>
        </div>
        <button
          className="md:hidden transition-opacity active:opacity-60"
          onClick={() => setMenuOpen((o) => !o)}
          style={{ color: C.cream }}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4 animate-[fadeSlide_0.25s_ease-out]"
          style={{ borderTop: `1px solid ${C.line}` }}
        >
          {ITEMS.map((it) => (
            <Link
              key={it.id}
              href={it.href}
              style={{ fontFamily: F.mono, color: C.cream, fontSize: 13, letterSpacing: "0.1em" }}
              className="text-left pt-4 uppercase active:opacity-60 transition-opacity"
            >
              {it.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
