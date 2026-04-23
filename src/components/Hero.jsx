import '../App.css'

function Hero() {
  return (
    <div className="hero-content" style={{ padding: '60px 20px' }}>
      <h1 style={{ marginBottom: '16px' }}>Karibu Simba Supermarket!</h1>
      <p style={{ fontSize: '20px', maxWidth: '600px', margin: '0 auto 40px' }}>
        Fresh groceries, premium meats, and everyday essentials delivered straight to your door across Kigali.
      </p>
      <div style={{ 
        width: '100%', 
        maxWidth: '800px', 
        margin: '0 auto',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow)'
      }}>
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1074&auto=format&fit=crop" 
          alt="Supermarket Interior" 
          style={{ width: '100%', display: 'block' }}
        />
      </div>
    </div>
  )
}

export default Hero;