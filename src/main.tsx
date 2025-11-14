import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Oportunidades from './pages/Oportunidades'
import Jornada from './pages/Jornada'
import Marketplace from './pages/Marketplace'
import Impacto from './pages/Impacto'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/oportunidades" element={<Oportunidades />} />
        <Route path="/jornada" element={<Jornada />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/impacto" element={<Impacto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)