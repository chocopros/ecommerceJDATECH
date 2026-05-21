import { useState } from 'react';
import { CloseIcon, TrashIcon, PlusIcon, MinusIcon, ArrowRightIcon } from './Icons';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckoutOpen
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = discountApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal > 1000 || subtotal === 0 ? 0 : 15;
  const total = subtotal - discount + shipping;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'JDATECH10') {
      setDiscountApplied(true);
      setPromoError('');
    } else {
      setPromoError('Cupón inválido. Intenta con JDATECH10');
      setDiscountApplied(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(8px)',
          animation: 'fade-in-overlay 0.3s ease-out forwards'
        }} 
      />

      {/* Drawer Panel */}
      <div 
        className="drawer-box"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '440px',
          height: '100%',
          backgroundColor: 'var(--surface)',
          borderLeft: '1px solid var(--border)',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          flexDirection: 'column',
          animation: 'slide-in-drawer 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '24px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.5px'
          }}>
            Tu Carrito
          </h2>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'var(--transition-fast)'
            }}
            className="drawer-close-btn"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Items list */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }} className="drawer-items-scroll">
          {cartItems.length === 0 ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              textAlign: 'center',
              color: 'var(--text-secondary)'
            }}>
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginBottom: '16px', color: 'var(--border)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>Tu bolsa está vacía</h3>
              <p style={{ fontSize: '13px', marginBottom: '24px', maxWidth: '240px' }}>Añade tus dispositivos tecnológicos favoritos para comenzar.</p>
              <button 
                onClick={onClose}
                className="btn-magnetic"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: '#ffffff',
                  fontSize: '13px',
                  padding: '10px 20px',
                  borderRadius: '20px'
                }}
              >
                Volver a la tienda
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '16px',
                  borderBottom: '1px solid var(--border)',
                  paddingBottom: '20px'
                }}
              >
                {/* Visual hardware display */}
                <div style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {item.illustration(item.colors[0].accent)}
                </div>

                {/* Info and Counter */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flex: 1,
                  textAlign: 'left'
                }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                      <h4 style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                        {item.name}
                      </h4>
                      <span style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--text-primary)' }}>
                        ${(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                    <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                      Color: {item.colors[0].name}
                    </span>
                  </div>

                  {/* Quantity adjustments */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid var(--border)',
                      borderRadius: '14px',
                      padding: '2px 4px',
                      backgroundColor: 'var(--bg-secondary)'
                    }}>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '4px',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        <MinusIcon className="w-3.5 h-3.5" />
                      </button>
                      
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', padding: '0 8px', minWidth: '20px', textAlign: 'center' }}>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '4px',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        <PlusIcon className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Trash remove item icon */}
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--text-secondary)',
                        padding: '6px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'var(--transition-fast)'
                      }}
                      className="cart-trash-btn"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Promo code & Price Summary Footer */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '24px',
            borderTop: '1px solid var(--border)',
            backgroundColor: 'var(--bg-secondary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {/* Promo Code Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  placeholder="Código de cupón"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  disabled={discountApplied}
                  style={{
                    flex: 1,
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    fontSize: '13px',
                    color: 'var(--text-primary)',
                    outline: 'none'
                  }}
                />
                <button
                  onClick={handleApplyPromo}
                  disabled={discountApplied}
                  style={{
                    backgroundColor: discountApplied ? 'var(--success)' : 'var(--text-primary)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: discountApplied ? 'default' : 'pointer',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  {discountApplied ? 'Aplicado' : 'Aplicar'}
                </button>
              </div>
              
              {/* Dynamic feedback messages */}
              {discountApplied && (
                <span style={{ fontSize: '11px', color: 'var(--success)', fontWeight: 600 }}>
                  ¡Cupón aplicado! 10% de descuento concedido.
                </span>
              )}
              {promoError && (
                <span style={{ fontSize: '11px', color: 'var(--danger)', fontWeight: 600 }}>
                  {promoError}
                </span>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              {discountApplied && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--success)', fontWeight: 500 }}>
                  <span>Descuento (10%)</span>
                  <span>-${discount.toLocaleString()}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
                <span>Envío</span>
                <span>{shipping === 0 ? 'Gratis' : `$${shipping.toLocaleString()}`}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '17px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                borderTop: '1px solid var(--border)',
                paddingTop: '12px',
                marginTop: '4px'
              }}>
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => {
                onCheckoutOpen(total);
                onClose();
              }}
              className="btn-magnetic"
              style={{
                backgroundColor: 'var(--accent)',
                color: '#ffffff',
                padding: '14px',
                borderRadius: 'var(--radius-md)',
                fontSize: '15px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%',
                boxShadow: 'var(--shadow-md)',
                marginTop: '8px'
              }}
            >
              Proceder al pago
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide-in-drawer {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .drawer-close-btn:hover {
          background-color: var(--border) !important;
          transform: rotate(90deg);
        }
        .cart-trash-btn:hover {
          background-color: var(--danger-light) !important;
          color: var(--danger) !important;
        }
        .drawer-items-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .drawer-items-scroll::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 2px;
        }
      `}} />
    </div>
  );
}
