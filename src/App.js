import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home.jsx";
import CartContext from "./CartContext";
import { useState } from "react";




function App() {

  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className="App">

        <Navbar />
        <Home />
        <div>
          <Footer />
          <ContactUs />
        </div>
      </div>
    </CartContext.Provider >
  );
}

export default App;
