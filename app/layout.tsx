import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mylserviciosar.com"),
  title: {
    default: "MYL Servicios Industriales | Seguridad, Eficiencia y Continuidad Operativa",
    template: "%s | MYL Servicios Industriales",
  },
  description:
    "Soluciones industriales en electricidad, mecánica, limpiezas, obra civil menor, cateos y protección catódica. Enfocados en seguridad, eficiencia y continuidad operativa. Neuquén, Argentina.",
  keywords: [
    "servicios industriales",
    "electricidad industrial",
    "mecánica industrial",
    "limpiezas industriales",
    "obra civil menor",
    "cateos",
    "protección catódica",
    "mantenimiento industrial",
    "relevamientos e inspecciones",
    "Neuquén",
    "Argentina",
  ],
  category: "industrial",
  applicationName: "MYL Servicios Industriales",
  authors: [{ name: "MYL Servicios Industriales" }],
  creator: "MYL Servicios Industriales",
  publisher: "MYL Servicios Industriales",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.mylserviciosar.com/",
    siteName: "MYL Servicios Industriales",
    title:
      "Servicios industriales: electricidad, mecánica, limpieza, obra civil, cateos y protección catódica",
    description:
      "Tu aliado estratégico en servicios industriales. Cumplimiento normativo, soporte continuo y tecnología de última generación.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "MYL Servicios Industriales - Operación segura y eficiente",
      },
    ],
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MYL Servicios Industriales | Seguridad, Eficiencia y Continuidad Operativa",
    description:
      "Soluciones integrales para la industria: electricidad, mecánica, limpiezas, obra civil, cateos y protección catódica.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  other: {
    "theme-color": "#0f172a",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
