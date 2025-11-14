import React from 'react'
import { Link } from 'react-router-dom'

function Badge({ children, color = 'bg-gray-200 text-gray-800' }: { children: React.ReactNode; color?: string }) {
  return <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${color}`}>{children}</span>
}

function CareerCard({ title, time, cost, salary, happiness, ods, match }: { title: string; time: string; cost: string; salary: string; happiness: string; ods: string; match: number }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col h-full">
      <div className="flex items-start justify-between mb-3 gap-4 min-h-[64px]">
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge color="bg-purple-100 text-purple-800">Tempo: {time}</Badge>
            <Badge color="bg-blue-100 text-blue-800">Investimento: {cost}</Badge>
            <Badge color="bg-green-100 text-green-800">Salário: {salary}</Badge>
          </div>
        </div>
        <div className="text-right ml-4">
          <div className="text-sm text-gray-500">Match</div>
          <div className="text-2xl font-bold text-purple-600">{match}%</div>
        </div>
      </div>

      <div className="flex-1">
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z" stroke="currentColor" strokeWidth="0" fill="currentColor"/>
            </svg>
            <div>
              <div className="font-medium">Taxa de felicidade</div>
              <div className="text-gray-500">{happiness}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2v10l6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <div className="font-medium">Impacto ODS</div>
              <div className="text-gray-500">{ods}</div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div className="h-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500" style={{ width: `${match}%` }} />
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Link to="/dashboard" className="text-sm text-gray-600 hover:underline">Voltar</Link>
        <button className="px-3 py-1 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm">Quero essa trajetória</button>
      </div>
    </div>
  )
}

function Oportunidades() {
  const careers = [
    { title: 'Desenvolvedor Web Fullstack', time: '6-12 meses', cost: 'R$ 3k', salary: 'R$ 6k–10k', happiness: 'Alta', ods: 'ODS 8, 9', match: 84 },
    { title: 'Analista de Dados Jr.', time: '4-8 meses', cost: 'R$ 2k', salary: 'R$ 4k–7k', happiness: 'Média-Alta', ods: 'ODS 4, 8', match: 69 },
    { title: 'Especialista em Sustentabilidade', time: '12-24 meses', cost: 'R$ 4k', salary: 'R$ 7k–12k', happiness: 'Muito Alta', ods: 'ODS 11, 13', match: 76 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 text-center shadow-md">
        <h1 className="text-2xl font-bold">Explorador de Futuros Possíveis</h1>
        <p className="text-sm mt-1">Três trajetórias sugeridas com indicadores para você comparar.</p>
      </header>

      <main className="p-8 max-w-6xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {careers.map((c) => (
            <div key={c.title} className="h-full">
              <CareerCard title={c.title} time={c.time} cost={c.cost} salary={c.salary} happiness={c.happiness} ods={c.ods} match={c.match} />
            </div>
          ))}
        </section>

        <section className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Como interpretar o Match</h3>
          <p className="text-sm text-gray-600">O Match combina suas competências e preferências com os requisitos da trajetória. Use como ponto de partida, não decisão final.</p>
        </section>
      </main>
    </div>
  )
}

export default Oportunidades
