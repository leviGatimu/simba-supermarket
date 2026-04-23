import { useState } from "react";
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';

function LandingPage() {
  const p = PRODUCTS[0];
  const [showSpecial, setShowSpecial] = useState(false);

  return (
    <div style={{ animation: 'fadeIn 0.8s ease-out' }}>
      <Hero />
      
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        {!showSpecial ? (
          <div style={{ 
            background: 'var(--accent-bg)', 
            padding: '40px', 
            borderRadius: '24px', 
            border: '1px dashed var(--accent-border)',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <div style={{ marginBottom: '20px', color: 'var(--accent)' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 12 20 22 4 22 4 12"></polyline>
                <rect x="2" y="7" width="20" height="5"></rect>
                <line x1="12" y1="22" x2="12" y2="7"></line>
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
              </svg>
            </div>
            <h2 style={{ marginBottom: '12px' }}>Exclusive Offer</h2>
            <p style={{ color: 'var(--text)', marginBottom: '24px' }}>Discover our hand-picked item of the day at a special price.</p>
            <button 
              onClick={() => setShowSpecial(true)} 
              style={{
                padding: '12px 24px',
                border: 'none',
                borderRadius: '12px',
                backgroundColor: 'var(--accent)',
                color: 'white',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span>Show Today's Special</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        ) : (
          <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <h2 style={{ margin: 0 }}>Today's Special</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ProductCard product={p} />
            </div>
          </div>
        )}
      </div>

      <section style={{ padding: '60px 40px', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Shop by Category</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {['Produce', 'Dairy', 'Bakery', 'Meat'].map(cat => (
            <div key={cat} style={{ 
              padding: '30px', 
              borderRadius: '20px', 
              background: 'var(--bg)', 
              border: '1px solid var(--border)',
              textAlign: 'left',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = 'var(--shadow)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{ color: 'var(--accent)', marginBottom: '16px' }}>
                {cat === 'Produce' && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>}
                {cat === 'Dairy' && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>}
                {cat === 'Bakery' && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>}
                {cat === 'Meat' && <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16s-2-2-2-4 2-4 2-4 2 2 2 4-2 4-2 4z"></path></svg>}
              </div>
              <h3 style={{ marginBottom: '8px' }}>{cat}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text)' }}>Browse our freshest selection of {cat.toLowerCase()} items.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
