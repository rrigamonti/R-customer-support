import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import TopBar from './components/layout/TopBar';
import { VapiChat } from './components/VapiChat';
import HomePage from './pages/HomePage';
import WhyUsPage from './pages/WhyUsPage';
import ServicesPage from './pages/ServicesPage';
import BenefitsPage from './pages/BenefitsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import CookiePolicy from './pages/legal/CookiePolicy';
import GDPRCompliance from './pages/legal/GDPRCompliance';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/benefits" element={<BenefitsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/gdpr" element={<GDPRCompliance />} />
          </Routes>
        </div>
        <Footer />
        <VapiChat />
      </div>
    </Router>
  );
}

export default App;