import React from "react";
import { Link } from "react-router-dom";
import pepe from "./assets/pepeluna.jpg";
import yvan from "./assets/yvan.jpeg";
import walter from "./assets/walter.jpeg";
import logopodemos from "./assets/podemosperulogo.png";

const LandingPage = () => {
  const candidatos = [
    {
      id: "presidente",
      cargo: "Presidente",
      nombre: "José León Luna Gálvez",
      imagen: pepe,
      frase: "Liderazgo con visión de futuro.",
    },
    {
      id: "senador",
      cargo: "Senador",
      nombre: "Yvan Quintanilla",
      imagen: yvan,
      frase: "Leyes que protegen a tu familia.",
    },
    {
      id: "diputado",
      cargo: "Diputado",
      nombre: "Walter Gupioc",
      imagen: walter,
      frase: "Tu voz en el congreso.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-satoshi text-slate-900">
      {/* Hero / Header Section */}
      <header className="bg-[#11469E] py-12 px-6 text-center border-b-8 border-[#F3B11F]">
        <img
          src={logopodemos}
          alt="Podemos Perú"
          className="h-32 mx-auto drop-shadow-xl mb-6 hover:scale-105 transition-transform"
        />
        <h1 className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase font-satoshi">
          ¡El Cambio Comienza <span className="text-[#F3B11F]">Hoy!</span>
        </h1>
        <p className="text-blue-100 mt-4 text-lg max-w-2xl mx-auto font-satoshi">
          No somos solo un partido, somos la fuerza de los peruanos que no se
          rinden. Conoce a los rostros que transformarán nuestro país.
        </p>
      </header>

      {/* Candidates Section */}
      <main className="max-w-7xl mx-auto py-16 px-4 font-satoshi">
        <h2 className="text-3xl font-bold text-center font-satoshi mb-12 text-[#11469E]">
          Nuestro Equipo de Transformación
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {candidatos.map((candidato) => (
            <div
              key={candidato.id}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border-b-4 border-transparent hover:border-[#E31D2D] transition-all group"
            >
              <div className="h-80 bg-slate-200 overflow-hidden">
                <img
                  src={candidato.imagen}
                  alt={candidato.nombre}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 text-center">
                <span className="text-[#E31D2D] font-bold uppercase tracking-widest text-sm font-satoshi">
                  {candidato.cargo}
                </span>
                <h3 className="text-2xl font-satoshi my-2">
                  {candidato.nombre}
                </h3>
                <p className="text-slate-600 mb-6 font-satoshi">
                  "{candidato.frase}"
                </p>

                <Link to={`/candidato/${candidato.id}`}>
                  <button className="w-full bg-[#F3B11F] hover:bg-[#11469E] hover:text-white text-[#11469E] font-black py-3 rounded-lg transition-colors uppercase tracking-tight shadow-md">
                    Ver Propuestas
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Call To Action Section */}
      <section className="bg-[#F3B11F] py-12 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-[#11469E] mb-6 uppercase">
          Este 12 de Abril
        </h2>
        <div className="inline-block bg-white p-8 rounded-2xl shadow-2xl border-4 border-[#E31D2D]">
          <p className="text-2xl font-bold text-slate-800 mb-2">
            Marca el <span className="text-5xl text-[#E31D2D]">1</span>
          </p>
          <p className="text-xl font-black text-[#11469E]">
            PODEMOS PERÚ
          </p>
          <p className="text-sm uppercase tracking-widest mt-4">
            Con Pepe Luna Presidente
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
