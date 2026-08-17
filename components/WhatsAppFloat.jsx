import { MessageCircle } from "lucide-react";
import { C } from "./theme";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/51963484494"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 md:bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
      style={{ background: C.gold }}
      aria-label="Escribir por WhatsApp"
    >
      <MessageCircle size={24} style={{ color: C.black }} fill={C.black} />
    </a>
  );
}
