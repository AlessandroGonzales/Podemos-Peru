import React from "react";
import { Link } from "react-router-dom";
import pepe from "./assets/pepeluna.jpg";
import yvawalter from "./assets/yvanwalter.jpeg";
import logopodemos from "./assets/podemosperulogo.png";

const LandingPage = () => {
  // Estructura de datos optimizada: permite candidatos individuales o duplas
  const secciones = [
    {
      id: "presidente",
      cargo: "Presidencia de la República",
      titulares: "José León Luna Gálvez",
      imagen: pepe,
      frase: "Liderazgo con visión de futuro y gestión de resultados.",
      enlace: "/candidato/presidente",
      destacado: true,
    },
    {
      id: "pex",
      cargo: "Peruanos en el Extranjero",
      titulares: "Yvan Quintanilla & Walter Gupioc",
      imagen: yvawalter,
      frase: "La fuerza y voz de nuestros compatriotas en el mundo.",
      enlace: "/candidato/pex",
      destacado: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-satoshi text-slate-900">
      {/* Header / Hero - Diseño Refinado */}
      <header className="relative bg-[#11469E] pt-20 pb-24 px-6 text-center overflow-hidden">
        {/* Decoración sutil de fondo para dar profundidad */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <img
            src={logopodemos}
            alt="Podemos Perú"
            className="h-28 md:h-36 mx-auto drop-shadow-2xl mb-8 hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight uppercase leading-tight">
            El Centro que <span className="text-[#F3B11F]">Une</span> al Perú
          </h1>
          <p className="text-blue-100 mt-6 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Propuestas serias para un país que exige resultados. Conoce a
            nuestro equipo técnico y humano.
          </p>
        </div>

        {/* Línea de acento inferior */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-[#F3B11F]"></div>
      </header>

      {/* Candidates Section */}
      <main className="max-w-6xl mx-auto mt-12 pb-24 px-6 relative z-20">
        <div className="grid md:grid-cols-2 gap-10">
          {secciones.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100 hover:border-[#11469E] transition-all duration-500 group"
            >
              {/* Contenedor de Imagen con Overlay sutil */}
              <div className="h-[400px] overflow-hidden relative">
                <img
                  src={item.imagen}
                  alt={item.titulares}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-10 text-center">
                <div className="inline-block bg-slate-100 text-[#E31D2D] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  {item.cargo}
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-3 tracking-tight">
                  {item.titulares}
                </h3>
                <p className="text-slate-500 italic text-lg mb-8 leading-relaxed">
                  "{item.frase}"
                </p>

                <Link to={item.enlace}>
                  <button className="group relative w-full inline-flex items-center justify-center px-8 py-4 font-black text-[#11469E] transition-all duration-200 bg-[#F3B11F] rounded-xl hover:bg-[#11469E] hover:text-white shadow-lg active:scale-95">
                    <span className="uppercase tracking-wider">Propuestas</span>
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
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Call to Action Final - Reforzando el voto */}
      <section className="bg-white border-t border-slate-200 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-[#11469E] mb-10 uppercase tracking-tighter">
            Este 12 de Abril
          </h2>

          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#E31D2D] to-[#F3B11F] rounded-2xl blur opacity-55 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-white border-2 border-slate-100 p-10 rounded-2xl shadow-xl">
              <p className="text-3xl font-bold text-slate-800 mb-4">
                Marca la{" "}
                <span className="text-6xl text-[#E31D2D] align-middle ml-2">
                  1
                </span>
              </p>
              <div className="h-px w-full bg-slate-200 my-4"></div>
              <p className="text-2xl font-black text-[#11469E] tracking-[0.3em]">
                PODEMOS PERÚ
              </p>
            </div>
          </div>

          <p className="mt-8 text-slate-400 uppercase tracking-[0.4em] text-sm">
            Un país, un equipo, un solo camino.
          </p>
        </div>
      </section>

      {/* Footer Simple Profesional */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          {/* Título de Redes */}
          <p className="text-[#11469E] font-black uppercase tracking-[0.2em] text-xs mb-6">
            Conéctate con nosotros
          </p>

          {/* Contenedor de Iconos */}
          <div className="flex gap-8 mb-10">
            {/* Facebook */}
            <a
              href="https://web.facebook.com/profile.php?id=61586298763167"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 group-hover:bg-[#1877F2] group-hover:text-white transition-all duration-300">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <span className="text-[10px] font-bold text-slate-400 group-hover:text-[#1877F2] uppercase tracking-tighter transition-colors">
                Facebook
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/waltergupioc1/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 group-hover:bg-gradient-to-tr group-hover:from-[#f9ce34] group-hover:via-[#ee2a7b] group-hover:to-[#6228d7] group-hover:text-white transition-all duration-300">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <span className="text-[10px] font-bold text-slate-400 group-hover:text-[#ee2a7b] uppercase tracking-tighter transition-colors">
                Instagram
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5493415554798"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.3-.149-1.774-.874-2.048-.974-.274-.1-.474-.149-.674.149-.2.3-.774.974-.948 1.174-.174.2-.349.225-.648.075-.3-.15-1.266-.467-2.41-1.487-.888-.795-1.487-1.777-1.662-2.075-.174-.299-.019-.459.13-.608.134-.135.299-.349.449-.524.15-.175.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.674-1.623-.924-2.223-.244-.583-.493-.504-.674-.513-.175-.008-.375-.01-.575-.01s-.524.075-.798.375c-.274.3-1.049 1.024-1.049 2.5s1.074 2.901 1.224 3.101c.15.2 2.115 3.227 5.123 4.524.714.309 1.272.494 1.707.632.719.228 1.373.196 1.891.118.577-.089 1.774-.724 2.023-1.424.249-.7.249-1.299.174-1.424-.075-.125-.274-.199-.574-.349z" />
                </svg>
              </div>
              <span className="text-[10px] font-bold text-slate-400 group-hover:text-[#25D366] uppercase tracking-tighter transition-colors">
                WhatsApp
              </span>
            </a>
          </div>

          {/* Copyright Line */}
          <div className="text-slate-400 text-xs flex flex-col items-center gap-2 border-t border-slate-200 pt-8 w-full">
            <p className="font-bold tracking-widest uppercase">Podemos Perú</p>
            <p>&copy; 2026 Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
