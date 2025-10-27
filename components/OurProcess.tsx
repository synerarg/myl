import Image from "next/image"

export function OurProcess() {
  const steps = [
    {
      number: "01",
      title: "Relevamiento",
      description: "Análisis detallado de tus necesidades y evaluación del sitio",
      icon: "/icons/our-process/ClipboardText.png",
    },
    {
      number: "02",
      title: "Plan de trabajo",
      description: "Propuesta técnica y cronograma adaptado a tu operación",
      icon: "/icons/our-process/FileText.png",
    },
    {
      number: "03",
      title: "Ejecución segura",
      description: "Implementación con protocolos de seguridad y calidad",
      icon: "/icons/our-process/GearSix.png",
    },
    {
      number: "04",
      title: "Entrega y mantenimiento",
      description: "Puesta en marcha y soporte continuo post-proyecto",
      icon: "/icons/our-process/CalendarCheck.png",
    },
  ]

  return (
    <section id="our-process" className="bg-darkBlue py-36 flex items-center justify-center scroll-mt-20" >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Nuestro proceso</h2>
          <p className="text-white/90 text-lg">Un enfoque estructurado para garantizar resultados excepcionales</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[13%] left-[calc(50%+3rem)] w-[calc(100%-4rem)] h-[2px] bg-white/30" />
              )}

              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    <Image
                      src={step.icon || "/placeholder.svg"}
                      alt={step.title}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                </div>

                <div className="text-5xl md:text-6xl font-bold text-white mb-4">{step.number}</div>

                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>

                <p className="text-white/80 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
