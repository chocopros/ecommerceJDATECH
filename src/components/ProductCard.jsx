import { useState } from 'react';
import { StarIcon, CheckIcon } from './Icons';

export default function ProductCard({ product, onAddToCart, onOpenDetail }) {
  const [added, setAdded] = useState(false);
  const mainColor = product.colors[0].accent;

  const handleAdd = (e) => {
    e.stopPropagation(); // Stop click from opening modal detail
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1800);
  };

  return (
    <article 
      onClick={() => onOpenDetail(product)}
      className="laser-card" 
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative'
      }}
    >
      {/* Dynamic Hardware Illustration Frame */}
      <div 
        className="lens-zoom-container" 
        style={{
          width: '100%',
          height: '200px',
          borderBottom: '1px solid var(--border)',
          position: 'relative'
        }}
      >
        {/* Render Vector hardware mockup */}
        <div className="lens-zoom-image" style={{ width: '100%', height: '100%' }}>
          {product.illustration(mainColor)}
        </div>

        {/* Small floating category badge */}
        <span style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          fontSize: '10px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          color: 'var(--text-secondary)',
          backgroundColor: 'var(--bg-primary)',
          padding: '2px 8px',
          borderRadius: '12px',
          border: '1px solid var(--border)'
        }}>
          {product.category}
        </span>
      </div>

      {/* Product Content Details */}
      <div style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        textAlign: 'left'
      }}>
        {/* Title and Rating Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '8px',
          marginBottom: '8px'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            lineHeight: 1.25
          }}>
            {product.name}
          </h3>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
            backgroundColor: 'var(--bg-secondary)',
            padding: '2px 6px',
            borderRadius: '6px',
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            flexShrink: 0
          }}>
            <StarIcon className="w-3 h-3" filled={true} style={{ color: '#FFB800' }} />
            {product.rating}
          </div>
        </div>

        <p style={{
          fontSize: '13px',
          color: 'var(--text-secondary)',
          lineHeight: 1.35,
          marginBottom: '16px',
          flexGrow: 1
        }}>
          {product.shortDescription}
        </p>

        {/* Specifications list (Apple-like technical details) */}
        <div style={{
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          padding: '12px 0',
          marginBottom: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          {product.specs.slice(0, 2).map((spec, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '11px',
              fontFamily: 'var(--font-sans)'
            }}>
              <span style={{ color: 'var(--text-secondary)' }}>{spec.label}</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: 500, maxWidth: '160px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Price and Cart button Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 'auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Precio</span>
            <span style={{
              fontSize: '20px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.5px'
            }}>
              ${product.price.toLocaleString()}
            </span>
          </div>

          {/* Morphing Purchase Button with bounce */}
          <button
            onClick={handleAdd}
            className={`buy-btn ${added ? 'added' : ''}`}
            style={{
              border: 'none',
              background: added ? 'var(--success)' : 'var(--text-primary)',
              color: '#ffffff',
              borderRadius: '20px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'var(--transition-spring)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              height: '36px',
              minWidth: '94px',
              boxShadow: added ? '0 4px 12px var(--success-light)' : 'var(--shadow-sm)'
            }}
          >
            {added ? (
              <>
                <CheckIcon className="w-4 h-4 check-pop" />
                Añadido
              </>
            ) : (
              'Comprar'
            )}
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .buy-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px var(--accent-light) !important;
        }
        .buy-btn.added {
          transform: scale(1) !important;
          animation: pop-bounce 0.4s var(--ease-out-expo) forwards;
        }
        .check-pop {
          animation: spring-check 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes spring-check {
          0% { transform: scale(0) rotate(-15deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes pop-bounce {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}} />
    </article>
  );
}
