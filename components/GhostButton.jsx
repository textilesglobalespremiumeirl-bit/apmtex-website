"use client";

import Link from "next/link";
import { C } from "./theme";

export default function GhostButton({ children, href, onClick }) {
  const className =
    "group relative inline-flex items-center gap-2 px-7 py-3.5 border overflow-hidden transition-all duration-300 active:scale-[0.97]";

  const style = {
    borderColor: C.line,
    color: C.cream,
    fontFamily: "var(--font-mono), monospace",
    fontSize: 13,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  };

  const handlers = {
    onMouseEnter: (e) => (e.currentTarget.style.borderColor = C.gold),
    onMouseLeave: (e) => (e.currentTarget.style.borderColor = C.line),
  };

  const inner = (
    <>
      <span
        className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
        style={{ background: "rgba(198,161,91,0.12)" }}
        aria-hidden="true"
      />
      <span className="relative group-hover:text-[#E8C87A] transition-colors duration-300">{children}</span>
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
    <button onClick={onClick} className={className} style={style} {...handlers}>
      {inner}
    </button>
  );
}
