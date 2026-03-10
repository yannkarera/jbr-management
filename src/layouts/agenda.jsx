import { useState } from 'react';
import "../style/agenda.css";
import Button from "../components/button.jsx";
import { useLang } from "../context/LanguageContext";

export default function Agenda() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLang();
    const handleNavClick = () => setIsOpen(false);

    return (
        <section className="agenda-section" id="agenda">
            <div className="agenda-left">
                <h2>{t('agenda.title')}</h2>
                <div className="agenda-date">4 OCT - <span className="material-symbols-outlined">location_on</span>Montreal | {t('agenda.event1')}</div>
                <div className="agenda-date">5 NOV - <span className="material-symbols-outlined">location_on</span>Paris Expo | {t('agenda.event2')}</div>
                <div className="agenda-date">19 NOV - <span className="material-symbols-outlined">location_on</span>Bruxelles Expo | {t('agenda.event3')}</div>
                <a href="#contact" onClick={handleNavClick}>
                    <Button label={t('agenda.cta')} variant="primary" />
                </a>
            </div>
            <div className="agenda-right">
                <h2>{t('agenda.conferences')}</h2>
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
    );
}