import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div>
        <Footer />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
