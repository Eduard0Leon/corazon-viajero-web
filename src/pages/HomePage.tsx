import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const FadeInSection = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-150px" }}
    transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const HomePage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [activeDestination, setActiveDestination] = useState(0);

  const destinations = [
    { 
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80", 
      title: "Maldivas", 
      subtitle: "Paraíso en la tierra",
      desc: "Bungalows sobre el agua, arenas blancas y atardeceres que parecen pintados. Una experiencia que transforma."
    },
    { 
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80", 
      title: "Cancún", 
      subtitle: "El Caribe mexicano",
      desc: "Aguas turquesas, ruinas mayas y la mejor vida nocturna. Todo en un mismo destino."
    },
    { 
      image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&q=80", 
      title: "Santorini", 
      subtitle: "Grecia eterna",
      desc: "Cúpulas azules, vino local y puestas de sol que te roban el aliento."
    },
  ];

  return (
    <div className="bg-[#0a0a0a] overflow-hidden">
      
      {/* ═══════════════════════════════════════════════════════════════
          HERO - Fullscreen immersive (Black Tomato style)
      ═══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background with parallax */}
        <motion.div style={{ y: heroImageY }} className="absolute inset-0 scale-110">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80"
            alt="Viaje"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        {/* Content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gold text-[11px] tracking-[6px] uppercase font-light mb-8"
          >
            Agencia de Viajes 100% Online
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="font-serif text-white text-[clamp(42px,9vw,100px)] leading-[0.95] mb-8"
          >
            Entre más viajas,
            <br />
            <span className="italic text-gold">más vives</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            Experiencias de viaje extraordinarias diseñadas para viajeros que buscan más que un simple destino.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="https://wa.me/524424530648"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gold text-[#0a0a0a] px-12 py-4 text-[11px] tracking-[3px] uppercase font-semibold hover:bg-white transition-all duration-500"
            >
              <span className="inline-block transition-transform group-hover:translate-x-1">Diseña tu viaje</span>
            </a>
            <Link
              to="/descuentos"
              className="group border border-white/30 text-white px-12 py-4 text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-[#0a0a0a] transition-all duration-500"
            >
              <span className="inline-block transition-transform group-hover:translate-x-1">Conocer membresía</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-white/30 text-[10px] tracking-[3px] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          INTRO TEXT - Editorial style
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 md:py-48 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <p className="text-gold text-[11px] tracking-[4px] uppercase mb-8">Nuestra filosofía</p>
            <h2 className="font-serif text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-8">
              No vendemos viajes.
              <br />
              <span className="italic text-gold">Creamos recuerdos.</span>
            </h2>
            <p className="text-white/40 text-lg leading-relaxed max-w-2xl mx-auto">
              Cada viaje es una oportunidad para descubrir algo nuevo sobre el mundo y sobre ti mismo. 
              Nosotros nos encargamos de los detalles, tú solo preocúpate de disfrutar.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          DESTINATIONS - Full width images with overlay
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <FadeInSection>
          <div className="px-6 mb-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="text-gold text-[11px] tracking-[4px] uppercase mb-4">Destinos</p>
                <h2 className="font-serif text-white text-4xl md:text-5xl">
                  Lugares que
                  <br />
                  <span className="italic text-gold">inspiran</span>
                </h2>
              </div>
              <Link to="/servicios" className="text-white/40 text-sm hover:text-gold transition-colors border-b border-white/20 pb-1 hover:border-gold">
                Ver todos los destinos →
              </Link>
            </div>
          </div>
        </FadeInSection>

        {/* Destination Selector */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative h-[70vh] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeDestination}
                src={destinations[activeDestination].image}
                alt={destinations[activeDestination].title}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-transparent" />
            
            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDestination}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-gold text-[11px] tracking-[3px] uppercase mb-3">{destinations[activeDestination].subtitle}</p>
                  <h3 className="font-serif text-white text-4xl md:text-6xl mb-4">{destinations[activeDestination].title}</h3>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed mb-6">{destinations[activeDestination].desc}</p>
                  <a 
                    href="https://wa.me/524424530648"
                    className="inline-block text-gold text-[11px] tracking-[2px] uppercase border-b border-gold pb-1 hover:text-white hover:border-white transition-colors"
                  >
                    Explorar destino →
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Destination Tabs */}
          <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
            <div className="flex gap-4 overflow-x-auto pb-4">
              {destinations.map((dest, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDestination(i)}
                  className={`flex-shrink-0 relative w-32 h-20 md:w-48 md:h-28 overflow-hidden transition-all duration-300 ${
                    activeDestination === i ? 'ring-2 ring-gold' : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={dest.image} alt={dest.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40" />
                  <span className="absolute bottom-2 left-2 text-white text-xs md:text-sm font-medium">{dest.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SERVICES - Dark minimal cards
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-20">
              <p className="text-gold text-[11px] tracking-[4px] uppercase mb-4">Servicios</p>
              <h2 className="font-serif text-white text-4xl md:text-5xl">
                Todo en un
                <br />
                <span className="italic text-gold">solo lugar</span>
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/10">
            {[
              { icon: "✈️", title: "Vuelos", desc: "Acceso a tarifas exclusivas y conexiones premium" },
              { icon: "🏨", title: "Hoteles", desc: "Desde boutique hasta resorts de lujo con descuentos reales" },
              { icon: "🚢", title: "Cruceros", desc: "Las mejores navieras con upgrades y beneficios" },
              { icon: "🎫", title: "Experiencias", desc: "Tours, actividades y momentos que no olvidarás" },
            ].map((service, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="bg-[#0a0a0a] p-10 md:p-12 h-full group hover:bg-[#111] transition-colors duration-500">
                  <div className="text-4xl mb-8">{service.icon}</div>
                  <h3 className="text-white text-xl font-medium mb-4">{service.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MEMBERSHIP CTA - Full width with gradient
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1920&q=80"
            alt="Viaje"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/70" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeInSection>
            <p className="text-gold text-[11px] tracking-[4px] uppercase mb-8">Membresía Exclusiva</p>
            <h2 className="font-serif text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-8">
              Ahorra hasta
              <br />
              <span className="italic text-gold">$500 USD</span>
              <br />
              por viaje
            </h2>
            <p className="text-white/40 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
              Únete a nuestra comunidad de viajeros inteligentes. Acceso a tarifas corporativas, 
              asistente personal y una red de beneficios que crece cada día.
            </p>
            <Link
              to="/descuentos"
              className="inline-block bg-gold text-[#0a0a0a] px-14 py-5 text-[11px] tracking-[3px] uppercase font-semibold hover:bg-white transition-colors duration-500"
            >
              Conocer membresía
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TESTIMONIALS - Minimal elegant
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-20">
              <p className="text-gold text-[11px] tracking-[4px] uppercase mb-4">Testimonios</p>
              <h2 className="font-serif text-white text-4xl md:text-5xl">
                Lo que dicen
                <br />
                <span className="italic text-gold">nuestros viajeros</span>
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "María R.", location: "CDMX", text: "La membresía se pagó sola en mi primer viaje. Ahora no concibo viajar sin ella." },
              { name: "Carlos M.", location: "Guadalajara", text: "El servicio personalizado es otro nivel. Siempre encuentran opciones que ni sabía que existían." },
              { name: "Ana S.", location: "Monterrey", text: "Mejor calidad, menos precio. Así de simple. Llevo 3 años siendo miembro y no pienso dejarlo." },
            ].map((testimonial, i) => (
              <FadeInSection key={i} delay={i * 0.15}>
                <div className="border-t border-white/10 pt-8">
                  <p className="text-white/60 text-lg leading-relaxed mb-8 italic font-serif">"{testimonial.text}"</p>
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-white/30 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h2 className="font-serif text-white text-3xl md:text-4xl mb-6">
              ¿Listo para tu próxima
              <span className="italic text-gold"> aventura</span>?
            </h2>
            <p className="text-white/40 mb-10">Escríbenos y diseñemos juntos el viaje de tus sueños.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/524424530648"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-[#0a0a0a] px-12 py-4 text-[11px] tracking-[3px] uppercase font-semibold hover:bg-white transition-colors duration-500"
              >
                WhatsApp
              </a>
              <Link
                to="/contacto"
                className="border border-white/20 text-white px-12 py-4 text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-[#0a0a0a] transition-all duration-500"
              >
                Contacto
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
