import Image from "next/image"
import Link from "next/link"
import { Button } from "./Button"

export const Footer = () => {
  return (
    <footer id="footer" className="bg-white border-t border-darkBlue ">
      <div className="mx-auto max-w-7xl px-6 py-4 ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 py-4">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Image
              src="/images/Logo-nav.png"
              alt="MYL Servicios Industriales"
              width={150}
              height={40}
              className="h-auto w-40"
            />
            <p className="text-sm text-gray">
            Soluciones integrales para la industria con seguridad, eficiencia y un equipo comprometido con la excelencia.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-blue">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#inicio" className="text-sm text-gray hover:text-blue transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#strategy" className="text-sm text-gray hover:text-blue transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#sectors" className="text-sm text-gray hover:text-blue transition-colors">
                  Sectores
                </Link>
              </li>
              {/*<li>
                <Link href="/#differentiators" className="text-sm text-gray hover:text-blue transition-colors">
                  Proyectos
                </Link>
              </li>*/}
              <li>
                <Link href="/#our-process" className="text-sm text-gray hover:text-blue transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-gray hover:text-blue transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-blue">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm ">
                <svg className="h-6 w-6 flex-shrink-0 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray">
                +54 9 294 413-6902
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm ">
                <svg className="h-6 w-6 flex-shrink-0 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray">
                info@mylservicios.com.ar
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm ">
                <svg className="h-6 w-6 flex-shrink-0 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray">
                Lun - Vie: 8:00 - 18:00
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm ">
                <svg className="h-6 w-6 flex-shrink-0 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray">
                Buenos Aires, Argentina
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-blue">Contanos tu proyecto</h3>
            <Button text="Contactar ahora" variant="primary" bgColor="var(--color-blue)" />
          </div>
        </div>

      </div>
        <div className=" py-4 text-center border-t border-darkBlue">
          <p className="text-sm text-gray">© 2025 MyL Servicios Industriales. Todos los derechos reservados.</p>
          <p className="mt-1 text-sm text-gray">
            Desarrollado por{" "}
            <Link href="https://synera.com.ar" className="text-sky-500 hover:underline">
              Synera
            </Link>
          </p>
        </div>
    </footer>
  )
}
