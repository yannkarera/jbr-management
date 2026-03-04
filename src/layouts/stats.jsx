import "../style/stats.css";

export default function Stats () {
    return (
        <>
          <section className="stats-section">
                <div className="stats-container">
                    <div className="stat-item">
                        <div className="stat-number">+16 000</div>
                        <div className="stat-label">Assemblées sur la gestion copropriétés</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">6</div>
                        <div className="stat-label">Livres</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">+16 000h</div>
                        <div className="stat-label">De formation</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">+40</div>
                        <div className="stat-label">Conférences internationales</div>
                    </div>
                </div>
            </section>
        </>
    )
}