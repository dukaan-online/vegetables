import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Pagenotfound from './pages/Pagenotfound';
import Cart from './pages/Cart';
import { useEffect, useState } from 'react';
import { getCartFromLocalStorage, storeCartInLocalStorage } from './utils/helper';
import { CartContext } from './utils/CartContext';
import Admin from './pages/Admin';
import CheckOrder from './pages/CheckOrder';

function App() {

  const [cart, setCart] = useState(window.localStorage.getItem('cart'));

  useEffect(() => {
    getCartFromLocalStorage().then(cart => {
      setCart(JSON.parse(cart));
    });
  }, []);

  useEffect(() => {
    storeCartInLocalStorage(cart);
  }, [cart]);


  return (
    <div>
      <BrowserRouter>
        <CartContext.Provider value={{cart,setCart}}> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="vegetables/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={< Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkorder" element={<CheckOrder />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
