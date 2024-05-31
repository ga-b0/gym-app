import '../styles/historial.css';
import { Link } from 'react-router-dom';

export function Historial() {
    return (
        <div className="historial-container">
            <div className="entreno">
                <div className="entreno-item"><strong>FECHA:</strong> 2024-05-01</div>
                <div className="entreno-item"><strong>ENTRENAMIENTO:</strong> Fuerza superior</div>
                <div className="entreno-item"><strong>DURACIÓN:</strong> 45 minutos</div>
                <div className="entreno-item"><strong>NOTAS:</strong> Buen rendimiento, enfocado en pecho y tríceps</div>
            </div>
            <div className="entreno">
                <div className="entreno-item"><strong>FECHA:</strong> 2024-05-02</div>
                <div className="entreno-item"><strong>ENTRENAMIENTO:</strong> Cardio</div>
                <div className="entreno-item"><strong>DURACIÓN:</strong> 30 minutos</div>
                <div className="entreno-item"><strong>NOTAS:</strong> Carrera continua a ritmo moderado</div>
            </div>
            <div className="entreno">
                <div className="entreno-item"><strong>FECHA:</strong> 2024-05-03</div>
                <div className="entreno-item"><strong>ENTRENAMIENTO:</strong> Fuerza inferior</div>
                <div className="entreno-item"><strong>DURACIÓN:</strong> 50 minutos</div>
                <div className="entreno-item"><strong>NOTAS:</strong> Sentadillas y peso muerto</div>
            </div>
            <div className="entreno">
                <div className="entreno-item"><strong>FECHA:</strong> 2024-05-04</div>
                <div className="entreno-item"><strong>ENTRENAMIENTO:</strong> Yoga</div>
                <div className="entreno-item"><strong>DURACIÓN:</strong> 40 minutos</div>
                <div className="entreno-item"><strong>NOTAS:</strong> Sesión de estiramientos y relajación</div>
            </div>
            <Link to="/main">
            <div className="hitorial__button">
                <a className="historial__button">Menú</a>
            </div>
            </Link>
        </div>
    )
}
