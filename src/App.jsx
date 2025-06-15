import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import Partners from './pages/Partners';
import Agility from './pages/Agility';
import AgilityDetail from './pages/AgilityDetail';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div className="nav-links">
            <div className="left">
              <NavLink to="/" className="nav-link" end>Home</NavLink>
            </div>
            <div className="center">
              <NavLink to="/dienstleistungen" className="nav-link">Dienstleistungen</NavLink>
              <NavLink to="/agility" className="nav-link">Agility</NavLink>
              <NavLink to="/preisliste" className="nav-link">Preisliste</NavLink>
              <NavLink to="/partner" className="nav-link">Partner</NavLink>
              <NavLink to="/kontakt" className="nav-link">Kontakt</NavLink>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dienstleistungen" element={<Services />} />
        <Route path="/dienstleistungen/:id" element={<ServiceDetail />} />
        <Route path="/agility" element={<Agility />} />
        <Route path="/agility/:id" element={<AgilityDetail />} />
        <Route path="/preisliste" element={<Pricing />} />
        <Route path="/partner" element={<Partners />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">
              Folgen Sie mir auf Social Media oder kontaktieren Sie mich direkt – ich freue mich darauf, von Ihnen zu hören!
            </p>
            <div className="social-icons">
              <a href="https://m.me/profile.php?id=100089598372380" className="social-icon">
                <img src={`/images/facebook.png`} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/caro.spahni/" className="social-icon">
                <img src={`/caroline-spahni.ch/images/instagram.png`} alt="Instagram" />
              </a>
              <a href="https://threema.id/26N5RYPJ?text=Hallo Caro." className="social-icon">
                <img src={`/caroline-spahni.ch/images/threema.png`} alt="Threema" />
              </a>
              <a href="mailto:kontakt@caroline-spahni.ch" className="social-icon">
                <img src="/images/email-icon.png" alt="E-Mail" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
