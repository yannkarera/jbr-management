import "../style/formations.css";
import Button from "../components/button.jsx";
import { useLang } from "../context/LanguageContext";
import { useState } from "react";

export default function Formations() {
    const { t } = useLang();

    return (
        <section className="formations" id="formations">
            <div className="header">
                <div className="icon">🎓</div>
                <h2>{t('formations.subtitle')}</h2>
                <h1>{t('formations.title')}</h1>
            </div>
            <div className="cards">
                <div className="card">
                    <h3>{t('formations.card1.title')}</h3>
                    <p>{t('formations.card1.desc')}</p>
                    <Button label={t('formations.cta')} variant="primary" />
                </div>
                <div className="card">
                    <h3>{t('formations.card2.title')}</h3>
                    <p>{t('formations.card2.desc')}</p>
                    <Button label={t('formations.cta')} variant="primary" />
                </div>
                <div className="card">
                    <h3>{t('formations.card3.title')}</h3>
                    <p>{t('formations.card3.desc')}</p>
                    <Button label={t('formations.cta')} variant="primary" />
                </div>
            </div>
        </section>
    );
}