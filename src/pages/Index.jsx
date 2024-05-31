import { Navigate } from "react-router-dom"
import { Login } from "./Login"
import { Main } from "./Main"

export const Landing = () => {
    return <Login />
}

export const Home = () => {
    return(
        <h2>Home Page (Private)</h2>
    )
}

export const Logueado = () => {
    return <Main />
}

export const Dashboard = () => {
    return(
        <h2>Dashboard Page (Private)</h2>
    )
}

export const Analytics = () => {
    return(
        <h2>Analytics Page (Private, Permisos: "analize") </h2>
    )
}

export const Admin = () => {
    return(
        <h2>Admin Page (Private, Permisos: "admin") </h2>
    )
}