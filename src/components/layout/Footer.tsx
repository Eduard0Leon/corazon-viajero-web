import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    const { error } = await supabase.from('newsletter_subscribers').insert({ email });
    if (!error) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#030B15] pt-14 pb-6 px-5 text-white/55">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 mb-9">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-2">
              <img src="/images/logo_oficial_corazon_viajero.png" alt="Corazón Viajero" className="h-10 w-auto" />
              <span className="text-white font-bold text-sm">Corazón Viajero</span>
            </Link>
            <p className="text-[13px] italic text-white/50 mb-2">Entre más viajas, más vives</p>
            <p className="text-[12px] leading-relaxed text-white/30 max-w-[220px] mb-3.5">
              Agencia de viajes 100% online. Paquetes, vuelos, hoteles, certificados de viaje y membresía vacacional con descuentos exclusivos.
            </p>
            <div className="flex gap-[7px]">
              <a href="https://www.facebook.com/profile.php?id=61576190722058" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] rounded-md bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/45 text-[12px] hover:bg-teal hover:border-teal hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="https://wa.me/524424530648" target="_blank" rel="noopener noreferrer" className="w-[30px] h-[30px] rounded-md bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/45 text-[12px] hover:bg-teal hover:border-teal hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[2px] uppercase text-white/75 mb-3.5">Enlaces</h4>
            <ul className="flex flex-col gap-[7px]">
              {[
                { to: '/', label: 'Inicio' },
                { to: '/certificados', label: 'Certificados' },
                { to: '/servicios', label: 'Servicios' },
                { to: '/nosotros', label: 'Nosotros' },
                { to: '/blog', label: 'Blog' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[12.5px] text-white/35 hover:text-white/80 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[2px] uppercase text-white/75 mb-3.5">Servicios</h4>
            <ul className="flex flex-col gap-[7px]">
              {[
                { to: '/certificados', label: 'Certificados de Viaje' },
                { to: '/descuentos', label: 'Club Vacacional' },
                { to: '/visas', label: 'Asesoría de Visas' },
                { to: '/sub-brokers', label: 'Sub-Brokers' },
                { to: '/contacto', label: 'Contacto' },
              ].map(link => (
                <li key={link.label}>
                  <Link to={link.to} className="text-[12.5px] text-white/35 hover:text-white/80 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[2px] uppercase text-white/75 mb-3.5">Newsletter</h4>
            <form onSubmit={handleNewsletter}>
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-white/10 bg-white/5 rounded-lg px-3 py-2.5 text-[12px] text-white outline-none mb-[7px] focus:border-teal placeholder:text-white/28 transition-colors"
                required
              />
              <button type="submit" className="w-full bg-teal text-white border-none py-2.5 rounded-lg text-[12px] cursor-pointer hover:bg-teal-dark transition-colors">
                {subscribed ? '¡Suscrito!' : 'Suscribirse'}
              </button>
            </form>
            {subscribed && (
              <p className="text-[11px] text-teal-light mt-2">¡Gracias por suscribirte!</p>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-[18px] flex flex-wrap justify-between gap-2">
          <p className="text-[11px] text-white/20">&copy; {new Date().getFullYear()} Corazón Viajero. Todos los derechos reservados.</p>
          <div className="flex gap-3.5">
            <Link to="/terminos" className="text-[11px] text-white/15 hover:text-white/50 transition-colors">Términos</Link>
            <Link to="/privacidad" className="text-[11px] text-white/15 hover:text-white/50 transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
