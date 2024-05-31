import '../styles/rutinas.css';
import { Link } from 'react-router-dom';
export function Rutinas() {
    return (
        <div className="rutinas-container">
            <div className="rutina">
                <div className="rutina-item"><strong>EJERCICIO:</strong> FLEXIONES O PUSH-UPS</div>
                <div className="rutina-item"><strong>SERIES:</strong> 3</div>
                <div className="rutina-item"><strong>REPETICIONES:</strong> 12</div>
                <div className="rutina-item"><strong>OBSERVACIONES:</strong> Si resulta muy difícil, puedes apoyar las rodillas en el suelo para ejecutar el ejercicio</div>
            </div>
            <div className="rutina">
                <div className="rutina-item"><strong>EJERCICIO:</strong> SENTADILLAS O SQUATS</div>
                <div className="rutina-item"><strong>SERIES:</strong> 3</div>
                <div className="rutina-item"><strong>REPETICIONES:</strong> 10</div>
                <div className="rutina-item"><strong>OBSERVACIONES:</strong> Pies a la anchura de las caderas. Iniciamos el movimiento conduciendo la cadera hacia atrás y hacia abajo</div>
            </div>
            <div className="rutina">
                <div className="rutina-item"><strong>EJERCICIO:</strong> FONDOS DE TRÍCEPS O DIPS</div>
                <div className="rutina-item"><strong>SERIES:</strong> 3</div>
                <div className="rutina-item"><strong>REPETICIONES:</strong> 12</div>
                <div className="rutina-item"><strong>OBSERVACIONES:</strong> Lo ideal es usar un par de sillas o incluso un par de mesas si disponemos de dos iguales</div>
            </div>
            <div className="rutina">
                <div className="rutina-item"><strong>EJERCICIO:</strong> ZANCADAS O LUNGES</div>
                <div className="rutina-item"><strong>SERIES:</strong> 2</div>
                <div className="rutina-item"><strong>REPETICIONES:</strong> 14</div>
                <div className="rutina-item"><strong>OBSERVACIONES:</strong> Para una activación más completa, procura realizar las zancadas hacia atrás</div>
            </div>
            <div className="rutina">
                <div className="rutina-item"><strong>EJERCICIO:</strong> ELEVACIONES LATERALES</div>
                <div className="rutina-item"><strong>SERIES:</strong> 3</div>
                <div className="rutina-item"><strong>REPETICIONES:</strong> 15</div>
                <div className="rutina-item"><strong>OBSERVACIONES:</strong> Con peso en ambas manos. Pueden ser botellas de agua, mancuernas, bolsas de arena o incluso paquetes de harina</div>
            </div>
            <Link to="/main">
            <div className="hitorial__button">
                <a className="historial__button">Menú</a>
            </div>
            </Link>
        </div>
    )
}
