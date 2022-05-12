import React, { useContext } from "react";
import Layout from "../components/Layout";
import AppContext from "../utils/AppContext";
import CloseButton from "../components/CloseButton";
import Seo from "../components/Seo";

const Arcera = () => {
  const { theme } = useContext(AppContext);

  return (
    <Layout>
      <Seo title="Arcera" />
      <div className={`card ${theme.condition}`} lang="es">
        <div className="header">
          <h2>SOBRE NOSOTROS</h2>
          <CloseButton />
        </div>
        <div>
          <p>
            La Sociedad de Calidad del Aire (AQP, por sus siglas en inglés) es
            una coalición pública/privada dedicada a mejorar la calidad del aire
            en la Región del Gran Filadelfia al ofrecer asesorías sobre calidad
            del aire y educar al público sobre los problemas de calidad del
            aire. La AQP es administrada por la{" "}
            <a href="http://www.dvrpc.org/">
              Comisión de Planificación Regional del Valle de Delaware.
            </a>
          </p>

          <p>
            La AQP brinda pronósticos de calidad del aire en cuanto al ozono a
            nivel del suelo y materia particulada fina (PM <sub>2.5</sub>).
            Inscríbase para recibir alertas de calidad del aire o consulte el
            pronóstico diario, y tome las medidas correspondientes para reducir
            la contaminación y proteger su salud.
          </p>

          <p>
            Las empresas, organizaciones y personas a título individual son
            bienvenidas a comunicarse con la AQP o con su Asociación de Gestión
            de Transporte local para recibir consejos y e información sobre
            programas para ayudar a mejorar la calidad del aire en la Región del
            Gran Filadelfia.
          </p>

          <h3>La contaminación del aire y su salud</h3>
          <p>
            La contaminación del aire puede provenir de muchas fuentes
            distintas. La industria, las plantas de energía, los automóviles y
            los camiones, así como muchos productos de consumo, contribuyen a la
            mala calidad del aire. Esto significa que todos, empresas y
            consumidores, contribuimos al problema. Como las corrientes de aire
            pueden transportar contaminantes a grandes distancias, millones de
            personas se ven impactadas por la contaminación del aire,
            convirtiendo a nuestra región en el mayor riesgo de salud ambiental.
          </p>

          <p>
            La Agencia de Protección Ambiental (EPA, por sus siglas en inglés)
            monitorea y establece estándares de salud nacionales para seis
            contaminantes de aire comunes (ozono, materia particulada, monóxido
            de carbono, óxido de nitrógeno, dióxido de sulfuro y plomo).
          </p>

          <p>
            La Región del Gran Filadelfia no cumple los estándares en dos de
            estos contaminantes, la contaminación de ozono a nivel del suelo y
            de partículas finas (PM <sub>2.5</sub>), durante aproximadamente 20
            días del año. La mayoría de estas violaciones son por ozono durante
            los meses de verano, pero también hay días durante el año en los que
            se viola el estándar de PM
            <sub>2.5</sub>.
          </p>

          <h4>Ozono a nivel del suelo</h4>
          <p>
            El ozono en la atmósfera más alta nos protege de los dañinos rayos
            solares, lo que desempeña un rol importante para proteger la vida en
            la tierra (buen ozono). A nivel del suelo, donde las personas
            respiran, el ozono puede ser dañino para los pulmones y el
            medioambiente. En el verano, la luz solar y el calor pueden
            “hornear” los contaminantes para formar ozono a nivel del suelo,
            también conocido como esmog.
          </p>

          <h4>Contaminación por partículas o PM</h4>
          <p>
            La contaminación por partículas es el término para las gotas
            minúsculas de líquido o de polvo, metales u otros materiales que
            flotan en el aire. Algunas partículas son lo suficientemente grandes
            para verlas como hollín o humo. Otras partículas son tan pequeñas
            que solo pueden verse con un microscopio electrónico. La
            contaminación por partículas proviene de una variedad de fuentes
            naturales y hechas por el hombre, como automóviles, plantas de
            energía e incendios forestales.
          </p>

          <h3>¿Quién está en mayor riesgo?</h3>

          <p>
            <b>Niños:</b> los niños se encuentran en mayor riesgo por varias
            razones. Ellos pasan más tiempo al aire libre, sus pulmones todavía
            están en desarrollo y respiran más aire por libra de peso corporal
            que los adultos. Los niños no solo se encuentran más expuestos a
            contaminantes como el ozono y a la contaminación por partículas,
            sino que esos contaminantes pueden ejercer mayor impacto sobre los
            pulmones en desarrollo.
          </p>

          <p>
            <b>Ancianos:</b> las personas mayores tienen mayor probabilidad de
            sufrir un ataque al corazón y condiciones pulmonares. Cuando la
            calidad del aire es mala, los ancianos deben tomar precauciones
            especiales.
          </p>

          <p>
            <b>Personas con cardiopatías o enfermedades pulmonares:</b> más de
            900,000 personas en el Valle de Delaware sufren de asma, bronquitis
            u otras enfermedades respiratorias. Más de 71 millones de
            estadounidenses tienen alguna forma de cardiopatía. Esto significa
            que cientos de miles de personas en nuestra región se ven
            especialmente impactadas por la mala calidad del aire.
          </p>

          <p>
            <b>
              Adultos que se ejercitan, trabajan o pasan tiempo al aire libre:
            </b>{" "}
            uno de los grupos sensibles más grandes también es uno con menos
            probabilidad de saber que está en riesgo. Ciclistas, corredores,
            trabajadores en exteriores u otros adultos que realizan esfuerzos al
            aire libre están en riesgo de sufrir deficiencia respiratoria cuando
            el ozono a nivel del suelo o las concentraciones de contaminantes
            particulados son altas.
          </p>

          <p className="lead">
            Tomar medidas positivas para mejorar la calidad del aire ayudará a
            reducir los impactos de la contaminación del aire, tanto económicos
            como sobre la salud. Piense en aire limpio como una medicina
            preventiva a escala regional.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Arcera;
