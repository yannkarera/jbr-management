import "../style/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
    <div className="logo-container">
        <i className="fas fa-graduation-cap"></i>
        <h1>Copro Academy</h1>
    </div>
-
    <nav className="footer_navbar">
        <ul>
            <li><a href="#">Politique de cookies</a></li>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Termes et conditions</a></li>
        </ul>
    </nav>
</footer>

    )
}