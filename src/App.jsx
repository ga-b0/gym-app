import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Landing, Home, Dashboard, Analytics, Admin, Logueado } from './pages/Index'
import { ProtectedRoute } from './components/ProtectedRoute'
import { useState, useEffect } from 'react'
import { Rutinas } from './pages/Rutinas'
import { Historial } from './pages/Historial'
import { Puntos } from './pages/Puntos'
import './App.css'

function App() {

  const [user, setUser] = useState(null)

  const login = () => {
    setUser({
      id: 1, 
      name: "John",
      permission: [],
      roles: []
    })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />}></Route>
        <Route path='/login' element={<Landing></Landing>}></Route>
        <Route path='/main' element={<Logueado />}></Route>
        <Route path='/rutinas' element={<Rutinas />}></Route>
        <Route path='/historial' element={<Historial />}></Route>
        <Route path='/puntos' element={<Puntos />}></Route>
        <Route element={<ProtectedRoute isAllowed={!!user}/>}>
          <Route path="/home" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Route>
        <Route path='/analytics' element={
          <ProtectedRoute isAllowed={!!user && user.permission.includes('analize')} redirectTo='/home'>
            <Analytics></Analytics>
          </ProtectedRoute>
        }></Route>
        <Route path='/admin' element={
          <ProtectedRoute isAllowed={!!user && user.roles.includes('admin')} redirectTo='/home'>
            <Admin />
          </ProtectedRoute>
        }></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
