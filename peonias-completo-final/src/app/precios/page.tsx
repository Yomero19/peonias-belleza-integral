"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface ServiceItem {
  name: string;
  price: number;
  description?: string;
}

const services: {
  category: string;
  description?: string;
  items: ServiceItem[];
}[] = [
  // Servicios de GEL
  {
    category: "Servicios de Gel",
    items: [
      { name: "Aplicación de gel", price: 180 },
      { name: "Retiro de gel", price: 50 },
    ]
  },
  // Servicios ACRÍLICO
  {
    category: "Servicios Acrílicos",
    items: [
      { name: "Uñas acrílicas esculturales (#1-3)", price: 440 },
      { name: "Baño de acrílico (#1-3)", price: 340 },
      { name: "Retoque de acrílico (#1-3)", price: 340 },
      { name: "Retiro de acrílico", price: 120 },
    ]
  },
  // Rubber Base
  {
    category: "Servicios Rubber Base",
    items: [
      { name: "Rubber base", price: 200 },
      { name: "Retoque de Rubber", price: 180 },
      { name: "Rubber + gel", price: 300 },
      { name: "Retoque de Rubber + gel", price: 280 },
      { name: "Retiro de Rubber", price: 60 },
    ]
  },
  // Manicures
  {
    category: "Servicios de Manicure",
    items: [
      { name: "Manicure Ruso", price: 150 },
      { name: "Manicure Ruso + gel", price: 320 },
      { name: "Mani Spa", price: 200 },
      { name: "Mani Spa + gel", price: 350 },
      { name: "Mani Jelly", price: 260 },
      { name: "Mani Jelly + gel", price: 410 },
    ]
  },
  // Efectos y Diseños
  {
    category: "Efectos y Diseños",
    items: [
      { name: "Efecto", price: 80 },
      { name: "Francés", price: 80 },
      { name: "Diseño a mano alzada", price: 150 },
      { name: "Líneas sencillas", price: 90 },
      { name: "Relieve", price: 100 },
      { name: "Ojo de gato", price: 100 },
      { name: "Aplicación de vitabase", price: 50 },
    ]
  },
  // Extensiones de Pestañas - Fibras individuales
  {
    category: "Extensiones de Pestañas - Fibras Individuales",
    description: "Fibras individuales para un look natural y definido.",
    items: [
      { name: "Set nuevo", price: 450 },
      { name: "Retoque (2 semanas)", price: 300 },
    ]
  },
  // Extensiones de Pestañas - Efecto Rímel
  {
    category: "Extensiones de Pestañas - Efecto Rímel",
    description: "Acabado oscuro y texturizado para un efecto de rímel sin maquillaje.",
    items: [
      { name: "Set nuevo", price: 500 },
      { name: "Retoque (2 semanas)", price: 350 },
    ]
  },
  // Extensiones de Pestañas - Abanicos YY
  {
    category: "Extensiones de Pestañas - Abanicos YY",
    description: "Abanicos YY ultraligeros para volumen y plenitud.",
    items: [
      { name: "Set nuevo", price: 580 },
      { name: "Retoque (2 semanas)", price: 400 },
    ]
  },
  // Extensiones de Pestañas - Abanicos Ultraligeros
  {
    category: "Extensiones de Pestañas - Abanicos Ultraligeros",
    description: "Abanicos ultraligeros para un volumen sofisticado.",
    items: [
      { name: "Set nuevo", price: 600 },
      { name: "Retoque (2 semanas)", price: 400 },
    ]
  },
  // Depilación Láser - Rostro
  {
    category: "Depilación Láser - Rostro",
    items: [
      { name: "Bozo - 1 sesión", price: 249 },
      { name: "Bozo - 6 sesiones", price: 1389 },
      { name: "Bozo - 8 sesiones", price: 1792 },
      { name: "Bozo - 12 sesiones", price: 2539 },
      { name: "Patillas - 1 sesión", price: 299 },
      { name: "Patillas - 6 sesiones", price: 1668 },
      { name: "Patillas - 8 sesiones", price: 2152 },
      { name: "Patillas - 12 sesiones", price: 3049 },
      { name: "Rostro Completo - 1 sesión", price: 499 },
      { name: "Rostro Completo - 6 sesiones", price: 2784 },
      { name: "Rostro Completo - 8 sesiones", price: 3592 },
      { name: "Rostro Completo - 12 sesiones", price: 5089 },
    ]
  },
  // Depilación Láser - Cuerpo
  {
    category: "Depilación Láser - Cuerpo",
    items: [
      { name: "Axilas - 1 sesión", price: 349 },
      { name: "Axilas - 6 sesiones", price: 1947 },
      { name: "Axilas - 8 sesiones", price: 2512 },
      { name: "Axilas - 12 sesiones", price: 3559 },
      { name: "Abdomen - 1 sesión", price: 349 },
      { name: "Abdomen - 6 sesiones", price: 1947 },
      { name: "Abdomen - 8 sesiones", price: 2512 },
      { name: "Abdomen - 12 sesiones", price: 3559 },
      { name: "1/2 Brazos - 1 sesión", price: 349 },
      { name: "1/2 Brazos - 6 sesiones", price: 1947 },
      { name: "1/2 Brazos - 8 sesiones", price: 2512 },
      { name: "1/2 Brazos - 12 sesiones", price: 3559 },
      { name: "Brazos completos - 1 sesión", price: 599 },
      { name: "Brazos completos - 6 sesiones", price: 3342 },
      { name: "Brazos completos - 8 sesiones", price: 4312 },
      { name: "Brazos completos - 12 sesiones", price: 6109 },
      { name: "1/2 piernas - 1 sesión", price: 399 },
      { name: "1/2 piernas - 6 sesiones", price: 2226 },
      { name: "1/2 piernas - 8 sesiones", price: 2872 },
      { name: "1/2 piernas - 12 sesiones", price: 4069 },
      { name: "Piernas completas - 1 sesión", price: 799 },
      { name: "Piernas completas - 6 sesiones", price: 4448 },
      { name: "Piernas completas - 8 sesiones", price: 5752 },
      { name: "Piernas completas - 12 sesiones", price: 8149 },
    ]
  },
  // Depilación Láser - Zona Íntima
  {
    category: "Depilación Láser - Zona Íntima",
    items: [
      { name: "Bikini Sencillo - 1 sesión", price: 349 },
      { name: "Bikini Sencillo - 6 sesiones", price: 1947 },
      { name: "Bikini Sencillo - 8 sesiones", price: 2512 },
      { name: "Bikini Sencillo - 12 sesiones", price: 3559 },
      { name: "Bikini Completo - 1 sesión", price: 549 },
      { name: "Bikini Completo - 6 sesiones", price: 3063 },
      { name: "Bikini Completo - 8 sesiones", price: 3952 },
      { name: "Bikini Completo - 12 sesiones", price: 5599 },
      { name: "Interglúteo - 1 sesión", price: 349 },
      { name: "Interglúteo - 6 sesiones", price: 1947 },
      { name: "Interglúteo - 8 sesiones", price: 2512 },
      { name: "Interglúteo - 12 sesiones", price: 3559 },
      { name: "Espalda Baja - 1 sesión", price: 299 },
      { name: "Espalda Baja - 6 sesiones", price: 1668 },
      { name: "Espalda Baja - 8 sesiones", price: 2152 },
      { name: "Espalda Baja - 12 sesiones", price: 3049 },
    ]
  },
  // Tratamientos Corporales
  {
    category: "Tratamientos Corporales Reductivos",
    items: [
      { name: "Reducción de Abdomen - Por sesión", price: 399, description: "Conductiva + Lipoláser + Radiofrecuencia + Vacumterapia" },
      { name: "Reducción de Abdomen - 6 sesiones", price: 1999, description: "Conductiva + Lipoláser + Radiofrecuencia + Vacumterapia" },
      { name: "Reducción de Muslos - Por sesión", price: 349, description: "Conductiva + Lipoláser + Radiofrecuencia + Vacumterapia" },
      { name: "Reducción de Muslos - 6 sesiones", price: 1772, description: "Conductiva + Lipoláser + Radiofrecuencia + Vacumterapia" },
      { name: "Reducción de Brazos - Por sesión", price: 249, description: "Lipoláser + Radiofrecuencia" },
      { name: "Reducción de Brazos - 6 sesiones", price: 1269, description: "Lipoláser + Radiofrecuencia" },
      { name: "Glúteos Perfectos - Por sesión", price: 249, description: "Vacumterapia + Radiofrecuencia" },
      { name: "Glúteos Perfectos - 6 sesiones", price: 1265, description: "Vacumterapia + Radiofrecuencia" },
      { name: "Anticelulítico - Por sesión", price: 249, description: "Vacumterapia + Radiofrecuencia" },
      { name: "Anticelulítico - 6 sesiones", price: 1269, description: "Vacumterapia + Radiofrecuencia" },
    ]
  }
];

export default function PreciosPage() {
  const router = useRouter();

  const handleReservar = (serviceName: string, price: number) => {
    const params = new URLSearchParams({
      servicio: serviceName,
      precio: price.toString()
    });
    router.push(`/reservar?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-light text-neutral-800">
                <span className="block text-sm leading-none">peonías.</span>
                <span className="block text-xs leading-none text-neutral-600 italic">CENTRO DE BELLEZA INTEGRAL</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">Home</Link>
              <Link href="/reservar" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">Reservar</Link>
              <Link href="/precios" className="text-sm text-neutral-900 font-medium transition-colors">Precios</Link>
              <Link href="/sobre-pionias" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">Sobre peonías</Link>
              <Link href="/contacto" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">Contacto</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <span className="text-sm text-neutral-600">Iniciar sesión</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-neutral-100 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-neutral-800 mb-6">Precios</h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Descubre nuestros tratamientos de belleza integral con precios transparentes diseñados para tu bienestar.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((serviceCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-3xl font-light text-neutral-800 mb-4 text-center">
                {serviceCategory.category}
              </h2>

              {serviceCategory.description && (
                <p className="text-lg text-neutral-600 mb-8 text-center max-w-2xl mx-auto">
                  {serviceCategory.description}
                </p>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceCategory.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-medium text-neutral-800 flex-1 pr-4">
                          {item.name}
                        </h3>
                        <span className="text-2xl font-light text-neutral-800 whitespace-nowrap">
                          ${item.price.toLocaleString('es-MX')}
                        </span>
                      </div>

                      {item.description && (
                        <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      <Button
                        onClick={() => handleReservar(item.name, item.price)}
                        className="w-full bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg"
                      >
                        Reservar servicio
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-neutral-800 mb-6">¿Necesitas más información?</h2>
          <p className="text-xl text-neutral-600 mb-8">
            Nuestro equipo está listo para ayudarte a elegir el tratamiento perfecto para ti.
            Agenda una consulta gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-6 text-lg rounded-full">
              <Link href="/reservar">Agendar consulta</Link>
            </Button>
            <Button variant="outline" asChild className="border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white px-8 py-6 text-lg rounded-full">
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 px-4 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-light text-neutral-800 mb-6">Contacto</h3>
              <div className="space-y-3 text-neutral-600">
                <p>Calle Zózimo Pérez 2B col Centro, Tuxpan, Veracruz</p>
                <p>Celular: 783 140 64 57</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light text-neutral-800 mb-6">Horarios de atención</h3>
              <div className="space-y-3 text-neutral-600">
                <p>Lunes a Sábado: 9:00 am - 7:00 pm</p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="text-4xl font-light text-neutral-800">
                <span className="block leading-none">peonías.</span>
                <span className="block text-2xl leading-none text-neutral-600 italic md:text-[14px]">CENTRO DE BELLEZA INTEGRAL</span>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-200 mt-12 pt-8 text-center">
            <p className="text-sm text-neutral-500">© 2025 Peonías Studio. Construido por Peonías estética</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
