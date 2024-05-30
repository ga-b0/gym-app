import { useEffect, useState } from "react";
import { API } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import '../styles/login.css';

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dataAPI, setDataAPI] = useState([])
    const [logueado, setLogueado] = useState(false)
    const [message, setMessage] = useState(null)
    const navigate = useNavigate();
    
    
    useEffect(() => {
        fetch(API)
        .then(res => res.json())
        .then(data => setDataAPI(data))
        .catch(error => console.error(error));    
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        let found = false;
        dataAPI.forEach(element => {
            if(email === element.email && password === element.password){
                setMessage("Inicio de sesión exitoso")
                setLogueado(true)
                found = true;
            }
        });
        if (!found) {
            setMessage("Email o contraseña incorrectos")
        }
    };


    if(logueado){
        setTimeout(() => {
            navigate('/logueado');
        }, 2000);
    }

    return (
        <section className="login">
            {
                message && logueado === true && (
                    <div className="login__modal login__modal--success">
                        <p>{message}</p>
                    </div>
                )
            }

            {
                message && logueado === false && (
                    <div className="login__modal login__modal--fail">
                        <p>{message}</p>
                    </div>
                )
            }
            <h2 className="login__title">Inicio de Sesión</h2>
            <form className="login__form" onSubmit={handleSubmit}>
                <label className="login__label" htmlFor="email">
                    Email:
                </label>
                <input 
                    id="email" 
                    type="email" 
                    className="login__input" 
                    placeholder="Ingresa tu correo" 
                    required 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <label className="login__label" htmlFor="password">
                    Contraseña:
                </label>
                <input 
                    id="password" 
                    type="password" 
                    className="login__input" 
                    required 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button className="login__button" type="submit">Iniciar Sesión</button>
            </form>
        </section>
    );
}
