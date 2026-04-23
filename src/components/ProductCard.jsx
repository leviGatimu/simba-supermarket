import '../index.css';

function ProductCard({ product }) {
  const { name, priceRwf, image, category, inStock } = product;

  const rwfFormatter = new Intl.NumberFormat('en-RW', {
    style: 'currency',
    currency: 'RWF',
    minimumFractionDigits: 0
  });

  function onAddToCart(){
    console.log("Added:", product.name)
  }

  return (
    <div className={`product-card ${!inStock ? 'out-of-stock' : ''}`}>
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-image" />
        {category && <span className="product-category">{category}</span>}
        {!inStock && <span className="stock-badge">Out of Stock</span>}
      </div>
      
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <div className="product-price-row">
          <span className="product-price">{rwfFormatter.format(priceRwf)}</span>
        </div>
        
        <button 
          className="btn btn-primary add-to-cart-btn" 
          onClick={onAddToCart}
          disabled={!inStock}
        >
          {inStock ? 'Add to Cart' : 'Notify Me'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
