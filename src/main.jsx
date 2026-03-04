import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import Navbar from './layouts/navbar.jsx';
import Hero from './layouts/hero.jsx'
import Stats from './layouts/stats.jsx'
import Agenda from './layouts/agenda.jsx';
import Livres from './layouts/livres.jsx'
import Formations from './layouts/formations.jsx';
import Contact from './layouts/contact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Stats />
    <Agenda />
    <Livres />
    <Formations />
    <Contact />
  </StrictMode>,
)