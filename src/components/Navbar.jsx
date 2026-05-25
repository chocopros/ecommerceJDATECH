import { useState, useEffect } from 'react';
import { ShoppingBagIcon, SunIcon, MoonIcon } from './Icons';

export default function Navbar({
  activeCategory,
  setActiveCategory,
  cartCount,
  onCartOpen,
  theme,
  toggleTheme
}) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 40) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const categories = [
    { id: 'all', label: 'Todo' },
    { id: 'support', label: 'Soporte Técnico' },
    { id: 'computing', label: 'Computación' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'licenses', label: 'Licencias' },
    { id: 'installations', label: 'Instalación' }
  ];

  return (
    <header className="sticky z-40" style={{
      position: 'sticky',
      top: '16px',
      width: 'calc(100% - 32px)',
      maxWidth: '1200px',
      margin: '16px auto 0 auto',
      backgroundColor: theme === 'dark' ? 'rgba(29, 29, 31, 0.75)' : 'rgba(255, 255, 255, 0.75)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      backdropFilter: 'var(--blur-nav)',
      boxShadow: 'var(--shadow-md)',
      opacity: 0.98,
      transform: showNavbar ? 'translateY(0)' : 'translateY(-150%)',
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      zIndex: 40
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
        padding: '0 16px'
      }}>
        {/* Logo and Brand */}
        <div 
          onClick={() => {
            setActiveCategory('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '20px',
            letterSpacing: '-0.5px'
          }}
          className="brand-logo"
        >
          <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
            filter: 'drop-shadow(0 0 10px rgba(41, 151, 255, 0.35))',
            transition: 'var(--transition-fast)'
          }} className="logo-jd-tech">
            <defs>
              <linearGradient id="jGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#2997FF" />
              </linearGradient>
              <linearGradient id="dGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00C2FF" />
                <stop offset="100%" stopColor="#0066CC" />
              </linearGradient>
              <linearGradient id="sparkleGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#FF453A" />
              </linearGradient>
            </defs>
            {/* Letter J */}
            <path d="M7 6 H11 V19 C11 22, 9.5 24, 7 24 C5.2 24, 4.2 23, 4.2 22.2 C4.2 20.8, 5 21, 6 21 C6.8 21, 7 20.2, 7 19.2 V6 Z" fill="url(#jGrad)" />
            {/* Letter D (compound path with inner cutout) */}
            <path fillRule="evenodd" clipRule="evenodd" d="M13 6 H21 C25.5 6, 28 9, 28 15 C28 21, 25.5 24, 21 24 H13 V6 Z M17 9 H20.5 C22.8 9, 24 11, 24 15 C24 19, 22.8 21, 20.5 21 H17 V9 Z" fill="url(#dGrad)" />
            {/* Diagonal high-tech laser cut lines */}
            <path d="M3 15 H29" stroke="var(--surface)" strokeWidth="1.5" opacity="0.85" />
            {/* Glowing Tech Dot / Sparkle at the top right intersection */}
            <path d="M26 6 C26 7.5, 26.5 8, 28 8 C26.5 8, 26 8.5, 26 10 C26 8.5, 25.5 8, 24 8 C25.5 8, 26 7.5, 26 6 Z" fill="url(#sparkleGrad)" />
          </svg>
          <span style={{ color: 'var(--text-primary)' }}>JDA<span style={{ color: 'var(--accent)' }}>TECH</span></span>
        </div>

        {/* Categories Desktop */}
        <nav className="desktop-nav" style={{
          display: 'flex',
          gap: '24px',
          alignItems: 'center',
          height: '100%'
        }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  padding: '8px 4px',
                  position: 'relative',
                  transition: 'var(--transition-fast)'
                }}
              >
                {cat.label}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-12px',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'var(--accent)',
                    borderRadius: '2px',
                    animation: 'slide-line 0.3s var(--ease-out-expo)'
                  }} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Theme, Cart Actions */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          {/* Theme Selector */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--surface-hover)',
              transition: 'var(--transition-fast)',
              transform: theme === 'dark' ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
            className="theme-toggle-btn"
          >
            {theme === 'dark' ? (
              <SunIcon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
            ) : (
              <MoonIcon className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
            )}
          </button>

          {/* Cart Icon Button */}
          <button
            onClick={onCartOpen}
            aria-label="Open Cart"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-light)',
              transition: 'var(--transition-spring)'
            }}
            className="cart-btn"
          >
            <ShoppingBagIcon className="w-5 h-5" style={{ color: 'var(--accent)' }} />
            {cartCount > 0 && (
              <span className="success-badge-pulse" style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                backgroundColor: 'var(--accent)',
                color: '#ffffff',
                fontSize: '10px',
                fontWeight: 700,
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Embedded Animations and CSS resets for layout compatibility */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slide-line {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
        }
        .theme-toggle-btn:hover {
          background-color: var(--border) !important;
        }
        .cart-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 0 12px var(--accent-glow) !important;
        }
        .brand-logo:hover .logo-jd-tech {
          transform: scale(1.12) translateY(-1px);
          filter: drop-shadow(0 0 14px rgba(41, 151, 255, 0.65)) !important;
        }
      `}} />
    </header>
  );
}
