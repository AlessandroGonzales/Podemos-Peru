/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import logo from "./assets/podemosperulogo.png";

const PropuestasPage = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-satoshi">
      {/* Navbar de retorno */}
      <nav className="bg-[#11469E] p-4 text-white flex justify-between items-center sticky top-0 z-50">
        <Link
          to="/"
          className="text-xl font-bold hover:text-[#F3B11F] transition-colors"
        >
          ←
        </Link>
        <img src={logo} className="h-10" alt="Logo" />
      </nav>

      <main className="max-w-6xl mx-auto py-16 px-6">
        <section className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-slate-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#11469E] mb-4 uppercase">
              Compromiso con el Mundo
            </h2>
            <div className="w-24 h-2 bg-[#F3B11F] mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">
              Porque un peruano en el extranjero sigue siendo parte del motor del
              país. Trabajamos juntos para que la distancia no signifique olvido.
            </p>
          </div>

          <section className="">
              {data.propuestasPEX.map((prop, index) => (
                <div
                  key={prop.id}
                  className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 border border-slate-100 overflow-hidden"
                >
                  {/* Decoración de fondo sutil */}

                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-colors duration-500"></div>

                  <div className="relative flex flex-col md:flex-row gap-8 items-start">
                    {/* Contenedor del Ícono con Círculo de impacto */}

                    <div className="flex-shrink-0 mx-auto md:mx-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#F3B11F] opacity-20 blur-xl rounded-full group-hover:opacity-40 transition-opacity"></div>

                        <span className="relative flex items-center justify-center text-5xl bg-white w-20 h-20 rounded-2xl shadow-sm border border-slate-50 group-hover:scale-110 transition-transform duration-500">
                          {prop.icon}
                        </span>
                      </div>

                      {/* Número de propuesta sutil */}

                      <div className="mt-4 text-center hidden md:block">
                        <span className="text-slate-300 font-black text-xl">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Contenido de Texto */}

                    <div className="flex-1 text-center md:text-left">
                      <div className="inline-block md:hidden mb-2 text-[#F3B11F] font-black text-sm tracking-widest uppercase">
                        Propuesta 0{index + 1}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-black text-[#11469E] mb-4 group-hover:text-[#E31D2D] transition-colors leading-tight">
                        {prop.titulo}
                      </h3>

                      <div className="h-1 w-16 bg-[#F3B11F] mb-4 mx-auto md:mx-0 rounded-full group-hover:w-24 transition-all duration-500"></div>

             
                      <Link
                        to={`/propuesta/${prop.id}`}
                        className="inline-flex items-center mt-6 px-6 py-3 bg-[#11469E] text-white font-bold rounded-xl hover:bg-[#F3B11F] hover:text-[#11469E] transition-all duration-300 group"
                      >
                        Ver detalles
                        <svg
                          className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </section>
        </section>
      </main>
    </div>
  );
};

export default PropuestasPage;
