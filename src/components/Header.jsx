import { Link } from 'react-router-dom';
import '../index.css';

function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 40px',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg)',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      backdropFilter: 'blur(8px)'
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <div style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-h)', letterSpacing: '-0.5px' }}>
          SIMBA<span style={{ color: 'var(--accent)' }}>MARKET</span>
        </div>
      </Link>
      <h1></h1>
      <nav>
        <ul style={{ display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><Link to="/" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 500, fontSize: '15px' }}>Home</Link></li>
          <li><Link to="/products" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 500, fontSize: '15px' }}>Shop</Link></li>
          <li><Link to="/products" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 500, fontSize: '15px' }}>Offers</Link></li>
        </ul>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button className="counter" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'var(--accent)', color: 'white', border: 'none' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span style={{ fontWeight: 'bold' }}>Cart (0)</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
