import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../components/Header'

function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState('')

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim()
    if (typeof window !== 'undefined') {
      if (trimmed) localStorage.setItem('nexus_name', trimmed)
    }
    navigate("/dashboard", { state: { name: trimmed } }); // leva para a segunda página
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Conteúdo */}
      <main className="flex-1 p-8 max-w-2xl mx-auto">
        <section className="text-center mb-10">
          <h2 className="text-xl font-semibold">
            Não saber o futuro é humano. Vamos descobrir juntos.
          </h2>
        </section>

        {/* Formulário */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-6">Vamos nos conhecer?</h3>
          <p className="mb-6 text-sm text-gray-600">Conte-nos um pouco sobre você</p>

          <form className="space-y-4" onSubmit={handleStart}>     
            <div>
              <label className="block font-medium mb-1">Nos informe seu nome</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome..." 
                className="w-full border rounded p-2" />
            </div>

            <div>
              <label className="block font-medium mb-1">Qual sua profissão ou atividade atual?</label>
              <input
                type="text"
                placeholder="Ex: Vendedor, Professor, Desempregado..."
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Se pudesse trabalhar com qualquer coisa, o que seria?</label>
              <input
                type="text"
                placeholder="Não se preocupe em ser realista agora. Sonhe alto!"
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <p className="block font-medium mb-1">Como você se sente em relação ao futuro do trabalho?</p>
              <div className="grid grid-cols-2 gap-2">
                <label><input type="radio" name="mood" /> Ansioso</label>
                <label><input type="radio" name="mood" /> Incerto</label>
                <label><input type="radio" name="mood" /> Esperançoso</label>
                <label><input type="radio" name="mood" /> Empolgado</label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition"
            >
              Começar minha jornada
            </button>
          </form>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-blue-700 text-white p-4 text-center text-sm">
        © 2025 - Desenvolvido por Renan Casare de Assis
      </footer>
    </div>
  );
}

export default Home;
