import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1,2,3,4,5].map(i => (
      <span key={i} className={`text-sm ${i <= rating ? 'text-gold' : 'text-gray-300'}`}>★</span>
    ))}
  </div>
);

const DestinationCard = ({ image, title, subtitle, nights, price, rating, reviews, link }: any) => (
  <div className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    <div className="relative h-56 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-white/70 text-sm">{subtitle}</p>
      </div>
      <div className="absolute top-3 right-3 bg-gold text-navy text-xs font-bold px-2 py-1 rounded-full">{nights}</div>
    </div>
    <div className="p-4">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <Stars rating={rating} />
          <span className="text-xs text-gray-500">({reviews})</span>
        </div>
        <div className="text-lg font-bold text-teal">{price}</div>
      </div>
      <a href={link} className="block text-center bg-navy text-white py-2.5 rounded-lg font-medium hover:bg-teal transition-colors duration-300">
        Ver oferta
      </a>
    </div>
  </div>
);

const TestimonialCard = ({ image, name, text, rating }: any) => (
  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal to-navy flex items-center justify-center text-white font-bold text-lg">
        {name[0]}
      </div>
      <div>
        <h4 className="font-semibold text-navy">{name}</h4>
        <Stars rating={rating} />
      </div>
    </div>
    <p className="text-gray-600 leading-relaxed">"{text}"</p>
  </div>
);

const HomePage: React.FC = () => {
  const destinations = [
    { image: "/images/orlando.jpg", title: "Orlando, Florida", subtitle: "Parques temáticos y diversión", nights: "4N/5D", price: "Desde $599", rating: 5, reviews: 120, link: "/certificados" },
    { image: "/images/miami.jpg", title: "Miami, Florida", subtitle: "Playas, sol y vida nocturna", nights: "3N/4D", price: "Desde $499", rating: 4, reviews: 85, link: "/certificados" },
    { image: "/images/cancun.jpg", title: "Cancún, México", subtitle: "Playas paradisíacas", nights: "5N/6D", price: "Desde $699", rating: 5, reviews: 150, link: "/servicios" },
  ];

  const testimonials = [
    { name: "María Rodríguez", text: "Una experiencia increíble en Orlando con nuestros hijos. La atención fue excelente y todo salió según lo planeado.", rating: 5 },
    { name: "Carlos Mendoza", text: "Las playas de Miami son espectaculares. El ahorro fue significativo y el servicio fue excelente de principio a fin.", rating: 4 },
    { name: "Ana Sánchez", text: "La asesoría para obtener mi visa fue impecable. Me guiaron en todo el proceso. Recomiendo ampliamente.", rating: 5 },
  ];

  return (
    <div>
      <Hero />
      <Services />
      
      {/* Destinations */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-teal text-sm font-semibold tracking-wider uppercase mb-2">Explora</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Destinos Destacados</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Los mejores destinos con ofertas exclusivas para tu próxima aventura.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((d, i) => <DestinationCard key={i} {...d} />)}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-teal text-sm font-semibold tracking-wider uppercase mb-2">Testimonios</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Miles de viajeros confían en nosotros para sus vacaciones.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Listo para tu próxima aventura?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Contáctanos hoy y comienza a planificar tu viaje con descuentos increíbles.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contacto" className="bg-white text-navy hover:bg-cream px-8 py-3 rounded-lg font-semibold transition-colors">
              Contactar ahora
            </a>
            <a href="https://wa.me/524424530648" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
