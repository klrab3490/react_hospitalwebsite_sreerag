import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Department from './pages/Department';
import Doctor from './pages/Doctor';
import Navbar from './components/Navbar';  // Ensure Navbar is imported
import Footer from './components/Footer';  // Ensure Footer is imported

function App() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/department" element={<Department />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
