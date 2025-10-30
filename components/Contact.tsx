import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="bg-white py-12 md:py-36 flex items-center justify-center md:scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-4 text-5xl font-bold text-black">Contanos tu proyecto</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray">
          Estamos listos para ayudarte a llevar tu operación al siguiente nivel con soluciones confiables y eficientes.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contacto"
            className="rounded-md bg-green px-6 py-3 font-semibold text-white transition-colors hover:bg-green/90"
          >
            Solicitar Cotización
          </Link>

          <Link
            href="whatsapp://send?phone=5491133333333&text=Hola, me interesa tu servicio"
            className="rounded-md border-2 p-[-2px] border-green bg-transparent px-6 py-3 font-semibold text-green transition-colors hover:bg-green/10"
          >
            Contactar ahora
          </Link>
        </div>
      </div>
    </section>
  )
}
