import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage/HomePage';
import Header from './Header/Header';
import Cart from './Cart/Cart';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';



// const TG = window.Telegram.WebApp;

// console.log(TG);

function App() {

  const [isCart, setIsCart] = useState(false);
  const [isProductsInCart, setIsProductsInCart] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Проверяем, находится ли пользователь на маршруте /cart
    if (location.pathname === "/cart") {
      setIsCart(true);
    } else {
      setIsCart(false);
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Header isCart={isCart}/>
      <Routes>
        <Route
          path='/'
          element={<HomePage setIsProductsInCart={setIsProductsInCart} />}
        />
        <Route
          path='/cart'
          element={<Cart isProductsInCart={isProductsInCart} setIsProductsInCart={setIsProductsInCart} />}
        />
        
      </Routes>
      <Toaster />      
    </div>
  );
}

export default App;
