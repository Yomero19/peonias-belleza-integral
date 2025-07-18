"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useState, Suspense } from "react"

interface ServicioSeleccionado {
  nombre: string;
  precio: number;
  id: string;
}

// Component that handles search params - wrapped in Suspense
function SearchParamsHandler({
  onServiceFromParams
}: {
  onServiceFromParams: (servicio: ServicioSeleccionado) => void
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const servicio = searchParams.get('servicio');
    const precio = searchParams.get('precio');

    if (servicio && precio) {
      const nuevoServicio: ServicioSeleccionado = {
        nombre: servicio,
        precio: parseInt(precio),
        id: Date.now().toString()
      };
      onServiceFromParams(nuevoServicio);
    }
  }, [searchParams, onServiceFromParams]);

  return null; // This component doesn't render anything
}

function ReservarPageContent() {
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState<ServicioSeleccionado[]>([]);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    fecha: "",
    mensaje: ""
  });

  const handleServiceFromParams = (servicio: ServicioSeleccionado) => {
    setServiciosSeleccionados([servicio]);
  };

  const calcularTotal = () => {
    return serviciosSeleccionados.reduce((total, servicio) => total + servicio.precio, 0);
  };

  const eliminarServicio = (id: string) => {
    setServiciosSeleccionados(serviciosSeleccionados.filter(servicio => servicio.id !== id));
  };

  const agregarServicio = (nombre: string, precio: number) => {
    const nuevoServicio: ServicioSeleccionado = {
      nombre,
      precio,
      id: Date.now().toString()
    };
    setServiciosSeleccionados([...serviciosSeleccionados, nuevoServicio]);
  };

  const enviarWhatsApp = () => {
    if (!formData.nombre || !formData.telefono || serviciosSeleccionados.length === 0) {
      alert("Por favor completa todos los campos obligatorios y agrega al menos un servicio.");
      return;
    }

    const mensaje = `
¡Hola! Me gustaría reservar una cita en Peonías Centro de Belleza Integral.

*Datos del cliente:*
• Nombre: ${formData.nombre}
• Teléfono: ${formData.telefono}
• Fecha preferida: ${formData.fecha || 'Por definir'}

*Servicios solicitados:*
${serviciosSeleccionados.map(servicio =>
  `• ${servicio.nombre} - $${servicio.precio.toLocaleString('es-MX')}`
).join('\n')}

*Total: $${calcularTotal().toLocaleString('es-MX')} MXN*

${formData.mensaje ? `\n*Mensaje adicional:*\n${formData.mensaje}` : ''}

¡Gracias!
    `.trim();

    const numeroWhatsApp = "5217831406457";
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, '_blank');
  };

  // Servicios comunes para agregar rápidamente
  const serviciosComunes = [
    { nombre: "Aplicación de gel", precio: 180 },
    { nombre: "Manicure Ruso", precio: 150 },
    { nombre: "Extensiones de pestañas - Set nuevo", precio: 450 },
    { nombre: "Depilación láser - Axilas (1 sesión)", precio: 349 },
    { nombre: "Reducción de Abdomen - Por sesión", precio: 399 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Suspense fallback={null}>
        <SearchParamsHandler onServiceFromParams={handleServiceFromParams} />
      </Suspense>

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
              <Link href="/reservar" className="text-sm text-neutral-900 font-medium transition-colors">Reservar</Link>
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

      {/* Header Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-neutral-100 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-neutral-800 mb-6">Reserva tu cita</h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Transforma tu belleza con nuestros tratamientos especializados.
            Contáctanos para reservar tu experiencia de lujo.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Formulario de Reserva */}
            <div>
              <Card className="border-0 shadow-lg">
                <div className="p-8">
                  <h2 className="text-2xl font-light text-neutral-800 mb-6">Datos del cliente</h2>

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
                        Teléfono *
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
                        Fecha preferida
                      </label>
                      <Input
                        type="date"
                        value={formData.fecha}
                        onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Mensaje (opcional)
                      </label>
                      <Textarea
                        placeholder="Cuéntanos más sobre lo que necesitas..."
                        value={formData.mensaje}
                        onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                        className="w-full"
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Agregar Servicios Adicionales */}
              <Card className="border-0 shadow-lg mt-6">
                <div className="p-8">
                  <h3 className="text-xl font-light text-neutral-800 mb-4">Agregar más servicios</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {serviciosComunes.map((servicio, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        onClick={() => agregarServicio(servicio.nombre, servicio.precio)}
                        className="justify-between text-left h-auto py-3"
                      >
                        <span>{servicio.nombre}</span>
                        <span className="font-semibold">${servicio.precio.toLocaleString('es-MX')}</span>
                      </Button>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="link" asChild>
                      <Link href="/precios">Ver todos los servicios y precios</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Resumen de Servicios y Total */}
            <div className="space-y-8">
              {/* Servicios Seleccionados */}
              <Card className="border-0 shadow-lg">
                <div className="p-8">
                  <h2 className="text-2xl font-light text-neutral-800 mb-6">Servicios seleccionados</h2>

                  {serviciosSeleccionados.length === 0 ? (
                    <div className="text-center py-8 text-neutral-500">
                      <p>No has seleccionado ningún servicio aún.</p>
                      <Button variant="link" asChild className="mt-2">
                        <Link href="/precios">Explorar servicios</Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {serviciosSeleccionados.map((servicio) => (
                        <div key={servicio.id} className="flex justify-between items-center p-4 bg-neutral-50 rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium text-neutral-800">{servicio.nombre}</h4>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-lg font-semibold text-neutral-800">
                              ${servicio.precio.toLocaleString('es-MX')}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => eliminarServicio(servicio.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              Eliminar
                            </Button>
                          </div>
                        </div>
                      ))}

                      {/* Total */}
                      <div className="border-t pt-4 mt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-light text-neutral-800">Total:</span>
                          <span className="text-3xl font-light text-neutral-800">
                            ${calcularTotal().toLocaleString('es-MX')} <span className="text-lg">MXN</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Card>

              {/* Información de Contacto */}
              <Card className="border-0 shadow-lg">
                <div className="p-8">
                  <h3 className="text-2xl font-light text-neutral-800 mb-6">Información de contacto</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">Dirección</h4>
                      <p className="text-neutral-600">
                        Calle Zózimo Pérez 2B col Centro<br />
                        Tuxpan, Veracruz
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">Teléfono</h4>
                      <p className="text-neutral-600">783 140 64 57</p>
                    </div>

                    <div>
                      <h4 className="font-medium text-neutral-800 mb-2">Horarios</h4>
                      <p className="text-neutral-600">Lunes a Sábado: 9:00 am - 7:00 pm</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Botón de WhatsApp */}
              <Card className="border-0 shadow-lg bg-green-50">
                <div className="p-8 text-center">
                  <h3 className="text-xl font-light text-neutral-800 mb-4">¿Listo para reservar?</h3>
                  <p className="text-neutral-600 mb-6">
                    Envía tu solicitud de reserva directamente por WhatsApp con todos los detalles.
                  </p>
                  <Button
                    onClick={enviarWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg rounded-lg"
                    disabled={serviciosSeleccionados.length === 0 || !formData.nombre || !formData.telefono}
                  >
                    📱 Enviar solicitud por WhatsApp
                  </Button>
                  {(serviciosSeleccionados.length === 0 || !formData.nombre || !formData.telefono) && (
                    <p className="text-sm text-neutral-500 mt-2">
                      Completa tus datos y selecciona al menos un servicio para continuar
                    </p>
                  )}
                </div>
              </Card>

              {/* Información Adicional */}
              <Card className="border-0 shadow-lg">
                <div className="p-8">
                  <h3 className="text-2xl font-light text-neutral-800 mb-4">¿Tienes dudas?</h3>
                  <p className="text-neutral-600 mb-6">
                    Nuestro equipo está aquí para ayudarte a elegir el tratamiento perfecto para ti.
                  </p>
                  <Button variant="outline" asChild className="w-full border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white">
                    <Link href="/contacto">Contáctanos</Link>
                  </Button>
                </div>
              </Card>
            </div>
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

export default function ReservarPage() {
  return <ReservarPageContent />;
}
