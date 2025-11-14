import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="text-2xl font-bold">NEXUS</div>
          <div className="text-sm text-white/90">Transformação e impacto</div>
        </Link>

        <nav className="hidden md:flex items-center gap-3 text-sm">
          <Link to="/" className="px-3 py-1 rounded hover:bg-white/10">Home</Link>
          <Link to="/dashboard" className="px-3 py-1 rounded hover:bg-white/10">Dashboard</Link>
          <Link to="/jornada" className="px-3 py-1 rounded hover:bg-white/10">Jornada</Link>
          <Link to="/marketplace" className="px-3 py-1 rounded hover:bg-white/10">Marketplace</Link>
          <Link to="/oportunidades" className="px-3 py-1 rounded hover:bg-white/10">Oportunidades</Link>
          <Link to="/impacto" className="px-3 py-1 rounded hover:bg-white/10">Impacto</Link>
        </nav>

        <div className="md:hidden">
          <Link to="/dashboard" className="px-3 py-1 rounded bg-white/10 text-sm">Ir</Link>
        </div>
      </div>
    </header>
  )
}
