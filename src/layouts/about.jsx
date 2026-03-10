import "../style/about.css"
import { useLang } from "../context/LanguageContext";

export default function About() {
    const { t } = useLang();

    return (
        <section className="about-section" id="aboutme">
         <div className="about-me">
          <div className="image-wrapper">
            <img src="/jbr-management/assets/img/jpl.png" alt="Jean Pierre Lannoy" />
          </div>
          <div className="bio-box">
            <p>{t('about.bio1')}</p>
            <p className="highlight">{t('about.bio2')}</p>
            <p>{t('about.bio3')}</p>
            <p>{t('about.bio4')}</p>
          </div>
        </div>
        </section>
    )

}