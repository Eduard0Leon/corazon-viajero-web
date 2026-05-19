import React from 'react';

const ServiciosPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('/images/servicios-hero.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-800/70"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Servicios de Agencia de Viajes</h1>
         <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
          Ofrecemos servicios completos de agencia de viajes con descuentos y ahorros en comparación con otras plataformas.
        </p>          <a 
              href="#contacto" 
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-md transition duration-300 inline-flex items-center"
            >
              Solicitar cotización
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Servicios Completos de Agencia de Viajes</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              En Corazón Viajero ofrecemos todos los servicios que necesitas para planificar tus vacaciones perfectas, 
              desde reservas de hoteles y vuelos hasta paquetes completos, todo con descuentos exclusivos que no encontrarás 
              en plataformas tradicionales como Booking, Hoteles.com o Expedia.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/images/hoteles.jpg')" }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Reservas de Hoteles</h3>
                <p className="text-gray-600 mb-4">
                  Accede a más de 1 millón de hoteles en todo el mundo con descuentos de hasta un 40% sobre tarifas públicas.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Desde hoteles económicos hasta resorts de lujo</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Políticas flexibles de cancelación</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Descuentos exclusivos para miembros</span>
                </div>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/images/vuelos.jpg')" }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Vuelos</h3>
                <p className="text-gray-600 mb-4">
                  Encuentra las mejores tarifas en vuelos nacionales e internacionales con las principales aerolíneas.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comparativa de precios en tiempo real</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Opciones de vuelos directos y con escalas</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Alertas de precios y ofertas especiales</span>
                </div>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/images/cruceros.jpg')" }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Cruceros</h3>
                <p className="text-gray-600 mb-4">
                  Disfruta de los mejores cruceros por el Caribe, Mediterráneo, Alaska y más destinos con tarifas exclusivas.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Principales compañías navieras</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Paquetes todo incluido</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Beneficios exclusivos a bordo</span>
                </div>
              </div>
            </div>
            
            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/images/renta_auto.jpg')" }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Renta de Autos</h3>
                <p className="text-gray-600 mb-4">
                  Reserva vehículos de todas las categorías en más de 180 países con las mejores tarifas garantizadas.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Amplia flota de vehículos</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Sin cargos ocultos</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cancelación gratuita en la mayoría de reservas</span>
                </div>
              </div>
            </div>
            
            {/* Service 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/images/traslados.jpg')" }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Traslados</h3>
                <p className="text-gray-600 mb-4">
                  Servicio de traslados aeropuerto-hotel y entre destinos con conductores profesionales y vehículos confortables.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Servicio puerta a puerta</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Monitoreo de vuelos</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Disponible en más de 150 países</span>
                </div>
              </div>
            </div>
            
            {/* Service 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/images/circuitos_tours.jpg')" }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Circuitos y Tours</h3>
                <p className="text-gray-600 mb-4">
                  Descubre los mejores circuitos y tours guiados por los destinos más fascinantes del mundo.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Guías profesionales multilingües</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Experiencias auténticas y locales</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Grupos pequeños o privados</span>
                </div>
              </div>
            </div>
            
            {/* Service 7 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('/images/seguros_viaje.jpg')"}}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Seguros de Viaje</h3>
                <p className="text-gray-600 mb-4">
                  Viaja con tranquilidad con nuestros seguros de viaje que cubren emergencias médicas, cancelaciones y más.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cobertura médica internacional</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Protección contra cancelaciones</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Asistencia 24/7 en múltiples idiomas</span>
                </div>
              </div>
            </div>
            
            {/* Service 8 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/images/paquetes_vacaciones.jpg')" }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Paquetes de Vacaciones</h3>
                <p className="text-gray-600 mb-4">
                  Paquetes todo incluido a los destinos más populares, diseñados para tu comodidad y disfrute.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vuelos, hoteles y actividades en un solo paquete</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Opciones personalizables</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Asesoría experta para elegir tu paquete</span>
                </div>
              </div>
            </div>

            {/* Service 9 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/images/actividades_experiencias.jpg')" }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Actividades y Experiencias</h3>
                <p className="text-gray-600 mb-4">
                  Reserva tours, excursiones, entradas a atracciones y experiencias únicas en tu destino.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Amplia variedad de actividades para todos los gustos</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reservas seguras y confirmación instantánea</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Opiniones de otros viajeros para ayudarte a elegir</span>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Section */}
          <div id="contacto" className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">¿Necesitas ayuda para planificar tu viaje?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-8">
              Nuestro equipo de expertos está listo para ayudarte a encontrar las mejores opciones para tus próximas vacaciones.
            </p>
            <div className="text-center">
              <a 
                href="https://wa.me/524424530648?text=Hola,%20requiero%20ayuda%20con%20una%20Cotización%20de%20Servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold transition duration-300 inline-block cursor-pointer"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiciosPage;


