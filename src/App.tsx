/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Background from './components/Background';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <div className="min-h-screen bg-burgundy flex flex-col relative font-serif text-ink overflow-x-hidden selection:bg-gold selection:text-cream">
      <ScrollToTop />
      <Background />
      <Navigation />

      <main className="flex-1 relative z-10 flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </div>
  );
}
