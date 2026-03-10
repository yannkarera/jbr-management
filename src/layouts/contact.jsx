import "../style/contact.css";
import Button from "../components/button.jsx";
import { useLang } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLang();

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <div className="image-wrapper">
            <img src="/jbr-management/assets/img/profile.png" alt="Jean Pierre Lannoy" />
          </div>
          <div className="bio-box">
            <p>{t('contact.bio1')}</p>
            <p className="highlight">{t('contact.bio2')}</p>
            <p>{t('contact.bio3')}</p>
            <p>{t('contact.bio4')}</p>
          </div>
        </div>
        <div className="contact-right">
          <h2>{t('contact.title')}</h2>
          <form className="contact-form">
            <input type="text" placeholder={t('contact.name')} required />
            <input type="email" placeholder={t('contact.email')} required />
            <textarea placeholder={t('contact.message')} rows="4" required></textarea>
            <Button label={t('contact.send')} variant="primary" />
          </form>
        </div>
      </div>
    </section>
  );
}