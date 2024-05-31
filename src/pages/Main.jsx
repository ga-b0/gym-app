import { useEffect, useState } from "react"
import { Navbar } from "../components/Navbar"
import { API } from "../utils/constants"
import '../styles/main.css'
import { Link } from "react-router-dom"

export function Main(){

    const [user, setUser] = useState('')    

    useEffect(() => {
        const name = localStorage.getItem('name');
        let firstName = name.split(" ");
        setUser(firstName[0])
    }, [])

    return(
        <>
            <Navbar user={user}></Navbar>
            <section className="section">
                <Link to="/rutinas">
                <div className="section__routines">
                    <a className="section__link">Rutinas</a>
                </div>
                </Link>
                <Link to="/historial">
                <div className="section__routines">
                    <a className="section__link">Historial</a>
                </div>
                </Link>
                <Link to="/puntos">
                <div className="section__routines">
                    <a className="section__link">Puntos</a>
                </div>
                </Link>
            </section>
        </>
    )
}