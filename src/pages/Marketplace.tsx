import React from 'react'
import Header from '../components/Header'

function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${className}`}>{children}</span>
}

export default function Marketplace() {
  const items = [
    {
      type: 'Vaga', title: 'Customer Success Jr - Startup Social', org: 'ImpacTech', ods: [8, 10], develop: ['Empatia', 'Comunicação'], format: 'Remoto', duration: '3 meses'
    },
    {
      type: 'Projeto', title: 'Redesenhar jornada de atendimento - ONG', org: 'Instituto Futuro', ods: [4, 10], develop: ['UX Design', 'Pesquisa'], format: 'Remoto', duration: '3 meses'
    },
    {
      type: 'Freelance', title: 'Pesquisa de satisfação - Cooperativa', org: 'Coopera+', ods: [8], develop: ['Análise de Dados'], format: 'Remoto', duration: '3 meses'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      <main className="p-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 rounded-2xl shadow mb-6">
          <h1 className="text-2xl font-bold">🌍 Marketplace de Impacto</h1>
          <p className="text-sm mt-1">Oportunidades que desenvolvem suas habilidades e transformam o mundo</p>
        </div>
        <div className="mb-6 flex flex-wrap gap-2">
          <button className="px-3 py-1 rounded-full bg-gray-100">🎯 Todas</button>
          <button className="px-3 py-1 rounded-full bg-purple-100 text-purple-800">💼 Vagas</button>
          <button className="px-3 py-1 rounded-full bg-purple-100 text-purple-800">🚀 Projetos</button>
          <button className="px-3 py-1 rounded-full bg-green-100 text-green-800">❤️ Voluntariado</button>
          <button className="px-3 py-1 rounded-full bg-green-50 text-green-700">🌱 Economia Verde</button>
        </div>

        <section className="grid gap-6">
          {items.map((it) => (
            <article key={it.title} className="bg-white rounded-2xl shadow-lg p-4 border-l-4 border-green-400">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-purple-100 text-purple-700">{it.type}</Badge>
                    <div className="text-lg font-semibold">{it.title}</div>
                  </div>
                  <div className="text-sm text-gray-500">{it.org}</div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex gap-1">
                    {it.ods.map(o => <Badge key={o} className="bg-blue-100 text-blue-800">{o}</Badge>)}
                  </div>
                  <div className="text-sm text-gray-600">{it.format} • {it.duration}</div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-4 text-sm text-gray-700">
                <div>
                  <div className="font-medium">Desenvolve</div>
                  <div className="text-gray-500">{it.develop.join(', ')}</div>
                </div>
                <div>
                  <div className="font-medium">Formato</div>
                  <div className="text-gray-500">{it.format}</div>
                </div>
                <div>
                  <div className="font-medium">Duração</div>
                  <div className="text-gray-500">{it.duration}</div>
                </div>
              </div>

              <div className="mt-4 text-right">
                <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">Candidatar-se →</button>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-8 text-center">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white">Ver meu painel de impacto</button>
        </div>
      </main>
    </div>
  )
}
