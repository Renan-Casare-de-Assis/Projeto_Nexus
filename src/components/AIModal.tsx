import React, { useState } from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
  onGenerate: (suggestion: string) => void
  userName?: string
}

export default function AIModal({ isOpen, onClose, onGenerate, userName }: Props) {
  const [context, setContext] = useState('')
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const generate = async () => {
    setLoading(true)
    // Simula processamento de IA
    await new Promise((r) => setTimeout(r, 800))
    const base = context || (userName ? `Perfil de ${userName}` : 'perfil do usuário')
    const suggestion = `Sugestão IA para ${userName || 'você'} — Melhore sua descrição: "${base}. Destaque conquistas concretas, mencione ferramentas que você domina e explique como aplica suas habilidades para gerar impacto. Ex.: Conduzi projeto X usando Y, resultando em Z."`
    onGenerate(suggestion)
    setLoading(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 z-10">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">Sugestões com IA</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">Fechar</button>
        </div>

        <p className="text-sm text-gray-600 mt-2">Forneça contexto extra ou deixe em branco para usar informações básicas do seu perfil.</p>

        <textarea
          value={context}
          onChange={(e) => setContext(e.target.value)}
          placeholder="Adicione detalhes (ex.: objetivos, ferramentas, experiências)..."
          className="w-full h-28 mt-3 border rounded p-2"
        />

        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-2 rounded bg-gray-100">Cancelar</button>
          <button onClick={generate} disabled={loading} className="px-4 py-2 rounded bg-gradient-to-r from-purple-600 to-blue-500 text-white">
            {loading ? 'Gerando...' : 'Gerar sugestão com IA'}
          </button>
        </div>
      </div>
    </div>
  )
}
