import "../style/hero.css";
import Button from "../components/button.jsx";

export default function Hero() {
    return (
            <section className="hero">
                <div className="hero-content">
                    <div className="tagline">EXPERT EN COPROPRIÉTÉ DEPUIS PLUS DE 40 ANS</div>
                    <h1>Gestion de Copropriétés<br />& <span className="accent">Formation Spécialisée</span></h1>
                    <p className="subtitle">
                        JBR Management accompagne copropriétaires et syndics en Belgique, en France et au Québec.
                        Conseil, gestion et formation pour une copropriété maîtrisée.
                    </p>

                </div>
            </section>

          
    );
}