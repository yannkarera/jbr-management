import { useState } from 'react';
import "../style/agenda.css";
import Button from "../components/button.jsx";

export default function Agenda () {
    const [isOpen, setIsOpen] = useState(false);
    const handleNavClick = () => setIsOpen(false);
    return (
        <>
        <section className="agenda-section" id="agenda">
    <div className="agenda-left">
        <h2>AGENDA 2026</h2>

        <div className="agenda-date">4 OCT - <span className="material-symbols-outlined">location_on</span>Montreal | 
            Salon de la copropriété et l'Habitat
        </div>
        <div className="agenda-date">5 NOV - <span className="material-symbols-outlined">location_on</span>Paris Expo | 
            Salon de la copropriété et de l'Habitat
        </div>
        <div className="agenda-date">19 NOV - <span className="material-symbols-outlined">location_on</span>Bruxelles Expo | 
            Salon de la copropriété et de l'Habitat
        </div>

        <a href="#contact" onClick={handleNavClick}><Button label="Nous contacter" variant="primary" /></a>
    </div>

    <div className="agenda-right">
        <h2>CONFÉRENCES</h2>

<div className="map-placeholder">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/cJJ13h7dWi0"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
          
    </div>
    </section>
        </>
    );
}        