import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../lib/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const ADMIN_EMAIL = 'ayuda.corazonviajero@gmail.com';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, profile, signInWithGoogle, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/certificados', label: 'Certificados' },
    { to: '/descuentos', label: 'Membresía' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/nosotros', label: 'Nosotros' },
    { to: '/blog', label: 'Blog' },
    { to: '/contacto', label: 'Contacto' },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md py-4 shadow-lg' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo_oficial_corazon_viajero.png" alt="Corazón Viajero" className="h-10 w-auto" />
            <div className="hidden sm:flex flex-col">
              <span className="text-white text-sm font-semibold tracking-wide">Corazón Viajero</span>
              <span className="text-gold text-[10px] tracking-[2px] uppercase">Entre más viajas, más vives</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[13px] tracking-wide transition-colors duration-300 ${
                  location.pathname === link.to
                    ? 'text-gold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-6">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2"
                >
                  {profile?.avatar_url ? (
                    <img src={profile.avatar_url} alt="" className="w-8 h-8 rounded-full border border-white/20" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-gold text-xs font-bold">
                      {(profile?.nombre || user.email || '?')[0].toUpperCase()}
                    </div>
                  )}
                </button>
                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 top-12 bg-[#0a0a0a] border border-white/10 py-2 w-48 shadow-xl"
                    >
                      <p className="px-4 py-2 text-xs text-white/40 truncate">{user.email}</p>
                      <hr className="border-white/10 my-1" />
                      {user.email === ADMIN_EMAIL && (
                        <Link to="/admin" className="block px-4 py-2 text-sm text-white/70 hover:text-gold hover:bg-white/5" onClick={() => setShowUserMenu(false)}>
                          Panel Admin
                        </Link>
                      )}
                      <button onClick={() => { signOut(); setShowUserMenu(false); }} className="w-full text-left px-4 py-2 text-sm text-white/70 hover:text-red-400 hover:bg-white/5">
                        Cerrar sesión
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="text-white/50 text-[13px] hover:text-white transition-colors"
              >
                Iniciar sesión
              </button>
            )}
            
            <a
              href="https://wa.me/524424530648"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy px-6 py-2.5 text-[12px] tracking-widest uppercase font-semibold hover:bg-white transition-colors duration-300"
            >
              Cotizar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menú"
          >
            <motion.span 
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
              className="block w-6 h-[2px] bg-white"
            />
            <motion.span 
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="block w-6 h-[2px] bg-white"
            />
            <motion.span 
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
              className="block w-6 h-[2px] bg-white"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Fullscreen */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-2xl font-serif hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-4 mt-8"
            >
              {user ? (
                <button onClick={() => { signOut(); setIsMenuOpen(false); }} className="text-white/50 hover:text-white">
                  Cerrar sesión
                </button>
              ) : (
                <button onClick={() => { signInWithGoogle(); setIsMenuOpen(false); }} className="text-white/50 hover:text-white">
                  Iniciar sesión
                </button>
              )}
              <a
                href="https://wa.me/524424530648"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-navy px-8 py-3 text-sm tracking-widest uppercase font-semibold"
              >
                Cotizar mi viaje
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
