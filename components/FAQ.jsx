"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { C, F } from "./theme";
import Eyebrow from "./Eyebrow";

const FAQS = [
  {
    q: "¿A quién va dirigido este programa?",
    a: "A dueños de marca que ya ejecutan — no a quienes buscan solo teoría. Si ya produces, vendes o diriges algo, este es tu siguiente nivel. Y si estás por lanzar tu marca, entras a construirla con cimientos de CEO desde el día uno, sin la curva de prueba y error que a la mayoría le toma años en aprender por su cuenta.",
  },
  {
    q: "¿Y si mi marca todavía es pequeña, o aún no la lanzo?",
    a: "Mejor: empezar con las bases correctas vale más que corregir años después. No se trata del tamaño actual de tu marca — se trata de si tienes la visión y la disposición de construirla como CEO desde el inicio, no como todista.",
  },
  {
    q: "¿Dónde quieres estar de acá a 5 años?",
    a: "Esa es la pregunta real — no cuánto cuesta. ¿Metido en el taller apagando incendios? ¿En la oficina administrativa? ¿O disfrutando de tu vida mientras tu empresa funciona sola? La inversión se define en tu entrevista de admisión, según dónde estás y hacia dónde quieres llegar — no es un precio genérico para cualquiera.",
  },
  {
    q: "¿Todos los que postulan son aceptados?",
    a: "No. Hay cupos limitados por cohorte y una entrevista de admisión con el Ing. Omar Gutiérrez, quien evalúa personalmente si tu marca y tu mentalidad están listas para ingresar.",
  },
  {
    q: "¿Las sesiones quedan grabadas?",
    a: "Sí, cada sesión en vivo queda disponible para que la revises las veces que necesites durante el programa.",
  },
];

function FAQItem({ q, a, open, onClick }) {
  return (
    <div style={{ borderTop: `1px solid ${C.line}` }} className="py-6">
      <button onClick={onClick} className="w-full flex items-center justify-between gap-6 text-left group">
        <span
          style={{ fontFamily: F.display, color: open ? C.gold : C.cream }}
          className="text-lg md:text-xl transition-colors duration-200 group-hover:text-[#E8C87A]"
        >
          {q}
        </span>
        <span
          className="shrink-0 transition-transform duration-300"
          style={{ color: C.gold, transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p style={{ fontFamily: F.body, color: C.muted }} className="text-sm md:text-base leading-relaxed mt-4 max-w-2xl">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="px-6 md:px-10 py-24">
      <div className="max-w-3xl mx-auto">
        <Eyebrow>Antes de postular</Eyebrow>
        <h2 style={{ fontFamily: F.display, color: C.cream }} className="text-3xl md:text-4xl mb-8">
          Preguntas frecuentes
        </h2>
        <div>
          {FAQS.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} open={openIdx === i} onClick={() => setOpenIdx(openIdx === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
