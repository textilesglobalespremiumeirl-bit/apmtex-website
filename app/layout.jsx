import { Playfair_Display, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import StickyApplyBar from "@/components/StickyApplyBar";
import PageTransition from "@/components/PageTransition";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "APMTex — Accelerator Program Prime",
  description:
    "Programa de consultoría ejecutiva para dueños de marca textil que quieren dejar de operar y empezar a dirigir como CEO. 9 semanas, 5 módulos, resultados de planta real.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${manrope.variable} ${plexMono.variable}`}>
      <body className="min-h-screen w-full">
        <ScrollProgress />
        <Nav />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <WhatsAppFloat />
        <StickyApplyBar />
      </body>
    </html>
  );
}
