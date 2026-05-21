import { useState } from 'react';
import { CloseIcon, CheckIcon } from './Icons';

export default function CheckoutModal({ isOpen, onClose, totalAmount, onOrderSuccess }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('form'); // 'form' | 'processing' | 'success'
  const [trackingCode, setTrackingCode] = useState('');
  const [confettiItems, setConfettiItems] = useState([]);

  if (!isOpen) return null;

  const validate = () => {
    let tempErrors = {};
    if (!form.name.trim()) tempErrors.name = 'El nombre es obligatorio';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) tempErrors.email = 'Email inválido';
    if (!form.address.trim()) tempErrors.address = 'Dirección obligatoria';
    if (!form.city.trim()) tempErrors.city = 'Ciudad obligatoria';
    if (!form.cardName.trim()) tempErrors.cardName = 'Titular de tarjeta obligatorio';
    
    // Card validations
    const cleanCard = form.cardNumber.replace(/\s+/g, '');
    if (cleanCard.length < 16) tempErrors.cardNumber = 'Tarjeta inválida (16 dígitos)';
    if (!/^\d{2}\/\d{2}$/.test(form.cardExpiry)) tempErrors.cardExpiry = 'Expiración inválida (MM/AA)';
    if (form.cardCvv.length < 3) tempErrors.cardCvv = 'CVV inválido (3 dígitos)';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInput = (field, val) => {
    let formattedVal = val;
    if (field === 'cardNumber') {
      // Format 16 digits into blocks of 4
      formattedVal = val.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ');
    } else if (field === 'cardExpiry') {
      formattedVal = val.replace(/\D/g, '').slice(0, 4);
      if (formattedVal.length > 2) {
        formattedVal = formattedVal.slice(0, 2) + '/' + formattedVal.slice(2);
      }
    } else if (field === 'cardCvv') {
      formattedVal = val.replace(/\D/g, '').slice(0, 3);
    }
    
    setForm({ ...form, [field]: formattedVal });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('processing');
    
    // Simulated bank processing time
    setTimeout(() => {
      // Generate tracking number
      const randomNum = Math.floor(100000 + Math.random() * 900000);
      setTrackingCode(`JD-${randomNum}`);
      
      // Generate confetti items
      const items = Array.from({ length: 30 }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        const duration = 2 + Math.random() * 3;
        const size = 5 + Math.random() * 8;
        const color = ['#0066cc', '#8B5CF6', '#30D158', '#FFB800', '#FF453A'][Math.floor(Math.random() * 5)];
        const isCircle = Math.random() > 0.5;
        return { id: i, left, delay, duration, size, color, isCircle };
      });
      setConfettiItems(items);
      setStatus('success');
    }, 2500);
  };

  const handleCloseSuccess = () => {
    onOrderSuccess();
    onClose();
  };

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
      {/* Backdrop */}
      <div 
        onClick={status !== 'processing' ? onClose : undefined}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(16px)',
          animation: 'fade-in-overlay 0.3s ease-out forwards'
        }} 
      />

      {/* Confetti element list shown only during success */}
      {status === 'success' && (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 6 }}>
          {confettiItems.map((item) => (
            <div 
              key={item.id} 
              style={{
                position: 'absolute',
                top: '-20px',
                left: `${item.left}%`,
                width: `${item.size}px`,
                height: `${item.size}px`,
                backgroundColor: item.color,
                borderRadius: item.isCircle ? '50%' : '2px',
                opacity: 0.8,
                animation: `confetti-fall ${item.duration}s linear ${item.delay}s infinite`
              }} 
            />
          ))}
        </div>
      )}

      {/* Modal Container */}
      <div 
        className="modal-box"
        style={{
          position: 'relative',
          zIndex: 5,
          width: '100%',
          maxWidth: '460px',
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          padding: status === 'success' ? '40px 32px' : '32px',
          animation: 'scale-up-modal 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
        }}
      >
        {/* Close Icon (hidden during gateway processing) */}
        {status !== 'processing' && (
          <button
            onClick={status === 'success' ? handleCloseSuccess : onClose}
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'var(--transition-fast)'
            }}
            className="checkout-close-btn"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        )}

        {/* State 1: Form Billing Sheet */}
        {status === 'form' && (
          <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px', letterSpacing: '-0.5px' }}>
              Finalizar Pedido
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Completa tus datos de envío y pago seguro para procesar tu orden.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Shipping Details */}
              <div>
                <label style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>Nombre Completo</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => handleInput('name', e.target.value)}
                  className={`checkout-input ${errors.name ? 'error' : ''}`}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div>
                <label style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>Correo Electrónico</label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  value={form.email}
                  onChange={(e) => handleInput('email', e.target.value)}
                  className={`checkout-input ${errors.email ? 'error' : ''}`}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>Dirección de Envío</label>
                  <input
                    type="text"
                    placeholder="Calle Falsa 123"
                    value={form.address}
                    onChange={(e) => handleInput('address', e.target.value)}
                    className={`checkout-input ${errors.address ? 'error' : ''}`}
                  />
                  {errors.address && <span className="error-text">{errors.address}</span>}
                </div>
                <div>
                  <label style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>Ciudad</label>
                  <input
                    type="text"
                    placeholder="Santiago"
                    value={form.city}
                    onChange={(e) => handleInput('city', e.target.value)}
                    className={`checkout-input ${errors.city ? 'error' : ''}`}
                  />
                  {errors.city && <span className="error-text">{errors.city}</span>}
                </div>
              </div>

              {/* Payment Details Card Frame */}
              <div style={{
                marginTop: '10px',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                padding: '16px',
                backgroundColor: 'var(--bg-secondary)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px', color: 'var(--text-primary)' }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                  <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pago Seguro Encriptado</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <input
                      type="text"
                      placeholder="Nombre en la Tarjeta"
                      value={form.cardName}
                      onChange={(e) => handleInput('cardName', e.target.value)}
                      className={`checkout-input borderless ${errors.cardName ? 'error' : ''}`}
                    />
                    {errors.cardName && <span className="error-text">{errors.cardName}</span>}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Número de Tarjeta (4444 4444 4444 4444)"
                      value={form.cardNumber}
                      onChange={(e) => handleInput('cardNumber', e.target.value)}
                      className={`checkout-input borderless ${errors.cardNumber ? 'error' : ''}`}
                    />
                    {errors.cardNumber && <span className="error-text">{errors.cardNumber}</span>}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '10px' }}>
                    <div>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        value={form.cardExpiry}
                        onChange={(e) => handleInput('cardExpiry', e.target.value)}
                        className={`checkout-input borderless ${errors.cardExpiry ? 'error' : ''}`}
                      />
                      {errors.cardExpiry && <span className="error-text">{errors.cardExpiry}</span>}
                    </div>
                    <div>
                      <input
                        type="password"
                        placeholder="CVV"
                        value={form.cardCvv}
                        onChange={(e) => handleInput('cardCvv', e.target.value)}
                        className={`checkout-input borderless ${errors.cardCvv ? 'error' : ''}`}
                      />
                      {errors.cardCvv && <span className="error-text">{errors.cardCvv}</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit checkout bar */}
            <button
              type="submit"
              className="btn-magnetic"
              style={{
                backgroundColor: 'var(--accent)',
                color: '#ffffff',
                width: '100%',
                padding: '14px',
                borderRadius: 'var(--radius-md)',
                fontSize: '15px',
                fontWeight: 600,
                marginTop: '20px',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              Pagar ${totalAmount.toLocaleString()}
            </button>
          </form>
        )}

        {/* State 2: Gateway Securing Processing */}
        {status === 'processing' && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 0',
            textAlign: 'center'
          }}>
            <div className="processing-ring" style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              border: '3px solid var(--border)',
              borderTopColor: 'var(--accent)',
              animation: 'spin 1s linear infinite',
              marginBottom: '20px'
            }} />
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>Procesando Pago Seguro</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '280px', lineHeight: 1.4 }}>
              Estamos contactando con los servidores bancarios para autorizar la transacción. Por favor, no recargues la página.
            </p>
          </div>
        )}

        {/* State 3: Immersive Victory success block */}
        {status === 'success' && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}>
            {/* Green animated success pulse circle */}
            <div className="success-badge-pulse" style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'var(--success)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              marginBottom: '24px'
            }}>
              <CheckIcon className="w-8 h-8 check-pop" />
            </div>

            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px', letterSpacing: '-0.5px' }}>
              ¡Pedido Confirmado!
            </h2>
            
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', maxWidth: '300px', lineHeight: 1.45, marginBottom: '24px' }}>
              Muchas gracias por comprar en **JDATECH**. Hemos enviado un correo con tu recibo de pago y los detalles del envío.
            </p>

            {/* Tracking Code card */}
            <div style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              padding: '16px 24px',
              width: '100%',
              marginBottom: '32px',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '10px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>
                Código de Seguimiento
              </span>
              <span style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '1.5px' }}>
                {trackingCode}
              </span>
            </div>

            <button
              onClick={handleCloseSuccess}
              className="btn-magnetic"
              style={{
                backgroundColor: 'var(--text-primary)',
                color: 'var(--bg-primary)',
                width: '100%',
                padding: '12px 24px',
                borderRadius: 'var(--radius-md)',
                fontSize: '14.5px',
                fontWeight: 600
              }}
            >
              Seguir Comprando
            </button>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .checkout-close-btn:hover {
          background-color: var(--border) !important;
        }
        .checkout-input {
          width: 100%;
          background-color: var(--surface);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 13.5px;
          color: var(--text-primary);
          outline: none;
          transition: var(--transition-fast);
          box-sizing: border-box;
        }
        .checkout-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 8px var(--accent-light);
        }
        .checkout-input.error {
          border-color: var(--danger);
          box-shadow: 0 0 8px var(--danger-light);
        }
        .checkout-input.borderless {
          background-color: var(--surface) !important;
          border: 1px solid var(--border) !important;
        }
        .checkout-input.borderless:focus {
          border-color: var(--accent) !important;
        }
        .error-text {
          font-size: 11px;
          color: var(--danger);
          font-weight: 500;
          display: block;
          margin-top: 4px;
        }
        @keyframes confetti-fall {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
      `}} />
    </div>
  );
}
