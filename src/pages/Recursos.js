import React, { useContext } from "react";
import Layout from "../components/Layout";
import AppContext from "../utils/AppContext";
import CloseButton from "../components/CloseButton";
import Seo from "../components/Seo";
import Pdf, {
  ESAirQualityGuideSchools,
  ESAQPBrochureChildren,
  ESCocosOrangeDay,
  ESOlderAdults,
  ESAQPBrochureBusiness,
  ESAQPActivitySheet,
} from "../utils/pdfs";
import Forecast from "../components/Forecast";

const Recursos = () => {
  const { theme } = useContext(AppContext);
  return (
    <Layout>
      <Seo title="Recursos" />
      <div className={`card ${theme.condition}`} lang="es">
        <div className="header">
          <h2>LOS RECURSOS</h2>
          <CloseButton />
        </div>
        <div>
          <p>
            AQP publica materiales para la comunidad y miembros del publico. Por
            favor descarga y compartelos.
          </p>

          <h3>Vídeos</h3>
          <ul className="list-group">
            {/* <li className="list-group-item">
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=nu6iPX1UoKc"
              >
                Get Back on Transit
              </a>
            </li> */}
            <li className="list-group-item">
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=8gBX5GwxFsY"
              >
                ¿Por qué Coco es de color naranja?
              </a>
            </li>
          </ul>

          <h3>Folletos &amp; volantes</h3>
          <ul className="list-group">
            <li className="list-group-item">
              {/* Older adults and the quality of air */}
              <Pdf
                use={ESOlderAdults}
                text="Adultos mayores y calidad del aire"
              />
              <span className="sm">[4.5 MB pdf]</span>
            </li>
            <li className="list-group-item">
              {/* Kids and the quality of air */}
              <Pdf
                use={ESAQPBrochureChildren}
                text="Niños y la calidad del aire"
              />
              <span className="sm">[2.7 MB pdf]</span>
            </li>
            <li className="list-group-item">
              {/* Your Business and Air Quality */}
              <Pdf
                use={ESAQPBrochureBusiness}
                text="Su empresa y la Calidad del aire"
              />
              <span className="sm">[5.5 MB pdf]</span>
            </li>
          </ul>

          <h3>Herramientas para escuelas</h3>
          <ul className="list-group">
            <li className="list-group-item">
              {/* Guide for schools */}
              <Pdf
                use={ESAirQualityGuideSchools}
                text="Guía para las escuelas sobre la calidad del aire y las
                actividades al aire libre"
              />
              <span className="sm">[0.2 MB pdf]</span>
            </li>
            <li className="list-group-item">
              {/* Cocos orange Day */}
              <Pdf
                use={ESCocosOrangeDay}
                text="EPA - ¿Por qué Coco es de color naranja?"
              />
              <span className="sm">[1.4 MB pdf]</span>
            </li>
            <li className="list-group-item">
              {/* AQP Partnership Activity Sheet */}
              <Pdf use={ESAQPActivitySheet} text={`AQP Pagina De Actividad`} />
              <span className="sm">[10.2 MB pdf]</span>
            </li>
          </ul>

          <p>
            La AQP se enorgullece de brindar el libro de ejercicios y
            actividades sobre la calidad del aire “¿Por qué Coco es de color
            naranja?” para niños. El libro de ejercicios fue diseñado con el
            aporte de educadores, miembros del comité del plan de estudios
            distrital, así como profesionales en salud y planificación para
            presentar a los estudiantes los conceptos de contaminación del aire
            y cómo es que esta puede impactar la salud de los niños. También
            ofrece sugerencias sobre cómo es que los estudiantes y sus familias
            pueden prevenir la contaminación del aire y proteger su salud usando
            pronósticos de calidad del aire provistos por recursos
            gubernamentales federales, estatales y locales.
          </p>

          <ul className="list-group" style={{ marginBottom: "-16px" }}>
            <li className="list-group-item">
              <a
                target="_blank"
                href="https://www.ahs.dep.pa.gov/AQPartnersWeb/calendar.aspx"
              >
                Archivos de pronóstico de la calidad del aire
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Recursos;
