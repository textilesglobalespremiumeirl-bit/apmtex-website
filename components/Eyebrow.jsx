import { C, F } from "./theme";

export default function Eyebrow({ children }) {
  return (
    <div
      style={{ fontFamily: F.mono, color: C.gold, letterSpacing: "0.22em" }}
      className="text-[11px] uppercase mb-4"
    >
      {children}
    </div>
  );
}
