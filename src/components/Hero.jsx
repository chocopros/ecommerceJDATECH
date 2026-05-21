import { ArrowRightIcon, ZapIcon } from './Icons';

export default function Hero({ featuredProduct, onOpenProduct, onAddToCart }) {
  if (!featuredProduct) return null;

  return (
    <section className="hero-section" style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 0 60px 0',
      background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
      borderBottom: '1px solid var(--border)'
    }}>
      {/* Dynamic Technological Grid Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)',
        backgroundSize: '32px 32px',
        opacity: 0.4,
        zIndex: 0
      }} />

      {/* Decorative Blur Spotlight */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        filter: 'blur(40px)',
        opacity: 0.18,
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container hero-container" style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: '48px',
        alignItems: 'center'
      }}>
        {/* Left: Premium Typography */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left'
        }}>
          {/* Accent high-tech badge */}
          <div className="fade-in-up-1" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'var(--accent-light)',
            border: '1px solid var(--accent-glow)',
            color: 'var(--accent)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            fontWeight: 600,
            padding: '4px 10px',
            borderRadius: '20px',
            marginBottom: '24px'
          }}>
            <ZapIcon className="w-3.5 h-3.5" />
            Lanzamiento Exclusivo
          </div>

          <h1 className="fade-in-up-2" style={{
            fontSize: '56px',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-2px',
            color: 'var(--text-primary)',
            marginBottom: '16px'
          }}>
            El futuro de la <span style={{
              background: 'linear-gradient(135deg, var(--accent) 30%, #a855f7 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>computación espacial</span>.
          </h1>

          <p className="fade-in-up-3" style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: 1.45,
            maxWidth: '540px',
            marginBottom: '32px',
            fontWeight: 400
          }}>
            Introduce la realidad mixta de resolución cinematográfica directamente en tu día a día. Pantallas micro-OLED 4K duales combinadas con la ingeniería de hardware más avanzada.
          </p>

          {/* Action buttons with Apple-like micro-interactions */}
          <div className="fade-in-up-4" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => onAddToCart(featuredProduct)}
              className="btn-magnetic"
              style={{
                backgroundColor: 'var(--accent)',
                color: '#ffffff',
                padding: '12px 28px',
                borderRadius: 'var(--radius-md)',
                fontSize: '15px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              Comprar Ahora
              <ArrowRightIcon className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenProduct(featuredProduct)}
              style={{
                background: 'none',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                padding: '11px 24px',
                borderRadius: 'var(--radius-md)',
                fontSize: '15px',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'var(--transition-fast)',
                backgroundColor: 'var(--surface)'
              }}
              className="btn-secondary"
            >
              Especificaciones técnicas
            </button>
          </div>
        </div>

        {/* Right: Immersive Interactive SVG Tech Illustration */}
        <div className="hero-visual fade-in-up-5" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          {/* Technical Circle Guide Background */}
          <svg className="technical-circles" viewBox="0 0 200 200" style={{
            position: 'absolute',
            width: '120%',
            height: '120%',
            opacity: 0.15,
            zIndex: 0,
            color: 'var(--accent)',
            pointerEvents: 'none'
          }}>
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="0.75" />
            <path d="M100 10 L 100 190 M10 100 H 190" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" />
          </svg>

          {/* Interactive Hero Box containing the VR headset illustration */}
          <div className="hero-product-box" style={{
            width: '100%',
            maxWidth: '380px',
            height: '280px',
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 1,
            cursor: 'pointer',
            transition: 'var(--transition-spring)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
          onClick={() => onOpenProduct(featuredProduct)}
          >
            {/* Holographic scanner line animation */}
            <div className="scanner-line" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '2px',
              background: 'linear-gradient(to right, transparent, var(--accent), transparent)',
              boxShadow: '0 0 10px var(--accent)',
              opacity: 0.8,
              zIndex: 2,
              animation: 'scanner-sweep 4s ease-in-out infinite'
            }} />

            {/* Rendering the active vector illustration */}
            {featuredProduct.illustration(featuredProduct.colors[0].accent)}
            
            {/* Tiny technical overlay badges */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              fontSize: '10px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-secondary)',
              backgroundColor: 'var(--bg-secondary)',
              padding: '2px 8px',
              borderRadius: '10px',
              border: '1px solid var(--border)'
            }}>
              MODEL: Vision_Pro_4K
            </div>
            
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              fontSize: '10px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--accent)',
              fontWeight: 600
            }}>
              STATUS: READY
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        /* Apple-style Staggered load animations */
        .fade-in-up-1 { opacity: 0; transform: translateY(20px); animation: fadeInUp 0.6s var(--ease-out-expo) forwards; }
        .fade-in-up-2 { opacity: 0; transform: translateY(20px); animation: fadeInUp 0.6s var(--ease-out-expo) 0.1s forwards; }
        .fade-in-up-3 { opacity: 0; transform: translateY(20px); animation: fadeInUp 0.6s var(--ease-out-expo) 0.2s forwards; }
        .fade-in-up-4 { opacity: 0; transform: translateY(20px); animation: fadeInUp 0.6s var(--ease-out-expo) 0.3s forwards; }
        .fade-in-up-5 { opacity: 0; transform: translateY(30px); scale: 0.95; animation: fadeInUpScale 0.8s var(--ease-out-expo) 0.2s forwards; }
        
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUpScale {
          to { opacity: 1; transform: translateY(0); scale: 1; }
        }

        @keyframes scanner-sweep {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { top: 100%; opacity: 0; }
        }

        .hero-product-box:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 102, 204, 0.15) !important;
          border-color: var(--accent) !important;
        }

        .hero-product-box:hover .technical-circles {
          transform: scale(1.05);
          transition: var(--transition-spring);
        }

        .btn-secondary:hover {
          border-color: var(--text-primary) !important;
          background-color: var(--surface-hover) !important;
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          .hero-section {
            padding: 40px 0 !important;
          }
          .hero-container > div {
            align-items: center !important;
            text-align: center !important;
          }
          h1 {
            font-size: 38px !important;
          }
          .hero-visual {
            order: -1;
          }
        }
      `}} />
    </section>
  );
}
