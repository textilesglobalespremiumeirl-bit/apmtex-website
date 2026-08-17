import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { C, F } from "./theme";
import Logo from "./Logo";
import Stitch from "./Stitch";

const SITE_LINKS = [
  { label: "inicio", href: "/" },
  { label: "programa", href: "/programa" },
  { label: "aplicar", href: "/aplicar" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.line}` }} className="pt-14 pb-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div className="max-w-sm">
            <Logo />
            <p style={{ fontFamily: F.body, color: C.muted }} className="text-sm mt-4 leading-relaxed">
              Programa de consultoría ejecutiva para dueños de marcas textiles que están listos
              para dirigir en vez de operar.
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <div style={{ fontFamily: F.mono, color: C.gold }} className="text-xs uppercase tracking-widest mb-4">
                Sitio
              </div>
              <div className="flex flex-col gap-2">
                {SITE_LINKS.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    style={{ fontFamily: F.body, color: C.cream }}
                    className="text-sm text-left capitalize hover:opacity-70"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: F.mono, color: C.gold }} className="text-xs uppercase tracking-widest mb-4">
                Contacto
              </div>
              <a
                href="https://wa.me/51963484494"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: F.body, color: C.cream }}
                className="text-sm flex items-center gap-2 hover:opacity-70"
              >
                <MessageCircle size={14} /> WhatsApp directo
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-10">
          <div style={{ background: C.cream, padding: "10px 18px", display: "inline-flex" }}>
            <img
              src="/images/COMPANY_LOGO.png"
              alt="Textiles Globales Premium"
              style={{ height: 28, width: "auto", display: "block" }}
            />
          </div>
        </div>
        <Stitch />
        <p style={{ fontFamily: F.mono, color: C.muted }} className="text-[11px] mt-8 text-center tracking-wide">
          APMTex CONSULTING &amp; ASSOCIATES GROUP S.A.C. — DOCUMENTO Y MARCA DE USO CONFIDENCIAL
        </p>
      </div>
    </footer>
  );
}
