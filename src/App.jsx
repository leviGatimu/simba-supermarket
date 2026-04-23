import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import { PRODUCTS } from './data/products'

function App() {
  // Select the first product to render
  const p = PRODUCTS[0];

  return (
    <>
      <Header />
      <main id="center">
        <Hero />
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <ProductCard product={p} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
