import React, { useState } from 'react';

const VisasPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      visaType: formData.get('visa-type'),
      message: formData.get('message'),
      page: 'Visas',
      timestamp: new Date().toISOString()
    };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbztvTuMxPRraKTo8hv5GVwkMlnln3D45eO6IRCQervI4TUpDjpoaVkSbXOAz7Zh0QsX/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      alert('¡Gracias! Tu solicitud ha sido enviada correctamente. Nos pondremos en contacto contigo pronto.');
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('/images/visas-hero.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy-light/80 to-navy/70"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Asesoría de Visas</h1>
            <p className="text-xl md:text-2xl mb-6">
              Servicio personalizado para trámites de visas de Estados Unidos y Canadá con altas tasas de aprobación.
            </p>
            <a 
              href="https://wa.me/524424530648?text=Hola,%20quisiera%20mas%20información%20sobre%20el%20servicio%20de%20Asesoría%20de%20Visas%20para%20Estados%20Unidos%20y%20Canadá"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white px-6 py-3 rounded-md transition duration-300 inline-flex items-center"
            >
              Solicitar información
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Servicio de Asesoría para Visas</h2>
              
              <p className="text-gray-700 mb-6">
                En Corazón Viajero ofrecemos un servicio completo de asesoría para la obtención de visas de Estados Unidos y Canadá. 
                Nuestro equipo de expertos te guiará en cada paso del proceso, maximizando tus posibilidades de aprobación y 
                ahorrándote tiempo y estrés.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Beneficios de nuestro servicio</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Asesoría personalizada con expertos en trámites consulares</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Revisión detallada de tu documentación</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Preparación para la entrevista consular</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Llenado correcto de formularios</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Alta tasa de aprobación</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tipos de Visas</h3>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6 border-l-4 border-blue-500">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Visa de Turista para Estados Unidos (B1/B2)</h4>
                    <p className="text-gray-600 mb-4">
                      Para viajes de turismo, visitas familiares, tratamientos médicos o negocios. Permite estancias de hasta 6 meses.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Vigencia: 10 años (ciudadanos mexicanos)</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6 border-l-4 border-blue-500">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Visa de Turista para Canadá (TRV)</h4>
                    <p className="text-gray-600 mb-4">
                      Para visitas temporales a Canadá por turismo, visitas familiares o negocios.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Vigencia: Hasta 10 años o según pasaporte</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6 border-l-4 border-blue-500">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Otros tipos de visas</h4>
                    <p className="text-gray-600">
                      También ofrecemos asesoría para visas de estudiante, trabajo, prometido(a), y más. Contáctanos para información específica sobre tu caso.
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Proceso de Asesoría</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">1</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Consulta inicial</h4>
                    <p className="text-gray-600">Evaluamos tu caso particular y te explicamos el proceso completo.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">2</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Preparación de documentos</h4>
                    <p className="text-gray-600">Te guiamos en la recopilación y organización de toda la documentación necesaria.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">3</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Llenado de formularios</h4>
                    <p className="text-gray-600">Completamos correctamente todos los formularios requeridos por el consulado.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">4</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Preparación para la entrevista</h4>
                    <p className="text-gray-600">Te preparamos para responder adecuadamente las preguntas del oficial consular.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">5</div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Seguimiento</h4>
                    <p className="text-gray-600">Damos seguimiento a tu caso hasta la obtención de la visa.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Form */}
              <div id="contacto" className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Solicitar información</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Nombre completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Correo electrónico</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Teléfono</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="visa-type" className="block text-gray-700 text-sm font-medium mb-1">Tipo de visa</label>
                    <select 
                      id="visa-type" 
                      name="visa-type"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Selecciona un tipo</option>
                      <option value="usa-tourist">Visa de Turista EE.UU. (B1/B2)</option>
                      <option value="canada-tourist">Visa de Turista Canadá</option>
                      <option value="other">Otro tipo de visa</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">Mensaje</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="¿En qué podemos ayudarte?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-2 px-4 rounded-md hover:from-indigo-700 hover:to-blue-700 transition duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
                  </button>
                </form>
              </div>
              
              {/* Pricing */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Tarifas</h3>
                
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-800">Visa de Turista EE.UU.</h4>
                      <span className="text-indigo-600 font-bold">$2,400 MXN</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Asesoría completa para visa B1/B2
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-800">Visa de Turista Canadá</h4>
                      <span className="text-indigo-600 font-bold">$2,880 MXN</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Asesoría completa para TRV
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-800">eTA Canadá</h4>
                      <span className="text-indigo-600 font-bold">$800 MXN</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Trámite de Autorización Electrónica
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 bg-gray-50 p-3 rounded-md text-sm text-gray-600">
                  <p>
                    <strong>Nota:</strong> Las tarifas no incluyen costos consulares, fotografías ni otros gastos relacionados con el trámite.
                  </p>
                </div>
              </div>
              
              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contáctanos</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Teléfono</p>
                      <a href="tel:4424530648" className="text-indigo-600 hover:underline">442-453-0648</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <a href="mailto:ayuda.corazonviajero@gmail.com" className="text-indigo-600 hover:underline">ayuda.corazonviajero@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Dirección</p>
                      <p className="text-gray-600">Marquez de franciforte #133</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">WhatsApp</p>
                      <a href="https://wa.me/4424530648" className="text-indigo-600 hover:underline">442-453-0648</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Preguntas Frecuentes</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Garantizan la aprobación de mi visa?</h3>
              <p className="text-gray-600">
                No podemos garantizar la aprobación, ya que la decisión final siempre depende del oficial consular. Sin embargo, nuestro servicio maximiza tus posibilidades de éxito al asegurar que tu solicitud esté completa y correctamente presentada.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Cuánto tiempo toma el proceso?</h3>
              <p className="text-gray-600">
                Los tiempos varían según el tipo de visa y la disponibilidad de citas en el consulado. En general, el proceso puede tomar entre 2 semanas y 3 meses desde el inicio de la asesoría hasta la obtención de la visa.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Qué documentos necesito para iniciar el trámite?</h3>
              <p className="text-gray-600">
                Los documentos básicos incluyen pasaporte vigente, identificación oficial, comprobantes de ingresos, estados de cuenta bancarios, y comprobantes de arraigo. Durante la consulta inicial, te proporcionaremos una lista detallada según tu caso particular.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Ustedes agendan la cita en el consulado?</h3>
              <p className="text-gray-600">
                Sí, como parte de nuestro servicio, nos encargamos de agendar tu cita en el consulado en la fecha más conveniente según disponibilidad.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Qué pasa si me niegan la visa?</h3>
              <p className="text-gray-600">
                En caso de negación, analizaremos las razones y te asesoraremos sobre las opciones disponibles, que pueden incluir una nueva solicitud con ajustes o esperar un tiempo prudente antes de volver a intentarlo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para iniciar tu trámite de visa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo y déjanos ayudarte a obtener tu visa con el menor estrés posible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/524424530648?text=Hola,%20quisiera%20mas%20información%20sobre%20el%20servicio%20de%20Asesoría%20de%20Visas%20para%20Estados%20Unidos%20y%20Canadá"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition duration-300"
            >
              Solicitar información
            </a>
            <a 
              href="https://wa.me/4424530648" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-semibold transition duration-300 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisasPage;
