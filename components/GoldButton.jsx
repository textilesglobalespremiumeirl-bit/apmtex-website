"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { C } from "./theme";

export default function GoldButton({ children, href, onClick, full, icon = true, type, disabled }) {
  const className = `group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 overflow-hidden transition-all duration-200 active:scale-[0.97] ${
    full ? "w-full" : ""
  } ${disabled ? "opacity-60 pointer-events-none" : ""}`;

  const style = {
    background: C.gold,
    color: C.black,
    fontFamily: "var(--font-mono), monospace",
    fontSize: 13,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    boxShadow: "0 0 0 0 rgba(198,161,91,0)",
    transitionProperty: "box-shadow, transform, background",
  };

  const handlers = {
    onMouseEnter: (e) => {
      e.currentTarget.style.background = C.goldHi;
      e.currentTarget.style.boxShadow = "0 8px 24px -8px rgba(198,161,91,0.55)";
    },
    onMouseLeave: (e) => {
      e.currentTarget.style.background = C.gold;
      e.currentTarget.style.boxShadow = "0 0 0 0 rgba(198,161,91,0)";
    },
  };

  const inner = (
    <>
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
        style={{ background: "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)" }}
        aria-hidden="true"
      />
      <span className="relative">{children}</span>
      {icon && <ArrowRight size={15} className="relative transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className} style={style} {...handlers}>
        {inner}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} disabled={disabled} className={className} style={style} {...handlers}>
      {inner}
    </button>
  );
}
