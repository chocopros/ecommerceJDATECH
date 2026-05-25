import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import InstallationsGuide from './components/InstallationsGuide';
import TechnicalSupport from './components/TechnicalSupport';
import { products } from './data/products';
import { ShieldCheckIcon, TruckIcon, ZapIcon, WhatsAppIcon } from './components/Icons';

const categoryTitles = {
  all: 'Explorar Tecnología',
  support: 'Soporte Técnico',
  computing: 'Computación',
  gaming: 'Gaming',
  licenses: 'Licencias',
  installations: 'Guía de Instalación'
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState('support');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutTotal, setCheckoutTotal] = useState(0);
  
  // Apple Dark/Light theme state
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark'; // Dark theme default for futuristic look
  });

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Cart operations
  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleOrderSuccess = () => {
    // Reset/empty cart upon purchase completion
    setCartItems([]);
  };

  // Newsletter interactive submission state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setNewsletterSubmitting(true);
    setTimeout(() => {
      setNewsletterSubmitting(false);
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 3000);
    }, 1500);
  };

  // Filtering products
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Flagship featured product
  const featuredProduct = products.find(p => p.id === 'autodesk-edu');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-secondary)' }}>
      {/* Immersive Blurred Navbar */}
      <Navbar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onCartOpen={() => setIsCartOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Widescreen Hero Section (only on All Category & empty search query) */}
      {activeCategory === 'all' && searchQuery === '' && (
        <Hero
          featuredProduct={featuredProduct}
          onOpenProduct={setSelectedProduct}
          onAddToCart={handleAddToCart}
        />
      )}

      <main className="container" style={{ flexGrow: 1, padding: '60px 24px' }}>
        {activeCategory === 'support' ? (
          <TechnicalSupport />
        ) : activeCategory === 'installations' ? (
          <InstallationsGuide />
        ) : (
          <>
            {/* Title dynamic layout */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              borderBottom: '1px solid var(--border)',
              paddingBottom: '16px',
              marginBottom: '32px',
              textAlign: 'left'
            }}>
              <div>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
                  {activeCategory === 'all' ? 'Explorar Tecnología' : `Colección: ${categoryTitles[activeCategory] || activeCategory}`}
                </h2>
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
                  Dispositivos de alto rendimiento diseñados con precisión milimétrica.
                </p>
              </div>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                {filteredProducts.length} {filteredProducts.length === 1 ? 'dispositivo' : 'dispositivos'}
              </span>
            </div>

            {/* Empty Search / Filter state */}
            {filteredProducts.length === 0 ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px 20px',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}>
                {searchQuery ? (
                  <>
                    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.637 10.637Z" />
                    </svg>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      No se encontraron dispositivos
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '300px', lineHeight: 1.45, marginBottom: '24px' }}>
                      No hay productos que coincidan con tu búsqueda "{searchQuery}". Intenta limpiar el filtro o escribir otro término.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setActiveCategory('all');
                      }}
                      className="btn-magnetic"
                      style={{
                        backgroundColor: 'var(--accent)',
                        color: '#ffffff',
                        fontSize: '13.5px',
                        padding: '10px 20px',
                        borderRadius: '20px',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 600,
                        transition: 'var(--transition-fast)'
                      }}
                    >
                      Mostrar todo
                    </button>
                  </>
                ) : (
                  <>
                    {/* Futuristic Glassmorphic Out of Stock/Info Icon */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 69, 58, 0.1)',
                      border: '1px solid rgba(255, 69, 58, 0.25)',
                      marginBottom: '20px',
                      color: '#FF453A'
                    }}>
                      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.2 0 .75.75 0 0 1 1.2 0Zm12.75 0a.75.75 0 1 1-1.2 0 .75.75 0 0 1 1.2 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      Actualmente no se han encontrado productos
                    </h3>
                    <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', maxWidth: '440px', lineHeight: 1.55, marginBottom: '24px' }}>
                      Actualmente no se han encontrado productos en esta categoría. Si quieres, puedes consultar por WhatsApp.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                      <a
                        href={`https://wa.me/584148100986?text=Hola%20JDATECH!%20Me%20gustar%C3%ADa%20consultar%20por%20productos%20de%20la%20categor%C3%ADa%20de%20${categoryTitles[activeCategory] || activeCategory}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          backgroundColor: '#25D366',
                          color: '#ffffff',
                          fontSize: '13.5px',
                          fontWeight: 600,
                          padding: '11px 22px',
                          borderRadius: '24px',
                          textDecoration: 'none',
                          boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                          transition: 'all 0.3s ease'
                        }}
                        className="btn-whatsapp-empty"
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73.001-2.595-1.013-5.035-2.857-6.882C16.635 2.146 14.192.984 11.6.984c-5.442 0-9.866 4.372-9.87 9.737-.002 1.834.503 3.626 1.464 5.216l-.994 3.63 3.734-.973zm13.04-5.631c-.328-.164-1.94-.956-2.24-1.065-.298-.11-.517-.165-.736.164-.218.328-.847 1.066-1.037 1.284-.19.219-.38.246-.708.082-.328-.164-1.386-.51-2.64-1.627-.977-.872-1.636-1.949-1.827-2.277-.19-.328-.02-.505.143-.669.148-.148.328-.382.492-.574.164-.192.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.736-1.777-1.01-2.434-.268-.64-.537-.555-.736-.565-.19-.01-.41-.01-.628-.01-.218 0-.574.082-.875.41-.301.328-1.147 1.12-1.147 2.733 0 1.614 1.174 3.17 1.339 3.388.164.218 2.31 3.528 5.596 4.948.781.337 1.39.54 1.866.69.784.249 1.498.214 2.062.13.629-.094 1.94-.793 2.213-1.558.272-.765.272-1.422.19-1.558-.082-.136-.298-.218-.627-.382z" />
                        </svg>
                        Consultar por WhatsApp
                      </a>
                      <button
                        onClick={() => setActiveCategory('all')}
                        style={{
                          backgroundColor: 'var(--surface-hover)',
                          color: 'var(--text-primary)',
                          fontSize: '13.5px',
                          fontWeight: 600,
                          padding: '11px 22px',
                          borderRadius: '24px',
                          border: '1px solid var(--border)',
                          cursor: 'pointer',
                          transition: 'var(--transition-fast)'
                        }}
                      >
                        Ver Catálogo
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              /* Catalog Products responsive Grid */
              <div className="product-grid">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                    onOpenDetail={setSelectedProduct}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      {/* Technology Benefits Section (Apple style minimal grid) */}
      <section style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        padding: '60px 0'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px'
        }}>
          {/* Item 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-light)',
              color: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <TruckIcon className="w-5 h-5" />
            </div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
              Envío Express Gratuito
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              Disfruta de entrega rápida sin costo en compras superiores a $1,000 en todo el país.
            </p>
          </div>

          {/* Item 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-light)',
              color: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
              Garantía Oficial de 2 Años
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              Todos los productos JDATECH cuentan con cobertura oficial extendida y soporte técnico especializado.
            </p>
          </div>

          {/* Item 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-light)',
              color: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <ZapIcon className="w-5 h-5" />
            </div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
              Devoluciones sin Complicaciones
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              Si no estás 100% satisfecho con tu compra, devuélvelo de forma sencilla dentro de los primeros 14 días.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Block with newsletter */}
      <footer style={{
        backgroundColor: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        padding: '60px 0 40px 0'
      }}>
        <div className="container footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '48px',
          alignItems: 'flex-start',
          textAlign: 'left',
          marginBottom: '40px'
        }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
              Únete al mañana
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.45, maxWidth: '440px', marginBottom: '20px' }}>
              Inscríbete a nuestro boletín técnico semanal. Recibe notificaciones exclusivas de lanzamientos, ofertas secretas y revisiones de hardware.
            </p>
            
            {/* Interactive Newsletter Form */}
            <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '8px', maxWidth: '380px' }}>
              <input
                type="email"
                placeholder="Dirección de email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={newsletterSubmitting || newsletterSuccess}
                style={{
                  flex: 1,
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  fontSize: '13px',
                  color: 'var(--text-primary)',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                disabled={newsletterSubmitting || newsletterSuccess}
                style={{
                  backgroundColor: newsletterSuccess ? 'var(--success)' : 'var(--text-primary)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: (newsletterSubmitting || newsletterSuccess) ? 'default' : 'pointer',
                  minWidth: '108px',
                  transition: 'var(--transition-fast)'
                }}
              >
                {newsletterSubmitting ? 'Cargando...' : newsletterSuccess ? '¡Suscrito!' : 'Suscribirse'}
              </button>
            </form>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'flex-start' }} className="footer-links-row">
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '14px', letterSpacing: '0.5px' }}>Productos</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
                <li><a href="#" onClick={(e) => {e.preventDefault(); setActiveCategory('gaming')}} style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Gaming</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); setActiveCategory('computing')}} style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Computación</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); setActiveCategory('licenses')}} style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Licencias</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '14px', letterSpacing: '0.5px' }}>Soporte</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
                <li><a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Envíos y Entregas</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Reclamaciones</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); setActiveCategory('installations')}} style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Descargas e Instalación</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Contacto</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lower credit metadata info */}
        <div className="container footer-credits" style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '12px',
          color: 'var(--text-secondary)'
        }}>
          <span>&copy; {new Date().getFullYear()} JDATECH Inc. Todos los derechos reservados.</span>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ cursor: 'pointer' }}>Privacidad</span>
            <span style={{ cursor: 'pointer' }}>Términos de servicio</span>
            <span style={{ cursor: 'pointer' }}>Garantías</span>
          </div>
        </div>
      </footer>

      {/* Conditionally Rendered Core Modals */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckoutOpen={(total) => {
          setCheckoutTotal(total);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        totalAmount={checkoutTotal}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/584148100986?text=Hola!%20Me%20interesa%20saber%20m%C3%A1s%20sobre%20los%20productos%20de%20JDATECH."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <span className="whatsapp-tooltip">¿Necesitas ayuda? Chatea con nosotros</span>
        <div className="whatsapp-pulse" />
        <WhatsAppIcon className="w-7 h-7" />
      </a>

      <style dangerouslySetInnerHTML={{__html: `
        .whatsapp-float {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background-color: #25D366;
          color: #ffffff;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
          z-index: 40;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          text-decoration: none;
        }
        .whatsapp-float:hover {
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.6);
        }
        .whatsapp-float:active {
          transform: scale(0.95);
        }
        .whatsapp-pulse {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid #25D366;
          animation: whatsapp-pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          pointer-events: none;
        }
        @keyframes whatsapp-pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.4);
            opacity: 0;
          }
          100% {
            transform: scale(0.95);
            opacity: 0;
          }
        }
        .whatsapp-tooltip {
          position: absolute;
          right: 70px;
          background-color: var(--surface);
          border: 1px solid var(--border);
          color: var(--text-primary);
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 12.5px;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transform: translateX(10px);
          transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
          box-shadow: var(--shadow-md);
          backdrop-filter: blur(8px);
        }
        .whatsapp-float:hover .whatsapp-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }
        @media (max-width: 768px) {
          .whatsapp-float {
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
          }
          .whatsapp-tooltip {
            display: none;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .footer-links-row {
            justify-content: space-between !important;
            width: 100% !important;
          }
          .footer-credits {
            flex-direction: column !important;
            gap: 12px !important;
            text-align: center !important;
          }
        }
        .btn-whatsapp-empty {
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease !important;
        }
        .btn-whatsapp-empty:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5) !important;
          filter: brightness(1.08);
        }
        .btn-whatsapp-empty:active {
          transform: translateY(0) scale(0.98);
        }
      `}} />
    </div>
  );
}

