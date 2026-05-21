import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const FadeInSection = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-120px' }}
    transition={{ duration: 0.9, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

const heroSlides = [
  {
    title: 'Islas privadas, playas abiertas',
    eyebrow: 'Destinos extraordinarios',
    subtitle: 'Viajes diseñados contigo, sin ruido y con la calma de saber que todo está pensado para disfrutar.',
    location: 'Maldivas',
    video: 'https://player.vimeo.com/external/434045526.sd.mp4?s=6cd7df8d8bbd76bdf4b573a6a1d5dd68c4fa6c15&profile_id=139&oauth2_token_id=57447761',
    poster: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=80',
  },
  {
    title: 'Ciudades con alma y mar',
    eyebrow: 'Viaja con intención',
    subtitle: 'Lujo silencioso, atención personal y una experiencia construida alrededor de lo que a ti te emociona.',
    location: 'Santorini',
    video: 'https://player.vimeo.com/external/370467553.sd.mp4?s=63dca3a6f3ce02b0b7d810e16a3a836b6b5480a1&profile_id=139&oauth2_token_id=57447761',
    poster: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1800&q=80',
  },
  {
    title: 'Escapadas para volver distinto',
    eyebrow: 'Comunidad de viajeros',
    subtitle: 'No es solo reservar. Es pertenecer a una forma más inteligente, cercana y emocionante de viajar.',
    location: 'Cancún',
    video: 'https://player.vimeo.com/external/517374440.sd.mp4?s=8e3e2f202be8bd7e8fc0f4bc0df2a72e2d0b1a62&profile_id=139&oauth2_token_id=57447761',
    poster: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1800&q=80',
  },
];

const destinationPanels = [
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    video: 'https://player.vimeo.com/external/434045526.sd.mp4?s=6cd7df8d8bbd76bdf4b573a6a1d5dd68c4fa6c15&profile_id=139&oauth2_token_id=57447761',
    title: 'Maldivas',
    subtitle: 'Azul infinito y calma absoluta',
    desc: 'Escapadas donde cada detalle importa: agua cristalina, privacidad y un ritmo que te devuelve a ti.',
  },
  {
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=80',
    video: 'https://player.vimeo.com/external/517374440.sd.mp4?s=8e3e2f202be8bd7e8fc0f4bc0df2a72e2d0b1a62&profile_id=139&oauth2_token_id=57447761',
    title: 'Cancún',
    subtitle: 'Caribe con acceso inteligente',
    desc: 'Playas, hoteles y experiencias seleccionadas con criterio para que ahorres sin bajar el nivel.',
  },
  {
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80',
    video: 'https://player.vimeo.com/external/370467553.sd.mp4?s=63dca3a6f3ce02b0b7d810e16a3a836b6b5480a1&profile_id=139&oauth2_token_id=57447761',
    title: 'Santorini',
    subtitle: 'Postales que sí existen',
    desc: 'Una mezcla de lujo sereno, vistas memorables y momentos que se sienten personales desde el primer día.',
  },
];

const experiences = [
  { title: 'Atención personal', desc: 'Hablas con alguien que te escucha, entiende lo que buscas y filtra opciones pensando en ti.' },
  { title: 'Membresía con sentido', desc: 'Acceso a beneficios reales, precios privados y una comunidad para viajar mejor, no solo más barato.' },
  { title: 'Todo online, contigo cerca', desc: 'La operación es digital, pero la experiencia se siente cercana, humana y completamente acompañada.' },
  { title: 'Diseñado para evolucionar', desc: 'Hoy es trato personal, mañana será una operación potenciada por IA sin perder identidad ni control.' },
];

const HomePage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroContentY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const heroOverlayOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.25]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeDestination, setActiveDestination] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#e8f6f4] text-[#0d2a31]">
      {/* HERO */}
      <section ref={heroRef} className="relative h-[100vh] min-h-[720px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <video className="h-full w-full object-cover" src={heroSlides[activeSlide].video} poster={heroSlides[activeSlide].poster} autoPlay muted loop playsInline />
            <motion.div style={{ opacity: heroOverlayOpacity }} className="absolute inset-0 bg-gradient-to-r from-[#06272d]/82 via-[#0b3b43]/45 to-[#06272d]/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06272d]/85 via-transparent to-[#06272d]/18" />
          </motion.div>
        </AnimatePresence>
        <motion.div style={{ y: heroContentY }} className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 pt-32">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div key={`content-${activeSlide}`} initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                <p className="mb-5 text-[11px] uppercase tracking-[5px] text-[#bfe9e1]">{heroSlides[activeSlide].eyebrow}</p>
                <h1 className="max-w-4xl font-serif text-[clamp(44px,8vw,96px)] leading-[0.95] text-white">{heroSlides[activeSlide].title}</h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">{heroSlides[activeSlide].subtitle}</p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a href="https://wa.me/524424530648" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#79d9cf] px-10 py-4 text-[11px] font-semibold uppercase tracking-[3px] text-[#0a2c33] transition-all duration-300 hover:bg-white">Diseñar mi viaje</a>
                  <Link to="/descuentos" className="inline-flex items-center justify-center border border-white/35 px-10 py-4 text-[11px] uppercase tracking-[3px] text-white transition-all duration-300 hover:bg-white/12">Ver membresía</Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {heroSlides.map((slide, index) => (
                <button key={slide.location} onClick={() => setActiveSlide(index)} className={`min-w-[150px] border-b pb-3 text-left transition-all ${activeSlide === index ? 'border-[#79d9cf] text-white' : 'border-white/20 text-white/45 hover:border-white/45 hover:text-white/75'}`}>
                  <span className="block text-[10px] uppercase tracking-[3px]">{slide.location}</span>
                </button>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[3px] text-white/40">Scroll</span>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="h-12 w-px bg-gradient-to-b from-white/60 to-transparent" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f3fbfa] px-6 py-28 md:py-36">
        <div className="mx-auto max-w-5xl text-center">
          <FadeInSection>
            <p className="mb-6 text-[11px] uppercase tracking-[4px] text-[#2b7a78]">Lujo silencioso</p>
            <h2 className="font-serif text-4xl leading-tight text-[#0d2a31] md:text-6xl">
              Viajes con estética, calma<br /><span className="italic text-[#2b7a78]">y trato personal</span>
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#0d2a31]/65">
              Corazón Viajero no quiere parecer una corporación. Quiere sentirse como una relación de confianza: alguien que te entiende, cuida tu presupuesto y construye contigo una forma más inteligente de viajar.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* DESTINOS */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeInSection className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[4px] text-[#2b7a78]">Destinos</p>
              <h2 className="font-serif text-4xl text-[#0d2a31] md:text-6xl">
                Escenarios que se sienten<br /><span className="italic text-[#2b7a78]">hechos a tu medida</span>
              </h2>
            </div>
            <Link to="/servicios" className="text-sm text-[#0d2a31]/50 transition-colors hover:text-[#2b7a78]">Explorar todos los destinos →</Link>
          </FadeInSection>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative overflow-hidden rounded-[28px] bg-[#0d2a31] shadow-[0_25px_60px_rgba(5,31,35,0.18)]">
              <AnimatePresence mode="wait">
                <motion.div key={activeDestination} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }} className="relative h-[560px] w-full">
                  <motion.video autoPlay muted loop playsInline poster={destinationPanels[activeDestination].image} className="h-full w-full object-cover" initial={{ scale: 1.02 }} animate={{ scale: 1.08 }} transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}>
                    <source src={destinationPanels[activeDestination].video} type="video/mp4" />
                  </motion.video>
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a31]/88 via-[#0d2a31]/18 to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-2xl p-8 md:p-12">
                <AnimatePresence mode="wait">
                  <motion.div key={`panel-${activeDestination}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.45 }}>
                    <p className="mb-3 text-[11px] uppercase tracking-[3px] text-[#9fe5db]">{destinationPanels[activeDestination].subtitle}</p>
                    <h3 className="font-serif text-4xl text-white md:text-6xl">{destinationPanels[activeDestination].title}</h3>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-white/72 md:text-base">{destinationPanels[activeDestination].desc}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {destinationPanels.map((destination, index) => (
                <button key={destination.title} onClick={() => setActiveDestination(index)} className={`group overflow-hidden rounded-[22px] border p-5 text-left transition-all ${activeDestination === index ? 'border-[#79d9cf] bg-white shadow-[0_20px_40px_rgba(8,51,58,0.12)]' : 'border-[#cfeae6] bg-[#f7fcfb] hover:border-[#9bded5] hover:bg-white'}`}>
                  <div className="mb-4 overflow-hidden rounded-[16px]">
                    <div className="relative h-28 w-full overflow-hidden">
                      <video autoPlay muted loop playsInline poster={destination.image} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110">
                        <source src={destination.video} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a31]/35 to-transparent" />
                    </div>
                  </div>
                  <p className="font-serif text-2xl text-[#0d2a31]">{destination.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#0d2a31]/58">{destination.subtitle}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIAS */}
      <section className="bg-[#0b3840] px-6 py-28 text-white md:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeInSection className="mb-16 text-center">
            <p className="mb-4 text-[11px] uppercase tracking-[4px] text-[#8fdcd2]">Nuestra forma de trabajar</p>
            <h2 className="font-serif text-4xl md:text-5xl">Digital, cercana<span className="italic text-[#79d9cf]"> y con intención</span></h2>
          </FadeInSection>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {experiences.map((item, index) => (
              <FadeInSection key={item.title} delay={index * 0.1}>
                <div className="h-full rounded-[24px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#79d9cf]/40 hover:bg-white/[0.07]">
                  <div className="mb-5 h-px w-14 bg-[#79d9cf]" />
                  <h3 className="mb-3 text-xl font-medium">{item.title}</h3>
                  <p className="text-sm leading-7 text-white/64">{item.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBRESÍA CTA */}
      <section className="relative overflow-hidden px-6 py-28 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d9f3ef] via-[#effaf8] to-[#cde9e5]" />
        <div className="absolute -right-24 top-8 h-72 w-72 rounded-full bg-[#79d9cf]/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#2b7a78]/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <FadeInSection>
            <p className="mb-6 text-[11px] uppercase tracking-[4px] text-[#2b7a78]">Membresía Corazón Viajero</p>
            <h2 className="font-serif text-4xl leading-tight text-[#0d2a31] md:text-6xl">
              Una comunidad para<br /><span className="italic text-[#2b7a78]">viajar mejor</span>
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#0d2a31]/64">
              Queremos formar una familia global de viajeros que ahorran con inteligencia, se inspiran entre sí y sienten que alguien los acompaña desde el primer mensaje hasta el regreso a casa.
            </p>
            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/descuentos" className="inline-flex items-center justify-center bg-[#0d2a31] px-12 py-4 text-[11px] font-semibold uppercase tracking-[3px] text-white transition-colors hover:bg-[#2b7a78]">Conocer membresía</Link>
              <a href="https://wa.me/524424530648" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-[#0d2a31]/15 px-12 py-4 text-[11px] uppercase tracking-[3px] text-[#0d2a31] transition-all hover:border-[#2b7a78] hover:text-[#2b7a78]">Hablar contigo</a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ✅ TESTIMONIOS — CARRUSEL DINÁMICO DESDE SUPABASE */}
      <section className="bg-[#f7fcfb] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-7xl">
          <FadeInSection className="mb-16 text-center">
            <p className="mb-4 text-[11px] uppercase tracking-[4px] text-[#2b7a78]">Testimonios</p>
            <h2 className="font-serif text-4xl text-[#0d2a31] md:text-5xl">
              Viajeros que ya se<span className="italic text-[#2b7a78]"> sienten parte</span>
            </h2>
          </FadeInSection>
          <TestimonialsCarousel darkMode={false} />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#0b3840] px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <FadeInSection>
            <h2 className="font-serif text-3xl md:text-4xl">
              Si vamos a construir algo contigo,<span className="italic text-[#79d9cf]"> que se note desde aquí</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-white/58">Empecemos por una conversación real. Sin presión, sin fórmulas, con la intención de crear viajes y relaciones que duren.</p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="https://wa.me/524424530648" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#79d9cf] px-12 py-4 text-[11px] font-semibold uppercase tracking-[3px] text-[#0b3840] transition-colors hover:bg-white">WhatsApp</a>
              <Link to="/contacto" className="inline-flex items-center justify-center border border-white/22 px-12 py-4 text-[11px] uppercase tracking-[3px] text-white transition-colors hover:bg-white/10">Ir a contacto</Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
