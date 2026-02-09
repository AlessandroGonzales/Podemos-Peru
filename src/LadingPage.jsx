import React from "react";
import { Link } from "react-router-dom";
import pepe from "./assets/pepeluna.jpg"
import yvan from "./assets/yvan.jpeg"
import walter from "./assets/walter.jpeg"
import logopodemos from "./assets/podemosperulogo.png"

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
          src="./assets/podemosperulogo.png"
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
                {/* Placeholder para la imagen del candidato */}
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

      <div className="text-center mb-28">
        <h2 className="text-4xl md:text-5xl font-black text-[#11469E] mb-12 mt-16">
          NUESTRA FUERZA ES LA UNIÓN
        </h2>
        <div className="w-24 h-2 bg-[#E31D2D] mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl text-slate-700 leading-relaxed italic max-w-3xl mx-auto">
          "Ser conservador en el Perú es proteger el tesoro más grande que
          tenemos: **nuestra familia y nuestra fe**. Es el compromiso de
          construir un futuro brillante sin olvidar las raíces que nos hicieron
          grandes."
        </p>
      </div>
      <div className="bg-[#11469E] rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl mb-20">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <img
            src={logopodemos}
            className="w-64"
            alt=""
          />
        </div>

        <h3 className="text-3xl md:text-4xl font-black mb-6 relative z-10">
          Lo Hermoso de ser Conservador por el Perú
        </h3>
        <p className="text-lg md:text-xl leading-relaxed text-blue-100 max-w-4xl mx-auto relative z-10">
          Creemos en un Perú ordenado, seguro y con valores firmes. Ser
          conservador es abrazar la tradición para transformarla en progreso. Es
          caminar de la mano con cada peruano, escuchando su voz y protegiendo
          su esfuerzo. **Porque cuando la familia está unida, el Perú es
          invencible.**
        </p>
      </div>


      <section className="bg-[#F3B11F] py-12 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-[#11469E] mb-6 uppercase">
          Este 12 de Abril
        </h2>
        <div className="inline-block bg-white p-8 rounded-2xl shadow-2xl border-4 border-[#E31D2D]">
          <p className="text-2xl font-bold text-slate-800 mb-2">
            Marca el <span className="text-5xl text-[#E31D2D]">1</span>
          </p>
          <p className="text-xl font-black text-[#11469E]">PODEMOS PERÚ</p>
          <p className="text-sm uppercase tracking-widest mt-4">
            Con Pepe Luna Presidente
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
