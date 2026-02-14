import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LadingPage";
import CandidatoDetail from "./CandidatoDetatils";
import PropuestaDetail from "./PropuestaDetails";
import PropuestasPage from "./Propuesta";

import ScrollToTop from "./scrollToTop";

const globalData = {
  propuestasPEX: [
    {
      id: 1,
      titulo: `La Casa Perú. Principal `,
      icon: "🌍",
      inicio: `La creación de la Entidad Pública con Gestión Asociada ‘Casa Perú’, como Sistema Nacional de Atención al Peruano Migrante y Retornado.”  Que sería la (Coordinadora de los Peruanos en el Exterior)  

      “Este proyecto nace de una realidad concreta: millones de peruanos viven fuera del país, miles regresan cada año, aportan al Perú, pero cuando necesitan ayuda se encuentran con instituciones dispersas y un Estado que no los acompaña de manera integral.” 

      Y de ahí enganchás directo con el discurso que ya armamos: 
      “Hoy, si un peruano pierde su DNI, sufre violencia, busca trabajo, necesita apoyo psicológico o quiere retornar al país, no sabe a dónde ir. 
      El consulado solo hace trámites, otras instituciones ven una parte del problema, y el peruano queda solo.” 

      “Por eso proponemos la Casa Perú.” 
      “La Casa Perú sí tiene una base real y concreta: una sede física en el Perú, en Lima, con un directorio, personal administrativo y técnico, responsables de planificar, coordinar, supervisar y controlar el funcionamiento del sistema.”`,
      detalleLargo: `“Pero al mismo tiempo, la Casa Perú funciona como una gran plataforma digital, una ‘nube’ de atención permanente. No es solo un edificio: es un sistema que trabaja las 24 horas, conectando al Estado peruano con los peruanos en cualquier parte del mundo.” 

      “Esa sede central articula con equipos y profesionales que trabajan de manera virtual y territorial en cada país, según la realidad local. Si el peruano está en Argentina, en Estados Unidos o en Europa, la Casa Perú lo deriva al lugar correcto, con acompañamiento real.” 

      “No es un ministerio nuevo ni una ONG. Es una entidad pública con gestión asociada que no reemplaza instituciones: las ordena y las conecta.” 

      “La Casa Perú articula con los Consejos de Consulta, que ya existen en los consulados y son quienes mejor conocen la realidad de cada colectividad. No se inventa nada: se coordina lo que ya funciona.” 

      “Brinda orientación consular, legal, laboral, psicológica, atención en casos de violencia de género, bolsa de trabajo, retorno al país, RENIEC, y además impulsa cultura, gastronomía y turismo junto a PROMPERÚ.” 

      “Esto no es de un partido ni de un gobierno. Es una política de Estado, para que gobierne quien gobierne, el peruano en el exterior y el retornado tengan siempre una puerta abierta.” 

      “La Casa Perú es simple: una sede que coordina, una red digital que conecta, y un Estado que acompaña.” la Casa Perú es el Google, el Netflix del peruano en el mundo, todo lo que necesita lo encuentra. `,
    },
    {
      id: 2,
      titulo: "Reforma Integral del Sistema Consular",
      icon: "🏛️",
      inicio: `La modernización del sistema consular no es solo una mejora técnica, es una deuda histórica con los más de 3 millones de compatriotas que viven fuera de nuestras fronteras. Esta reforma integral se cimenta en cinco pilares diseñados para transformar el consulado en una institución aliada, ágil y humana.`,
      detalleLargo: `Impulsaré una modernización profunda del sistema consular, orientada a:
      • Digitalización completa de trámites
      • Reducción de tiempos de espera
      • Ampliación de horarios de atención
      • Mayor dotación de personal
      • Simplificación administrativa

      El objetivo es garantizar atención eficiente, transparente y con trato digno para cada compatriota.`,
    },
    {
      id: 3,
      titulo: "Programa Permanente de Defensa del Migrante",
      icon: "🛡️",
      inicio: ` Millones de peruanos residen fuera del territorio nacional, muchos de ellos en condiciones de alta precariedad social, laboral yjurídica, especialmente en Estados Unidos, España y Argentina. ElEstado peruano, en su deber de protección a sus nacionales, debeestablecer un marco normativo de asistencia integral, articuladocon su red consular

      Objetivo General:
      Proteger a los migrantes peruanos más desprotegidos del tejido social en 
      el exterior, garantizando acceso a derechos básicos, orientación legal y 
      mecanismos de asistencia social.  
      
      Ejes Principales 
      1. Creación del Sistema Nacional de Protección al Migrante Peruano Vulnerable (SINAPROMP). 
      2. Identificación de migrantes en situación de pobreza extrema, informalidad laboral, indocumentación o riesgo social. 
      3. Atención prioritaria a familias, adultos mayores, personas con discapacidad y menores de edad.
      `,
      detalleLargo: `Promoveré la creación de un programa estable de asistencia legal, laboral y migratoria gratuita para peruanos en situación de vulnerabilidad.

      El Estado debe brindar protección efectiva frente a abusos laborales, problemas migratorios o situaciones legales complejas.

      Medidas Concretas 
      • Programas de asistencia legal gratuita a través de 
        consulados. 
      • Fondos especiales de emergencia social para peruanos en 
        situación crítica. 
      • Convenios con Estados receptores, ONG y organismos 
        internacionales. 
      • Registro consular ampliado y voluntario con enfoque social, 
        no punitivo.
        
        `,
    },
    {
      id: 4,
      titulo: "Implementación del Voto Electrónico en el Exterior",
      icon: "🗳️",
      inicio: `Históricamente, votar desde el extranjero ha sido un desafío logístico para millones de peruanos. La distancia hacia el consulado más cercano, los costos de traslado y los horarios laborales han impedido que miles de compatriotas ejerzan su derecho. Esta propuesta busca modernizar nuestra democracia para que votar sea tan sencillo como enviar un mensaje desde tu celular`,
      detalleLargo: `Trabajaré para impulsar el voto electrónico remoto para los peruanos en el extranjero, facilitando la participación democrática sin barreras de distancia o traslado.

      "Modernizar el voto es fortalecer nuestra identidad. Queremos que cada peruano, esté donde esté, sienta que su decisión cuenta y que su país le facilita las herramientas para participar."`,
    },
    {
      id: 5,
      titulo: "Plan Nacional de Retorno Digno",
      icon: "🏠",
      inicio: `Durante las últimas décadas, millones de peruanas y peruanos emigraron al exterior en búsqueda de mejores oportunidades. Muchos de ellos hoy deciden regresar al país, ya sea por razones familiares, económicas, sociales o por situaciones de vulnerabilidad en los países de residencia.

      El retorno no finaliza con el ingreso al país ni con la liberación de impuestos sobre bienes personales. El migrante retornado enfrenta desafíos reales: inserción laboral, acceso a vivienda, salud, educación, econocimiento de estudios, adaptación social y reencuentro familiar. 
      
      Por ello, el presente proyecto de ley no reemplaza ni contradice la legislación vigente, sino que la fortalece, amplía y complementa, incorporando una mirada integral, humana y productiva del retorno, y garantizando que el Estado acompañe activamente a quienes deciden volver a construir su vida en el Perú.`,
      detalleLargo: `ARTÍCULO 1. OBJETO DE LA LEY
      La presente ley tiene por objeto fortalecer el acompañamiento integral del Estado peruano al migrante retornado

      ARTÍCULO 2. ÁMBITO DE APLICACIÓN
      La ley es aplicable a: Peruanos y peruanas que retornen al país de manera voluntaria o forzada. 

      ARTÍCULO 3. PRINCIPIOS RECTORES 
      La implementación de la presente ley se rige por los siguientes principios: 
      a) Dignidad humana 
      b) No discriminación 
      c) Acompañamiento integral 
      d) Reinserción productiva 
      e) Simplificación administrativa 
      f) Enfoque social y territorial 

      ARTÍCULO 4. FORTALECIMIENTO DE LOS BENEFICIOS TRIBUTARIOS
      El Estado garantiza: 
      La exoneración total de impuestos aduaneros para el ingreso de: 
      Menaje de casa y bienes personales. 
      Herramientas, equipos de trabajo y bienes productivos. 
      La simplificación de los procedimientos administrativos para el acceso a dichos beneficios.

      ARTÍCULO 5. ACOMPAÑAMIENTO INTEGRAL AL MIGRANTE RETORNADO
      El Estado implementará un Programa de Acompañamiento Integral al 
      Migrante Retornado, que incluirá: 
      a) Orientación administrativa y legal al momento del retorno. 
      b) Asistencia para la regularización de documentos de identidad. 
      c) Acceso preferente a programas de empleo y capacitación laboral. 
      d) Reconocimiento y homologación de estudios, títulos y certificaciones 
      obtenidas en el exterior. 
      e) Acompañamiento psicológico y social, cuando corresponda. 

      ARTÍCULO 6. INSERCIÓN LABORAL Y EMPRENDIMIENTO 
      El Estado promoverá la inserción laboral y productiva del migrante 
      retornado mediante: 
      Programas de empleo formal y certificación de competencias. 
      Acceso preferente a programas de emprendimiento, asociatividad y economía social. 
      Créditos blandos, garantías crediticias y asistencia técnica para proyectos productivos. 
      Articulación con el sector privado y gobiernos regionales y locales.
      
      ARTÍCULO 7. ACCESO A SERVICIOS SOCIALES
      Los migrantes retornados tendrán acceso prioritario a: 
      Servicios de salud pública. 
      Programas de protección social vigentes. 
      Programas de vivienda social, conforme a evaluación socioeconómica. 

      ARTÍCULO 8. ARTICULACIÓN INSTITUCIONAL
      La implementación de la presente ley se realizará de manera articulada entre: 
      Ministerios competentes. 
      Gobiernos regionales y locales. 
      Consulados del Perú. 
      Entidades públicas vinculadas a migración, empleo y desarrollo social.

      ARTÍCULO 9. ENFOQUE COMPLEMENTARIO A LA LEY VIGENTE
      La presente ley complementa y fortalece la Ley N.º 30001 y sus modificatorias, sin restringir ni limitar los derechos ya reconocidos a los migrantes retornados.

      ARTÍCULO 10. REGLAMENTACIÓN
      El Poder Ejecutivo reglamentará la presente ley en un plazo máximo de ciento ochenta (180) días contados a partir de su promulgación.

      Volver al país debe ser una oportunidad planificada, no una situación de incertidumbre.`,
    },
    {
      id: 6,
      titulo: "Representación Permanente y Territorial",
      icon: "🌍",
      inicio: `Para nosotros, representar a los más de 3 millones de peruanos en el extranjero no es un cargo de oficina, es una misión de campo. Entendemos que la distancia no debe ser sinónimo de olvido. Por ello, proponemos y ejerceremos una representación que deje de ser una figura lejana en Lima para convertirse en un puente real, activo y presente donde tú te encuentres.`,
      detalleLargo: `Ejerceré una representación activa y cercana, recorriendo comunidades peruanas en el exterior, escuchando sus necesidades y trasladando soluciones concretas al Congreso.

      La función del representante no es simbólica: es permanente, responsable y comprometida con la dignidad de nuestros compatriotas.`,
    },
    {
      id: 7,
      titulo:
        "Ley de Acceso Libre, Gratuito y Universal a la Educación Universitaria Pública en el Perú",
      icon: "🎓",
      inicio: `Fundamentos La educación superior es un derecho humano fundamental y una herramienta clave para la movilidad social, el desarrollo económico y la reducción de las desigualdades.

                En el Perú, si bien la educación universitaria pública es formalmente 
                gratuita, el acceso se encuentra limitado por exámenes de ingreso 
                altamente restrictivos, costosos y burocráticos, que en la práctica 
                excluyen a miles de jóvenes con vocación y capacidad, especialmente de 
                sectores populares, rurales y periféricos. 

              Este sistema ha generado un mercado paralelo de academias 
              preuniversitarias, preparación privada y procesos de selección que 
              convierten el ingreso a la universidad en un privilegio condicionado por el 
              poder adquisitivo, profundizando la desigualdad social.   `,
      detalleLargo: `Objetivo General 
              Garantizar el acceso libre, gratuito y universal a las universidades públicas del Perú, asegurando igualdad de oportunidades y democratización real del derecho a la educación superior.
              
              Objetivos Específicos 
              Eliminar las barreras económicas, burocráticas y estructurales que limitan el ingreso a la educación universitaria pública.
              Desvincular el acceso a la universidad de intereses comerciales y sistemas de exclusión.
              Garantizar que el mérito académico se evalúe durante el trayecto universitario y no como requisito previo de ingreso.
              Ampliar el acceso a la educación superior para jóvenes de sectores vulnerables y regiones históricamente postergadas.

              Ejes Principales 
              Ingreso libre y gratuito a las universidades públicas nacionales. 

              Eliminación del examen de ingreso eliminatorio como requisito obligatorio. 

              Implementación de ciclos de nivelación y acompañamiento académico durante el primer año. 

              Evaluación por permanencia y rendimiento académico, no por exclusión previa. 

              Medidas Concretas Ingreso automático a universidades públicas para egresados de educación secundaria. 

              Implementación de cursos de nivelación obligatorios durante el primer año universitario. 

              Sistemas de tutorías, acompañamiento pedagógico y apoyo académico. 

              Evaluación continua basada en desempeño, con mecanismos de permanencia y promoción. 

              Financiamiento estatal progresivo para ampliar infraestructura y planta docente. 

              Coordinación con gobiernos regionales para garantizar acceso territorial equitativo. 

              Alcance 
              La presente ley será de aplicación obligatoria para todas las universidades públicas del país, respetando la autonomía universitaria en materia académica, pero garantizando el derecho constitucional al acceso a la educación. 

              Principio Rector 
              La universidad pública no es un privilegio: es un derecho. 
              El Estado no debe seleccionar quién puede estudiar, sino garantizar que todos tengan la oportunidad de hacerlo.

            
              `,
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
          path="/propuesta"
          element={<PropuestasPage data={globalData} />}
        />
        <Route
          path="/propuesta/:id"
          element={<PropuestaDetail data={globalData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
