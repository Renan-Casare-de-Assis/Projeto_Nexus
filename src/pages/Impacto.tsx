import React from 'react'
import { Link } from 'react-router-dom'

export default function Impacto() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 shadow-md text-center">
        <h1 className="text-2xl font-bold">✨ Seu Legado de Impacto</h1>
        <p className="text-sm mt-1">Sua jornada individual está gerando transformação coletiva</p>
      </header>

      <main className="p-8 max-w-6xl mx-auto grid gap-6">
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="text-3xl">👥</div>
            <div className="font-bold text-xl">15</div>
            <div className="text-sm text-gray-500">Pessoas Mentoradas</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="text-3xl">💬</div>
            <div className="font-bold text-xl">48h</div>
            <div className="text-sm text-gray-500">Conhecimento Compart.</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="text-3xl">🏆</div>
            <div className="font-bold text-xl">7</div>
            <div className="text-sm text-gray-500">Projetos Sociais</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-md">
            <div className="text-3xl">🍃</div>
            <div className="font-bold text-xl">12kg</div>
            <div className="text-sm text-gray-500">CO2 Evitado</div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="font-semibold mb-3">🔗 Rede de Influência</h3>
            <div className="text-sm text-gray-700">Você no centro • Conexões diretas: 5 • Total: 52</div>
            <div className="mt-4 h-48 bg-gray-50 rounded flex items-center justify-center text-gray-300">[Visualização de Rede]</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="font-semibold mb-3">📊 Evolução do Impacto</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm"><div>Janeiro</div><div className="w-2/3 bg-gray-100 rounded h-3 relative"><div className="absolute left-0 top-0 h-3 bg-gradient-to-r from-purple-500 to-blue-400 rounded" style={{ width: '20%' }} /></div><div className="ml-2">20pts</div></div>
              <div className="flex items-center justify-between text-sm"><div>Fevereiro</div><div className="w-2/3 bg-gray-100 rounded h-3 relative"><div className="absolute left-0 top-0 h-3 bg-gradient-to-r from-purple-500 to-blue-400 rounded" style={{ width: '45%' }} /></div><div className="ml-2">45</div></div>
              <div className="flex items-center justify-between text-sm"><div>Março</div><div className="w-2/3 bg-gray-100 rounded h-3 relative"><div className="absolute left-0 top-0 h-3 bg-gradient-to-r from-purple-500 to-blue-400 rounded" style={{ width: '65%' }} /></div><div className="ml-2">65</div></div>
              <div className="flex items-center justify-between text-sm"><div>Abril</div><div className="w-2/3 bg-gray-100 rounded h-3 relative"><div className="absolute left-0 top-0 h-3 bg-gradient-to-r from-purple-500 to-blue-400 rounded" style={{ width: '85%' }} /></div><div className="ml-2">85pts</div></div>
            </div>
            <div className="mt-4 text-sm text-green-600 font-semibold">🎉 Você está no Top 10%</div>
          </div>
        </section>

        <section className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="font-semibold mb-3">💫 Conquistas Especiais de Impacto</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded p-4 text-center">🌟<div className="text-sm">Mentor Iniciante</div></div>
            <div className="bg-gray-50 rounded p-4 text-center">🚀<div className="text-sm">Agente Mudança</div></div>
            <div className="bg-gray-50 rounded p-4 text-center">💚<div className="text-sm">Eco Warrior</div></div>
            <div className="bg-gray-50 rounded p-4 text-center">🎯<div className="text-sm">Construtor de Pontes</div></div>
          </div>
        </section>

        <footer className="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-2xl p-6 text-center">
          <p className="mb-4">"O futuro do trabalho não é sobre tecnologia. É sobre pessoas."</p>
          <Link to="/" className="inline-block px-4 py-2 bg-white text-purple-700 rounded-full">Voltar ao Início</Link>
        </footer>
      </main>
    </div>
  )
}
