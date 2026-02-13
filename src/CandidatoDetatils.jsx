import React from "react";
import { useParams, Link } from "react-router-dom";
import pepeluna from "./assets/pepeluna.jpg";
import yvan from "./assets/yvan.jpeg";
import walter from "./assets/walter.jpeg";
import facepepe from "./assets/facepepe.png";
import logo from "./assets/podemosperulogo.png";
import yvanwalter from "./assets/yvanwalter.jpeg";

// Datos enriquecidos para la dupla PEX
const infoCandidatos = {
  presidente: {
    tipo: "individual",
    nombre: "José León Luna Gálvez",
    cargo: "Presidente de la República",
    lema: "Experiencia que da Resultados",
    biografia:
      "Líder fundador de Podemos Perú, con una trayectoria dedicada a la creación de oportunidades educativas y defensa de los derechos sociales.",
    historia:
      "Un hombre hecho a sí mismo que entiende que la educación es la única herramienta para transformar el Perú.",
    detalles: [
      "Fundador de instituciones educativas",
      "Defensor de AFP y ONP",
      "Visión descentralista",
    ],
    videoPlaceholder: "https://www.youtube.com/watch?v=TYHuBT_S5sc",
    thumbnail: facepepe,
    imagen: pepeluna,
  },
  pex: {
    tipo: "dupla",
    tituloSeccion: "Representación PEX: Fuerza en Unidad",
    lema: "Nuestra prioridad eres tú, donde quiera que estés",
    candidatos: [
      {
        nombre: "Yvan Quintanilla",
        cargo: "Senador",
        perfil:
          "Contador Público (UBA) y referente en Argentina. Migró en los 90 y construyó éxito desde el esfuerzo.",
        imagen: yvan,
        logros: [
          "Experto en Ciencias Económicas",
          "Mentor de emprendedores migrantes",
        ],
      },
      {
        nombre: "Walter Gupioc",
        cargo: "Diputado ",
        perfil:
          "Médico y gestor social. Su vida es un equilibrio entre el estetoscopio y la defensa del migrante.",
        imagen: walter,
        logros: ["Líder en salud comunitaria", "Gestor de apoyo consular"],
      },
    ],
    propuestasPEX: [
      {
        id: 1,
        titulo: "Reforma Integral del Sistema Consular",
        desc: "Digitalización total, reducción de tiempos y trato digno. Un consulado que trabaje para ti, no al revés.",
        icon: "🏛️",
      },
      {
        id: 2,
        titulo: "Defensa Permanente del Migrante",
        desc: "Asistencia legal y laboral gratuita. Protección efectiva contra abusos en el extranjero.",
        icon: "🛡️",
      },
      {
        id: 3,
        titulo: "Voto Electrónico Remoto",
        desc: "Tu derecho a decidir sin barreras geográficas. Participación democrática desde tu celular.",
        icon: "🗳️",
      },
      {
        id: 4,
        titulo: "Plan Nacional de Retorno Digno",
        desc: "Incentivos para emprendimiento y vivienda. Volver a casa debe ser una oportunidad, no un riesgo.",
        icon: "🏠",
      },
      {
        id: 5,
        titulo: "Representación Territorial Activa",
        desc: "Presencia constante en las comunidades. El Congreso escuchando directamente tus necesidades.",
        icon: "🌍",
      },
    ],
  },
};

const CandidatoDetail = () => {
  const { id } = useParams();
  const data = infoCandidatos[id] || infoCandidatos["pex"]; // Fallback a PEX por seguridad

  const isPEX = data.tipo === "dupla";

  return (
    <div className="min-h-screen bg-slate-50 font-satoshi text-slate-900 overflow-x-hidden">
      {/* Navbar Minimalista */}
      <nav className="bg-[#11469E] p-4 text-white flex justify-between items-center sticky top-0 z-50 shadow-md">
        <Link
          to="/"
          className="text-2xl font-black tracking-widest hover:text-[#F3B11F] transition-colors"
        >
          ←
        </Link>
        <img src={logo} className="h-10 md:h-10" alt="Podemos Perú" />
      </nav>

      {/* HERO SECTION */}
      <section className="relative bg-[#0F172A] text-white py-16 md:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={isPEX ? yvan : data.imagen}
            alt=""
            className="w-full h-full object-cover scale-110 blur-md"
          />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <span className="bg-[#E31D2D] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.3em] mb-6 inline-block shadow-lg">
            {isPEX
              ? "Agenda Legislativa Extranjero"
              : "Perfil Oficial Presidencial"}
          </span>
          <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6">
            {isPEX ? "Yvan Quintanilla & Walter Gupioc" : data.nombre}
          </h1>
          <p className="text-[#F3B11F] text-xl md:text-3xl font-light italic max-w-3xl mx-auto">
            "{data.lema}"
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto py-12 px-6">
        {/* Renderizado Condicional para PEX */}
        {isPEX ? (
          <div className="space-y-20">
            {/* Sección de Perfiles Duplicados */}
            <div className="grid md:grid-cols-2 gap-8">
              {data.candidatos.map((cand, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-xl border-b-4 border-[#11469E] hover:translate-y-[-5px] transition-transform"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img
                      src={cand.imagen}
                      className="w-47 h-47 rounded-2xl object-cover shadow-lg border-2 border-[#F3B11F]"
                      alt={cand.nombre}
                    />
                    <div>
                      <h2 className="text-2xl font-bold text-[#11469E]">
                        {cand.nombre}
                      </h2>
                      <p className="text-[#E31D2D] font-bold text-sm uppercase tracking-widest text-center">
                        {cand.cargo}
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-slate-600 leading-relaxed italic border-l-4 border-slate-200 pl-4">
                    {cand.perfil}
                  </p>
                </div>
              ))}
            </div>

            {/* PROPUESTAS UNIFICADAS - El corazón de la página */}
            <section className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-slate-100">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-[#11469E] mb-4 uppercase">
                  Compromiso con el Mundo
                </h2>
                <div className="w-24 h-2 bg-[#F3B11F] mx-auto rounded-full"></div>
                <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">
                  Porque un peruano en el extranjero sigue siendo parte del
                  motor del país. Trabajamos juntos para que la distancia no
                  signifique olvido.
                </p>
              </div>

              <div className="grid gap-8 max-w-4xl mx-auto">
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
                        <p className="text-slate-600 leading-relaxed text-lg md:text-xl font-medium">
                          {prop.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* Espacio para Imagen Adicional (Duo o Evento) */}
            <section className="max-w-6xl mx-auto px-6 mb-20">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl h-[300px] md:h-[500px] bg-slate-200">
                <img
                  src={yvanwalter}
                  alt="Podemos Perú en el Exterior"
                  className="w-full h-full object-cover"
                />
              </div>
            </section>
          </div>
        ) : (
          /* Diseño para Presidente (Individual) */
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-black text-[#11469E] mb-6">
                  Su Historia y Visión
                </h2>
                <p className="text-xl leading-relaxed text-slate-700 mb-6">
                  {data.biografia}
                </p>
                <div className="bg-blue-50 p-8 rounded-2xl italic text-slate-600 border-l-8 border-[#E31D2D]">
                  "{data.historia}"
                </div>
              </div>
              {/* Espacio para Video */}
              <div className="bg-slate-900 aspect-video rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer">
                <img
                  src={data.thumbnail}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  alt="Video"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#F3B11F] rounded-full flex items-center justify-center text-4xl shadow-2xl group-hover:scale-110 transition-transform">
                    ▶
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="bg-[#11469E] text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold mb-6 border-b border-blue-400 pb-2">
                  Logros Clave
                </h3>
                <ul className="space-y-4">
                  {data.detalles.map((d, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-[#F3B11F]">✔</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        )}
      </main>

      {/* CTA FINAL - Cierre con Fuerza */}
      <section className="bg-[#F3B11F] py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-[#11469E] mb-8 uppercase tracking-tighter">
            Este 12 de Abril
          </h2>
          <div className="bg-white inline-block p-10 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-4 border-[#E31D2D] transform hover:scale-105 transition-transform">
            <p className="text-3xl font-bold text-slate-800">
              Marca el{" "}
              <span className="text-7xl text-[#E31D2D] align-middle font-black">
                1
              </span>
            </p>
            <div className="h-px w-full bg-slate-100 my-6"></div>
            <p className="text-2xl font-black text-[#11469E] tracking-[0.2em]">
              PODEMOS PERÚ
            </p>
          </div>
          <p className="mt-10 text-[#11469E] font-bold text-lg opacity-80 uppercase tracking-[0.3em]">
            La fuerza de los peruanos en el mundo
          </p>
        </div>
      </section>

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

export default CandidatoDetail;
