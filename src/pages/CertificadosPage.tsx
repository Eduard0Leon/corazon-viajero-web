import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

interface Destino {
  id: string;
  titulo: string;
  extracto: string;
  imagen_url: string;
  categoria: string;
  slug: string;
}

const FALLBACK_DESTINOS: Destino[] = [
  { id: '1', titulo: 'Orlando, Florida', extracto: 'Disfruta de los parques temáticos más famosos del mundo y una experiencia familiar inolvidable.', imagen_url: '/images/orlando.jpg', categoria: 'destino', slug: 'orlando' },
  { id: '2', titulo: 'Miami, Florida', extracto: 'Playas paradisíacas, vida nocturna vibrante y una cultura única te esperan en este destino.', imagen_url: '/images/miami.jpg', categoria: 'destino', slug: 'miami' },
];

const CertificadosPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [destinos, setDestinos] = useState<Destino[]>(FALLBACK_DESTINOS);
  const [activeDestino, setActiveDestino] = useState(0);

  useEffect(() => {
    const fetchDestinos = async () => {
      const { data } = await supabase
        .from('blog_posts')
        .select('id, titulo, extracto, imagen_url, categoria, slug')
        .eq('publicado', true)
        .order('published_at', { ascending: false });
      if (data && data.length >= 1) setDestinos(data);
    };
    fetchDestinos();

    // Rotación automática cada 5 segundos
    const timer = setInterval(() => {
      setActiveDestino((prev) => (prev + 1) % (destinos.length || 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [destinos.length]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    await supabase.from('contacts').insert({
      nombre: formData.get('name') as string,
      email: formData.get('email') as string,
      telefono: formData.get('phone') as string,
      destino: formData.get('destination') as string,
      mensaje: formData.get('message') as string,
      origen: 'formulario_certificados',
    });
    const msg = `Hola! Me interesa un certificado de viaje a ${formData.get('destination')}. Soy ${formData.get('name')}.`;
    window.open(`https://wa.me/524424530648?text=${encodeURIComponent(msg)}`, '_blank');
    setIsSubmitting(false);
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('/images/orlando-miami.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy-light/80 to-navy/70" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Certificados de Viaje</h1>
            <p className="text-xl md:text-2xl mb-6">Disfruta de noches gratis en destinos exclusivos con nuestros certificados.</p>
            <Link to="https://wa.me/524424530648?text=Hola,%20deseo%20saber%20mas%20sobre%20los%20Certificados%20de%20Corazón%20Viajero" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-md transition duration-300 inline-flex items-center">
              Solicitar asesoría
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contenido principal */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Qué son los Certificados de Viaje?</h2>
              <p className="text-gray-700 mb-6">Nuestros certificados de viaje te dan acceso a noches gratis en destinos populares. Están subsidiados hasta en un 80% por los hoteles, lo que te permite disfrutar de alojamiento de calidad pagando únicamente los impuestos correspondientes.</p>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Beneficios principales</h3>
                <ul className="space-y-3">
                  {['Hasta 4 noches gratis en hoteles de categoría', 'Ahorro significativo en comparación con tarifas regulares', 'Flexibilidad para elegir fechas según disponibilidad', 'Acceso a destinos turísticos de alta demanda', 'Asesoría personalizada durante todo el proceso'].map((b) => (
                    <li key={b} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cómo funciona */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Cómo funciona?</h3>
              <div className="space-y-6 mb-8">
                {[
                  { n: 1, title: 'Adquiere tu certificado', desc: 'Selecciona el destino de tu preferencia y adquiere el certificado correspondiente.' },
                  { n: 2, title: 'Reserva tus fechas', desc: 'Nuestro equipo te ayudará a verificar disponibilidad y reservar las fechas que prefieras.' },
                  { n: 3, title: 'Paga solo los impuestos', desc: 'El costo de las noches está cubierto, solo pagas los impuestos (entre $600 y $1000 USD aproximadamente).' },
                  { n: 4, title: 'Asiste a una presentación', desc: 'Durante tu estancia, asistirás a una presentación informativa de 90-120 minutos sin obligación de compra.' },
                  { n: 5, title: '¡Disfruta tu viaje!', desc: 'Aprovecha al máximo tu estancia en estos increíbles destinos.' },
                ].map((step) => (
                  <div key={step.n} className="flex">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">{step.n}</div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800">{step.title}</h4>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ✅ DESTINOS DISPONIBLES — DINÁMICOS DESDE SUPABASE */}
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Destinos disponibles</h3>
              <div className="relative mb-8">
                {/* Carrusel de destinos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AnimatePresence mode="wait">
                    {[destinos[activeDestino], destinos[(activeDestino + 1) % destinos.length]].filter(Boolean).map((destino, i) => (
                      <motion.div
                        key={`${destino.id}-${activeDestino}-${i}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <img
                          src={destino.imagen_url || '/images/orlando.jpg'}
                          alt={destino.titulo}
                          className="w-full h-48 object-cover"
                          onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80'; }}
                        />
                        <div className="p-4">
                          <h4 className="text-xl font-bold text-gray-800 mb-2">{destino.titulo}</h4>
                          <p className="text-gray-600 mb-4 line-clamp-3">{destino.extracto}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <span>Disponibilidad todo el año</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                {/* Indicadores */}
                {destinos.length > 2 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {destinos.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveDestino(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === activeDestino ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div id="contacto" className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Solicita información</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Nombre completo</label>
                    <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu nombre" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Correo electrónico</label>
                    <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="tu@email.com" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Teléfono</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu número de teléfono" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="destination" className="block text-gray-700 text-sm font-medium mb-1">Destino de interés</label>
                    <select id="destination" name="destination" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Selecciona un destino</option>
                      {destinos.map((d) => (
                        <option key={d.id} value={d.titulo}>{d.titulo}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">Mensaje</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="¿En qué podemos ayudarte?" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-md hover:from-blue-700 hover:to-cyan-700 transition duration-300 disabled:opacity-50">
                    {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* ✅ TESTIMONIOS — CARRUSEL DINÁMICO DESDE SUPABASE */}
          <div className="mt-16">
            <TestimonialsCarousel
              darkMode={false}
              title="Lo que dicen quienes ya viajaron"
              subtitle="Experiencias reales con nuestros certificados"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificadosPage;
