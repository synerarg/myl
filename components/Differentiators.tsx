import Image from "next/image"

export function Differentiators() {
  const features = [
    {
      title: "Servicio personalizado",
      description: "Atención dedicada y soluciones a medida",
      icon: "/icons/differentiators/UserCheck.png",
    },
    {
      title: "Escucha activa",
      description: "Entendemos tus necesidades específicas",
      icon: "/icons/differentiators/Ear.png",
    },
    {
      title: "Soporte continuo",
      description: "Acompañamiento post-proyecto",
      icon: "/icons/differentiators/Headset.png",
    },
    {
      title: "Estándares de calidad",
      description: "Cumplimiento de normativas y certificaciones",
      icon: "/icons/differentiators/Medal.png",
    },
    {
      title: "Comunicación clara",
      description: "Transparencia en cada etapa del proyecto",
      icon: "/icons/differentiators/ChatText.png",
    },
    {
      title: "Tecnología avanzada",
      description: "Equipamiento de última generación",
      icon: "/icons/differentiators/Cpu.png",
    },
  ]

  return (
    <section id="differentiators" className="bg-white py-16 md:py-24 min-h-screen flex items-center justify-center scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <h2 className="text-5xl font-bold text-gray-900">
            Lo que nos <span className="text-green">diferencia</span>
          </h2>

          <p className="text-gray-700 text-xl max-w-md leading-relaxed">
            Nuestro compromiso va más allá de la ejecución técnica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-4 p-2 borderrounded-lg border border-green transition-colors duration-200 rounded-md"
            >
              <Image
                src={feature.icon || "/placeholder.svg"}
                alt={feature.title}
                width={32}
                height={32}
                className="w-8 h-8 flex-shrink-0 opacity-100 group-hover:opacity-80 transition-opacity duration-200"
              />
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">{feature.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
