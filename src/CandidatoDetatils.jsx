import React from "react";
import { useParams, Link } from "react-router-dom";
import pepeluna from "./assets/pepeluna.jpg"; // ajusta la ruta relativa según dónde esté CandidatoDetail.jsx
import yvan from "./assets/yvan.jpeg";
import walter from "./assets/walter.jpeg";
import faceWalter from "./assets/facewalter.png";
import facepepe from "./assets/facepepe.png";
import logo from "./assets/podemosperulogo.png"
const infoCandidatos = {
  presidente: {
    nombre: "José León Luna Gálvez",
    cargo: "Presidente de la República",
    lema: "Experiencia que da Resultados",
    biografia:
      "Líder fundador de Podemos Perú, con una trayectoria dedicada a la creación de oportunidades educativas y defensa de los derechos sociales. Su visión une la experiencia política con un compromiso inquebrantable por la estabilidad económica del país.",
    historia:
      "Un hombre hecho a sí mismo que entiende que la educación es la única herramienta para transformar el Perú.",
    detalles: [
      "Fundador de instituciones educativas",
      "Defensor de los aportantes de AFP y ONP",
      "Visión descentralista",
    ],
    videoPlaceholder: "https://www.youtube.com/watch?v=TYHuBT_S5sc", // Reemplazar con URL real
    thumbnail: facepepe,
    imagen: pepeluna,
  },
  senador: {
    nombre: "Yvan Quintanilla",
    cargo: "Senador de la República",
    lema: "Del Trabajo al Congreso",
    biografia:
      "Migró a Argentina en los 90 con una maleta llena de sueños. Desde los fogones de un restaurante hasta los pasillos de la Facultad de Ciencias Económicas de la UBA.",
    historia:
      "Como Contador Público de la UBA, Yvan no solo construyó una empresa exitosa, sino que se convirtió en el mentor de miles de peruanos en el exterior. Conoce el sudor del migrante y la disciplina del profesional.",
    detalles: [
      "Contador Público (UBA)",
      "Empresario Exitoso",
      "Referente de la comunidad en Argentina",
    ],
    videoPlaceholder: "URL_VIDEO_REDE_SOCIAL",
    thumbnail: "",
    imagen: yvan,
  },
  diputado: {
    nombre: "Walter Gupioc",
    cargo: "Diputado de la República",
    lema: "Tu Salud, Mi Compromiso",
    biografia:
      "Llegó con una beca de medicina y la responsabilidad de representar el talento peruano. Su vida ha sido un equilibrio entre el estetoscopio y el esfuerzo incansable.",
    historia:
      "Walter personifica la constancia. Entre guardias médicas y jornadas de trabajo para costear sus sueños, nunca olvidó sus raíces. Su labor junto al Consulado lo ha posicionado como el protector de nuestra comunidad, transformando la medicina en servicio social.",
    detalles: [
      "Médico por vocación",
      "Gestor social comunitario",
      "Defensor del migrante",
    ],
    videoPlaceholder: "https://www.facebook.com/share/p/1D9MyMnm4w/",
    thumbnail: faceWalter,
    imagen: walter,
  },
};

const CandidatoDetail = () => {
  const { id } = useParams();
  const candidato = infoCandidatos[id];

  if (!candidato)
    return <div className="text-center py-20">Candidato no encontrado</div>;

  return (
    <div className="min-h-screen bg-white font-satoshi">
      {/* Header Dinámico */}
      <nav className="bg-[#11469E] p-4 text-white flex justify-between items-center sticky top-0 z-50 shadow-lg">
        <Link
          to="/"
          className="font-black tracking-tighter hover:text-[#F3B11F]"
        >
          VOLVER
        </Link>
        <img
          src={logo}
          className="h-10"
          alt="Logo"
        />
      </nav>

      {/* Hero Section Biografía */}
      <section className="relative bg-slate-900 text-white py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={candidato.imagen}
            alt=""
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-[#E31D2D] px-4 py-1 rounded-full text-sm font-bold uppercase mb-4 inline-block">
              Perfil Oficial
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-none mb-4">
              {candidato.nombre}
            </h1>
            <p className="text-[#F3B11F] text-2xl font-bold italic">
              "{candidato.lema}"
            </p>
          </div>
          <div className="rounded-3xl border-4 border-[#F3B11F] overflow-hidden shadow-2xl">
            <img
              src={candidato.imagen}
              alt={candidato.nombre}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Cuerpo de la Biografía */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-black text-[#11469E] mb-4">
                Su Historia
              </h2>
              <p className="text-xl leading-relaxed text-slate-700">
                {candidato.biografia}
              </p>
              <p className="mt-8 mb-6 text-lg text-slate-600 border-l-4 border-[#E31D2D] pl-6 italic">
                {candidato.historia}
              </p>
            </div>
            {/* Sección de Video - Responsive para móvil */}
            {/* Sección de Video - Ajustada para Desktop */}
            <div className="bg-slate-100 p-4 md:p-8 rounded-2xl shadow-inner">
              <h3 className="font-bold mb-4 flex items-center gap-2 text-[#11469E]">
                <span className="text-[#E31D2D]">●</span> Mensaje a la Comunidad
              </h3>

              {candidato.videoPlaceholder ? (
                /* Contenedor limitador: max-w-md en desktop, full en mobile */
                <div className="max-w-full md:max-w-md mx-auto">
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                    onClick={() =>
                      window.open(
                        candidato.videoPlaceholder,
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  >
                    {/* Imagen con Aspect Ratio controlado para que no estire */}
                    <div className="aspect-[9/16] md:aspect-video lg:aspect-[9/16] bg-black">
                      <img
                        src={candidato.thumbnail}
                        alt="Vista previa"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Overlay con ícono de play */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity group-hover:bg-black/50">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F3B11F] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <span className="text-[#11469E] text-4xl md:text-5xl ml-1">
                          ▶
                        </span>
                      </div>
                    </div>

                    {/* Texto informativo inferior */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                      <p className="text-xs md:text-sm font-medium flex items-center gap-2">
                        Ver mensaje completo en Redes
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-[9/16] max-w-xs mx-auto bg-black rounded-lg flex items-center justify-center text-gray-500">
                  <p>No hay mensaje disponible</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-[#11469E] text-white p-8 rounded-3xl shadow-xl h-fit sticky top-24">
            <h3 className="text-2xl font-bold mb-6 border-b border-blue-400 pb-2">
              Logros Clave
            </h3>
            <ul className="space-y-4">
              {candidato.detalles.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#F3B11F] text-xl">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Espacio solicitado para la foto adicional */}
      <div className="py-12 bg-white">
        {/* Aquí puedes insertar la etiqueta <img /> cuando tengas la foto */}
      </div>

      {/* Banner de Cierre (Llamado al Voto) */}
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

export default CandidatoDetail;
