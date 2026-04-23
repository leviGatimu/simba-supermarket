import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import { PRODUCTS } from './data/products'
import { useState } from "react";
function App() {
  const p = PRODUCTS[0];
  const [showSpecial, setShowSpecial] = useState(false);
  return (
    <>
      <Header />
      <main id="center">
        <Hero />
      {!showSpecial ? (
        <div style={{padding:'30px'}}>
          <button onClick={()=>setShowSpecial(true)} style={{padding:'10px', border: 'none' , borderRadius: '10px', backgroundColor: 'blue'}}> Show Today's Special</button>
        </div>
      ):(
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <ProductCard product={p} />
        </div>
        )
      }
        
      </main>
      <Footer />
    </>
  )
}

export default App
