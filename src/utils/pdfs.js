import React from "react";
import AirQualityOutdoor from "../pdf/Air_Quality_and_Outdoor_Activity_Guidance.pdf";
import AirQualityGuideSchools from "../pdf/air-quality-activity-guide-schools-SPA.pdf";
import AQPBrochureBusiness from "../pdf/AQP_Brochure_for_Business.pdf";
import AQPBrochureChildren from "../pdf/AQP_Brochure_for_Children.pdf";
import AQPBrochureOlderAdults from "../pdf/AQP_Brochure_for_OlderAdults.pdf";
import AQPDeskDisplay from "../pdf/AQP_Desk_display_tent_card.pdf";
import AQPConstitutionBusShelter from "../pdf/AQP_PAConstitution_BusShelter.pdf";
import AQPConstitutionSocialMedia from "../pdf/AQP_PAConstitution_SocialMedia.png";
import AQPTipsZip from "../pdf/AQP_Tips.zip";
import Children from "../pdf/Children.pdf";
import CocosOrangeDay from "../pdf/cocos-orange-day_sp.pdf";
import OlderAdults from "../pdf/AQP_Brochure_for_OlderAdults.pdf";
import Tips from "../pdf/tips.pdf";
import WheresMikeTeacher from "../pdf/Wheres_Mike_Teacher_Guide.pdf";
import WheresMikePrint from "../pdf/WheresMike_print_11x17.pdf";
import ESAirQualityGuideSchools from "../pdf/es-air-quality-activity-guide-schools-SPA.pdf";
import ESAQPBrochureChildren from "../pdf/es-Children.pdf";
import ESCocosOrangeDay from "../pdf/es-cocos-orange-day_sp.pdf";
import ESOlderAdults from "../pdf/es-OlderAdults.pdf";
import ESAQPBrochureBusiness from "../pdf/Su empresa y la calidad del aire.pdf";

const Pdf = ({ use, text }) => {
  const file = use;
  return (
    <>
      <a href={file} target="_blank" rel="noreferrer">
        {text}
      </a>{" "}
    </>
  );
};

export default Pdf;

export {
  AirQualityOutdoor,
  AirQualityGuideSchools,
  AQPBrochureBusiness,
  AQPBrochureChildren,
  AQPBrochureOlderAdults,
  AQPDeskDisplay,
  AQPConstitutionBusShelter,
  AQPConstitutionSocialMedia,
  AQPTipsZip,
  Children,
  CocosOrangeDay,
  OlderAdults,
  Tips,
  WheresMikeTeacher,
  WheresMikePrint,
  ESAirQualityGuideSchools,
  ESAQPBrochureChildren,
  ESCocosOrangeDay,
  ESOlderAdults,
  ESAQPBrochureBusiness,
};
