import Image from "next/image"

export function Strategy() {
  return (
    <section id="strategy" className="bg-white relative overflow-hidden">
      <div className="relative flex">
        <div className="w-full lg:w-1/2 relative z-10">
          <div className="2xl:pl-[40%] lg:pl-[10%] px-10 pr-5 py-16 md:py-24">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Tu aliado estratégico
              <br />
              en servicios industriales
            </h2>

            <p className="text-gray-700 mb-10 text-base leading-relaxed">
              Nos adaptamos a las necesidades de tu operación priorizando seguridad, eficiencia y continuidad.
              Trabajamos codo a codo con nuestros clientes para garantizar resultados excepcionales.
            </p>

            <div className="space-y-8">
              {/* Feature 1 - Security */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src="/icons/ShieldCheck.png"
                      alt="Seguridad"
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Seguridad y estándares</h3>
                  <p className="text-gray-600 text-base">Cumplimiento normativo en cada proyecto</p>
                </div>
              </div>

              {/* Feature 2 - Support */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image src="/icons/Headset.png" alt="Soporte" width={48} height={48} className="w-full h-full" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Soporte continuo</h3>
                  <p className="text-gray-600 text-base">Acompañamiento en todas las etapas</p>
                </div>
              </div>

              {/* Feature 3 - Technology */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image
                      src="/icons/CraneTower.png"
                      alt="Tecnología"
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Tecnología avanzada</h3>
                  <p className="text-gray-600 text-base">Equipamiento de última generación</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right image - extends to viewport edge with no margins */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 left-1/2 w-1/2">
          <Image src="/images/Strategy.png" alt="Trabajador industrial" fill className="object-cover object-left" />
        </div>
      </div>
    </section>
  )
}
