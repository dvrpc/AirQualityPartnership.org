import React, { useContext } from "react";
import CloseButton from "../components/CloseButton";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import AppContext from "../utils/AppContext";
import Pdf, {
  Tips,
  AQPBrochureChildren,
  OlderAdults,
  AQPBrochureBusiness,
  AQPConstitutionBusShelter,
  AQPConstitutionSocialMedia,
  AQPDeskDisplay,
  AirQualityOutdoor,
  WheresMikePrint,
  WheresMikeTeacher,
  AQPTipsZip,
  AQPActivitySheet,
} from "../utils/pdfs";

const Resources = () => {
  const { theme } = useContext(AppContext);

  return (
    <Layout>
      <Seo title="Resources" />
      <div className={`card ${theme.condition}`}>
        <div className="header">
          <h2>RESOURCES</h2>
          <CloseButton />
        </div>
        <div>
          <p>
            The AQP publishes materials for public use. Please download and
            share!
          </p>

          <h3>Videos</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=nu6iPX1UoKc"
              >
                Get Back on Transit
              </a>
            </li>
            <li className="list-group-item">
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=8gBX5GwxFsY"
              >
                "Why is Coco Orange?" (a book reading in Spanish)
              </a>
            </li>
          </ul>

          <h3>Brochures &amp; Handouts</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <Pdf use={Tips} text="Actions You Can Take" />
              <span className="sm">[0.1 MB pdf]</span>
            </li>
            <li className="list-group-item">
              <Pdf use={AQPBrochureChildren} text="Children and Air Quality" />
              <span className="sm">[4.9 MB pdf]</span>
            </li>
            <li className="list-group-item">
              <Pdf use={OlderAdults} text="Older Adults and Air Quality" />
              <span className="sm">[5.5 MB pdf]</span>
            </li>
            <li className="list-group-item">
              <Pdf
                use={AQPBrochureBusiness}
                text="Your Business and Air Quality"
              />
              <span className="sm">[5.5 MB pdf]</span>
            </li>
          </ul>

          <h3>Posters</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <Pdf
                use={AQPConstitutionBusShelter}
                text="Bus Shelter: PA Constitution/Walk, Bike, and Take Transit"
              />
              <span class="sm">[0.3 MB pdf]</span>
            </li>
          </ul>

          <h3>Social Media Graphics</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <Pdf use={AQPTipsZip} text="5 Tips for Improving Air Quality" />
              <span className="sm">[9.9 MB zip]</span>
            </li>
            <li className="list-group-item">
              <Pdf
                use={AQPConstitutionSocialMedia}
                text="PA Constitution/Walk, Bike, and Take Transit"
              />
              <span className="sm">[1.1 MB png]</span>
            </li>
          </ul>

          <h3>Tools for Businesses</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <Pdf use={AQPDeskDisplay} text="Tent Cards" />
              <span className="sm">[1.3 MB pdf]</span>
            </li>
            <li className="list-group-item">
              <a
                target="_blank"
                href="https://www.dvrpc.org/MobilityAlternatives/Contacts/"
              >
                Find Your Local TMA
              </a>
            </li>
          </ul>

          <h3>Tools for Schools</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <Pdf
                use={AirQualityOutdoor}
                text="Air Quality and Outdoor Activity Guidance for Schools"
              />
              <span className="sm">[0.1 MB pdf]</span>
            </li>
            <li className="list-group-item">
              <a target="_blank" href="/pdf/WheresMike_print_11x17.pdf">
                Workbook for Kids: "Where's Mike?"
              </a>
              <Pdf
                use={WheresMikePrint}
                text={`Workbook for Kids: "Where's Mike?"`}
              />
              <span class="sm">[2.6 MB pdf]</span>
            </li>
            <li className="list-group-item">
              <Pdf
                use={WheresMikeTeacher}
                text={`Workbook for Kids: "Where's Mike?" Teacher’s Guide`}
              />
              <span className="sm">[0.8 MB pdf]</span>
            </li>
            <li className="list-group-item">
              <Pdf
                use={AQPActivitySheet}
                text={`AQP Partnership Activity Sheet`}
              />
              <span className="sm">[10.2 MB pdf]</span>
            </li>
          </ul>

          <p>
            The AQP is proud to provide the "Where's Mike?" air quality activity
            workbook for kids. The workbook was designed with the input of
            educators, school district curriculum committee members, and health
            and planning professionals to introduce students to the concepts of
            air pollution, and it may impact children's health. It also offers
            suggestions about how students and their families can prevent air
            pollution and protect their health using air quality forecasts
            provided by federal, state, and local government resources.
          </p>

          <ul className="list-group" style={{ marginBottom: "-16px" }}>
            <li className="list-group-item">
              <a
                target="_blank"
                href="https://www.ahs.dep.pa.gov/AQPartnersWeb/calendar.aspx"
              >
                Air Quality Forecast Archives
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
