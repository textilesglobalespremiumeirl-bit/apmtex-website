import { Check, X } from "lucide-react";
import { C, F } from "./theme";
import WeavePattern from "./WeavePattern";
import Stitch from "./Stitch";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import GoldButton from "./GoldButton";
import GhostButton from "./GhostButton";
import PlantaCard from "./PlantaCard";
import FAQSection from "./FAQ";

const STATS = [
  { n: "15+", l: "años en planta textil" },
  { n: "05", l: "módulos del programa" },
  { n: "9", l: "semanas de duración" },
  { n: "100%", l: "clases sincrónicas y asíncronas" },
];

const PARA_TI = [
  "Facturas de forma constante pero el margen se te escapa entre talleres y proveedores.",
  "Sigues siendo tú quien apaga cada incendio operativo, todos los días.",
  "Compites por precio y sabes que tu producto vale más que eso.",
];

const NO_ES_PARA = [
  "Buscas insumos o proveedores baratos, no una dirección estratégica.",
  "No tienes liquidez para invertir en tu propia operación ahora.",
  "Prefieres seguir operando en piloto automático otro año más.",
];

export default function Inicio() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-10 pt-20 pb-28">
        <WeavePattern opacity={0.05} id="weave-hero" />
        <div
          className="absolute -top-40 right-0 w-[520px] h-[520px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(198,161,91,0.13), transparent 70%)" }}
        />
        <div className="max-w-6xl mx-auto relative">
          <Eyebrow>Accelerator Program Prime</Eyebrow>
          <h1
            style={{ fontFamily: F.display, color: C.cream }}
            className="text-[42px] leading-[1.08] md:text-[68px] md:leading-[1.05] font-medium max-w-4xl"
          >
            Deja de competir por precio.
            <br />
            Empieza a <span style={{ fontStyle: "italic", color: C.gold, fontWeight: 500 }}>dominar</span> por valor.
          </h1>
          <p
            style={{ fontFamily: F.body, color: C.muted }}
            className="text-base md:text-lg mt-7 max-w-xl leading-relaxed"
          >
            Un programa de consultoría ejecutiva para dueños de marca textil que quieren dejar de
            ser el "todista" de su propia empresa y convertirse en el CEO que la dirige — explicado
            simple, sin rodeos, sin teoría que se queda en la diapositiva.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <GoldButton href="/aplicar">Aplicar al programa</GoldButton>
            <GhostButton href="/programa">Ver el programa</GhostButton>
          </div>
        </div>
      </section>

      <div className="px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Stitch />
        </div>
      </div>

      {/* STATS STRIP */}
      <section className="px-6 md:px-10 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 90}>
              <div className="group cursor-default">
                <div
                  style={{ fontFamily: F.mono, color: C.gold, fontWeight: 300 }}
                  className="text-4xl md:text-5xl transition-transform duration-300 group-hover:-translate-y-1"
                >
                  {s.n}
                </div>
                <div style={{ fontFamily: F.body, color: C.muted }} className="text-sm mt-2">
                  {s.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DIFERENCIADOR */}
      <section className="px-6 md:px-10 py-20" style={{ background: C.black2 }}>
        <Reveal className="max-w-5xl mx-auto">
          <Eyebrow>Los dos diferenciadores</Eyebrow>
          <div className="grid md:grid-cols-2 gap-10 mt-6">
            <div>
              <p style={{ fontFamily: F.display, color: C.cream, fontWeight: 400 }} className="text-2xl md:text-3xl leading-snug mb-3">
                Cero teoría vacía.
              </p>
              <p style={{ fontFamily: F.body, color: C.muted }} className="text-sm md:text-base leading-relaxed">
                Cada método viene de la dirección real de una planta de producción textil premium
                — no de una diapositiva.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: F.display, color: C.cream, fontWeight: 400 }} className="text-2xl md:text-3xl leading-snug mb-3">
                Directo al grano.
              </p>
              <p style={{ fontFamily: F.body, color: C.muted }} className="text-sm md:text-base leading-relaxed">
                Lo complejo, explicado simple — sin rodeos, sin jerga de consultor. Si no lo puedes
                aplicar el lunes, no sirve.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* AUTORIDAD — QUIÉN DIRIGE EL PROGRAMA */}
      <section className="px-6 md:px-10 py-24">
        <Reveal className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-12 items-start">
          <div className="relative group">
            <div
              className="w-full aspect-square overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ border: `1px solid ${C.line}` }}
            >
              <img src="/images/HEADSHOT.jpg" alt="Ing. Omar Gutiérrez, consultor principal de APMTex" className="w-full h-full object-cover" />
            </div>
            <div
              className="absolute -bottom-4 -right-4 px-3 py-2 transition-transform duration-300 group-hover:-translate-y-1"
              style={{ background: C.gold, fontFamily: F.mono, fontSize: 11, color: C.black, letterSpacing: "0.05em" }}
            >
              15+ AÑOS EN PLANTA
            </div>
          </div>
          <div>
            <Eyebrow>Quién dirige el programa</Eyebrow>
            <h2 style={{ fontFamily: F.display, color: C.cream }} className="text-3xl md:text-4xl mb-6">
              Ing. Omar Gutiérrez
            </h2>
            <p style={{ fontFamily: F.body, color: C.muted }} className="text-sm md:text-base leading-relaxed mb-4">
              Ingeniero en Gestión Empresarial por la Universidad Nacional Agraria La Molina y
              Gerente General de <span style={{ color: C.cream }}>Textiles Globales Premium E.I.R.L.</span>,
              donde lleva más de 15 años dirigiendo producción textil "full-package": desde el
              desarrollo técnico de telas hasta la negociación B2B con marcas de volumen.
            </p>
            <p style={{ fontFamily: F.body, color: C.muted }} className="text-sm md:text-base leading-relaxed mb-8">
              Ese mismo rigor —ROI, márgenes, CapEx, procesos estandarizados— es la base de cada
              fase del programa. Pero lo que más repiten sus clientes no es la técnica: es que por
              fin alguien se los explicó simple, sin rodeos, de una forma que de verdad pudieron
              aplicar.
            </p>
            <div className="flex items-center gap-5 flex-wrap">
              <div style={{ background: C.cream, padding: "10px 16px", display: "inline-flex" }}>
                <img src="/images/COMPANY_LOGO.png" alt="Textiles Globales Premium" style={{ height: 40, width: "auto", display: "block" }} />
              </div>
              <span style={{ fontFamily: F.mono, color: C.muted, fontSize: 11 }} className="uppercase tracking-widest">
                Respaldo industrial del programa
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      <div className="px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Stitch />
        </div>
      </div>

      {/* PARA QUIEN */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <Reveal>
            <div
              className="p-8 md:p-10 h-full transition-all duration-300 hover:-translate-y-1"
              style={{ background: C.black3, border: `1px solid ${C.line}` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Check size={18} style={{ color: C.gold }} />
                <span style={{ fontFamily: F.mono, color: C.gold }} className="text-xs uppercase tracking-widest">
                  Este programa es para ti si
                </span>
              </div>
              <ul className="flex flex-col gap-4">
                {PARA_TI.map((t) => (
                  <li key={t} style={{ fontFamily: F.body, color: C.cream }} className="text-sm leading-relaxed">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div
              className="p-8 md:p-10 h-full transition-all duration-300 hover:-translate-y-1"
              style={{ background: "transparent", border: `1px solid ${C.line}` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <X size={18} style={{ color: C.muted }} />
                <span style={{ fontFamily: F.mono, color: C.muted }} className="text-xs uppercase tracking-widest">
                  No es para ti si
                </span>
              </div>
              <ul className="flex flex-col gap-4">
                {NO_ES_PARA.map((t) => (
                  <li key={t} style={{ fontFamily: F.body, color: C.muted }} className="text-sm leading-relaxed">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PLANTA EN VIVO */}
      <section className="px-6 md:px-10 py-24" style={{ background: C.black2 }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Eyebrow>Planta en vivo</Eyebrow>
            <h2 style={{ fontFamily: F.display, color: C.cream }} className="text-3xl md:text-4xl mb-4 max-w-xl">
              Nada de teoría de oficina. Esto pasa en piso de planta.
            </h2>
            <p style={{ fontFamily: F.body, color: C.muted }} className="text-sm md:text-base mb-12 max-w-xl leading-relaxed">
              Grabaciones reales dirigiendo producción, negociando con proveedores y aplicando cada
              método del programa en Textiles Globales Premium.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <PlantaCard
              delay={0}
              img="/images/THUMB_CREA_VALOR.jpg"
              title="Crea valor: no compitas por centavos"
              copy={`De 8 a 150 USD: la diferencia entre hacer ropa y construir una marca.

Soy el Ing. Omar Gutiérrez. A diario me reúno con dueños de marcas estancados peleando por céntimos. El dinero que recibes es solo una consecuencia del valor que eres capaz de generar desde el insumo hasta el producto final.

Si estás listo para dejar de operar como un "todista" y empezar a dirigir tu producción como un verdadero CEO, postula a nuestra aceleradora APMTex y agenda una entrevista de evaluación.`}
            />
            <PlantaCard
              delay={100}
              img="/images/THUMB_MARKETING.jpg"
              title="¿Todo es marketing?"
              copy={`El peor error de un dueño de marca: creer que el marketing salva a un mal producto.

Puedes tener la mejor campaña, la mejor página web y los empaques más caros, pero si tu prenda encoge en la primera lavada o el estampado se cuartea, no estás construyendo una marca, estás cavando tu propia tumba comercial.

Soy el Ing. Omar Gutiérrez y, como lo vemos a diario en la planta: la marca no nace en las redes sociales, nace en la fábrica. En la ingeniería de tu tela y en la calidad de tus insumos.

¿Qué opinas? ¿Hoy en día pesa más un buen marketing o un producto impecable? Reserva una entrevista de postulación conmigo en nuestra aceleradora de marcas APMTex y vamos a evaluar si estás listo para dar el siguiente paso y convertirte en CEO de tu empresa — y no un "todista" apagando incendios.`}
            />
            <PlantaCard
              delay={200}
              img="/images/THUMB_DESEO.jpg"
              title="¿Te compran por deseo o necesidad?"
              copy={`¿De qué sirve tener el mejor producto si nadie lo desea?

Ya lo hemos hablado varias veces: el paso cero en los negocios es identificar una necesidad, generar valor para cubrirla y entender que el dinero es solo una consecuencia de hacer las cosas bien.

Pero aquí está la dura realidad operativa a la que pocos sobreviven. ¿Qué pasa cuando ya hiciste el trabajo duro? ¿Qué pasa si ya creaste valor y tienes en tus manos un producto bien hecho, sólido y de calidad premium? ¿Cuál es el siguiente paso?

Puedes tener el mejor producto posible, pero si no lo sabes vender, simplemente te estancarás. Un producto de excelencia guardado en un almacén no factura.

Es en este punto de inflexión donde debes dejar de enfocarte solo en la planta e inyectar estrategia comercial. El mercado no te va a buscar mágicamente solo por ser "bueno": tienes que aprender a generar deseo para que te compren por impulso, sabiendo que tu calidad base justifique esa decisión.

La calidad operativa te da el producto. El marketing y el deseo te dan la escalabilidad.

Soy el Ing. Omar Gutiérrez y si sientes que tienes un producto premium pero te has estancado en las ventas, o ya estás aplicando estrategias de deseo para escalar pero no tienes resultados, te invito a postular a nuestra aceleradora APMTex. Si logras ingresar, vas a estar más cerca de convertirte en el CEO de tu empresa y dejar de ser un autoempleado que se explota a sí mismo.`}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA BANNER */}
      <section className="px-6 md:px-10 pb-24">
        <Reveal className="max-w-6xl mx-auto p-10 md:p-16 text-center relative overflow-hidden">
          <div style={{ background: C.black2, border: `1px solid ${C.line}` }} className="absolute inset-0" aria-hidden="true" />
          <WeavePattern opacity={0.05} id="weave-cta" />
          <h3 style={{ fontFamily: F.display, color: C.cream }} className="text-3xl md:text-4xl relative">
            Postula a la aceleradora. El Ing. Omar Gutiérrez evalúa personalmente si tu marca está
            lista para ingresar.
          </h3>
          <p style={{ fontFamily: F.body, color: C.muted }} className="mt-4 max-w-lg mx-auto text-sm relative">
            Cupos limitados por cohorte. Postula en cinco minutos — si tu marca califica, te
            contactamos para tu entrevista de admisión.
          </p>
          <div className="mt-8 relative flex justify-center">
            <GoldButton href="/aplicar">Postular ahora</GoldButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
