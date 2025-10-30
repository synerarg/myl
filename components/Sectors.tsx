import Image from "next/image"

export function Sectors() {
  const sectors = [
    { name: "Gas y Petróleo", icon: "/icons/sectors/Fire.png" },
    { name: "Manufactura", icon: "/icons/sectors/Factory.png" },
    { name: "Producción", icon: "/icons/sectors/UsersFour.png" },
    { name: "Contratistas y Desarrolladores", icon: "/icons/sectors/HardHat.png" },
    { name: "Comercios e Instituciones", icon: "/icons/sectors/Buildings.png" },
  ]

  const btnBase =
    "inline-flex items-center gap-3 border-2 border-blue rounded-md transition-colors duration-200 " +
    "w-full max-w-[320px] h-12 px-4 " +
    "md:w-auto md:h-auto md:px-6 group text-lg"

  const textBase =
    "text-blue font-medium truncate"

  return (
    <section
      id="sectors"
      className="bg-white py-12 md:py-36 flex items-center justify-center mx-auto max-w-7xl px-6 md:scroll-mt-20 "
    >
      <div className="w-full flex flex-col items-center justify-center md:justify-between">
        <div className="w-full flex flex-col md:flex-row  md:justify-between items-center justify-center gap-8 mb-12">
          <h2 className="text-5xl font-bold text-gray-900 text-center md:text-left">
            <span className="text-blue">Sectores</span> que atendemos
          </h2>

          <p className="text-gray-700 text-xl max-w-md leading-relaxed mt-3 text-center md:text-left">
            Experiencia comprobada en múltiples industrias con soluciones adaptadas a cada sector
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full items-center">
          <div className="flex flex-wrap gap-4 justify-center w-full">
            {sectors.slice(0, 3).map((sector) => (
              <button key={sector.name} className={btnBase}>
                <Image
                  src={sector.icon || "/placeholder.svg"}
                  alt={sector.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 opacity-100 group-hover:opacity-80 transition-opacity duration-200 shrink-0"
                />
                <span className={textBase}>{sector.name}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center w-full">
            {sectors.slice(3, 5).map((sector) => (
              <button key={sector.name} className={btnBase}>
                <Image
                  src={sector.icon || "/placeholder.svg"}
                  alt={sector.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 opacity-100 group-hover:opacity-80 transition-opacity duration-200 shrink-0"
                />
                <span className={textBase}>{sector.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
