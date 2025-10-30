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
  {
    title: "Servicios Eléctricos",
    description:
      "Instalaciones, mantenimiento preventivo y correctivo, tableros eléctricos y puesta en marcha de equipos.",
    icon: "/icons/services/Lightning.png",
  },
  {
    title: "Servicios Mecánicos",
    description:
      "Montaje, mantenimiento, reparaciones industriales y soporte técnico especializado.",
    icon: "/icons/services/Wrench.png",
  },
  {
    title: "Limpiezas Industriales",
    description:
      "Limpieza de equipos industriales y aeroenfriadores para máxima eficiencia operativa.",
    icon: "/icons/services/SprayBottle.png",
  },
  {
    title: "Obra Civil Menor",
    description:
      "Construcción de bases, fundaciones, galpones, tinglados y mejoras en infraestructura.",
    icon: "/icons/services/Hammer.png",
  },
  {
    title: "Cateos",
    description:
      "Detección de fallas y evaluación estructural mediante cateos e inspecciones técnicas preventivas.",
    icon: "/icons/services/PipeWrench.png",
  },
  {
    title: "Protección Catódica",
    description:
      "Inspección y verificación de protección catódica, medición de potenciales y cálculos e ingeniería.",
    icon: "/icons/services/Shield.png",
  },
];

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    dragFree: false,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="services" className="w-full bg-white py-12 md:py-36 max-w-7xl mx-auto md:scroll-mt-20 scroll-mt-10">
      <div className="w-[98%] lg:w-[95%] xl:w-[92%] 2xl:w-[85%] mx-auto px-4  ">
      <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between items-center justify-center gap-8 mb-12">
          <h2 className="text-5xl font-bold text-gray-900">
            <span className="text-orange">Nuestros</span> servicios
          </h2>

          <p className="text-gray-700 text-xl max-w-md leading-relaxed mt-3">
            Soluciones integrales para mantener tu operación funcionando con máxima eficiencia y seguridad
          </p>
        </div>

        {/* VIEWPORT */}
        <div className="relative">
          {/* Botones */}
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

          <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex -mx-2 sm:-mx-2.5">
                {services.map((s, i) => (
                  <div
                    key={s.title + i}
                    className="
                      min-w-0
                      w-full
                      flex-[0_0_88%] xs:flex-[0_0_75%] sm:flex-[0_0_55%] md:flex-[0_0_40%] lg:flex-[0_0_32%] xl:flex-[0_0_28%]
                      md:px-8 px-4
                      "
                  >
                    <article className="h-full w-full rounded-xl border-2 border-orange bg-white px-5 py-4 shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:shadow-md transition select-none">
                        <div className="flex items-start justify-center flex-col gap-3 ">
                        <Image
                          src={s.icon || "/placeholder.svg"}
                          alt={s.title}
                          width={28}
                          height={28}
                          className="w-10 h-10 object-contain"
                        />
                        <h3 className="text-[#111827] font-semibold leading-6 text-xl">{s.title}</h3>
                      <p className=" text-sm leading-6 text-[#4b5563]">
                        {s.description}
                      </p>
                        </div>
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