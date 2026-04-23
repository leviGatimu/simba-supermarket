import '../index.css'

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-text">
          <span className="hero-badge">Fresh & Quality Guaranteed</span>
          <h1>Your Daily Essentials, <br /> Delivered with Care</h1>
          <p>
            Experience the freshest groceries, premium cuts of meat, and everyday 
            household essentials from Rwanda's favorite supermarket.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary">Shop Now</button>
            <button className="btn btn-secondary">View Weekly Deals</button>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1074&auto=format&fit=crop" 
            alt="Simba Supermarket Fresh Produce" 
          />
          <div className="hero-stats">
            <div className="stat-item">
              <strong>15k+</strong>
              <span>Products</span>
            </div>
            <div className="stat-item">
              <strong>24/7</strong>
              <span>Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
