import "../style/formations.css";
import Button from "../components/button.jsx";

export default function Formations () {
    return (
        <>
        <section className="formations" id="formations">

    <div className="header">
        <div className="icon">🎓</div>
        <h2>Mes formations</h2>
        <h1>Copro Academy</h1>
    </div>

    <div class="cards">

        <div className="card">
            <h3>Formations certifiées par l’IDI</h3>
            <p>
                Formations reconnues et certifiées IDI, garantissant un apprentissage
                de qualité conforme aux standards sectoriels. Programmes conçus pour
                une montée en compétence progressive et durable.
            </p>
            <Button label="Découvrir" variant="primary" />
        </div>

        <div className="card">
            <h3>Formations en ligne via LMS</h3>
            <p>
                Bénéficiez de formations modulaires, accessibles à tout moment,
                24h/24 et 7j/7. Apprenez à votre rythme grâce aux cours en ligne
                adaptés aux disponibilités.
            </p>
            <Button label="Découvrir" variant="primary" />
        </div>

        <div className="card">
            <h3>Formations sur mesure</h3>
            <p>
                Nous adaptons chaque formation aux besoins réels de nos clients.
                Après analyse de leur problématique, nous concevons un parcours
                personnalisé mêlant théorie, pratique et accompagnement ciblé.
            </p>
            <Button label="Découvrir" variant="primary" />
        </div>

    </div>

   

</section>

        </>
    )
}