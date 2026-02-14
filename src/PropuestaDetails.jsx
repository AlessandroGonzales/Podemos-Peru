import { useParams, Link } from "react-router-dom";
import logo from "./assets/podemosperulogo.png";
import reforma from "./assets/reforma.png";
import seguridad from "./assets/seguridad.png";
import voto from "./assets/voto.png";
import casa from "./assets/casa.png";
import mundo from "./assets/mundo.png"

const PropuestaDetail = ({ data }) => {
  const { id } = useParams();
  // Buscamos la propuesta por ID
  const propuesta = data.propuestasPEX.find((p) => p.id === parseInt(id));

  if (!propuesta)
    return <div className="text-center py-20">Propuesta no encontrada</div>;

  const handleShareWhatsApp = () => {
    const urlActual = window.location.href;

    // Mensaje estructurado para generar curiosidad y confianza
    const mensaje = encodeURIComponent(
      `*¡Nuestra voz en el mundo tiene fuerza!*\n` +
        `Hola, quiero compartirte esta propuesta clave de *Podemos Perú* para transformar nuestra realidad en el extranjero:\n\n` +
        `*${propuesta.titulo}*\n` +
        `Es momento de que los peruanos en el exterior tengamos una representación real y digna.\n\n` +
        `Conoce todo el plan aquí:\n` +
        `${urlActual}\n` +
        `¡Pásalo a más compatriotas! `,
    );

    window.open(`https://wa.me/?text=${mensaje}`, "_blank");
  };

  const imagenesPropuestas = {
    1: reforma, // Consular/Oficina
    2: seguridad, // Legal/Justicia
    3: voto, // Voto/Tecnología
    4: casa, // Retorno/Avión-Viaje
    5: mundo, // Representación/Reunión
  };
  return (
    <div className="min-h-screen bg-white font-satoshi">
      {/* Navbar Minimalista de Retorno */}
      <nav className="bg-[#11469E] p-4 text-white flex justify-between items-center sticky top-0 z-50 shadow-md">
        <Link
          to="/"
          className="text-2xl font-black tracking-widest hover:text-[#F3B11F] transition-colors"
        >
          ←
        </Link>
        <img src={logo} className="h-10 md:h-10" alt="Podemos Perú" />
      </nav>

      <main className="pb-20">
        {/* Header de la Propuesta */}
        <header className="bg-slate-50 py-16 px-6 border-b border-slate-100">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-5xl mb-6 block">{propuesta.icon}</span>
            <h1 className="text-3xl md:text-5xl font-black text-[#11469E] leading-tight mb-6">
              {propuesta.titulo}
            </h1>
            <div className="h-2 w-24 bg-[#F3B11F] mx-auto rounded-full"></div>
          </div>
        </header>

        {/* Imagen Descriptiva (Placeholder con Estilo) */}
        <section className="max-w-5xl mx-auto px-6 -mt-10">
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[500px] bg-slate-200 border-8 border-white">
            <img
              src={imagenesPropuestas[propuesta.id]}
              alt={propuesta.titulo}
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Cuerpo de la Información (Texto Intacto del Candidato) */}
        <section className="max-w-3xl mx-auto px-6 mt-16">
          <div className="prose prose-lg max-w-none">
            {/* Usamos un div con estilos específicos para preservar el formato del texto */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-[#E31D2D] font-black uppercase tracking-widest text-sm mb-8 flex items-center gap-2 text-center">
                Detalle del Plan de Acción
              </p>

              <div className="whitespace-pre-line text-slate-700 text-lg md:text-xl leading-relaxed font-medium">
                {/* Aquí se renderiza el texto tal cual lo envió el candidato */}
                {propuesta.detalleLargo}
              </div>
            </div>
          </div>
        </section>

        {/* Footer de Acción */}
        <section className="max-w-3xl mx-auto px-6 mt-12 text-center">
          <div className="bg-[#11469E] rounded-3xl p-10 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              ¿Te sumas a este cambio?
            </h3>
            <p className="text-blue-100 mb-8">
              Ayúdanos a difundir esta propuesta con tus amigos y familiares.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleShareWhatsApp}
                className="bg-[#25D366] px-4 py-4 rounded-xl font-bold flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-lg text-white"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.3-.149-1.774-.874-2.048-.974-.274-.1-.474-.149-.674.149-.2.3-.774.974-.948 1.174-.174.2-.349.225-.648.075-.3-.15-1.266-.467-2.41-1.487-.888-.795-1.487-1.777-1.662-2.075-.174-.299-.019-.459.13-.608.134-.135.299-.349.449-.524.15-.175.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.674-1.623-.924-2.223-.244-.583-.493-.504-.674-.513-.175-.008-.375-.01-.575-.01s-.524.075-.798.375c-.274.3-1.049 1.024-1.049 2.5s1.074 2.901 1.224 3.101c.15.2 2.115 3.227 5.123 4.524.714.309 1.272.494 1.707.632.719.228 1.373.196 1.891.118.577-.089 1.774-.724 2.023-1.424.249-.7.249-1.299.174-1.424-.075-.125-.274-.199-.574-.349z" />
                </svg>
                Compartir por WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PropuestaDetail;
