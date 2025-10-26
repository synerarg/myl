import Image from "next/image"

export function Sectors() {
  const sectors = [
    {
      name: "Gas y Petróleo",
      icon: "/icons/sectors/Fire.png",
    },
    {
      name: "Manufactura",
      icon: "/icons/sectors/Factory.png",
    },
    {
      name: "Producción",
      icon: "/icons/sectors/UsersFour.png",
    },
    {
      name: "Contratistas y Desarrolladores",
      icon: "/icons/sectors/HardHat.png",
    },
    {
      name: "Comercios e Instituciones",
      icon: "/icons/sectors/Buildings.png",
    },
  ]

  return (
    <section id="sectors" className="bg-white py-16 md:py-24 min-h-screen flex items-center justify-center mx-auto max-w-7xl px-6">
      <div className="w-full flex flex-col items-center justify-between">
        <div className=" w-full  flex flex-col md:flex-row md:items-start md:justify-between items-center justify-center gap-8 mb-12">
          {/* Left heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            <span className="text-blue">Sectores</span> que atendemos
          </h2>

          {/* Right description */}
          <p className="text-gray-700 text-xl max-w-md leading-relaxed">
            Experiencia comprobada en múltiples industrias con soluciones adaptadas a cada sector
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* First row - 3 buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            {sectors.slice(0, 3).map((sector) => (
              <button
                key={sector.name}
                className="flex items-center gap-3 px-6 py-3 border-2 border-blue rounded-md transition-colors duration-200 group text-lg"
              >
                <Image
                  src={sector.icon || "/placeholder.svg"}
                  alt={sector.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 opacity-100 group-hover:opacity-80 transition-opacity duration-200"
                />
                <span className="text-blue font-medium">{sector.name}</span>
              </button>
            ))}
          </div>

          {/* Second row - 2 buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            {sectors.slice(3, 5).map((sector) => (
              <button
                key={sector.name}
                className="flex items-center gap-3 px-6 py-3 border-2 border-blue rounded-md transition-colors duration-200 group text-lg"
              >
                <Image
                  src={sector.icon || "/placeholder.svg"}
                  alt={sector.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 opacity-100 group-hover:opacity-80 transition-opacity duration-200"
                />
                <span className="text-blue font-medium">{sector.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
