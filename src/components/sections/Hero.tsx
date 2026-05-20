import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    })
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero-travel.jpg" 
          alt="Viaje"
          className="w-full h-full object-cover"
          onError={(e) => { (e.target as HTMLImageElement).src = '/images/blog-hero.jpg'; }}
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.span
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="inline-block text-gold text-xs tracking-[4px] uppercase font-medium mb-6"
        >
          Agencia de Viajes 100% Online
        </motion.span>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-[clamp(36px,7vw,72px)] font-bold text-white leading-[1.05] mb-6"
        >
          Entre más viajas,
          <br />
          <span className="text-gold">más vives</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Descubre destinos extraordinarios con precios que no encontrarás en ningún otro lugar. 
          Membresía exclusiva, comunidad de viajeros y ahorros reales.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a 
            href="https://wa.me/524424530648"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-navy px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors duration-300"
          >
            Cotizar mi viaje
          </a>
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-white/10 transition-colors duration-300"
          >
            {searchOpen ? 'Cerrar buscador' : 'Buscar destino'}
          </button>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={false}
          animate={{ height: searchOpen ? 'auto' : 0, opacity: searchOpen ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <form onSubmit={handleSearch} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-left">
                <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">Destino</label>
                <input 
                  name="destino"
                  type="text" 
                  placeholder="¿A dónde quieres ir?"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div className="text-left">
                <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">Fechas</label>
                <input 
                  name="fechas"
                  type="text" 
                  placeholder="¿Cuándo?"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div className="text-left">
                <label className="text-white/50 text-xs uppercase tracking-wider mb-2 block">Viajeros</label>
                <select 
                  name="viajeros"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="1" className="bg-navy">1 Adulto</option>
                  <option value="2" className="bg-navy">2 Adultos</option>
                  <option value="3" className="bg-navy">3+ Adultos</option>
                  <option value="Familia" className="bg-navy">Familia</option>
                </select>
              </div>
            </div>
            <button type="submit" className="w-full mt-4 bg-teal text-white py-3 rounded-lg font-medium hover:bg-teal-dark transition-colors">
              Buscar
            </button>
          </form>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
