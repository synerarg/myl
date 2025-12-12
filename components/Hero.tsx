import Image from "next/image"
import { Button } from "./Button"

export function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden min-h-screen scroll-mt-20">
      <Image src="/images/Hero.png" alt="Industrial services background" fill className="object-cover" priority />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        <h1 className="mb-6 max-w-2xl text-5xl font-bold text-white">
          Servicios industriales
        </h1>

        <p className="mb-8 max-w-3xl text-lg text-white md:text-xl">
          Soluciones industriales en electricidad, mecánica, limpieza, obra civil, cateos y protección catódica, con
          compromiso en seguridad, eficiencia y precisión en mediciones, relevamientos e inspecciones.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button text="Ver Servicios" variant="primary" onClick={() => {
            window.location.href = "/#services"
          }} />
          <Button text="Solicitar Cotización" variant="secondary" onClick={() => {
            window.location.href = "/contacto"
          }} />
        </div>
      </div>
    </section>
  )
}
