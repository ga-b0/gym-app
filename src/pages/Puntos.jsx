import '../styles/puntos.css';
import achievementIcon from '../assets/achievement.svg'; 
import { Link } from 'react-router-dom';

export function Puntos() {
    return (
        <div className="puntos-container">
            <div className="logro">
                <img src={achievementIcon} alt="Logro" className="logro-icon"/>
                <div className="logro-details">
                    <div className="logro-item"><strong>LOGRO:</strong> Primer entrenamiento completado</div>
                    <div className="logro-item"><strong>PUNTOS:</strong> 10</div>
                    <div className="logro-item"><strong>DESCRIPCIÓN:</strong> Has completado tu primer entrenamiento. ¡Sigue así!</div>
                </div>
            </div>
            <div className="logro">
                <img src={achievementIcon} alt="Logro" className="logro-icon"/>
                <div className="logro-details">
                    <div className="logro-item"><strong>LOGRO:</strong> Cinco días seguidos</div>
                    <div className="logro-item"><strong>PUNTOS:</strong> 50</div>
                    <div className="logro-item"><strong>DESCRIPCIÓN:</strong> Has entrenado durante cinco días consecutivos.</div>
                </div>
            </div>
            <div className="logro">
                <img src={achievementIcon} alt="Logro" className="logro-icon"/>
                <div className="logro-details">
                    <div className="logro-item"><strong>LOGRO:</strong> Meta mensual alcanzada</div>
                    <div className="logro-item"><strong>PUNTOS:</strong> 100</div>
                    <div className="logro-item"><strong>DESCRIPCIÓN:</strong> Alcanzaste tu meta de entrenamiento mensual. ¡Felicidades!</div>
                </div>
            </div>
            <Link to="/main">
            <div className="hitorial__button">
                <a className="historial__button">Menú</a>
            </div>
            </Link>
        </div>
    );
}
