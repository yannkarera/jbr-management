import "../style/agenda.css";
import Button from "../components/button.jsx";

export default function Agenda () {
    return (
        <>
        <section className="agenda-section">
    <div className="agenda-left">
        <h2>AGENDA 2026</h2>

        <div className="agenda-date">date (p) colloques france</div>
        <div className="agenda-date">date (p) colloques Québec</div>
        <div className="agenda-date">date (p) colloques maroc</div>

        <Button label="Nous contacter" variant="primary" />
    </div>

    <div className="agenda-right">
        <h2>CONFÉRENCES</h2>

        <div className="map-placeholder"></div>
          
    </div>
    </section>
        </>
    );
}        