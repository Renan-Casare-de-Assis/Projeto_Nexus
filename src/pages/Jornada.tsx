import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function Jornada() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      <main className="p-8 max-w-6xl mx-auto grid gap-6">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 rounded-2xl shadow">
          <h1 className="text-2xl font-bold">🎮 Sua Jornada de Transformação</h1>
          <p className="text-sm mt-1">Rumo a Especialista em Customer Experience</p>
        </div>
        <section className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">Nível 7 • 3.450 XP • 35% concluído</div>
              <div className="text-2xl font-bold mt-1">Progressão</div>
            </div>
            <div className="text-right">
              <div className="text-sm">35%</div>
            </div>
          </div>

          <div className="mt-4 h-4 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-4 bg-gradient-to-r from-purple-600 to-blue-500" style={{ width: '35%' }} />
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold mb-3">🏆 Conquistas Desbloqueadas</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-3"><span className="inline-block bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full">🏆</span> Primeira Mentoria</li>
              <li className="flex items-center gap-3"><span className="inline-block bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full">🏆</span> Projeto Real Concluído</li>
              <li className="flex items-center gap-3"><span className="inline-block bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full">🏆</span> Certificação Básica</li>
            </ul>
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">🎯 Missões desta Semana</h3>
              <div className="text-sm text-gray-500">XP estimado: 125</div>
            </div>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-between bg-gray-50 rounded p-3">
                <div className="flex items-center gap-3">
                  <input type="checkbox" checked readOnly className="w-4 h-4" />
                  <div>
                    <div className="font-medium">Fundamentos de UX</div>
                    <div className="text-xs text-gray-500">25 min • 15 XP</div>
                  </div>
                </div>
                <div className="text-green-600 font-semibold">Concluída</div>
              </li>

              <li className="flex items-center justify-between bg-gray-50 rounded p-3">
                <div className="flex items-center gap-3">
                  <input type="checkbox" checked readOnly className="w-4 h-4" />
                  <div>
                    <div className="font-medium">Mapear jornada</div>
                    <div className="text-xs text-gray-500">45 min • 30 XP</div>
                  </div>
                </div>
                <div className="text-green-600 font-semibold">Concluída</div>
              </li>

              <li className="flex items-center justify-between bg-white rounded p-3 border border-gray-100">
                <div className="flex items-center gap-3">
                  <input type="checkbox" readOnly className="w-4 h-4" />
                  <div>
                    <div className="font-medium">Quiz Métricas</div>
                    <div className="text-xs text-gray-500">15 min • 10 XP</div>
                  </div>
                </div>
                <div className="text-gray-400">Pendente</div>
              </li>

              <li className="flex items-center justify-between bg-white rounded p-3 border border-gray-100">
                <div className="flex items-center gap-3">
                  <input type="checkbox" readOnly className="w-4 h-4" />
                  <div>
                    <div className="font-medium">Webinar Cases</div>
                    <div className="text-xs text-gray-500">60 min • 40 XP</div>
                  </div>
                </div>
                <div className="text-gray-400">Pendente</div>
              </li>
            </ul>

            <div className="mt-4 text-right">
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">Iniciar Missão</button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-2xl p-6">
            <h4 className="font-semibold mb-3">👥 Sua Comunidade</h4>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-blue-400 rounded-full" />
                <div className="w-8 h-8 bg-blue-300 rounded-full" />
                <div className="w-8 h-8 bg-blue-500 rounded-full" />
                <div className="w-8 h-8 bg-blue-200 rounded-full" />
              </div>
              <div className="text-sm text-gray-700">23 pessoas em transição semelhante • +18</div>
            </div>
            <div className="mt-4">
              <button className="px-3 py-2 rounded-md bg-white text-blue-700 border border-blue-100">Participar da discussão</button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h4 className="font-semibold mb-3">💬 Próxima Mentoria</h4>
            <div className="text-sm text-gray-700">📅 15 de novembro, 19h</div>
            <div className="mt-2">
              <div className="font-medium">Ana Paula Silva</div>
              <div className="text-xs text-gray-500">CX Manager • 12 anos</div>
            </div>
            <div className="mt-4">
              <Link to="/oportunidades" className="text-sm text-blue-600 hover:underline">Ver oportunidades práticas</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
