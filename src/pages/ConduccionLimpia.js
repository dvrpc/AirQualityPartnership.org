import React, { useContext } from "react";
import Layout from "../components/Layout";
import AppContext from "../utils/AppContext";
import CloseButton from "../components/CloseButton";
import Seo from "../components/seo";

const ConducciónLimpia = () => {
  const { theme } = useContext(AppContext);

  return (
    <Layout>
      <Seo title="Conducción Limpia" />
      <div className={`card ${theme.condition}`} lang="es">
        <div className="header">
          <h2>
            ¿Cómo es que dar un buen mantenimiento a mi auto puede mejorar la
            calidad del aire?
          </h2>
          <CloseButton />
        </div>
        <div>
          <p>
            Estos simples cambios pueden extender la vida de su vehículo,
            ahorrarle dinero en reparaciones y gasolina, así como ayudar a
            mantener el aire limpio.
          </p>
          <p>
            Cinco formas en las que el cuidado del auto puede ayudarlo a
            proteger el aire.
          </p>
          <ol>
            <li>
              <strong>
                Mantener las llantas infladas al nivel de presión recomendado.
              </strong>
              Mantener las llantas infladas correctamente mejora el rendimiento
              de la gasolina, así como ayuda a garantizar que su sistema de
              dirección y frenos funcione bien.
            </li>
            <li>
              <strong>Cambiar el aceite. </strong>
              Cambiar el aceite mantiene su motor lubricado, mejora el
              rendimiento de la gasolina y reduce el desgaste de su motor.
            </li>
            <li>
              <strong>Revise esa “luz de revisar motor”.</strong>
              Cuando se enciende la luz, significa que hay algo que no está bien
              con los controles de emisiones de su vehículo. Esta condición
              podría significar que su auto está contaminando el aire y puede
              impactar el rendimiento de la gasolina.
            </li>
            <li>
              <strong>
                Deténgase al escuchar clic. Detenga el llenado de gasolina
                cuando la bomba haga clic.
              </strong>
              Después del clic, los gases se evaporan en el aire, se desperdicia
              gasolina, dinero y se contamina el aire.
            </li>
            <li>
              <strong>Limite su estado al ralentí. </strong>
              Apague su auto cuando no conduzca durante más de 30 segundos. Esto
              desperdicia gasolina y contamina el aire.
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default ConducciónLimpia;
