import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LadingPage";
import CandidatoDetail from "./CandidatoDetatils";
import PropuestaDetail from "./PropuestaDetails";

import ScrollToTop from "./scrollToTop";
const globalData = {
  propuestasPEX: [
    {
      id: 1,
      titulo: "Reforma Integral del Sistema Consular",
      icon: "🏛️",
      detalleLargo: `Impulsaré una modernización profunda del sistema consular, orientada a:
      • Digitalización completa de trámites
      • Reducción de tiempos de espera
      • Ampliación de horarios de atención
      • Mayor dotación de personal
      • Simplificación administrativa

      El objetivo es garantizar atención eficiente, transparente y con trato digno para cada compatriota.`,
    },
    {
      id: 2,
      titulo: "Programa Permanente de Defensa del Migrante",
      icon: "🛡️",
      detalleLargo: `Promoveré la creación de un programa estable de asistencia legal, laboral y migratoria gratuita para peruanos en situación de vulnerabilidad.

      El Estado debe brindar protección efectiva frente a abusos laborales, problemas migratorios o situaciones legales complejas.`,
    },
    {
      id: 3,
      titulo: "Implementación del Voto Electrónico en el Exterior",
      icon: "🗳️",
      detalleLargo: `Trabajaré para impulsar el voto electrónico remoto para los peruanos en el extranjero, facilitando la participación democrática sin barreras de distancia o traslado.

      La representación comienza con el derecho a votar de manera accesible y moderna.`,
    },
    {
      id: 4,
      titulo: "Plan Nacional de Retorno Digno",
      icon: "🏠",
      detalleLargo: `Impulsaré un plan integral de retorno voluntario que contemple:
      • Incentivos laborales
      • Programas de emprendimiento
      • Acceso a vivienda
      • Acompañamiento institucional a través de la Casa Perú en Lima

      Volver al país debe ser una oportunidad planificada, no una situación de incertidumbre.`,
    },
    {
      id: 5,
      titulo: "Representación Permanente y Territorial",
      icon: "🌍",
      detalleLargo: `Ejerceré una representación activa y cercana, recorriendo comunidades peruanas en el exterior, escuchando sus necesidades y trasladando soluciones concretas al Congreso.

      La función del representante no es simbólica: es permanente, responsable y comprometida con la dignidad de nuestros compatriotas.`,
    },
  ],
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Cuando el usuario entra a la raíz / */}
        <Route path="/" element={<LandingPage />} />

        {/* Cuando el usuario hace clic en un candidato */}
        <Route path="/candidato/:id" element={<CandidatoDetail />} />
        <Route
          path="/propuesta/:id"
          element={<PropuestaDetail data={globalData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
