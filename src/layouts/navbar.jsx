import { useLang } from '../context/LanguageContext';
import { useState } from 'react';
import "../style/navbar.css";
import Button from '../components/button';

const languages = ['FR', 'EN', 'NL'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLang, setCurrentLang, t } = useLang();
  const handleNavClick = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src="/jbr-management/assets/img/logo.png" alt="De Lannoy logo" />
        </a>
        <button className='burger' onClick={() => setIsOpen(!isOpen)} aria-label='Menu'>☰</button>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#agenda" onClick={handleNavClick}>{t('nav.conferences')}</a></li>
          <li><a href="#formations" onClick={handleNavClick}>{t('nav.formations')}</a></li>
          <li><a href="#books" onClick={handleNavClick}>{t('nav.books')}</a></li>
          <li className="lang-switcher">
            {languages.map((lang, index) => (
              <span key={lang}>
                <button
                  className={`lang-btn ${currentLang === lang ? 'active' : ''}`}
                  onClick={() => setCurrentLang(lang)}
                >
                  {lang}
                </button>
                {index < languages.length - 1 && <span className="lang-separator"> | </span>}
              </span>
            ))}
          </li>
          <li>
            <a href="#contact" onClick={handleNavClick}>
              <Button label={t('nav.contact')} variant="outline" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}