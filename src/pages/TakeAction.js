import React, { useContext } from "react";
import CloseButton from "../components/CloseButton";
import AppContext from "../utils/AppContext";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const TakeAction = () => {
  const { theme } = useContext(AppContext);

  return (
    <Layout>
      <Seo title="Take Action" />
      <div className={`card ${theme.condition}`}>
        <div className="header">
          <h2>Take Action</h2>
          <CloseButton />
        </div>
        <ul className="list-group">
          <li className="action-group-item visible--good visible--moderate visible--sensitive visible--unhealthy">
            Take transit or rideshare.
            <small>
              Ride the bus, train, subway or carpool to work or school.
            </small>
          </li>
          <li className="action-group-item visible--sensitive visible--unhealthy">
            Telecommute.
            <small>
              Work from home on Air Quality Action days and spend your extra
              commute hours with your family.
            </small>
          </li>
          <li className="action-group-item visible--moderate">
            Trip-link.
            <small>
              Do all of you errands in one trip, avoiding unnecessary cold
              starts.
            </small>
          </li>
          <li className="action-group-item visible--sensitive visible--unhealthy">
            Refuel at the end of the day.
            <small>
              Ozone levels are usually highest in mid to late afternoon.
            </small>
          </li>
          <li className="action-group-item visible--good visible--moderate">
            Don’t “top off” your tank when refueling.
            <small>Spillage adds two tons of air pollution daily.</small>
          </li>
          <li className="action-group-item visible--good">
            Bundle your online and delivery orders.
            <small>
              Fewer packages means fewer delivery vehicles on our streets, and
              less air pollution.
            </small>
          </li>
          <li className="action-group-item visible--sensitive visible--unhealthy">
            Postpone mowing the lawn.
            <small>
              Late in the day or on a day when air quality is better. Remember
              to fill your gas tanks after dusk too.
            </small>
          </li>
          <li className="action-group-item visible--moderate">
            Use wood stoves and fire places wisely and sparingly.
            <small>
              Burn only untreated hard wood in a properly maintained woodstove
              or fireplace.
            </small>
          </li>
          <li className="action-group-item visible--good visible--moderate">
            Keep the right amount of air in the tires.
            <small>Proper tire pressure saves gas and the air.</small>
          </li>
          <li className="action-group-item visible--good visible--moderate">
            Conserve energy at home.
            <small>
              Set the thermostat lower in the winter and high in the summer.
              Conserving energy not only helps air quality, it also saves you
              money.
            </small>
          </li>
          <li className="action-group-item visible--good visible--moderate">
            Get regular tune-ups and car maintenance checks.
            <small>
              A properly running vehicle emits less pollution and saves gas.
            </small>
          </li>
          <li className="action-group-item visible--moderate">
            Turn it off.
            <small>Idling your vehicle wastes gas and pollutes the air.</small>
          </li>
          <li className="action-group-item visible--good">
            Join your local Transportation Management Association.
            <small>
              Your TMA can provide tips and advice on reducing pollution from
              your commute.
            </small>
          </li>
          <li className="action-group-item visible--sensitive visible--unhealthy">
            Avoid harmful fumes.
            <small>
              Using oil-based paints, solvents, cleaners, varnishes, or other
              household and personal products that cause fumes can be hazardous.
            </small>
          </li>
          <li className="action-group-item visible--sensitive visible--unhealthy">
            Use teleconferencing instead of driving to meetings.
          </li>
          <li className="action-group-item visible--good">
            Refrain from burning trash or yard waste.
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default TakeAction;
