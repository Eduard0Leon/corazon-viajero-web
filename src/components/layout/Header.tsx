import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../lib/AuthContext';

const ADMIN_EMAIL = 'ayuda.corazonviajero@gmail.com';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();
  const { user, profile, signInWithGoogle, signOut } = useAuth();

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

        {/* User Auth Section */}
        <div className="hidden lg:flex items-center relative">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                {profile?.avatar_url ? (
                  <img src={profile.avatar_url} alt="" className="w-7 h-7 rounded-full" />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-teal flex items-center justify-center text-white text-xs font-bold">
                    {(profile?.nombre || user.email || '?')[0].toUpperCase()}
                  </div>
                )}
              </button>
              {showUserMenu && (
                <div className="absolute right-0 top-10 bg-white rounded-lg shadow-xl border border-gray-100 py-2 w-48 z-50">
                  <p className="px-4 py-1 text-xs text-gray-500 truncate">{user.email}</p>
                  <hr className="my-1" />
                  {user.email === ADMIN_EMAIL && (
                    <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setShowUserMenu(false)}>
                      Panel Admin
                    </Link>
                  )}
                  <button onClick={() => { signOut(); setShowUserMenu(false); }} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={signInWithGoogle}
              className="flex items-center gap-1.5 px-3 py-[6px] rounded-lg border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all text-[11px]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Iniciar sesión
            </button>
          )}
        </div>

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
          {user ? (
            <button onClick={() => { signOut(); setIsMenuOpen(false); }} className="mt-4 border border-white/30 text-white px-6 py-3 rounded-lg text-lg">
              Cerrar sesión
            </button>
          ) : (
            <button onClick={() => { signInWithGoogle(); setIsMenuOpen(false); }} className="mt-4 border border-white/30 text-white px-6 py-3 rounded-lg text-lg">
              Iniciar sesión
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
