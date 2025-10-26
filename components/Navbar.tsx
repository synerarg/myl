import Image from "next/image"
import Link from "next/link"
import { Button } from "./Button"

export function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <Link href="/" className="flex items-center gap-2">
        <Image
              src="/images/Logo-nav.png"
              alt="MYL Servicios Industriales"
              width={150}
              height={40}
              className="h-auto w-40"
            />
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-base font-medium text-gray transition-colors hover:text-green"
          >
            Inicio
          </Link>
          <Link
            href="#sectors"
            className="text-base font-medium text-gray transition-colors hover:text-green"
          >
            Sectores
          </Link>
          <Link
            href="#differentiators"
            className="text-base font-medium text-gray transition-colors hover:text-green"
          >
            Proyectos
          </Link>
          <Link
            href="#our-process"
            className="text-base font-medium text-gray transition-colors hover:text-green"
          >
            Nosotros
          </Link>
          <Link
            href="#contact"
            className="text-base font-medium text-gray transition-colors hover:text-green"
          >
            Contacto
          </Link>
        </div>

        <Button text="Solicitar Cotización" variant="primary" />
      </div>
    </nav>
  )
}
