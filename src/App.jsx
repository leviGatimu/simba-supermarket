import './App.css'
import  Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import { PRODUCTS } from './data/products'

function App() {
  const testProduct = PRODUCTS[0];

  return (
    <>
      <Header />
      <main id="center">
        <Hero />
        <div style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
          <ProductCard product={testProduct} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
