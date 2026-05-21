import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

interface Aliado {
  id: string;
  nombre: string;
  logo_url: string;
  website_url: string;
  activo: boolean;
  orden: number;
}

interface EquipoMember {
  id: string;
  nombre: string;
  cargo: string;
  descripcion: string;
  imagen_url: string;
  orden: number;
}

const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

const NosotrosPage: React.FC = () => {
  const [aliados, setAliados] = useState<Aliado[]>([]);
  const [equipo, setEquipo] = useState<EquipoMember[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [aliadosRes, equipoRes] = await Promise.all([
        supabase.from('aliados').select('*').eq('activo', true).order('orden', { ascending: true }),
        supabase.from('equipo').select('*').eq('activo', true).order('orden', { ascending: true }),
      ]);
      if (aliadosRes.data) setAliados(aliadosRes.data);
      if (equipoRes.data) setEquipo(equipoRes.data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('/images/nosotros-hero.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy-light/80" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
            <p className="text-xl md:text-2xl mb-6">Conoce a Corazón Viajero, tu agencia de viajes de confianza con servicios exclusivos y descuentos inigualables.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">

          {/* Nuestra Historia */}
          <FadeIn className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Nuestra Historia</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-4">Corazón Viajero nació de la pasión por los viajes y el deseo de hacer que las experiencias turísticas sean accesibles para todos. Fundada por Eduardo León, quien cuenta con una amplia experiencia en el sector turístico, nuestra agencia se ha convertido en un referente por ofrecer servicios de alta calidad a precios competitivos.</p>
              <p className="text-gray-700 mb-4">Después de años trabajando en grandes agencias de viajes, Eduardo identificó la necesidad de crear un modelo de negocio que combinara lo mejor de las agencias tradicionales con las ventajas de las plataformas digitales.</p>
              <p className="text-gray-700">Hoy, Corazón Viajero se distingue por su amplia gama de servicios que incluyen certificados de viaje con noches gratuitas, asesoría para trámites de visas y una plataforma exclusiva de descuentos que supera a las opciones convencionales del mercado.</p>
            </div>
          </FadeIn>

          {/* Misión, Visión, Valores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Misión', icon: 'M13 10V3L4 14h7v7l9-11h-7z', text: 'Transformar la manera en que las personas planifican y disfrutan sus viajes, ofreciendo servicios de alta calidad a precios accesibles.' },
              { title: 'Visión', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z', text: 'Ser reconocidos como la agencia de viajes líder en innovación y servicio al cliente, con una red global de sub-brokers.' },
              { title: 'Valores', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', text: 'Honestidad, excelencia, innovación constante y compromiso con cada cliente.' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-lg shadow-md p-6 text-center h-full">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* ✅ EQUIPO — DINÁMICO DESDE SUPABASE */}
          <div className="mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Nuestro Equipo</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {equipo.map((miembro, i) => (
                <FadeIn key={miembro.id} delay={i * 0.12}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                    <img
                      src={miembro.imagen_url}
                      alt={miembro.nombre}
                      className="w-full h-64 object-cover object-center"
                      onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(miembro.nombre)}&background=79d9cf&color=0b3840&size=256`; }}
                    />
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{miembro.nombre}</h3>
                      <p className="text-teal-600 mb-4">{miembro.cargo}</p>
                      <p className="text-gray-600">{miembro.descripcion}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* ✅ TESTIMONIOS — CARRUSEL DINÁMICO DESDE SUPABASE */}
          <div className="mb-16">
            <TestimonialsCarousel
              darkMode={false}
              title="Lo que dicen nuestros clientes"
              subtitle="Experiencias reales de viajeros como tú"
            />
          </div>

          {/* ✅ ALIADOS — YA DINÁMICO (scroll infinito) */}
          <div>
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Nuestros Aliados</h2>
            </FadeIn>
            <div className="bg-white rounded-lg shadow-md p-8 overflow-hidden">
              {aliados.length > 0 ? (
                <div className="relative">
                  <div className="flex animate-scroll gap-12 items-center">
                    {[...aliados, ...aliados].map((aliado, index) => (
                      <a
                        key={`${aliado.id}-${index}`}
                        href={aliado.website_url || '#'}
                        target={aliado.website_url ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="flex-shrink-0 h-20 w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                      >
                        <img src={aliado.logo_url} alt={aliado.nombre} className="max-h-16 max-w-full object-contain" />
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-center text-gray-500">Próximamente mostraremos nuestros aliados estratégicos.</p>
              )}
            </div>
            <style>{`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-scroll {
                animation: scroll 20s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar tu próxima aventura?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Contáctanos hoy mismo y déjanos ayudarte a crear experiencias de viaje inolvidables.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contacto" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition duration-300">Contáctanos</a>
            <a href="https://wa.me/524424530648" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-semibold transition duration-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NosotrosPage;
