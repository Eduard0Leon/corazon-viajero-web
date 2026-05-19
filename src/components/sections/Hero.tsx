import React from 'react';

const Hero: React.FC = () => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destino = formData.get('destino') as string || '';
    const fechas = formData.get('fechas') as string || '';
    const viajeros = formData.get('viajeros') as string || '1';
    
    const msg = `¡Hola! Me interesa viajar a ${destino || '(por definir)'}.\n• Fechas: ${fechas || 'Flexibles'}\n• Viajeros: ${viajeros}\n¿Podrían ayudarme con opciones?`;
    window.open(`https://wa.me/524424530648?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-navy via-navy-light to-[#0D4060] py-20 px-5 text-center min-h-[calc(100vh-66px)] flex items-center justify-center">
      <div className="max-w-[720px] mx-auto">
        {/* Badge */}
        <span className="inline-block bg-teal/15 border border-teal/30 text-teal-light text-[10px] tracking-[2px] uppercase px-4 py-[5px] rounded-full mb-[18px]">
          Agencia 100% Online
        </span>

        {/* Headline */}
        <h1 className="text-[clamp(32px,5vw,56px)] font-bold text-white leading-[1.1] mb-3.5">
          Tu próxima aventura <span className="text-teal">comienza aquí</span>
        </h1>
        <p className="text-[17px] text-white/60 mb-7">
          Paquetes, vuelos, hoteles, certificados de viaje y membresía vacacional con descuentos exclusivos.
        </p>

        {/* Search Box */}
        <form onSubmit={handleSearch} className="bg-white/10 backdrop-blur-[10px] border border-white/15 rounded-[14px] p-5 flex flex-wrap gap-3 justify-center items-end max-w-[660px] mx-auto mb-7">
          <div className="flex flex-col gap-1 min-w-[120px] flex-1">
            <label className="text-[10px] text-white/55 text-left">Destino</label>
            <input 
              name="destino"
              type="text" 
              placeholder="¿A dónde quieres ir?" 
              className="bg-white/[0.12] border border-white/20 rounded-md px-3 py-[9px] text-[13px] text-white outline-none placeholder:text-white/35 focus:border-teal transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1 min-w-[120px] flex-1">
            <label className="text-[10px] text-white/55 text-left">Fechas</label>
            <input 
              name="fechas"
              type="text" 
              placeholder="¿Cuándo?" 
              className="bg-white/[0.12] border border-white/20 rounded-md px-3 py-[9px] text-[13px] text-white outline-none placeholder:text-white/35 focus:border-teal transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1 min-w-[120px] flex-1">
            <label className="text-[10px] text-white/55 text-left">Viajeros</label>
            <select 
              name="viajeros"
              className="bg-white/[0.12] border border-white/20 rounded-md px-3 py-[9px] text-[13px] text-white outline-none focus:border-teal transition-colors [&>option]:bg-navy [&>option]:text-white"
            >
              <option value="1">1 Adulto</option>
              <option value="2">2 Adultos</option>
              <option value="3">3 Adultos</option>
              <option value="4">4+ Adultos</option>
              <option value="Familia">Familia</option>
            </select>
          </div>
          <button type="submit" className="bg-teal text-white px-6 py-[9px] rounded-md text-[13px] font-medium hover:bg-teal-dark transition-colors">
            Buscar
          </button>
        </form>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {['Cancún', 'Orlando', 'Miami', 'Europa', 'Cruceros'].map(dest => (
            <button 
              key={dest}
              onClick={() => window.open(`https://wa.me/524424530648?text=${encodeURIComponent(`¡Hola! Me interesa conocer opciones para viajar a ${dest}`)}`, '_blank')}
              className="border-[1.5px] border-white/30 text-white/80 px-[18px] py-2 rounded-lg text-[13px] hover:border-white hover:text-white hover:bg-white/[0.07] transition-all"
            >
              {dest}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
