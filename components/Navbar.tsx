"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./Button";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/#sectors", label: "Sectores" },
  { href: "/#our-process", label: "Nosotros" },
  { href: "/#services", label: "Servicios" },
  { href: "/#contact", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="border-b border-gray-200 bg-white fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <Link href="/" className="flex items-center gap-2" aria-label="Ir al inicio">
          <Image
            src="/images/Logo-nav.png"
            alt="MYL Servicios Industriales"
            width={150}
            height={40}
            className="h-auto w-40"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-medium text-gray transition-colors hover:text-green"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button text="Solicitar Cotización" variant="primary" onClick={() => {
            window.location.href = "/contacto"
          }} />
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-green md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 md:hidden transition-[opacity,visibility] duration-200 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute top-0 left-0 right-0 h-[40vh] bg-white/95 backdrop-blur-md transition-transform duration-200  border-b border-gray-200 shadow-lg ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-gray-200 bg-white">
            <Image
              src="/images/Logo-nav.png"
              alt="MYL Servicios Industriales"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <button
              className="rounded-md p-2 text-green"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex h-[calc(100%-4rem)] flex-col justify-between">
            <ul className="px-6 py-6 space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base text-gray hover:bg-gray-100 hover:text-green transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="px-6 pb-6">
              <Button
                text="Solicitar Cotización"
                variant="primary"
                className="w-full"
                onClick={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
