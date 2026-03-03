import { useState } from 'react';
import "../style/navbar.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">JBR Management</a>

                <button className='burger' onClick={() => setIsOpen(!isOpen)} aria-label='Menu'>☰</button>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#">Conférences</a></li>
                    <li><a href="#">Formations</a></li>
                    <li><a href="#">Livres</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}