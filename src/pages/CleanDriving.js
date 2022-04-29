import React, { useContext } from "react";
import Layout from "../components/Layout";
import AppContext from "../utils/AppContext";
import CloseButton from "../components/CloseButton";
import Seo from "../components/Seo";

const CleanDriving = () => {
  const { theme } = useContext(AppContext);

  return (
    <Layout>
      <Seo title="Clean Driving" />
      <div className={`card ${theme.condition}`}>
        <div className="header">
          <h2>How Can Maintaining My Car Improve Air Quality?</h2>
          <CloseButton />
        </div>

        <div>
          <p>
            These simple changes can extend the life of your vehicle, save you
            money on repairs and gas, and help keep the air clean.
          </p>
          <p>Five ways car care can help you protect the air.</p>
          <ol>
            <li>
              <strong>Keep tires inflated to the recommended pressure.</strong>{" "}
              Keeping your tires properly inflated improves gas mileage and
              helps to ensure that your steering system and brakes are working
              well.
            </li>
            <li>
              <strong>Change your oil.</strong> Changing your oil keeps your
              engine lubricated, improves gas mileage, and reduces wear and tear
              on your engine.
            </li>
            <li>
              <strong>Get that “Check Engine Light” serviced.</strong> When the
              light comes on, it means that there is something wrong with the
              emissions controls on your vehicle. This condition could mean your
              car is polluting the air and may impact your gas mileage.
            </li>
            <li>
              <strong>
                Stop at the click. Stop fueling when the gas pump clicks.
              </strong>{" "}
              After the click, fumes evaporate into the air, wasting gas, money,
              and polluting the air.
            </li>
            <li>
              <strong>Limit your idling.</strong> Turn your car off when you are
              not driving for more than 30 seconds. It wastes fuel and pollutes
              the air.
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default CleanDriving;
