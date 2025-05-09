import React, { useContext } from "react";
import Layout from "../components/Layout";
import AppContext from "../utils/AppContext";
import CloseButton from "../components/CloseButton";
import Seo from "../components/Seo";

const About = () => {
  const { theme } = useContext(AppContext);

  return (
    <Layout>
      <Seo title="About" />
      <div className={`card ${theme.condition}`}>
        <div className="header">
          <h2>ABOUT</h2>
          <CloseButton />
        </div>

        <div>
          <p>
            The Air Quality Partnership (AQP) is a public / private coalition
            dedicated to improving air quality in the Greater Philadelphia
            Region by providing air quality advisories and educating the public
            about air quality issues. The AQP is administered by the
            <a href="http://www.dvrpc.org/">
              Delaware Valley Regional Planning Commission
            </a>
            .
          </p>

          <p>
            The AQP provides air quality forecasts for ground-level ozone and
            fine particulate matter (PM
            <sub>2.5</sub>). Sign-up for air quality alerts, or check the
            forecast daily and take the proper actions to reduce pollution and
            protect your health.
          </p>

          <p>
            Businesses, organizations, and individuals are welcome to contact
            the AQP or your local Transportation Management Association for tips
            and programs to help improve air quality in the Greater Philadelphia
            Region.
          </p>

          <h3>Air Pollution and Your Health</h3>
          <p>
            Air pollution can come from many different sources. Industry, power
            plants, cars, and trucks&mdash;as well as many consumer
            products&mdash;all contribute to poor air quality. This means that
            everyone&mdash;business and consumers&mdash;contribute to the
            problem. Since air currents can carry pollutants great distances,
            millions of people are impacted by air pollution, making it our
            region’s largest environmental health risk.
          </p>

          <p>
            The U. S. Environmental Protection Agency (EPA) monitors and sets
            national health-based standards for six common air pollutants
            (ozone, particulate matter, carbon monoxide, nitrogen oxides, sulfur
            dioxide, and lead).
          </p>

          <p>
            The Greater Philadelphia Region does not meet the standards for two
            of these pollutants&mdash;ground-level ozone and fine particle
            pollution (PM
            <sub>2.5</sub>)&mdash;on approximately 20 days throughout the year.
            Most of these violations are for ozone during the summer months, but
            there are also days when the PM
            <sub>2.5</sub> standard is violated throughout the year.
          </p>

          <h4>Ground-Level Ozone</h4>
          <p>
            Ozone in the upper atmosphere protects us from the sun’s harmful
            rays where it plays an important role protecting life on earth (good
            ozone). At ground level, where people breathe, ozone can be harmful
            to lungs and the environment. In the summer, sunlight and heat can
            “bake” pollutants to form ground-level ozone, also known as smog.
          </p>

          <h4>Particle Pollution or PM</h4>
          <p>
            Particle pollution is the term for tiny drops of liquid or small
            bits of dust, metals, or other materials that float on the air. Some
            particles are large enough to see as soot or smoke. Other particles
            are so small that they can only be seen with an electron microscope.
            Particle pollution comes from a variety of natural and manmade
            sources such as cars, power plants, and forest fires.
          </p>

          <h3>Who is at Most at Risk?</h3>

          <p>
            <b>Children</b> - Children are at risk for several reasons. They
            spend more time outdoors, their lungs are still developing, and they
            breathe more air per pound of bodyweight than adults. Children not
            only have greater exposure to pollutants like ozone and particle
            pollution but those pollutants can exert greater impacts on
            developing lungs.
          </p>

          <p>
            <b>Elderly</b> - Older people are more likely to suffer from heart
            and lung conditions. When air quality is poor, the elderly should
            take special precautions.
          </p>

          <p>
            <b>People with heart or lung diseases</b> – Over 900,000 people in
            the Delaware Valley suffer from asthma, bronchitis, or other
            respiratory illness. Over 71 million Americans have some form of
            heart disease. This means that hundreds of thousands of people in
            our region are especially impacted by poor air quality.
          </p>

          <p>
            <b>Adults who exercise, work, or spend time outdoors</b> – One of
            the largest sensitive groups is also one of the least likely to be
            aware that they are at risk. Cyclists, joggers, outdoor workers, or
            other adults who exert themselves outdoors are at risk of
            respiratory impairment when ground-level ozone or particle pollution
            concentrations are high.
          </p>

          <p className="lead">
            Taking positive steps to improve air quality will help to reduce the
            health and economic impacts of air pollution. Think of clean air as
            preventative medicine on a regional scale.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
