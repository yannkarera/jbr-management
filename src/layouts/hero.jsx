import "../style/hero.css";
import { usestate } from 'react';
import { useLang } from "../context/LanguageContext";

export default function Hero() {
    const { t } = useLang();

    return (
        <section className="hero">
            <div className="hero-content">
                <div className="tagline">{t('hero.tagline')}</div>
                <h1>{t('hero.title')}<br />&amp; <span className="accent">{t('hero.titleAccent')}</span></h1>
                <p className="subtitle">{t('hero.subtitle')}</p>
            </div>
        </section>
    );
}