import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/certificados', label: 'Certificados' },
    { to: '/descuentos', label: 'Club Vacacional' },
    { to: '/visas', label: 'Visas' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/sub-brokers', label: 'Sub-Brokers' },
    { to: '/nosotros', label: 'Nosotros' },
    { to: '/blog', label: 'Blog' },
    { to: '/contacto', label: 'Contacto' },
  ];

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
      <div className="max-w-[1280px] mx-auto px-5 flex items-center gap-3 h-[66px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/images/logo_oficial_corazon_viajero.png" alt="Corazón Viajero" className="h-11 w-auto" />
          <div className="flex flex-col">
            <span className="text-[15px] font-bold text-white leading-tight">Corazón Viajero</span>
            <span className="text-[9px] text-teal-light tracking-[1.5px] uppercase">Entre más viajas, más vives</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 overflow-x-auto scrollbar-hide">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[12.5px] px-2.5 py-1.5 rounded-md whitespace-nowrap transition-all duration-200 ${
                location.pathname === link.to
                  ? 'text-white bg-white/[0.12]'
                  : 'text-white/75 hover:text-white hover:bg-white/[0.12]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/524424530648"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex text-[12.5px] bg-teal text-white px-4 py-[7px] rounded-lg whitespace-nowrap shrink-0 hover:bg-teal-dark transition-colors"
        >
          WhatsApp
        </a>

        {/* Burger Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col gap-1 p-1.5 shrink-0"
          aria-label="Menú"
        >
          <span className={`block w-[22px] h-[2px] bg-white rounded transition-all ${isMenuOpen ? 'translate-y-[6px] rotate-45' : ''}`}></span>
          <span className={`block w-[22px] h-[2px] bg-white rounded transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-[22px] h-[2px] bg-white rounded transition-all ${isMenuOpen ? '-translate-y-[6px] -rotate-45' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[200] bg-navy flex flex-col items-center justify-center gap-5">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-[18px] right-[22px] text-[32px] text-white leading-none"
          >
            &times;
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className="text-[22px] text-white/85 hover:text-teal transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/524424530648"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-teal text-white px-6 py-3 rounded-lg text-lg"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
