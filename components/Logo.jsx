import Link from "next/link";
import { C, F } from "./theme";

export default function Logo() {
  return (
    <Link href="/" className="flex items-baseline gap-2 group" aria-label="APMTex — Inicio">
      <span style={{ fontFamily: F.display, color: C.cream }} className="text-2xl tracking-tight">
        APM<span style={{ color: C.gold }}>Tex</span>
      </span>
    </Link>
  );
}
