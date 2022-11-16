import React from "react";
import { BrowserRouter, Routes, Switch, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home.jsx";
import CartContext from "./CartContext";
import { useState, useContext } from "react";




function App() {

  const [cart, setCart] = useState([])

  const location = useLocation();

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
          </Routes>
          {location.pathname !== '/contact-us' && <Footer />}
        </div>
      </CartContext.Provider>
    </>
  );
}

export default App;
