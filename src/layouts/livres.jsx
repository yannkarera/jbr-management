import "../style/livres.css";

export default function Livres () {
    return (
        <>
        <section className="books-section" id="books">

    <div className="books-grid">

        <div className="book-card">
            <div className="book-image">
                <img src="../assets/img/livre 2.jfif" alt="Gestion administrative" />
            </div>
            <div className="book-info">
                <h3>La gestion administrative d’une copropriété</h3>
                <p>2026 - Ed. Anthemis</p>
            </div>
        </div>

        <div className="book-card">
            <div className="book-image">
                <img src="../assets/img/livre3.jfif" alt="Gestion technique" />
            </div>
            <div className="book-info">
                <h3>La gestion technique d’une copropriété</h3>
                <p>2024 - Ed. Anthemis</p>
            </div>
        </div>

        <div className="book-card">
            <div className="book-image">
                <img src="../assets/img/livre1.jfif" alt="Gestion financière" />
            </div>
            <div className="book-info">
                <h3>La gestion financière d’une copropriété</h3>
                <p>2019 - Ed. Anthemis</p>
            </div>
        </div>

        <div className="book-card">
            <div className="book-image">
                <img src="../assets/img/livre1.jfif" alt="Copropriétés en difficulté" />
            </div>
            <div className="book-info">
                <h3>Les copropriétés en difficulté : Constats et solutions</h3>
                <p>2018 - Ed. Anthemis</p>
            </div>
        </div>

        <div className="book-card">
            <div className="book-image">
                <img src="../assets/img/livre1.jfif" alt="Prévention conflits" />
            </div>
            <div className="book-info">
                <h3>De la prévention à la résolution des conflits en copropriété</h3>
                <p>Depuis 2016 - Ed. Anthemis</p>
            </div>
        </div>

        <div className="book-card">
            <div className="book-image">
                <img src="../assets/img/livre1.jfif" alt="Forum immobilier" />
            </div>
            <div className="book-info">
                <h3>Forum de l’Immobilier</h3>
                <p>Membre du Comité de Rédaction</p>
            </div>
        </div>

    </div>

</section>
</>
    );
}