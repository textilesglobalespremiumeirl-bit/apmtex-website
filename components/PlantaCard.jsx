"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { C, F } from "./theme";
import Reveal from "./Reveal";

export default function PlantaCard({ title, img, copy, delay }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={delay}>
      <div style={{ border: `1px solid ${C.line}` }} className="h-full flex flex-col">
        <div className="w-full overflow-hidden" style={{ background: C.black3 }}>
          <img src={img} alt={title} className="w-full h-auto block" />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h4 style={{ fontFamily: F.display, color: C.cream }} className="text-lg mb-3">
            {title}
          </h4>
          <div
            className="grid transition-[grid-template-rows] duration-300 ease-out"
            style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <p style={{ fontFamily: F.body, color: C.muted }} className="text-sm leading-relaxed whitespace-pre-line mb-4">
                {copy}
              </p>
            </div>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="mt-auto self-start inline-flex items-center gap-2 transition-colors duration-200"
            style={{ fontFamily: F.mono, fontSize: 12, letterSpacing: "0.08em", color: C.gold, textTransform: "uppercase" }}
          >
            {open ? "Ocultar" : "Léelo"}
            <ChevronRight size={13} className="transition-transform duration-300" style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }} />
          </button>
        </div>
      </div>
    </Reveal>
  );
}
