import "../style/stats.css";
import { createContext, useState } from "react";
import { useLang } from "../context/LanguageContext";

export default function Stats() {
    const { t } = useLang();

    return (
        <section className="stats-section">
            <div className="stats-container">
                <div className="stat-item">
                    <div className="stat-number">+16 000</div>
                    <div className="stat-label">{t('stats.assemblies')}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">6</div>
                    <div className="stat-label">{t('stats.books')}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">+16 000h</div>
                    <div className="stat-label">{t('stats.training')}</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">+40</div>
                    <div className="stat-label">{t('stats.conferences')}</div>
                </div>
            </div>
        </section>
    );
}