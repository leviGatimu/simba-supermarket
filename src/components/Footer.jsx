import '../index.css';

function Footer() {
  return (
    <footer style={{
      padding: '40px',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg)',
      marginTop: 'auto',
      textAlign: 'center'
    }}>
      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '14px', color: 'var(--text)' }}>
          © {new Date().getFullYear()} Simba Supermarket Kigali. Freshness you can trust.
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</a>
        <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px' }}>Terms of Service</a>
        <a href="#" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '14px' }}>Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;
