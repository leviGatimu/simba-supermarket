import '../index.css';

function Footer() {
  return (
    <footer style={{
      padding: '60px 40px 40px',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg)',
      marginTop: 'auto'
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '40px',
        marginBottom: '60px',
        textAlign: 'left'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-h)' }}>SIMBAMARKET</div>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--text)', lineHeight: '1.6' }}>
            Kigali's favorite destination for fresh groceries and household essentials.
          </p>
        </div>
        
        <div>
          <h4 style={{ color: 'var(--text-h)', marginBottom: '16px' }}>Shop</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
            <li><a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px' }}>All Products</a></li>
            <li><a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px' }}>Fresh Produce</a></li>
            <li><a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px' }}>Dairy & Eggs</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'var(--text-h)', marginBottom: '16px' }}>Support</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
            <li><a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px' }}>Contact Us</a></li>
            <li><a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px' }}>Delivery Info</a></li>
            <li><a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px' }}>FAQ</a></li>
          </ul>
        </div>
      </div>

      <div style={{ 
        paddingTop: '30px', 
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <p style={{ fontSize: '13px', color: 'var(--text)' }}>
          © {new Date().getFullYear()} Simba Supermarket Kigali. Freshness you can trust.
        </p>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13px' }}>Privacy</a>
          <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '13px' }}>Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
