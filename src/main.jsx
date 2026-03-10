import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { LanguageProvider } from './context/LanguageContext';  // ← ajoute cet import
import Navbar from './layouts/navbar.jsx';
import Hero from './layouts/hero.jsx'
import Stats from './layouts/stats.jsx'
import Agenda from './layouts/agenda.jsx';
import Livres from './layouts/livres.jsx'
import Formations from './layouts/formations.jsx';
import Contact from './layouts/contact.jsx';
import Footer from './layouts/footer.jsx';
import Branding from './layouts/branding.jsx';
import About from './layouts/about.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>  {/* ← enveloppe tout */}
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Agenda />
      <Formations />
      <Livres />
      <Contact />
      <Branding />
      <Footer />
    </LanguageProvider>
  </StrictMode>,
)