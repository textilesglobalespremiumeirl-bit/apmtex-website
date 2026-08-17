"use client";

import { useState } from "react";
import { Calendar, Clock, Laptop, MapPin, MessageCircle, Minus, Plus, TrendingUp, Users } from "lucide-react";
import { C, F } from "./theme";
import Stitch from "./Stitch";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import GoldButton from "./GoldButton";

const FASES = [
  {
    n: "0",
    t: "Radiografía sin anestesia",
    d: `Antes de estrategia, los números reales: tu facturación, tu margen real, en qué se te va el tiempo. Con total honestidad respondes: ¿por qué quieres tomar este programa, cuál es tu verdadero dolor de cabeza hoy, y en qué parte de tu negocio sientes que estás estancado?

Entregable: diagnóstico honesto de tu operación actual, en tus propios números.`,
  },
  {
    n: "1",
    t: "El costo real de tu prenda",
    d: `Tu terreno más fuerte: cómo se construye el costo de una prenda de punta a punta, cómo identificar tus cuellos de botella reales en producción, cuál es tu facturación actual y si calculas el margen en base al costo o al precio de venta — la mayoría lo hace mal, y ahí se les va la rentabilidad sin darse cuenta. Calculamos también tu punto de equilibrio: cuántas unidades necesitas vender al mes solo para cubrir tus costos fijos.

Entregable: estructura de costos real de tu producto insignia + tu punto de equilibrio calculado.`,
  },
  {
    n: "2",
    t: "De precio bajo a marca que se paga sola",
    d: `Ya con tu costo real como base, evaluamos si tu producto apunta al nicho correcto, si el precio que cobras hoy es el correcto, si tus clientes perciben el valor que justifica ese precio, y cuál es tu ventaja competitiva real — por qué deberían comprarte a ti y no a tu competencia.

Entregable: nueva estructura de precios + propuesta de valor + tu ventaja competitiva explícita.`,
  },
  {
    n: "3",
    t: "El Directorio Negro + Blindaje Operativo",
    d: `Acceso a mi red curada de proveedores, talleres y avíos homologados — algo que ningún consultor de marketing puede ofrecer porque no lo tiene. Sumamos mis propios modelos de contrato (producción, confidencialidad, servicios y desarrollo de producto), fichas técnicas confidenciales de costura, diseño, estampados, tejido y desarrollo de telas, y la tabla de tiempos estándar: ¿de verdad sabes cuánto tarda una colección completa, del diseño al despacho?

Entregable: Directorio Negro + 4 modelos de contrato + fichas técnicas + tabla de tiempos estándar.`,
  },
  {
    n: "4",
    t: "De todista a CEO",
    d: `Manuales de calidad para frenar mermas, sistemas de delegación y cómo salir del día a día operativo sin que la calidad se caiga.

Entregable: plan de delegación con roles definidos, listo para implementar.`,
  },
];

const SPECS = [
  { icon: Calendar, k: "Duración", v: "9 semanas" },
  { icon: Laptop, k: "Modalidad", v: "100% clases sincrónicas y asíncronas — con sesiones presenciales" },
  { icon: MapPin, k: "Presencial", v: "Visita a talleres disponible como upsell" },
  { icon: Clock, k: "Estructura semanal", v: "1 sesión de 90 min: masterclass + hot seat" },
  { icon: MessageCircle, k: "Soporte", v: "Canal asíncrono, lunes a viernes" },
];

export default function Programa() {
  const [openFase, setOpenFase] = useState(0);

  return (
    <>
      <section className="px-6 md:px-10 pt-20 pb-16">
        <div className="max-w-4xl mx-auto">
          <Eyebrow>El programa</Eyebrow>
          <h1 style={{ fontFamily: F.display, color: C.cream }} className="text-4xl md:text-6xl leading-tight">
            Cinco módulos. Un solo objetivo: que dirijas tu marca como CEO.
          </h1>
          <p style={{ fontFamily: F.body, color: C.muted }} className="text-base md:text-lg mt-6 max-w-2xl leading-relaxed">
            Atacamos primero la estrategia financiera, después el caos operativo. Cada módulo entrega
            algo tangible — no otra teoría para archivar.
          </p>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Stitch />
        </div>
      </div>

      <section className="px-6 md:px-10 py-20">
        <div className="max-w-4xl mx-auto flex flex-col">
          {FASES.map((f, i) => {
            const isOpen = openFase === i;
            return (
              <Reveal key={f.n} delay={i * 80}>
                <div style={{ borderTop: i === 0 ? "none" : `1px solid ${C.line}` }}>
                  <button
                    onClick={() => setOpenFase(isOpen ? -1 : i)}
                    className="group w-full flex items-center gap-6 md:gap-10 py-8 px-4 -mx-4 text-left transition-colors duration-300"
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(198,161,91,0.04)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <div
                      style={{ fontFamily: F.display, color: C.gold }}
                      className="text-4xl md:text-5xl font-light shrink-0 w-14 transition-transform duration-300 group-hover:scale-110"
                    >
                      {f.n}
                    </div>
                    <h3 style={{ fontFamily: F.display, color: C.cream }} className="text-xl md:text-2xl flex-1">
                      {f.t}
                    </h3>
                    <span
                      className="shrink-0 transition-transform duration-300"
                      style={{ color: C.gold, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p
                        style={{ fontFamily: F.body, color: C.muted }}
                        className="text-sm md:text-base leading-relaxed pl-4 pr-4 md:pl-[6.5rem] pb-8 whitespace-pre-line"
                      >
                        {f.d}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SPEC SHEET */}
      <section className="px-6 md:px-10 py-20" style={{ background: C.black2 }}>
        <div className="max-w-4xl mx-auto">
          <Eyebrow>Ficha técnica</Eyebrow>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {SPECS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.k} delay={i * 70}>
                  <div
                    className="flex items-start gap-4 p-5 h-full transition-all duration-300 hover:-translate-y-0.5"
                    style={{ border: `1px solid ${C.line}` }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.gold)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.line)}
                  >
                    <div
                      className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(198,161,91,0.12)" }}
                    >
                      <Icon size={17} style={{ color: C.gold }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: F.mono, color: C.gold, fontSize: 11 }} className="uppercase tracking-widest mb-1">
                        {s.k}
                      </div>
                      <div style={{ fontFamily: F.body, color: C.cream }} className="text-sm leading-relaxed">
                        {s.v}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTINUIDAD — después de las 9 semanas */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <Eyebrow>Después del programa</Eyebrow>
            <h2 style={{ fontFamily: F.display, color: C.cream }} className="text-3xl md:text-4xl mb-4 max-w-2xl">
              Las 9 semanas son el inicio. No el final.
            </h2>
            <p style={{ fontFamily: F.body, color: C.muted }} className="text-sm md:text-base mb-12 max-w-2xl leading-relaxed">
              Al terminar el programa base, se abren dos líneas de continuidad — por suscripción
              mensual, solo para quienes ya pasaron por la aceleradora.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="p-8 h-full transition-all duration-300 hover:-translate-y-1" style={{ background: C.black3, border: `1px solid ${C.line}` }}>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "rgba(198,161,91,0.12)" }}
                >
                  <TrendingUp size={18} style={{ color: C.gold }} />
                </div>
                <h3 style={{ fontFamily: F.display, color: C.cream }} className="text-xl mb-3">
                  Asesoramiento continuo
                </h3>
                <p style={{ fontFamily: F.body, color: C.muted }} className="text-sm leading-relaxed">
                  Acompañamiento directo conmigo, mes a mes, para quienes quieren seguir con soporte
                  cercano después del programa base.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="p-8 h-full transition-all duration-300 hover:-translate-y-1" style={{ background: C.black3, border: `1px solid ${C.line}` }}>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "rgba(198,161,91,0.12)" }}
                >
                  <Users size={18} style={{ color: C.gold }} />
                </div>
                <h3 style={{ fontFamily: F.display, color: C.cream }} className="text-xl mb-3">
                  Red exclusiva de CEOs
                </h3>
                <p style={{ fontFamily: F.body, color: C.muted }} className="text-sm leading-relaxed">
                  Comunidad cerrada de dueños de marca con visión de largo plazo — información que
                  se aprende en la cancha, no en teoría, y alianzas comerciales reales. Por ejemplo,
                  marcas que usan la misma tela pero no llegan solas al volumen mínimo se unen dentro
                  del grupo para alcanzar el volumen que exige el mercado.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 text-center">
        <h3 style={{ fontFamily: F.display, color: C.cream }} className="text-3xl md:text-4xl mb-8 max-w-xl mx-auto">
          ¿Tu marca tiene el nivel para entrar?
        </h3>
        <GoldButton href="/aplicar">Aplicar al programa</GoldButton>
      </section>
    </>
  );
}
