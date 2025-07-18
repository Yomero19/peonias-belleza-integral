import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function SobrePioniasPage() {
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
              <Link href="/precios" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">Precios</Link>
              <Link href="/sobre-pionias" className="text-sm text-neutral-900 font-medium transition-colors">Sobre peonías</Link>
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
          <h1 className="text-4xl md:text-6xl font-light text-neutral-800 mb-6">Sobre peonías</h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Más que una estética, somos un santuario para tu belleza integral.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-6 leading-tight">
                Nuestra filosofía: Conexión Integral
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                En Peonías CENTRO DE BELLEZA INTEGRAL creemos que la verdadera belleza surge de la armonía
                entre Mente, Cuerpo y Alma. No somos solo una estética tradicional; somos un espacio de
                transformación personal donde cada tratamiento está diseñado para nutrir tu esencia interior
                y realzar tu belleza natural.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Nuestro enfoque holístico combina técnicas avanzadas de estética con un ambiente de serenidad
                y bienestar, creando una experiencia única que trasciende lo superficial para conectar con
                tu verdadero ser.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/3512709160/2049213702.jpeg"
                alt="Centro de belleza peonías"
                width={500}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-6">Nuestros valores</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Los principios que guían cada aspecto de nuestra práctica y servicio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="p-8">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🧘‍♀️</span>
                </div>
                <h3 className="text-2xl font-light text-neutral-800 mb-4">Bienestar Integral</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Cuidamos no solo tu apariencia exterior, sino también tu bienestar emocional y mental,
                  creando una experiencia de relajación y renovación completa.
                </p>
              </div>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="p-8">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-2xl font-light text-neutral-800 mb-4">Excelencia Técnica</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Utilizamos las técnicas más avanzadas y equipos de última generación,
                  manteniendo los más altos estándares de calidad y seguridad en todos nuestros tratamientos.
                </p>
              </div>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="p-8">
                <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💖</span>
                </div>
                <h3 className="text-2xl font-light text-neutral-800 mb-4">Atención Personalizada</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Cada cliente es único. Desarrollamos planes de tratamiento personalizados que se adaptan
                  a tus necesidades específicas y objetivos de belleza personal.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Philosophy */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-6">Nuestros tratamientos</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Cada servicio está diseñado para brindarte una experiencia de transformación única.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-light text-neutral-800 mb-6">Tratamientos Faciales</h3>
              <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
                Nuestros tratamientos faciales van más allá de la limpieza superficial. Utilizamos tecnología
                avanzada como HydraFacial y técnicas de radiofrecuencia para rejuvenecer tu piel desde las
                capas más profundas, revelando un cutis luminoso y saludable.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://ugc.same-assets.com/xRh9umt26YM4Q-S-dHMfSm3_2SyiFAOM.jpeg"
                alt="Tratamientos faciales"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 relative">
              <Image
                src="https://ugc.same-assets.com/cQh8CD_DRvApnYGTANPh8qo1h258NiRU.jpeg"
                alt="Extensiones de pestañas"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-light text-neutral-800 mb-6">Extensiones de Pestañas</h3>
              <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
                Realzamos la expresión de tu mirada con técnicas especializadas que van desde el efecto
                natural hasta volúmenes dramáticos. Cada extensión es colocada meticulosamente para crear
                un resultado que complementa perfectamente tus facciones.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-light text-neutral-800 mb-6">Depilación Láser y Corporales</h3>
              <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
                Ofrecemos soluciones permanentes y seguras para la depilación, junto con tratamientos
                corporales reductivos y reafirmantes que esculpen y tonifican tu figura, utilizando
                tecnología de vanguardia para resultados visibles y duraderos.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://ugc.same-assets.com/_ZDRYWIjiAHAdYPrN35Nk-zBQMXMdloQ.png"
                alt="Tratamientos corporales"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-6">Nuestro compromiso</h2>
          <p className="text-xl text-neutral-600 mb-12 max-w-3xl mx-auto">
            En Peonías, nos comprometemos a ser tu compañero en el viaje hacia tu mejor versión.
            Nuestro equipo de profesionales altamente capacitados trabaja con pasión y dedicación
            para ofrecerte no solo resultados excepcionales, sino también una experiencia de lujo
            que nutre tu alma y eleva tu espíritu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-6 text-lg rounded-full">
              <Link href="/reservar">Reserva tu cita</Link>
            </Button>
            <Button variant="outline" asChild className="border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white px-8 py-6 text-lg rounded-full">
              <Link href="/precios">Ver servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-neutral-800 mb-6">¿Listo para transformar tu belleza?</h2>
          <p className="text-xl text-neutral-600 mb-8">
            Déjanos ser parte de tu viaje hacia una versión más radiante y segura de ti mismo.
          </p>
          <Button asChild className="bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-6 text-lg rounded-full">
            <Link href="/contacto">Contáctanos</Link>
          </Button>
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
            <p className="text-sm text-neutral-500">© 2025 Pionías Studio. Construido por Pionías estética</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
