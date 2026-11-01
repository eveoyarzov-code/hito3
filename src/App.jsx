import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
 import { pizzaCart } from "./components/pizzas.js";

const App = () => {
  
  const [cart, setCart] = useState(pizzaCart || []);

  const totalAmount = cart.reduce((total, item) => total + ((item.price || 0) * (item.count || 0)), 0);
  const totalCount = cart.reduce((total, item) => total + (item.count || 0), 0);
  return (
    <div>
     
      <Navbar totalAmount={totalAmount} totalCount={totalCount} />
      
      <Cart cart={cart} setCart={setCart} totalAmount={totalAmount} />
      
      <Footer />
    </div>
  );
};

export default App;
