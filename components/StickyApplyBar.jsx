"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { C } from "./theme";
import GoldButton from "./GoldButton";

export default function StickyApplyBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname !== "/" && pathname !== "/programa") return null;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 w-full z-40 px-4 py-3 transition-transform duration-300"
      style={{
        background: "rgba(10,21,36,0.97)",
        borderTop: `1px solid ${C.line}`,
        backdropFilter: "blur(6px)",
        transform: visible ? "translateY(0)" : "translateY(100%)",
      }}
    >
      <GoldButton full icon={false} href="/aplicar">
        Aplicar al programa
      </GoldButton>
    </div>
  );
}
