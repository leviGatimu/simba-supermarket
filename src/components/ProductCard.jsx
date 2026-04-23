import '../App.css';

function ProductCard({ product }) {
  const { name, priceRwf, image } = product;

  const rwfFormatter = new Intl.NumberFormat('en-RW', {
    style: 'currency',
    currency: 'RWF',
    minimumFractionDigits: 0
  });

  return (
    <div style={{
      border: '1px solid var(--border)',
      borderRadius: '12px',
      padding: '16px',
      maxWidth: '250px',
      background: 'var(--bg)',
      boxShadow: 'var(--shadow)',
      textAlign: 'left'
    }}>
      <div style={{
        width: '100%',
        height: '180px',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '12px',
        background: '#f9f9f9'
      }}>
        <img 
          src={image} 
          alt={name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      <h3 style={{ fontSize: '18px', margin: '0 0 8px', color: 'var(--text-h)' }}>{name}</h3>
      <p style={{ 
        fontSize: '20px', 
        fontWeight: 'bold', 
        color: 'var(--accent)',
        margin: 0 
      }}>
        {rwfFormatter.format(priceRwf)}
      </p>
    </div>
  );
}

export default ProductCard;
