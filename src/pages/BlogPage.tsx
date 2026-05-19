import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[300px]" style={{ backgroundImage: "url('/images/blog-hero.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy-light/80"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog de Viajes</h1>
            <p className="text-xl md:text-2xl">
              Descubre consejos, destinos y experiencias para inspirar tu próxima aventura.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              {/* Featured Post */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('/images/blog-destinos-economicos.jpg')" }}></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>15 de junio, 2025</span>
                    <span className="mx-2">•</span>
                    <span>Destinos</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">Los 10 destinos más económicos para viajar en 2025</h2>
                  <p className="text-gray-600 mb-4">
                    Descubre los destinos que ofrecen la mejor relación calidad-precio este año. Desde playas paradisíacas hasta ciudades culturales, estas opciones te permitirán viajar sin arruinar tu presupuesto.
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-teal/10 flex items-center justify-center text-teal font-bold text-sm mr-3">
                      EL
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Eduardo León</p>
                      <p className="text-sm text-gray-500">Fundador de Corazón Viajero</p>
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="mt-4 inline-flex items-center text-teal hover:text-teal-dark transition duration-300"
                  >
                    Leer más
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Regular Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Post 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/images/blog-visa-usa.jpg')" }}></div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>10 de junio, 2025</span>
                      <span className="mx-2">•</span>
                      <span>Consejos</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Cómo obtener tu visa de Estados Unidos sin complicaciones</h3>
                    <p className="text-gray-600 mb-4">
                      Guía paso a paso para preparar tu solicitud de visa estadounidense y aumentar tus probabilidades de aprobación.
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-teal hover:text-teal-dark transition duration-300"
                    >
                      Leer más
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Post 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/images/blog-cruceros-caribe.jpg')" }}></div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>5 de junio, 2025</span>
                      <span className="mx-2">•</span>
                      <span>Ofertas</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Aprovecha al máximo los certificados de viaje</h3>
                    <p className="text-gray-600 mb-4">
                      Descubre cómo funcionan nuestros certificados de viaje y maximiza sus beneficios para disfrutar de noches gratis en destinos premium.
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-teal hover:text-teal-dark transition duration-300"
                    >
                      Leer más
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Post 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/images/blog-cruceros-caribe.jpg')" }}></div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>1 de junio, 2025</span>
                      <span className="mx-2">•</span>
                      <span>Destinos</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">5 cruceros imperdibles para este verano</h3>
                    <p className="text-gray-600 mb-4">
                      Te presentamos los mejores cruceros para disfrutar estas vacaciones, con itinerarios fascinantes y precios exclusivos para nuestros clientes.
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-teal hover:text-teal-dark transition duration-300"
                    >
                      Leer más
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Post 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/images/blog-equipaje.jpg')" }}></div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>25 de mayo, 2025</span>
                      <span className="mx-2">•</span>
                      <span>Consejos</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Cómo convertirte en un Sub-Broker exitoso</h3>
                    <p className="text-gray-600 mb-4">
                      Aprende las estrategias para iniciar tu propio negocio como Sub-Broker de Corazón Viajero y generar ingresos adicionales.
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-teal hover:text-teal-dark transition duration-300"
                    >
                      Leer más
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center">
                  <a 
                    href="#" 
                    className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-teal/10 hover:text-teal transition duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 flex items-center justify-center rounded-md border border-teal bg-teal text-white mx-1"
                  >
                    1
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-teal/10 hover:text-teal transition duration-300 mx-1"
                  >
                    2
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-teal/10 hover:text-teal transition duration-300 mx-1"
                  >
                    3
                  </a>
                  <span className="mx-1 text-gray-600">...</span>
                  <a 
                    href="#" 
                    className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-teal/10 hover:text-teal transition duration-300 mx-1"
                  >
                    8
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-teal/10 hover:text-teal transition duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Search */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Buscar</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Buscar artículos..." 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal pr-10"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Categorías</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="flex items-center justify-between text-gray-600 hover:text-teal transition duration-300">
                      <span>Destinos</span>
                      <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full">12</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between text-gray-600 hover:text-teal transition duration-300">
                      <span>Consejos</span>
                      <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full">8</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between text-gray-600 hover:text-teal transition duration-300">
                      <span>Ofertas</span>
                      <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full">5</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between text-gray-600 hover:text-teal transition duration-300">
                      <span>Visas</span>
                      <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full">4</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between text-gray-600 hover:text-teal transition duration-300">
                      <span>Sub-Brokers</span>
                      <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full">3</span>
                    </a>
                  </li>
                </ul>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Artículos recientes</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-start group">
                    <div className="h-16 w-16 bg-gray-200 rounded flex-shrink-0"></div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-gray-800 group-hover:text-teal transition duration-300">Los 10 destinos más económicos para viajar en 2025</h4>
                      <p className="text-xs text-gray-500 mt-1">15 de junio, 2025</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-start group">
                    <div className="h-16 w-16 bg-gray-200 rounded flex-shrink-0"></div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-gray-800 group-hover:text-teal transition duration-300">Cómo obtener tu visa de Estados Unidos sin complicaciones</h4>
                      <p className="text-xs text-gray-500 mt-1">10 de junio, 2025</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-start group">
                    <div className="h-16 w-16 bg-gray-200 rounded flex-shrink-0"></div>
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-gray-800 group-hover:text-teal transition duration-300">Aprovecha al máximo los certificados de viaje</h4>
                      <p className="text-xs text-gray-500 mt-1">5 de junio, 2025</p>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Tags */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Etiquetas</h3>
                <div className="flex flex-wrap gap-2">
                  <a href="#" className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-teal/10 hover:text-teal transition duration-300">Viajes</a>
                  <a href="#" className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-teal/10 hover:text-teal transition duration-300">Descuentos</a>
                  <a href="#" className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-teal/10 hover:text-teal transition duration-300">Hoteles</a>
                  <a href="#" className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-teal/10 hover:text-teal transition duration-300">Cruceros</a>
                  <a href="#" className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-teal/10 hover:text-teal transition duration-300">Visas</a>
                  <a href="#" className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-teal/10 hover:text-teal transition duration-300">Orlando</a>
                  <a href="#" className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-teal/10 hover:text-teal transition duration-300">Miami</a>
                  <a href="#" className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-teal/10 hover:text-teal transition duration-300">Consejos</a>
                  <a href="#" className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-teal/10 hover:text-teal transition duration-300">Sub-Brokers</a>
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-teal/5 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Suscríbete a nuestro boletín</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Recibe las últimas ofertas y consejos de viaje directamente en tu bandeja de entrada.
                </p>
                <form>
                  <div className="mb-3">
                    <input 
                      type="email" 
                      placeholder="Tu correo electrónico" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-teal text-white py-2 px-4 rounded-md hover:bg-teal-dark transition duration-300"
                  >
                    Suscribirse
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy to-navy-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar tu próxima aventura?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo y déjanos ayudarte a crear experiencias de viaje inolvidables.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contacto" 
              className="bg-white text-teal hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition duration-300"
            >
              Contáctanos
            </a>
            <a 
              href="https://wa.me/524424530648" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-semibold transition duration-300 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
