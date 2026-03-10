import "../style/livres.css";
import { useLang } from "../context/LanguageContext";

const books = [
    { key: 'book1', img: '/jbr-management/assets/img/gestion_administrative.jpg', alt: 'Gestion administrative', year: '2026 - Ed. Anthemis' },
    { key: 'book2', img: '/jbr-management/assets/img/gestion_technique.jpg', alt: 'Gestion technique', year: '2024 - Ed. Anthemis' },
    { key: 'book3', img: '/jbr-management/assets/img/gestion_financiere.png', alt: 'Gestion financière', year: '2019 - Ed. Anthemis' },
    { key: 'book4', img: '/jbr-management/assets/img/copropriete_difficulte.jpg', alt: 'Copropriétés en difficulté', year: '2018 - Ed. Anthemis' },
    { key: 'book5', img: '/jbr-management/assets/img/prevention.png', alt: 'Prévention conflits', year: 'Depuis 2016 - Ed. Anthemis' },
    { key: 'book6', img: '/jbr-management/assets/img/forum_immobilier.png', alt: 'Forum immobilier', year: null },
];

export default function Livres() {
    const { t } = useLang();

    return (
        <section className="books-section" id="books">
            <h1>{t('books.title')}</h1>
            <div className="books-grid">
                {books.map(({ key, img, alt, year }) => (
                    <div className="book-card" key={key}>
                        <div className="book-image">
                            <img src={img} alt={alt} />
                        </div>
                        <div className="book-info">
                            <h3>{t(`books.${key}.title`)}</h3>
                            <p>{year ?? t(`books.${key}.role`)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}