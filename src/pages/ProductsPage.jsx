import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductSidebar from '../components/ProductSidebar';
import { PRODUCTS } from '../data/products';

function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div style={{ padding: '40px', animation: 'fadeIn 0.5s ease-out' }}>
      <header style={{ marginBottom: '40px', textAlign: 'left' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>All Products</h1>
        <p style={{ color: 'var(--text)' }}>Browse our full selection of premium groceries.</p>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '30px' 
      }}>
        {PRODUCTS.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductSidebar 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}

export default ProductsPage;
