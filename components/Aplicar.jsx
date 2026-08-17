"use client";

import { useState } from "react";
import { C, F } from "./theme";
import WeavePattern from "./WeavePattern";
import Eyebrow from "./Eyebrow";
import GoldButton from "./GoldButton";

const initialData = {
  nombre: "",
  marca: "",
  whatsapp: "",
  correo: "",
  marcaLink: "",
  facturacion: "",
  cuello: "",
  mentalidad: "5",
  urgencia: "",
  liquidez: "",
};

export default function Aplicar() {
  const [step, setStep] = useState("form"); // form | sending | sent | error
  const [data, setData] = useState(initialData);
  const [errorMsg, setErrorMsg] = useState("");

  const set = (k) => (e) => setData({ ...data, [k]: e.target.value });

  const inputStyle = {
    background: C.black2,
    border: `1px solid ${C.line}`,
    color: C.cream,
    fontFamily: F.body,
  };
  const labelStyle = { fontFamily: F.mono, color: C.gold, letterSpacing: "0.08em" };

  async function submit(e) {
    e.preventDefault();
    setStep("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/aplicar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "No se pudo enviar tu aplicación.");
      }
      setStep("sent");
    } catch (err) {
      setErrorMsg(err.message || "No se pudo enviar tu aplicación. Intenta de nuevo.");
      setStep("error");
    }
  }

  if (step === "sent") {
    return (
      <section className="px-6 md:px-10 py-32 min-h-[60vh] flex items-center">
        <div className="max-w-xl mx-auto text-center">
          <WeavePattern opacity={0.04} id="weave-sent" />
          <Eyebrow>Aplicación recibida</Eyebrow>
          <h1 style={{ fontFamily: F.display, color: C.cream }} className="text-3xl md:text-4xl mb-5">
            Gracias, {data.nombre || "futuro CEO"}.
          </h1>
          <p style={{ fontFamily: F.body, color: C.muted }} className="text-sm md:text-base leading-relaxed">
            Estamos revisando tu respuesta. Si tu marca tiene el nivel para el programa, te
            escribiremos por WhatsApp o correo en menos de 48 horas para coordinar tu llamada de
            diagnóstico de 20 minutos.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 md:px-10 pt-20 pb-28">
      <div className="max-w-2xl mx-auto">
        <Eyebrow>Cuestionario de aplicación</Eyebrow>
        <h1 style={{ fontFamily: F.display, color: C.cream }} className="text-4xl md:text-5xl leading-tight mb-4">
          Esto no es un formulario de contacto.
        </h1>
        <p style={{ fontFamily: F.body, color: C.muted }} className="text-sm md:text-base leading-relaxed mb-12">
          Es un filtro. Respóndelo con honestidad — así evaluamos si este es el momento correcto
          para tu marca, antes de agendar una llamada.
        </p>

        <form onSubmit={submit} className="flex flex-col gap-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label style={labelStyle} className="text-xs uppercase block mb-2">
                Tu nombre
              </label>
              <input required value={data.nombre} onChange={set("nombre")} style={inputStyle} className="w-full px-4 py-3 text-sm outline-none" />
            </div>
            <div>
              <label style={labelStyle} className="text-xs uppercase block mb-2">
                Nombre de tu marca
              </label>
              <input required value={data.marca} onChange={set("marca")} style={inputStyle} className="w-full px-4 py-3 text-sm outline-none" />
            </div>
          </div>

          <div>
            <label style={labelStyle} className="text-xs uppercase block mb-2">
              WhatsApp
            </label>
            <input
              required
              type="tel"
              value={data.whatsapp}
              onChange={set("whatsapp")}
              placeholder="+51 999 999 999"
              style={inputStyle}
              className="w-full px-4 py-3 text-sm outline-none"
            />
          </div>

          <div>
            <label style={labelStyle} className="text-xs uppercase block mb-2">
              Correo electrónico
            </label>
            <input
              required
              type="email"
              value={data.correo}
              onChange={set("correo")}
              placeholder="tucorreo@marca.com"
              style={inputStyle}
              className="w-full px-4 py-3 text-sm outline-none"
            />
          </div>

          <div>
            <label style={labelStyle} className="text-xs uppercase block mb-2">
              Link de tu marca (Instagram, web, tienda)
            </label>
            <input
              value={data.marcaLink}
              onChange={set("marcaLink")}
              placeholder="instagram.com/tumarca — si aún no tienes, no te preocupes"
              style={inputStyle}
              className="w-full px-4 py-3 text-sm outline-none"
            />
            <p style={{ fontFamily: F.body, color: C.muted }} className="text-xs mt-2 leading-relaxed">
              Si ya tienes una marca, la revisamos para evaluar su potencial de crecimiento. Si
              todavía no la tienes, no pasa nada — evaluamos otros parámetros.
            </p>
          </div>

          <div>
            <label style={labelStyle} className="text-xs uppercase block mb-2">
              1. ¿Cuál es la facturación mensual promedio de tu marca hoy?
            </label>
            <select required value={data.facturacion} onChange={set("facturacion")} style={inputStyle} className="w-full px-4 py-3 text-sm outline-none">
              <option value="">Selecciona un rango</option>
              <option>Menos de S/ 10,000</option>
              <option>S/ 10,000 – 30,000</option>
              <option>S/ 30,000 – 80,000</option>
              <option>Más de S/ 80,000</option>
            </select>
          </div>

          <div>
            <label style={labelStyle} className="text-xs uppercase block mb-2">
              2. ¿Cuál es el principal cuello de botella que te roba tiempo y dinero hoy?
            </label>
            <textarea required value={data.cuello} onChange={set("cuello")} rows={3} style={inputStyle} className="w-full px-4 py-3 text-sm outline-none resize-none" />
          </div>

          <div>
            <label style={labelStyle} className="text-xs uppercase block mb-3">
              3. Del 1 al 10, ¿qué tan dispuesto estás a dejar de operar como "todista" y dirigir como CEO?
            </label>
            <div className="flex items-center gap-4">
              <input type="range" min="1" max="10" value={data.mentalidad} onChange={set("mentalidad")} className="flex-1 accent-[#C6A15B]" />
              <span style={{ fontFamily: F.mono, color: C.gold }} className="text-lg w-8 text-center">
                {data.mentalidad}
              </span>
            </div>
          </div>

          <div>
            <label style={labelStyle} className="text-xs uppercase block mb-2">
              4. ¿Por qué tu negocio necesita resolver esto ahora y no en 6 meses?
            </label>
            <textarea required value={data.urgencia} onChange={set("urgencia")} rows={3} style={inputStyle} className="w-full px-4 py-3 text-sm outline-none resize-none" />
          </div>

          <div>
            <label style={labelStyle} className="text-xs uppercase block mb-2">
              5. ¿Cuentas con liquidez disponible para invertir en tu negocio en los próximos 7 días?
            </label>
            <select required value={data.liquidez} onChange={set("liquidez")} style={inputStyle} className="w-full px-4 py-3 text-sm outline-none">
              <option value="">Selecciona una opción</option>
              <option>Sí, la tengo lista</option>
              <option>Puedo conseguirla si el programa lo justifica</option>
              <option>No, todavía no</option>
            </select>
          </div>

          <GoldButton full type="submit" disabled={step === "sending"}>
            {step === "sending" ? "Enviando..." : "Enviar aplicación"}
          </GoldButton>
          {step === "error" && (
            <p style={{ fontFamily: F.body, color: "#E8998A" }} className="text-sm text-center -mt-4">
              {errorMsg}
            </p>
          )}
          <p style={{ fontFamily: F.mono, color: C.muted }} className="text-[11px] text-center">
            Respuesta en menos de 48 horas si tu marca calza con el programa.
          </p>
        </form>
      </div>
    </section>
  );
}
