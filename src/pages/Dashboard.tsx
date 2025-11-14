import React from 'react'
import { Link } from 'react-router-dom'

function RadarChart({ items, size = 300 }: { items: { name: string; value: number }[]; size?: number }) {
  const n = items.length
  const cx = size / 2
  const cy = size / 2
  const radius = size / 2 - 40

  const angle = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2

  const point = (i: number, v: number) => {
    const a = angle(i)
    const r = (v / 100) * radius
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
  }

  const gridPolygons = [20, 40, 60, 80, 100].map((level) => {
    const pts = items.map((_, i) => point(i, level)).join(' ')
    return <polygon key={level} points={pts} fill="none" stroke="#e5e7eb" strokeWidth={1} />
  })

  const labels = items.map((it, i) => {
    const a = angle(i)
    const lx = cx + (radius + 16) * Math.cos(a)
    const ly = cy + (radius + 16) * Math.sin(a)
    return (
      <text key={it.name} x={lx} y={ly} fontSize={12} textAnchor={lx > cx ? 'start' : lx < cx ? 'end' : 'middle'} fill="#374151">
        {it.name}
      </text>
    )
  })

  const valuePts = items.map((it, i) => point(i, it.value)).join(' ')

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <linearGradient id="fillGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="strokeGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <g>
        {gridPolygons}
        {items.map((_, i) => {
          const p1 = point(i, 100)
          const p2 = point(i, 0)
          return <line key={i} x1={cx} y1={cy} x2={p1.split(',')[0]} y2={p1.split(',')[1]} stroke="#e5e7eb" strokeWidth={1} />
        })}
        <polygon points={valuePts} fill="url(#fillGrad)" stroke="url(#strokeGrad)" strokeWidth={2} />
        {labels}
      </g>
    </svg>
  )
}

function Dashboard() {
  const cards = [
    { title: 'Índice Futuro-Pronto', value: '78%', hint: 'Você está acima da média!', color: 'text-purple-600' },
    { title: 'Superpoderes', value: '12', hint: 'Habilidades únicas identificadas', color: 'text-blue-600' },
    { title: 'Oportunidades', value: '5', hint: 'Carreiras promissoras para você', color: 'text-green-600' },
  ]

  const skills = [
    { name: 'Comunicação', value: 78 },
    { name: 'Resolução', value: 65 },
    { name: 'Empatia', value: 72 },
    { name: 'Adaptação', value: 88 },
  ]

  const alerts = [
    { title: 'Vagas em Tech crescendo', change: '+14%', trend: 'up', note: 'Aumento em desenvolvimento web e dados' },
    { title: 'Procura por Empatia em RH', change: '+7%', trend: 'up', note: 'Divulgação de vagas com foco em soft skills' },
    { title: 'Demanda por Vendas técnicas', change: '-3%', trend: 'down', note: 'Leve queda na procura por vendedores técnicos' },
  ]

  const TrendIcon = ({ trend }: { trend: string }) => {
    if (trend === 'up')
      return (
        <svg className="w-5 h-5 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path fillRule="evenodd" d="M5 10l5-5 5 5H5z" />
        </svg>
      )
    if (trend === 'down')
      return (
        <svg className="w-5 h-5 text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path fillRule="evenodd" d="M5 10l5 5 5-5H5z" />
        </svg>
      )
    return (
      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <path d="M10 5v10" />
      </svg>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 text-center shadow-lg">
        <h1 className="text-3xl font-bold">Olá, Profissional! 👋</h1>
        <p className="mt-1">Seu potencial está sendo mapeado — aqui está seu painel de potencial.</p>
      </header>

      <main className="p-8 max-w-6xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((c) => (
            <div key={c.title} className="bg-white shadow-xl rounded-2xl p-6 text-center">
              <h2 className="font-semibold text-gray-700 mb-2">{c.title}</h2>
              <p className={`text-4xl font-bold ${c.color}`}>{c.value}</p>
              <p className="text-gray-500 text-sm mt-2">{c.hint}</p>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Mapa Visual de Habilidades</h3>
              <div className="text-sm text-gray-500">Gradiente: roxo → azul</div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-1 flex items-center justify-center">
                <RadarChart items={skills} size={360} />
              </div>
              <div className="w-full lg:w-48">
                <h4 className="font-medium text-gray-700 mb-2">Legenda</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  {skills.map((s) => (
                    <li key={s.name} className="flex items-center justify-between">
                      <span>{s.name}</span>
                      <span className="font-semibold">{s.value}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Alertas de Oportunidades</h3>
            <ul className="space-y-4">
              {alerts.map((a) => (
                <li key={a.title} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <TrendIcon trend={a.trend} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-gray-800">{a.title}</span>
                      <span className={`text-sm font-semibold ${a.trend === 'up' ? 'text-green-600' : a.trend === 'down' ? 'text-red-600' : 'text-gray-500'}`}>
                        {a.change}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{a.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <Link to="/oportunidades" className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm hover:opacity-95 inline-flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2v20M5 9l7-7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Ver oportunidades completas
              </Link>
            </div>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
