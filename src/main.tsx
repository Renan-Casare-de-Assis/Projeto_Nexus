import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Oportunidades from './pages/Oportunidades'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/oportunidades" element={<Oportunidades />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)