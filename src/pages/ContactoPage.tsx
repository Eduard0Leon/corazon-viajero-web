import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../lib/AuthContext';

interface Review {
  id: string;
  nombre: string;
  avatar_url: string;
  calificacion: number;
  comentario: string;
  created_at: string;
}

const ContactoPage: React.FC = () => {
  const [formType, setFormType] = useState<'quote' | 'broker'>('quote');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { user, profile, signInWithGoogle } = useAuth();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewForm, setReviewForm] = useState({ calificacion: 5, comentario: '' });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    const { data } = await supabase.from('reviews').select('*').eq('aprobada', true).order('created_at', { ascending: false }).limit(6);
    if (data) setReviews(data);
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    await supabase.from('reviews').insert({
      user_id: user.id,
      nombre: profile?.nombre || user.email?.split('@')[0] || 'Usuario',
      avatar_url: profile?.avatar_url || '',
      calificacion: reviewForm.calificacion,
      comentario: reviewForm.comentario
    });
    setReviewSubmitted(true);
    setShowReviewForm(false);
    setReviewForm({ calificacion: 5, comentario: '' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    const formData = new FormData(e.currentTarget);
    const formEntries = Object.fromEntries(formData.entries());

    try {
      if (formType === 'quote') {
        const { error } = await supabase.from('contacts').insert({
          nombre: formEntries.name as string,
          email: formEntries.email as string,
          telefono: formEntries.phone as string,
          destino: formEntries.additionalInfo as string,
          fecha_viaje: formEntries.travelDates as string,
          pasajeros: Number(formEntries.numAdults) + Number(formEntries.numChildren),
          presupuesto: formEntries.budget as string,
          mensaje: `Motivo: ${formEntries.travelReason}\nServicios: ${formEntries.servicesNeeded}\nInfo adicional: ${formEntries.additionalInfo}`,
          origen: 'formulario_cotizacion'
        });
        if (error) throw error;

        // Abrir WhatsApp con datos pre-llenados
        const waMsg = `¡Hola! Soy ${formEntries.name}. Me interesa una cotización:\n• Fechas: ${formEntries.travelDates || 'Por definir'}\n• Pasajeros: ${formEntries.numAdults} adultos, ${formEntries.numChildren} niños\n• Presupuesto: ${formEntries.budget || 'Por definir'}\n• Motivo: ${formEntries.travelReason || 'Vacaciones'}`;
        window.open(`https://wa.me/524424530648?text=${encodeURIComponent(waMsg)}`, '_blank');
      } else {
        const { error } = await supabase.from('contacts').insert({
          nombre: formEntries.brokerName as string,
          email: formEntries.brokerEmail as string,
          telefono: formEntries.brokerPhone as string,
          mensaje: `Experiencia: ${formEntries.brokerExperience}\nMotivación: ${formEntries.brokerMotivation}\nMetas: ${formEntries.brokerGoals}\nMarketing: ${formEntries.brokerMarketing}`,
          origen: 'formulario_subbroker'
        });
        if (error) throw error;
      }

      setSubmitSuccess(true);
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
      <section className="relative bg-cover bg-center h-[300px]" style={{ backgroundImage: "url('/images/contacto-hero.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy-light/80"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
            <p className="text-xl md:text-2xl">
              Estamos aquí para ayudarte a planificar tu próxima aventura o iniciar tu negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Selection */}
            <div className="lg:col-span-2 mb-8">
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setFormType('quote')}
                  className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${formType === 'quote' ? 'bg-navy text-white shadow-lg' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'}`}
                >
                  Solicitar Cotización / Reserva
                </button>
                <button
                  onClick={() => setFormType('broker')}
                  className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${formType === 'broker' ? 'bg-navy text-white shadow-lg' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'}`}
                >
                  Convertirse en Sub-Broker
                </button>
              </div>
            </div>

            {/* Dynamic Form */}
            <div className="lg:col-span-2">
              {!user && (
                <div className="mb-6 p-4 bg-teal/5 border border-teal/20 rounded-lg flex items-center justify-between">
                  <p className="text-sm text-gray-600">Inicia sesión con Google para auto-rellenar tus datos</p>
                  <button onClick={signInWithGoogle} className="bg-teal text-white px-4 py-2 rounded-md text-sm hover:bg-teal-dark transition-colors">Iniciar sesión</button>
                </div>
              )}
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
                  ¡Gracias! Tu solicitud ha sido enviada correctamente. Nos pondremos en contacto contigo pronto.
                </div>
              )}
              {formType === 'quote' ? (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Solicitud de Cotización / Reserva</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Nombre completo</label>
                        <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal" placeholder="Tu nombre" defaultValue={profile?.nombre || ''} />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Correo electrónico</label>
                        <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal" placeholder="tu@email.com" defaultValue={user?.email || ''} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Teléfono</label>
                        <input type="tel" id="phone" name="phone" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal" placeholder="Tu número de teléfono" />
                      </div>
                      <div>
                        <label htmlFor="travelDates" className="block text-gray-700 text-sm font-medium mb-1">Fechas de viaje (aproximadas)</label>
                        <input type="text" id="travelDates" name="travelDates" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal" placeholder="Ej: 15-22 Julio 2025" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <label htmlFor="numAdults" className="block text-gray-700 text-sm font-medium mb-1">Adultos</label>
                        <input type="number" id="numAdults" name="numAdults" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal" defaultValue={1} min={1} />
                      </div>
                      <div>
                        <label htmlFor="numChildren" className="block text-gray-700 text-sm font-medium mb-1">Niños</label>
                        <input type="number" id="numChildren" name="numChildren" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal" defaultValue={0} min={0} />
                      </div>
                      <div>
                        <label htmlFor="numRooms" className="block text-gray-700 text-sm font-medium mb-1">Habitaciones</label>
                        <input type="number" id="numRooms" name="numRooms" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal" defaultValue={1} min={1} />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="travelReason" className="block text-gray-700 text-sm font-medium mb-1">Motivo del viaje</label>
                      <input type="text" id="travelReason" name="travelReason" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal" placeholder="Ej: Vacaciones familiares, luna de miel, negocios" />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="budget" className="block text-gray-700 text-sm font-medium mb-1">Presupuesto estimado (USD)</label>
                      <input type="text" id="budget" name="budget" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal" placeholder="Ej: $2000 por persona, $5000 total" />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="servicesNeeded" className="block text-gray-700 text-sm font-medium mb-1">Servicios requeridos</label>
                      <textarea id="servicesNeeded" name="servicesNeeded" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal" placeholder="Ej: Hospedaje, vuelos, traslados, actividades, cruceros, renta de auto, seguros"></textarea>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="additionalInfo" className="block text-gray-700 text-sm font-medium mb-1">Información adicional (destinos preferidos, intereses especiales, etc.)</label>
                      <textarea id="additionalInfo" name="additionalInfo" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal" placeholder="Cualquier detalle que nos ayude a personalizar tu viaje"></textarea>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full bg-teal text-white py-2 px-4 rounded-md hover:bg-teal-dark transition duration-300 disabled:opacity-50">
                      {isSubmitting ? 'Enviando...' : 'Enviar Solicitud de Cotización'}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Formulario para Sub-Brokers</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="brokerName" className="block text-gray-700 text-sm font-medium mb-1">Nombre completo</label>
                        <input type="text" id="brokerName" name="brokerName" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal" placeholder="Tu nombre" />
                      </div>
                      <div>
                        <label htmlFor="brokerEmail" className="block text-gray-700 text-sm font-medium mb-1">Correo electrónico</label>
                        <input type="email" id="brokerEmail" name="brokerEmail" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal" placeholder="tu@email.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="brokerPhone" className="block text-gray-700 text-sm font-medium mb-1">Teléfono</label>
                        <input type="tel" id="brokerPhone" name="brokerPhone" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal" placeholder="Tu número de teléfono" />
                      </div>
                      <div>
                        <label htmlFor="brokerExperience" className="block text-gray-700 text-sm font-medium mb-1">Experiencia en ventas o turismo</label>
                        <select id="brokerExperience" name="brokerExperience" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal">
                          <option value="">Selecciona una opción</option>
                          <option value="none">Ninguna</option>
                          <option value="some">Poca (menos de 1 año)</option>
                          <option value="medium">Media (1-3 años)</option>
                          <option value="high">Mucha (más de 3 años)</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="brokerMotivation" className="block text-gray-700 text-sm font-medium mb-1">¿Por qué te interesa ser Sub-Broker de Corazón Viajero?</label>
                      <textarea id="brokerMotivation" name="brokerMotivation" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal" placeholder="Cuéntanos tu motivación y qué esperas de esta oportunidad"></textarea>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="brokerGoals" className="block text-gray-700 text-sm font-medium mb-1">¿Cuáles son tus metas a corto y largo plazo como Sub-Broker?</label>
                      <textarea id="brokerGoals" name="brokerGoals" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal" placeholder="Sé específico sobre tus objetivos de ventas o crecimiento"></textarea>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="brokerMarketing" className="block text-gray-700 text-sm font-medium mb-1">¿Cómo planeas promocionar los servicios de Corazón Viajero?</label>
                      <textarea id="brokerMarketing" name="brokerMarketing" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal" placeholder="Describe tus ideas de marketing o redes de contacto"></textarea>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full bg-teal text-white py-2 px-4 rounded-md hover:bg-teal-dark transition duration-300 disabled:opacity-50">
                      {isSubmitting ? 'Enviando...' : 'Enviar Solicitud para Sub-Broker'}
                    </button>
                  </form>
                </div>
              )}
            </div>
            
            {/* Contact Info (remains the same) */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Información de contacto</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Teléfono</p>
                      <a href="tel:4424530648" className="text-teal hover:underline">442-453-0648</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <a href="mailto:ayuda.corazonviajero@gmail.com" className="text-teal hover:underline">ayuda.corazonviajero@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Dirección</p>
                      <p className="text-gray-600">Marquez de franciforte #133</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal mr-3 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">WhatsApp</p>
                      <a href="https://wa.me/524424530648" className="text-teal hover:underline">442-453-0648</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Horario de atención</h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lunes - Viernes</span>
                    <span className="font-medium text-gray-800">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sábados</span>
                    <span className="font-medium text-gray-800">10:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Domingos</span>
                    <span className="font-medium text-gray-800">Cerrado</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    Para emergencias fuera de horario, contáctanos por WhatsApp y te responderemos lo antes posible.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Síguenos</h3>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61576190722058" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-navy-light transition duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-pink-700 transition duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white hover:bg-sky-600 transition duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Nuestra ubicación</h2>
            <div className="bg-white rounded-lg shadow-md p-2 h-[400px]">
              <div className="w-full h-full bg-cover bg-center rounded flex items-center justify-center" style={{ backgroundImage: "url('/images/mapa_queretaro.jpg')" }}>
                <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Corazón Viajero</h3>
                  <p className="text-gray-600">Querétaro, México</p>
                  <p className="text-sm text-gray-500">Marquez de franciforte #133</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-500 text-center mb-8">Experiencias reales de viajeros como tú</p>
          
          {reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
              {reviews.map((review) => (
                <div key={review.id} className="bg-gray-50 rounded-lg p-5 border">
                  <div className="flex items-center gap-3 mb-3">
                    {review.avatar_url ? (
                      <img src={review.avatar_url} alt="" className="w-10 h-10 rounded-full" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-white font-bold">{review.nombre[0]}</div>
                    )}
                    <div>
                      <p className="font-medium text-navy">{review.nombre}</p>
                      <div className="flex text-gold">{'★'.repeat(review.calificacion)}{'☆'.repeat(5 - review.calificacion)}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{review.comentario}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mb-8">Sé el primero en dejar una reseña.</p>
          )}

          <div className="text-center">
            {reviewSubmitted ? (
              <p className="text-teal font-medium">¡Gracias! Tu reseña será revisada y publicada pronto.</p>
            ) : user ? (
              showReviewForm ? (
                <form onSubmit={handleSubmitReview} className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg">
                  <div className="mb-4">
                    <label className="block text-sm text-gray-600 mb-1">Calificación</label>
                    <select value={reviewForm.calificacion} onChange={(e) => setReviewForm({ ...reviewForm, calificacion: parseInt(e.target.value) })} className="w-full px-3 py-2 border rounded-md">
                      <option value={5}>★★★★★ Excelente</option>
                      <option value={4}>★★★★☆ Muy bueno</option>
                      <option value={3}>★★★☆☆ Bueno</option>
                      <option value={2}>★★☆☆☆ Regular</option>
                      <option value={1}>★☆☆☆☆ Malo</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm text-gray-600 mb-1">Tu experiencia</label>
                    <textarea value={reviewForm.comentario} onChange={(e) => setReviewForm({ ...reviewForm, comentario: e.target.value })} required rows={3} className="w-full px-3 py-2 border rounded-md" placeholder="Cuéntanos tu experiencia..."></textarea>
                  </div>
                  <div className="flex gap-2">
                    <button type="submit" className="bg-teal text-white px-4 py-2 rounded-md hover:bg-teal-dark">Enviar reseña</button>
                    <button type="button" onClick={() => setShowReviewForm(false)} className="bg-gray-200 px-4 py-2 rounded-md">Cancelar</button>
                  </div>
                </form>
              ) : (
                <button onClick={() => setShowReviewForm(true)} className="bg-teal text-white px-6 py-2 rounded-md hover:bg-teal-dark">Dejar una reseña</button>
              )
            ) : (
              <button onClick={signInWithGoogle} className="bg-teal text-white px-6 py-2 rounded-md hover:bg-teal-dark">Inicia sesión para dejar una reseña</button>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Preguntas Frecuentes</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Cuál es el horario de atención?</h3>
              <p className="text-gray-600">
                Nuestro horario de atención es de lunes a viernes de 9:00 AM a 7:00 PM y sábados de 10:00 AM a 3:00 PM. Los domingos permanecemos cerrados.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Qué métodos de pago aceptan?</h3>
              <p className="text-gray-600">
                Aceptamos diversas formas de pago, incluyendo tarjetas de crédito/débito (Visa, MasterCard, American Express), transferencias bancarias y PayPal. Para más detalles, por favor contáctanos.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Ofrecen paquetes de viaje personalizados?</h3>
              <p className="text-gray-600">
                Sí, nos especializamos en crear experiencias de viaje a medida. Cuéntanos tus preferencias, presupuesto y destinos soñados, y diseñaremos un itinerario exclusivo para ti.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactoPage;


