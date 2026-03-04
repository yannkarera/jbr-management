import "../style/contact.css";
import Button from "../components/button.jsx";

export default function Contact() {
  return (
    <>
      <section className="contact-section">
        <h1 className="section-title">Me contacter</h1>

        <div className="contact-container">

          <div className="contact-left">

            <div className="image-wrapper">
              <img src="image.jpg" alt="Intervenant" />
            </div>

            <div className="bio-box">
              <p>
                Plus de quatre décennies à naviguer dans la copropriété,
                de la Belgique au Québec, m'ont appris une chose :
              </p>

              <p className="highlight">
                mon expertise n'est jamais aussi utile que lorsqu'elle est partagée.
              </p>

              <p>
                Ancien président du CEFIM...
              </p>

              <p>
                Mettons mon expérience au service de vos projets.
              </p>
            </div>
          </div>

          <div className="contact-right">
            <h2>PRENDRE CONTACT</h2>

            <form className="contact-form">
              <input type="text" placeholder="Votre nom" required />
              <input type="text" placeholder="Raison du contact" required />
              <input type="email" placeholder="Votre email" required />
              <textarea placeholder="Message" rows="4" required></textarea>

              <Button label="Envoyer" variant="primary" />
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
