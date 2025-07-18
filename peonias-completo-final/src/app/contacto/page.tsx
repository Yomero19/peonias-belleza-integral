"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useState } from "react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  });

  const enviarWhatsApp = () => {
    if (!formData.nombre || !formData.mensaje) {
      alert("Por favor completa tu nombre y mensaje.");
      return;
    }

    const mensaje = `
¡Hola! Me pongo en contacto desde la página web de Peonías Centro de Belleza Integral.

*Información de contacto:*
• Nombre: ${formData.nombre}
• Email: ${formData.email || 'No proporcionado'}
• Teléfono: ${formData.telefono || 'No proporcionado'}

*Mensaje:*
${formData.mensaje}

¡Gracias!
    `.trim();

    const numeroWhatsApp = "5217831406457";
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, '_blank');
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
              <Link href="/precios" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">Precios</Link>
              <Link href="/sobre-pionias" className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">Sobre peonías</Link>
              <Link href="/contacto" className="text-sm text-neutral-900 font-medium transition-colors">Contacto</Link>
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
          <h1 className="text-4xl md:text-6xl font-light text-neutral-800 mb-6">Contacto</h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para resolver cualquier duda o para reservar tu cita.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <div className="p-8">
                  <h2 className="text-2xl font-light text-neutral-800 mb-6">Envíanos un mensaje</h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Nombre completo *
                      </label>
                      <Input
                        type="text"
                        placeholder="Tu nombre completo"
                        value={formData.nombre}
                        onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Correo electrónico
                      </label>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Teléfono
                      </label>
                      <Input
                        type="tel"
                        placeholder="783 140 64 57"
                        value={formData.telefono}
                        onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Mensaje *
                      </label>
                      <Textarea
                        placeholder="¿En qué podemos ayudarte? Cuéntanos sobre el servicio que te interesa o cualquier pregunta que tengas..."
                        value={formData.mensaje}
                        onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                        className="w-full"
                        rows={6}
                      />
                    </div>

                    <Button
                      onClick={enviarWhatsApp}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg rounded-lg"
                      disabled={!formData.nombre || !formData.mensaje}
                    >
                      📱 Enviar mensaje por WhatsApp
                    </Button>

                    {(!formData.nombre || !formData.mensaje) && (
                      <p className="text-sm text-neutral-500 text-center">
                        Completa tu nombre y mensaje para enviar
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">

              {/* Contact Details */}
              <Card className="border-0 shadow-lg">
                <div className="p-8">
                  <h3 className="text-2xl font-light text-neutral-800 mb-6">Información de contacto</h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📍</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-800 mb-1">Dirección</h4>
                        <p className="text-neutral-600">
                          Calle Zózimo Pérez 2B<br />
                          Colonia Centro<br />
                          Tuxpan, Veracruz
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">📱</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-800 mb-1">Teléfono</h4>
                        <p className="text-neutral-600">783 140 64 57</p>
                        <p className="text-sm text-neutral-500">WhatsApp disponible</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🕒</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-neutral-800 mb-1">Horarios de atención</h4>
                        <p className="text-neutral-600">
                          Lunes a Sábado<br />
                          9:00 am - 7:00 pm
                        </p>
                        <p className="text-sm text-neutral-500">Domingos cerrado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-lg">
                <div className="p-8">
                  <h3 className="text-2xl font-light text-neutral-800 mb-6">Acciones rápidas</h3>

                  <div className="space-y-4">
                    <Button asChild className="w-full justify-start bg-neutral-800 hover:bg-neutral-700 text-white py-4">
                      <Link href="/reservar">
                        📅 Reservar una cita
                      </Link>
                    </Button>

                    <Button asChild variant="outline" className="w-full justify-start border-neutral-300 text-neutral-700 hover:bg-neutral-50 py-4">
                      <Link href="/precios">
                        💰 Ver precios y servicios
                      </Link>
                    </Button>

                    <Button asChild variant="outline" className="w-full justify-start border-neutral-300 text-neutral-700 hover:bg-neutral-50 py-4">
                      <Link href="/sobre-pionias">
                        ℹ️ Conocer más sobre nosotros
                      </Link>
                    </Button>

                    <Button
                      onClick={() => {
                        const numeroWhatsApp = "5217831406457";
                        const mensaje = "¡Hola! Me gustaría obtener más información sobre sus servicios.";
                        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
                        window.open(urlWhatsApp, '_blank');
                      }}
                      variant="outline"
                      className="w-full justify-start border-green-300 text-green-700 hover:bg-green-50 py-4"
                    >
                      💬 Chat directo por WhatsApp
                    </Button>
                  </div>
                </div>
              </Card>

              {/* FAQ */}
              <Card className="border-0 shadow-lg">
                <div className="p-8">
                  <h3 className="text-2xl font-light text-neutral-800 mb-6">Preguntas frecuentes</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">¿Necesito hacer cita previa?</h4>
                      <p className="text-sm text-neutral-600">
                        Sí, recomendamos reservar con anticipación para garantizar disponibilidad en el horario que prefieras.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">¿Ofrecen consultas gratuitas?</h4>
                      <p className="text-sm text-neutral-600">
                        Sí, ofrecemos consultas gratuitas para ayudarte a elegir el tratamiento perfecto para ti.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">¿Aceptan tarjetas de crédito?</h4>
                      <p className="text-sm text-neutral-600">
                        Aceptamos efectivo y tarjetas de crédito/débito. Contáctanos para más información sobre métodos de pago.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">¿Qué debo hacer si necesito cancelar mi cita?</h4>
                      <p className="text-sm text-neutral-600">
                        Te pedimos avisar con al menos 24 horas de anticipación para permitir que otros clientes puedan tomar tu horario.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-neutral-800 mb-8 text-center">Nuestra ubicación</h2>
          <Card className="border-0 shadow-lg">
            <div className="p-8 text-center bg-neutral-100 h-64 flex items-center justify-center">
              <div>
                <p className="text-lg text-neutral-600 mb-4">
                  📍 Calle Zózimo Pérez 2B, Colonia Centro, Tuxpan, Veracruz
                </p>
                <p className="text-neutral-500">
                  Estamos ubicados en el corazón del centro de Tuxpan, fácilmente accesible desde cualquier punto de la ciudad.
                </p>
              </div>
            </div>
          </Card>
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
