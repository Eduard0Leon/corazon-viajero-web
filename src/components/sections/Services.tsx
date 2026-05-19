import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  bgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, bgColor }) => {
  return (
    <div className={`${bgColor} rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105`}>
      <div className="p-6">
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white/80 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-white hover:text-cyan-200"
        >
          Saber más
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En Corazón Viajero ofrecemos todos los servicios que necesitas para planificar tus vacaciones perfectas, desde reservas de hoteles y vuelos hasta paquetes completos, todo con descuentos exclusivos que no encontrarás en plataformas tradicionales como Booking, Hoteles.com o Expedia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Certificados de Viaje */}
          <ServiceCard 
            title="Certificados de Viaje"
            description="Accede a noches gratis en destinos como Orlando y Miami con nuestros certificados exclusivos."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            link="/certificados"
            bgColor="bg-gradient-to-br from-blue-600 to-blue-800"
          />
          
          {/* Plataforma de Descuentos */}
          <ServiceCard 
            title="Plataforma de Descuentos"
            description="Descuentos exclusivos en hoteles, departamentos, viajes, cruceros y actividades en todo el mundo."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            link="/descuentos"
            bgColor="bg-gradient-to-br from-cyan-600 to-cyan-800"
          />
          
          {/* Asesoría de Visas */}
          <ServiceCard 
            title="Asesoría de Visas"
            description="Servicio personalizado para trámites de visas de Estados Unidos y Canadá con altas tasas de aprobación."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
            }
            link="/visas"
            bgColor="bg-gradient-to-br from-indigo-600 to-indigo-800"
          />
          
          {/* Servicios Tradicionales */}
          <ServiceCard 
            title="Servicios Tradicionales"
            description="Reservas de hoteles, vuelos, cruceros, renta de autos y más, con increíbles ahorros... Que esperas cotiza con nosotros y comienza a ahorrar."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
            link="/servicios"
            bgColor="bg-gradient-to-br from-purple-600 to-purple-800"
          />
          
          {/* Programa de Sub-Brokers */}
          <ServiceCard 
            title="Programa de Sub-Brokers"
            description="Conviértete en distribuidor de nuestros servicios con tu propia página web y sistema de comisiones."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            link="/sub-brokers"
            bgColor="bg-gradient-to-br from-pink-600 to-pink-800"
          />
          
          {/* Contacto */}
          <ServiceCard 
            title="Atención Personalizada"
            description="Nuestro equipo está listo para ayudarte a planificar tu próximo viaje con atención personalizada."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            }
            link="/contacto"
            bgColor="bg-gradient-to-br from-green-600 to-green-800"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
