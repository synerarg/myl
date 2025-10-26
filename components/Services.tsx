"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

type Service = {
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  { title: "Servicios Eléctricos", description: "Instalaciones, mantenimiento preventivo y correctivo, tableros eléctricos y puesta en marcha de equipos.", icon: "/icons/services/Lightning.png" },
  { title: "Servicios Mecánicos", description: "Montaje, mantenimiento, reparaciones industriales y soporte técnico especializado.", icon: "/icons/services/Wrench.png" },
  { title: "Limpiezas Industriales", description: "Limpieza de equipos industriales y aeroenfriadores para máxima eficiencia operativa.", icon: "/icons/services/SprayBottle.png" },
  { title: "Obra Civil Menor", description: "Construcción de bases, fundaciones, galpones, tinglados y mejoras en infraestructura.", icon: "/icons/services/Hammer.png" },
  { title: "Cateos", description: "Detección de fallas y evaluación estructural mediante cateos e inspecciones técnicas preventivas.", icon: "/icons/services/PipeWrench.png" },
  { title: "Protección Catódica", description: "Inspección y verificación de protección catódica, medición de potenciales y cálculos e ingeniería.", icon: "/icons/services/Shield.png" },
];

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",          // ⭐ centra el slide activo en mobile
    dragFree: false,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24">
      <div className="w-[%] lg:w-[95%] xl:w-[92%] 2xl:w-[85%] mx-auto px-0 sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between items-center justify-center gap-4 sm:gap-8 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center md:text-left">
            <span className="text-orange">Nuestros</span> servicios
          </h2>
          <p className="text-base sm:text-lg xl:text-xl text-gray-700 max-w-md leading-relaxed mt-2 md:mt-3 text-center md:text-left">
            Soluciones integrales para mantener tu operación funcionando con máxima eficiencia y seguridad
          </p>
        </div>

        <div className="relative">
          {/* Flechas en ≥ md (no molestan en mobile) */}
          <button
            aria-label="Anterior"
            onClick={scrollPrev}
            className="absolute left-[-5%] top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-orange bg-white/80 hover:bg-white transition cursor-pointer hover:text-orange"
          >
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" className="text-orange">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <button
            aria-label="Siguiente"
            onClick={scrollNext}
            className="absolute right-[-5%] top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-orange bg-white/80 hover:bg-white transition cursor-pointer hover:text-orange"
          >
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" className="text-orange">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Máscara más sutil en mobile para no “cortar” la card centrada */}
          <div className=" md:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div ref={emblaRef} className="overflow-hidden">
              {/* Track sin gap: gutters con padding + márgenes negativos */}
              <div className="flex -mx-4">
                {services.map((s, i) => (
                  <div
                    key={s.title + i}
                    className="
                      min-w-0
                      /* mobile: card grande y centrada, con pequeño peek */
                      flex-[0_0_88%]
                      xs:flex-[0_0_85%]
                      sm:flex-[0_0_60%]
                      md:flex-[0_0_45%]
                      lg:flex-[0_0_33%]
                      xl:flex-[0_0_28%]
                      px-[-60px] md:px-4
                      flex justify-center
                      items-center
                    "
                  >
                    <article className="h-full w-[80%] select-none rounded-xl border-2 border-orange bg-white px-4 py-4 sm:px-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:shadow-md transition">
                      <div className="flex items-start gap-3">
                        <Image
                          src={s.icon || "/placeholder.svg"}
                          alt={s.title}
                          width={28}
                          height={28}
                          className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                        />
                        <h3 className="text-[#111827] font-semibold leading-6 text-base sm:text-lg">
                          {s.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-[13.5px] sm:text-sm leading-6 text-[#4b5563]">
                        {s.description}
                      </p>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
