import "../style/agenda.css";
import Button from "../components/button.jsx";

export default function Agenda () {
    return (
        <>
        <section className="agenda-section" id="agenda">
    <div className="agenda-left">
        <h2>AGENDA 2026</h2>

        <div className="agenda-date">4 OCT Montreal - <span className="material-symbols-outlined">
</span>OACIQ | 
            Salon de la copropriété et l'Habitat
        </div>
        <div className="agenda-date">5 NOV - Paris Expo | 
            Salon de la copropriété et de l'Habitat
        </div>
        <div className="agenda-date">19 NOV - Bruxelles Expo | 
            Salon de la copropriété et de l'Habitat
        </div>

        <Button label="Nous contacter" variant="primary" />
    </div>

    <div className="agenda-right">
        <h2>CONFÉRENCES</h2>

        <div className="map-placeholder"><img src="../assets/img/conferences.png"/></div>
          
    </div>
    </section>
        </>
    );
}        