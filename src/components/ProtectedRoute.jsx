import { Navigate, Outlet } from "react-router-dom"

export function ProtectedRoute({children, redirectTo = "/login", isAllowed}){

    if(!isAllowed){
        return <Navigate to={redirectTo}/>
    }

    return children ? children : <Outlet/>
}