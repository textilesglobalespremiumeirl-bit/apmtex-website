"use client";

import { useEffect, useState } from "react";
import { C } from "./theme";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (scrolled / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-50" style={{ background: "transparent" }}>
      <div style={{ width: `${pct}%`, background: C.gold, height: "100%", transition: "width 0.1s linear" }} />
    </div>
  );
}
