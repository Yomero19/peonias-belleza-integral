import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
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
              <Link href="/sobre-pionias" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">Sobre peonías</Link>
              <Link href="/contacto" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">Contacto</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <span className="text-sm text-neutral-600">Iniciar sesión</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-neutral-400 to-neutral-500">
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight">
            <span className="block">peonías.</span>
            <span className="block text-4xl italic md:text-[40px]">CENTRO DE BELLEZA INTEGRAL</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Transformamos tu belleza en una experiencia de lujo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-black hover:bg-neutral-100 px-8 py-6 text-lg rounded-full">
              <Link href="/reservar">Reservar</Link>
            </Button>
            <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full bg-transparent">
              <Link href="/precios">Precios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Connection Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-6 leading-tight">
                Conexión Integral: Mente, Cuerpo, Alma
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                En Peonías CENTRO DE BELLEZA INTEGRAL. Más que una estética, somos un santuario para tu belleza integral. Fomentamos la unión equilibrada entre Mente, Cuerpo y Alma, donde cada tratamiento nutre tu esencia y realza tu bienestar en todas las dimensiones de tu ser.
              </p>
              <Button asChild className="bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-6 text-lg rounded-full">
                <Link href="/sobre-pionias">Conócenos</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://ext.same-assets.com/3512709160/2049213702.jpeg"
                alt="Mujer con extensiones de pestañas"
                width={500}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-neutral-800">Nuestros servicios</h2>
            <Button size="sm" asChild className="bg-neutral-800 hover:bg-neutral-700 text-white rounded-full">
              <Link href="/reservar">Reservar</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://ugc.same-assets.com/beNcdy5QPZP9JFNfA_MLprwZckVpV2jK.png",
                title: "Tratamientos faciales",
                description: "Hydrafacial • Limpieza facial profunda • Facial Hidratante • Facial rejuvenecedor"
              },
              {
                image: "https://ugc.same-assets.com/KOQO9j8zBB6HCOsJyaxerf2YzIkd_DY-.jpeg",
                title: "Depilación láser",
                description: "Depilación láser • Tratamientos Capilares • Keratina"
              },
              {
                image: "https://ugc.same-assets.com/hdDr0XDOdBn3XHnjTjaX6RMncXRFNw_V.jpeg",
                title: "Extensiones de pestañas",
                description: "Efecto rímel • Clásicas • Vol hawaiano • Vol griego"
              },
              {
                image: "https://ugc.same-assets.com/A6RCd0Z0j34G2RC1chI_SMr1QtUJpvpq.png",
                title: "Tratamientos corporales",
                description: "Reductivos • Reafirmantes • Anticelulíticos"
              },
              {
                image: "https://ugc.same-assets.com/D73Crx7drgNY6rAgWojG1VOlEFZhbGD5.jpeg",
                title: "Manicura y pedicura",
                description: "Uñas acrílicas/esculturales • Gel semipermanente • Pedi spa • Pedi ruso • Pedi Jelly"
              }
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-light text-neutral-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-neutral-400">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-lg font-medium text-white mb-4">Luz Aguilar</h3>
          </div>
          <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8">"La estética Pionías ha cambiado mi vida. Más que un centro de estética, Peonías es mi santuario de transformación personal. Cada tratamiento es una experiencia cuidadosamente diseñada que va más allá de lo superficial.""
          </blockquote>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
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
