import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

interface Servicio {
  id: string;
  nombre: string;
  descripcion: string;
  imagen_url: string;
  orden: number;
}

const FALLBACK_SERVICIOS: Servicio[] = [
  { id: '1', nombre: 'Reservas de Hoteles', descripcion: 'Accede a más de 1 millón de hoteles en todo el mundo con descuentos de hasta un 40% sobre tarifas públicas.', imagen_url: '/images/hoteles.jpg', orden: 1 },
  { id: '2', nombre: 'Vuelos', descripcion: 'Encuentra las mejores tarifas en vuelos nacionales e internacionales con las principales aerolíneas.', imagen_url: '/images/vuelos.jpg', orden: 2 },
  { id: '3', nombre: 'Cruceros', descripcion: 'Disfruta de los mejores cruceros por el Caribe, Mediterráneo, Alaska y más destinos con tarifas exclusivas.', imagen_url: '/images/cruceros.jpg', orden: 3 },
  { id: '4', nombre: 'Renta de Autos', descripcion: 'Reserva vehículos de todas las categorías en más de 180 países con las mejores tarifas garantizadas.', imagen_url: '/images/renta_auto.jpg', orden: 4 },
  { id: '5', nombre: 'Traslados', descripcion: 'Servicio de traslados aeropuerto-hotel y entre destinos con conductores profesionales.', imagen_url: '/images/traslados.jpg', orden: 5 },
  { id: '6', nombre: 'Circuitos y Tours', descripcion: 'Descubre los mejores circuitos y tours guiados por los destinos más fascinantes del mundo.', imagen_url: '/images/circuitos_tours.jpg', orden: 6 },
  { id: '7', nombre: 'Seguros de Viaje', descripcion: 'Viaja con tranquilidad con nuestros seguros que cubren emergencias médicas, cancelaciones y más.', imagen_url: '/images/seguros_viaje.jpg', orden: 7 },
  { id: '8', nombre: 'Paquetes de Vacaciones', descripcion: 'Paquetes todo incluido a los destinos más populares, diseñados para tu comodidad y disfrute.', imagen_url: '/images/paquetes_vacaciones.jpg', orden: 8 },
  { id: '9', nombre: 'Actividades y Experiencias', descripcion: 'Reserva tours, excursiones, entradas a atracciones y experiencias únicas en tu destino.', imagen_url: '/images/actividades_experiencias.jpg', orden: 9 },
];

const ServiciosPage: React.FC = () => {
  const [servicios, setServicios] = useState<Servicio[]>(FALLBACK_SERVICIOS);

  useEffect(() => {
    const fetchServicios = async () => {
      const { data } = await supabase
        .from('servicios')
        .select('*')
        .eq('activo', true)
        .order('orden', { ascending: true });
      if (data && data.length > 0) setServicios(data);
    };
    fetchServicios();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('/images/servicios-hero.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy-light/80 to-navy/70" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Servicios de Agencia de Viajes</h1>
            <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">Ofrecemos servicios completos de agencia de viajes con descuentos y ahorros en comparación con otras plataformas.</p>
            <a href="#contacto" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-md transition duration-300 inline-flex items-center">
              Solicitar cotización
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Servicios Completos de Agencia de Viajes</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              En Corazón Viajero ofrecemos todos los servicios que necesitas para planificar tus vacaciones perfectas, con descuentos exclusivos que no encontrarás en plataformas tradicionales.
            </p>
          </motion.div>

          {/* ✅ GRID DE SERVICIOS — DINÁMICO DESDE SUPABASE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {servicios.map((servicio, index) => (
              <motion.div
                key={servicio.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-default"
              >
                <div
                  className="h-48 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                  style={{ backgroundImage: `url('${servicio.imagen_url}')` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{servicio.nombre}</h3>
                  <p className="text-gray-600 mb-4">{servicio.descripcion}</p>
                  <div className="flex items-center text-sm text-purple-600 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Incluido en nuestros paquetes
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA de contacto */}
          <motion.div
            id="contacto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">¿Necesitas ayuda para planificar tu viaje?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-8">Nuestro equipo de expertos está listo para ayudarte a encontrar las mejores opciones para tus próximas vacaciones.</p>
            <div className="text-center">
              <a
                href="https://wa.me/524424530648?text=Hola,%20requiero%20ayuda%20con%20una%20Cotización%20de%20Servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold transition duration-300 inline-block"
              >
                Contáctanos
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiciosPage;
