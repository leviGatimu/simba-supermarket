import '../App.css';

function ProductCard({ product, onClick }) {
  const { name, priceRwf, image } = product;

  const rwfFormatter = new Intl.NumberFormat('en-RW', {
    style: 'currency',
    currency: 'RWF',
    minimumFractionDigits: 0
  });

  return (
    <div 
      onClick={onClick}
      style={{
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '16px',
        maxWidth: '250px',
        background: 'var(--bg)',
        transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s',
        textAlign: 'left',
        cursor: onClick ? 'pointer' : 'default',
        position: 'relative'
      }}
      onMouseOver={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = 'var(--shadow)';
        }
      }}
      onMouseOut={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }
      }}
    >
      <div style={{
        width: '100%',
        height: '180px',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '16px',
        background: '#f9f9f9'
      }}>
        <img 
          src={image} 
          alt={name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      <h3 style={{ fontSize: '18px', margin: '0 0 8px', color: 'var(--text-h)', lineHeight: '1.2' }}>{name}</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ 
          fontSize: '18px', 
          fontWeight: 'bold', 
          color: 'var(--accent)',
          margin: 0 
        }}>
          {rwfFormatter.format(priceRwf)}
        </p>
        {onClick && (
          <div style={{ 
            width: '32px', 
            height: '32px', 
            borderRadius: '50%', 
            background: 'var(--accent-bg)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'var(--accent)'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
