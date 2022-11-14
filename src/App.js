import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Footer />
        <ContactUs />
      </div>
    </div>
  );
}



export default App;
