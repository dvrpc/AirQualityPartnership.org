import React, { useContext } from "react";
import CloseButton from "../components/CloseButton";
import AppContext from "../utils/AppContext";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const TomarAccion = () => {
  const { theme } = useContext(AppContext);

  return (
    <Layout>
      <Seo title="Tomar Acción" />
      <div className={`card ${theme.condition}`}>
        <div className="header">
          <h2>Tomar Acción</h2>
          <CloseButton />
        </div>
        <ul className="list-group">
          <li className="action-group-item visible--good visible--moderate visible--sensitive visible--unhealthy">
            Tomar transporte público o automóviles compartidos.
            <small>
              Viajar al trabajo o la escuela en autobús, tren, subterráneo o con
              compañeros de trabajo.
            </small>
          </li>
          <li className="action-group-item visible--sensitive visible--unhealthy">
            Trabajo remoto.
            <small>
              Trabaje desde casa en los días de acción por la calidad del aire,
              y pase las horas adicionales de traslado con su familia.
            </small>
          </li>
          <li className="action-group-item visible--moderate">
            Junte sus viajes.
            <small>
              Haga todos sus recados en una sola salida, evitando arranques en
              frío innecesarios.
            </small>
          </li>
          <li className="action-group-item visible--sensitive visible--unhealthy">
            Cargue combustible al final del día.
            <small>
              Los niveles de ozono suelen ser más altos de media tarde al
              anochecer.
            </small>
          </li>
          <li className="action-group-item visible--good visible--moderate">
            No "rellene" su tanque cuando cargue combustible.
            <small>
              Los derrames añaden dos toneladas de contaminación al aire todos
              los días.
            </small>
          </li>
          <li className="action-group-item visible--sensitive visible--unhealthy">
            Posponga la poda del césped hasta avanzada la tarde, o a un día en
            que la calidad del aire sea mejor.
            <small>
              Recuerde también llenar sus tanques de combustible después del
              atardecer.
            </small>
          </li>
          <li className="action-group-item visible--moderate">
            Use las estufas de leña y chimeneas con prudencia y con poca
            frecuencia.
            <small>
              Si debe quemar leña, use solo madera dura sin tratar en una estufa
              de leña o chimenea en buenas condiciones.
            </small>
          </li>
          <li className="action-group-item visible--good">
            Evite quemar basura o residuos del patio.
          </li>
          <li className="action-group-item visible--good visible--moderate">
            Conserve energía en el hogar.
            <small>
              Fije el termostato en una temperatura más baja en invierno, y más
              alta en verano. Conservar energía no solo ayuda a la calidad del
              aire, sino que le ahorra dinero.
            </small>
          </li>
          <li className="action-group-item visible--good visible--moderate">
            Lleve su automóvil a que le hagan afinaciones oportunas y revisiones
            de mantenimiento.
            <small>
              Un vehículo con funcionamiento apropiado emite menos contaminación
              y ahorra gasolina.
            </small>
          </li>
          <li className="action-group-item visible--moderate">
            Apáguelo.
            <small>
              Tener el vehículo encendido cuando no está avanzando desperdicia
              gasolina y contamina el aire.
            </small>
          </li>
          <li className="action-group-item visible--good">
            Únase a la Asociación de Gestión del Transporte de su localidad.
            <small>
              Su TMA puede darle recomendaciones y consejos para reducir la
              contaminación de su traslado cotidiano.
            </small>
          </li>
          <li className="action-group-item visible--sensitive visible--unhealthy">
            Evite usar pinturas con base de aceite, solventes, limpiadores,
            barnices u otros materiales domésticos y personales que podrían
            causar vapores.
          </li>
          <li className="action-group-item visible--good visible--moderate">
            Tenga la cantidad correcta de aire en las llantas.
            <small>
              Al tener la presión correcta en las llantas ahorra gasolina y
              ayuda al aire.
            </small>
          </li>
          <li className="action-group-item visible--sensitive visible--unhealthy">
            Use teleconferencias en vez de conducir a las reuniones.
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default TomarAccion;
