import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    {children}
  </motion.div>
);

const HomePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destino = formData.get('destino') as string || '';
    const fechas = formData.get('fechas') as string || '';
    const viajeros = formData.get('viajeros') as string || '1';
    const msg = `¡Hola! Me interesa viajar a ${destino || '(por definir)'}.\n• Fechas: ${fechas || 'Flexibles'}\n• Viajeros: ${viajeros}\n¿Podrían ayudarme con opciones?`;
    window.open(`https://wa.me/524424530648?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const destinations = [
    { image: "/images/orlando.jpg", title: "Orlando", subtitle: "Magia sin límites", desc: "Parques temáticos, compras y diversión para toda la familia con precios exclusivos para miembros." },
    { image: "/images/miami.jpg", title: "Miami", subtitle: "Sol y estilo", desc: "Playas paradisíacas, vida nocturna vibrante y gastronomía que te sorprenderá." },
    { image: "/images/cancun.jpg", title: "Cancún", subtitle: "Paraíso caribeño", desc: "Aguas turquesas, resorts de lujo y una cultura milenaria por descubrir." },
  ];

  const experiences = [
    { icon: "✈️", title: "Vuelos", desc: "Hasta 40% de descuento en rutas seleccionadas" },
    { icon: "🏨", title: "Hoteles", desc: "Acceso a tarifas corporativas y membresías" },
    { icon: "🚢", title: "Cruceros", desc: "Cabinas con upgrades gratuitos" },
    { icon: "🎢", title: "Parques", desc: "Entradas VIP sin filas" },
  ];

  return (
    <div ref={containerRef} className="bg-[#0a0a0a]">
      {/* HERO - Full screen immersive */}
      <motion.section 
        style={{ opacity: heroOpacity }}
        className="relative h-[100dvh] flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          style={{ scale: heroScale }}
          className="absolute inset-0"
        >
          <img 
            src="/images/hero-travel.jpg" 
            alt="Viaje"
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).src = '/images/blog-hero.jpg'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold text-xs tracking-[6px] uppercase font-light mb-8"
          >
            Agencia de Viajes 100% Online
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white text-[clamp(40px,10vw,90px)] font-bold leading-[0.95] mb-8"
          >
            Entre más viajas,
            <br />
            <span className="text-gold italic font-light">más vives</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            Descubre destinos extraordinarios con precios exclusivos. 
            Únete a nuestra comunidad de viajeros y transforma cada viaje en una experiencia inolvidable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="https://wa.me/524424530648"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy px-10 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-white transition-colors duration-300"
            >
              Cotizar mi viaje
            </a>
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="border border-white/30 text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors duration-300"
            >
              {searchOpen ? 'Cerrar' : 'Buscar destino'}
            </button>
          </motion.div>

          {/* Search Box */}
          <motion.div
            initial={false}
            animate={{ height: searchOpen ? 'auto' : 0, opacity: searchOpen ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden mt-8"
          >
            <form onSubmit={handleSearch} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-left">
                  <label className="text-white/40 text-[10px] uppercase tracking-widest mb-2 block">Destino</label>
                  <input name="destino" type="text" placeholder="¿A dónde?" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="text-left">
                  <label className="text-white/40 text-[10px] uppercase tracking-widest mb-2 block">Fechas</label>
                  <input name="fechas" type="text" placeholder="¿Cuándo?" className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder:text-white/20 focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="text-left">
                  <label className="text-white/40 text-[10px] uppercase tracking-widest mb-2 block">Viajeros</label>
                  <select name="viajeros" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-gold transition-colors">
                    <option value="1" className="bg-navy">1 Adulto</option>
                    <option value="2" className="bg-navy">2 Adultos</option>
                    <option value="3" className="bg-navy">3+ Adultos</option>
                    <option value="Familia" className="bg-navy">Familia</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full mt-6 bg-teal text-white py-3 text-sm uppercase tracking-widest hover:bg-teal-dark transition-colors">
                Buscar
              </button>
            </form>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        </motion.div>
      </motion.section>

      {/* DESTINATIONS - Editorial style */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-gold text-xs tracking-[4px] uppercase mb-4">Destinos</p>
                <h2 className="text-white text-4xl md:text-5xl font-bold">Lugares que te
                  <br />
                  <span className="text-gold italic font-light">harán soñar</span>
                </h2>
              </div>
              <Link to="/servicios" className="hidden md:block text-white/50 text-sm hover:text-gold transition-colors border-b border-white/20 pb-1 hover:border-gold">
                Ver todos los destinos →
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((dest, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="group cursor-pointer">
                  <div className="relative h-[500px] overflow-hidden mb-6">
                    <img 
                      src={dest.image} 
                      alt={dest.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/images/blog-hero.jpg'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <p className="text-gold text-xs tracking-[3px] uppercase mb-2">{dest.subtitle}</p>
                      <h3 className="text-white text-3xl font-bold">{dest.title}</h3>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{dest.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES - Dark cards */}
      <section className="py-32 px-6 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-gold text-xs tracking-[4px] uppercase mb-4">Experiencias</p>
              <h2 className="text-white text-4xl md:text-5xl font-bold">Todo lo que necesitas
                <br />
                <span className="text-gold italic font-light">en un solo lugar</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/[0.03] border border-white/[0.06] p-8 hover:bg-white/[0.06] hover:border-gold/30 transition-all duration-500 group">
                  <div className="text-4xl mb-6">{exp.icon}</div>
                  <h3 className="text-white text-xl font-semibold mb-3">{exp.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-gold text-xs tracking-[4px] uppercase mb-6">Membresía</p>
            <h2 className="text-white text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Únete a la comunidad
              <br />
              <span className="text-gold italic font-light">de viajeros inteligentes</span>
            </h2>
            <p className="text-white/50 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Ahorra hasta $500 USD por viaje. Acceso exclusivo a tarifas, comunidad privada y un asistente personal 
              que planea todo por ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/descuentos" className="bg-gold text-navy px-10 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-white transition-colors">
                Conocer membresía
              </Link>
              <a href="https://wa.me/524424530648" target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors">
                Hablar con un asesor
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-gold text-xs tracking-[4px] uppercase mb-4">Testimonios</p>
              <h2 className="text-white text-4xl md:text-5xl font-bold">Lo que dicen
                <br />
                <span className="text-gold italic font-light">nuestros viajeros</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "María R.", text: "Nunca pensé que podría ahorrar tanto. La membresía se pagó sola en mi primer viaje a Orlando." },
              { name: "Carlos M.", text: "El servicio personalizado es increíble. Mi asesor encontró opciones que ni sabía que existían." },
              { name: "Ana S.", text: "Desde que soy miembro, mis vacaciones son otra cosa. Mejor calidad, menos precio." },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="border border-white/[0.08] p-8 hover:border-gold/30 transition-colors duration-500">
                  <p className="text-white/60 text-lg leading-relaxed mb-8 italic">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal to-navy flex items-center justify-center text-white font-bold">
                      {t.name[0]}
                    </div>
                    <p className="text-white font-medium">{t.name}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 px-6 border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="text-gold text-xs tracking-[4px] uppercase mb-4">Newsletter</p>
            <h3 className="text-white text-2xl font-bold mb-4">Tips exclusivos en tu bandeja</h3>
            <p className="text-white/40 mb-8">Un email por semana. Sin spam, solo valor real para viajeros.</p>
            <Link to="/contacto" className="inline-block border border-white/20 text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-navy transition-all duration-300">
              Suscribirme
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
