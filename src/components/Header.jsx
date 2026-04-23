import '../index.css';

function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--accent)' }}>
        🦁 Simba<span style={{ color: 'var(--text-h)' }}>Market</span>
      </div>
      <nav>
        <ul style={{ display: 'flex', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-h)', fontWeight: 500 }}>Groceries</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-h)', fontWeight: 500 }}>Offers</a></li>
          <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-h)', fontWeight: 500 }}>Locations</a></li>
        </ul>
      </nav>
      <button className="counter" style={{ margin: 0 }}>
        Cart (0)
      </button>
    </header>
  );
}

export default Header;
