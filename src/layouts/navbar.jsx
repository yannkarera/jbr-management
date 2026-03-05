import { useState } from 'react';
import "../style/navbar.css";
import Button from '../components/button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleNavClick = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo"><img src="jbr-management/assets/img/logo.png" alt="De Lannoy logo" /></a>

                <button className='burger' onClick={() => setIsOpen(!isOpen)} aria-label='Menu'>☰</button>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#agenda" onClick={handleNavClick}>Conférences</a></li>
                    <li><a href="#formations" onClick={handleNavClick}>Formations</a></li>
                    <li><a href="#books" onClick={handleNavClick}>Livres</a></li>
                    <li>FR | ENG | NL</li>
                    <li><a href="#contact" onClick={handleNavClick}><Button label="Contact" variant="outline" /></a></li>
                </ul>
            </div>
        </nav>
    )
}