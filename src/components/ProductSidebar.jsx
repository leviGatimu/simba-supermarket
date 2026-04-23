import { useEffect, useState } from 'react';

function ProductSidebar({ product, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const rwfFormatter = new Intl.NumberFormat('en-RW', {
    style: 'currency',
    currency: 'RWF',
    minimumFractionDigits: 0
  });

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={handleClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(4px)',
          zIndex: 999,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease-out'
        }}
      />

      {/* Sidebar Panel */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100vh',
        width: '100%',
        maxWidth: '450px',
        background: 'var(--bg)',
        zIndex: 1000,
        boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxSizing: 'border-box'
      }}>
        <button 
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--accent-bg)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--accent)'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div style={{ flex: 1, overflowY: 'auto', marginTop: '20px' }}>
          <div style={{ 
            width: '100%', 
            height: '300px', 
            borderRadius: '16px', 
            overflow: 'hidden',
            marginBottom: '32px',
            boxShadow: 'var(--shadow)'
          }}>
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ display: 'inline-block', padding: '4px 12px', background: 'var(--accent-bg)', color: 'var(--accent)', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {product.category}
          </div>

          <h2 style={{ fontSize: '28px', marginBottom: '12px', color: 'var(--text-h)' }}>{product.name}</h2>
          
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '24px' }}>
            {rwfFormatter.format(product.priceRwf)}
          </p>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px', marginBottom: '32px' }}>
            <h4 style={{ marginBottom: '12px', color: 'var(--text-h)' }}>Product Details</h4>
            <p style={{ color: 'var(--text)', lineHeight: '1.6' }}>
              {product.description || "No description available for this item."}
            </p>
          </div>
        </div>

        <button style={{
          width: '100%',
          padding: '18px',
          borderRadius: '12px',
          background: 'var(--accent)',
          color: 'white',
          border: 'none',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          transition: 'opacity 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
        onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default ProductSidebar;
