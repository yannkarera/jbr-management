import "../style/contact.css";
import Button from "../components/button.jsx";
import { useLang } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLang();

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
       
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