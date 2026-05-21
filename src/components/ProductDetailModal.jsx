import { useState } from 'react';
import { CloseIcon, StarIcon, ShoppingBagIcon } from './Icons';

export default function ProductDetailModal({ product, onClose, onAddToCart }) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  if (!product) return null;
  const activeColor = product.colors[selectedColorIndex];
  
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      {/* Backdrop blur overlay */}
      <div 
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(16px)',
          animation: 'fade-in-overlay 0.3s ease-out forwards'
        }} 
      />

      {/* Modal Container */}
      <div 
        className="modal-box"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '840px',
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          animation: 'scale-up-modal 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-fast)'
          }}
          className="modal-close-btn"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {/* Left: Dynamic Tech Graphic Display */}
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 24px',
          borderRight: '1px solid var(--border)',
          position: 'relative'
        }}>
          {/* Subtle engineering line in background */}
          <div style={{
            position: 'absolute',
            width: '1px',
            height: '80%',
            backgroundColor: 'var(--border)',
            left: '50%',
            top: '10%',
            zIndex: 0,
            opacity: 0.5
          }} />

          <div style={{ width: '100%', zIndex: 1, position: 'relative' }} className="modal-preview">
            {product.illustration(activeColor.accent)}
          </div>

          {/* Option Color Badges selection */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            marginTop: '24px',
            zIndex: 1
          }}>
            <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Color: {activeColor.name}
            </span>
            <div style={{ display: 'flex', gap: '12px' }}>
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColorIndex(idx)}
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: color.value,
                    border: selectedColorIndex === idx ? `2px solid var(--accent)` : `2px solid transparent`,
                    padding: '2px',
                    cursor: 'pointer',
                    boxShadow: selectedColorIndex === idx ? '0 0 10px var(--accent-glow)' : 'var(--shadow-sm)',
                    transition: 'var(--transition-spring)'
                  }}
                  className="color-dot-btn"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Rich Information Details */}
        <div style={{
          padding: '40px',
          maxHeight: '85vh',
          overflowY: 'auto',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box'
        }} className="modal-details-scroll">
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            color: 'var(--accent)',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            marginBottom: '8px',
            display: 'inline-block'
          }}>
            {product.category}
          </span>
          
          <h2 style={{
            fontSize: '32px',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: 1.15,
            letterSpacing: '-1px',
            marginBottom: '8px'
          }}>
            {product.name}
          </h2>

          {/* Stars Rating and Reviews Count */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <StarIcon 
                  key={s} 
                  filled={s <= Math.floor(product.rating)} 
                  className="w-4 h-4" 
                  style={{ color: s <= Math.floor(product.rating) ? '#FFB800' : 'var(--border)' }} 
                />
              ))}
            </div>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>
              {product.rating}
            </span>
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              ({product.reviewsCount} reseñas)
            </span>
          </div>

          <p style={{
            fontSize: '14.5px',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            marginBottom: '24px'
          }}>
            {product.description}
          </p>

          {/* Technical Specifications Tabular diagram */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-primary)', marginBottom: '12px' }}>
              Especificaciones Técnicas
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden'
            }}>
              {product.specs.map((spec, i) => (
                <div key={i} style={{
                  display: 'flex',
                  borderBottom: i === product.specs.length - 1 ? 'none' : '1px solid var(--border)',
                  backgroundColor: i % 2 === 0 ? 'var(--surface)' : 'var(--bg-secondary)',
                  padding: '10px 14px',
                  fontSize: '12.5px'
                }}>
                  <div style={{ flex: '0 0 110px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    {spec.label}
                  </div>
                  <div style={{ flex: 1, color: 'var(--text-primary)', fontWeight: 500 }}>
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Reviews */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-primary)', marginBottom: '12px' }}>
              Reseñas Destacadas
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {product.reviews.map((rev, i) => (
                <div key={i} style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '12px 16px',
                  border: '1px solid var(--border)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)' }}>{rev.user}</span>
                    <div style={{ display: 'flex', gap: '1px' }}>
                      {[1,2,3,4,5].map(st => (
                        <StarIcon key={st} filled={st <= Math.floor(rev.rating)} className="w-3 h-3" style={{ color: st <= Math.floor(rev.rating) ? '#FFB800' : 'var(--border)' }} />
                      ))}
                    </div>
                  </div>
                  <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Purchase Actions footer block */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '20px',
            borderTop: '1px solid var(--border)',
            marginTop: 'auto'
          }}>
            <div>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Importe</span>
              <div style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
                ${product.price.toLocaleString()}
              </div>
            </div>

            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
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
              <ShoppingBagIcon className="w-4 h-4" />
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-overlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-up-modal {
          from { opacity: 0; transform: scale(0.92) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .modal-close-btn:hover {
          background-color: var(--border) !important;
          transform: rotate(90deg);
        }
        .color-dot-btn:hover {
          transform: scale(1.1);
        }
        .modal-details-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .modal-details-scroll::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 2px;
        }
        @media (max-width: 768px) {
          .modal-box {
            grid-template-columns: 1fr !important;
            max-height: 90vh !important;
            overflow-y: auto !important;
          }
          .modal-preview {
            max-width: 220px !important;
          }
        }
      `}} />
    </div>
  );
}
