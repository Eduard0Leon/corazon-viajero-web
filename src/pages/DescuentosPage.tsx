import React from 'react';

const DescuentosPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('/images/descuentos-hero.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/80 to-blue-800/70"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Club Vacacional</h1>
            <p className="text-xl md:text-2xl mb-6">
              Accede a descuentos exclusivos en hoteles, departamentos, viajes, cruceros y actividades en todo el mundo.
            </p>
            <a 
              href="#planes" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-md transition duration-300 inline-flex items-center"
            >
              Ver planes
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Descuentos Exclusivos para Viajeros</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nuestra plataforma de descuentos te brinda acceso a precios especiales en alojamientos, 
              viajes, cruceros y actividades que no encontrarás en otros sitios. Ahorra hasta un 35% 
              en comparación con plataformas tradicionales como Booking, Hoteles.com y Expedia.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Hoteles y Alojamientos</h3>
              <p className="text-gray-600">
                Accede a más de 1 millón de hoteles y alojamientos en todo el mundo con descuentos de hasta 35% sobre tarifas públicas.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Cruceros y Paquetes</h3>
              <p className="text-gray-600">
                Disfruta de cruceros por el Caribe, Mediterráneo y más destinos con tarifas exclusivas y beneficios adicionales.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Subastas y Ofertas</h3>
              <p className="text-gray-600">
                Participa en subastas exclusivas de noches de hotel y accede a ofertas de tiempo compartido a precios increíbles.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">¿Cómo funciona?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Suscríbete</h3>
                <p className="text-gray-600 text-sm">
                  Elige el plan que mejor se adapte a tus necesidades de viaje.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Accede</h3>
                <p className="text-gray-600 text-sm">
                  Ingresa a nuestra plataforma exclusiva con tus credenciales.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Busca</h3>
                <p className="text-gray-600 text-sm">
                  Encuentra hoteles, cruceros o actividades con descuentos exclusivos.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Ahorra</h3>
                <p className="text-gray-600 text-sm">
                  Reserva directamente en la plataforma y disfruta de grandes ahorros.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Plans */}
          <div id="planes" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Planes de Membresía</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-10">
              Elige el plan que mejor se adapte a tus necesidades y comienza a disfrutar de descuentos exclusivos en tus viajes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Premium Plan */}
              <div className="relative bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                {/* Premium design elements */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                
                {/* Decorative perforations */}
                <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-b from-cyan-400 to-blue-500 flex flex-col justify-around">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-white rounded-full mx-auto"></div>
                  ))}
                </div>
                
                <div className="p-8 text-white relative">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">Plan Premium</h3>
                    <p className="text-cyan-100 mb-4">Para viajeros frecuentes</p>
                    <div className="text-5xl font-bold mb-2">$1,289 <span className="text-xl font-normal">USD</span></div>
                    <p className="text-cyan-100">(Pago anual)</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-200 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Acceso a descuentos en hoteles y cruceros</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-200 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Hasta un 25% de descuento</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-200 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Soporte prioritario</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-200 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>1 usuario</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-200 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Acceso a subastas</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                    <h4 className="font-bold text-cyan-100 mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Términos y condiciones
                    </h4>
                    <ul className="text-xs text-cyan-100 space-y-1">
                      <li>• No eres dueño, pero tienes acceso a través de un perfil</li>
                      <li>• El plan debe renovarse cada año</li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-cyan-200 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        No tiene otras cuotas extras, solo la renovación
                      </li>
                    </ul>
                  </div>
                  
                  <button 
                    onClick={() => window.open("https://wa.me/524424530648?text=Hola,%20me%20gustaría%20mas%20info.%20sobre%20la%20membresía%20PREMIUM,%20por%20favor.", "_blank")} 
                    className="w-full bg-white text-cyan-600 font-bold py-4 rounded-xl hover:bg-cyan-50 transition duration-300 shadow-lg transform hover:scale-105"
                  >
                    Suscribirse
                  </button>
                </div>
              </div>
              
              {/* VIP Plan */}
              <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                {/* Golden ticket design elements */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-300 to-yellow-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-300 to-yellow-500"></div>
                
                {/* VIP Badge */}
                <div className="absolute top-4 right-4 bg-yellow-800 text-yellow-100 px-3 py-1 rounded-full text-xs font-bold">
                  VIP EXCLUSIVO
                </div>
                
                {/* Decorative perforations */}
                <div className="absolute left-0 top-0 h-full w-4 bg-gradient-to-b from-yellow-300 to-yellow-500 flex flex-col justify-around">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-white rounded-full mx-auto"></div>
                  ))}
                </div>
                
                <div className="p-8 text-white relative">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">Plan VIP</h3>
                    <p className="text-yellow-100 mb-4">Para viajeros exigentes</p>
                    <div className="text-5xl font-bold mb-2">$6,500 <span className="text-xl font-normal">USD</span></div>
                    <p className="text-yellow-100">(Pago único)</p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-200 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Acceso de por vida</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-200 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Acceso completo a todos los descuentos</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-200 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Hasta un 35% de descuentos</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-200 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Soporte 24/7</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-200 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Servicio de Concierge</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-200 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>6 usuarios</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-200 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Acceso a subastas</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-200 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Noches de remate (Time-share)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                    <h4 className="font-bold text-yellow-100 mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Términos y condiciones
                    </h4>
                    <ul className="text-xs text-yellow-100 space-y-1">
                      <li>• A partir del segundo año ($199 USD/año por mantenimiento)</li>
                      <li>• No se permite la reventa a terceras personas</li>
                      <li>• Flexibilidad para cambiar usuarios</li>
                    </ul>
                  </div>
                  
                  <button 
                    onClick={() => window.open("https://wa.me/524424530648?text=Hola,%20me%20gustaría%20mas%20info.%20sobre%20la%20membresía%20VIP,%20por%20favor.", "_blank")} 
                    className="w-full bg-white text-yellow-600 font-bold py-4 rounded-xl hover:bg-yellow-50 transition duration-300 shadow-lg transform hover:scale-105"
                  >
                    Suscribirse
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Lo que dicen nuestros miembros</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img src="/images/descuentos_testimonial_1.jpg" alt="Testimonio 1" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
                <p className="text-gray-600 mb-4 italic">
                  "Increíbles descuentos en hoteles. He ahorrado más de $2,000 USD en mis últimas vacaciones."
                </p>
                <h4 className="font-semibold text-gray-800">María González</h4>
                <p className="text-sm text-gray-500">Miembro Premium</p>
              </div>
              
              <div className="text-center">
                <img src="/images/descuentos_testimonial_2.jpg" alt="Testimonio 2" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
                <p className="text-gray-600 mb-4 italic">
                  "El servicio de concierge del plan VIP es excepcional. Organizan todo por mí."
                </p>
                <h4 className="font-semibold text-gray-800">Carlos Rodríguez</h4>
                <p className="text-sm text-gray-500">Miembro VIP</p>
              </div>
              
              <div className="text-center">
                <img src="/images/descuentos_testimonial_3.jpg" alt="Testimonio 3" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
                <p className="text-gray-600 mb-4 italic">
                  "Los cruceros con descuento son fantásticos. Una experiencia de lujo a precio accesible."
                </p>
                <h4 className="font-semibold text-gray-800">Ana Martínez</h4>
                <p className="text-sm text-gray-500">Miembro Premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DescuentosPage;

