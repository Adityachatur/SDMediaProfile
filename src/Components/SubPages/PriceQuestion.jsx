import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import WorkTogether from "./WorkTogether";
import Faqs from "./Faqs";
import brandidentity from "../Images/brand-identity (1).png";
import threedViews from "../Images/3d-view.png";
import videomotion from "../Images/videomotion.png";

const PriceCard = ({
  title,
  projectsCompleted,
  services,
  startingPrice,
  imgsrc,
}) => {
  return (
    <div
      className="h-[345px] rounded-3xl shadow1"
      style={{ backgroundColor: "#141414" }}
    >
      <div className="flex items-center justify-start p-4 space-x-5">
        <img src={imgsrc} alt={title} className="h-20 p-4 rounded-full" />
        <span className="text-2xl text-textcolor font-semibold">{title}</span>
      </div>
      <hr />
      <div className="text-xl w-11/12 mx-auto bg-color2 rounded-3xl shadow1 mt-4 overflow-hidden h-[245px] hover:h-[260px] hover:mt-0  hover:shadow none hover:rounded-t-none">
        <div className="container">
          <div className="content">
            <div className="flex justify-between text-2xl font-semibold items-center h-14 mx-1">
              <h1 className="text-gray2">Projects Completed</h1>
              <h2 className="text-orange">{projectsCompleted}</h2>
            </div>
            <hr />
            <p className="text-xl font-bold text-gray2 flex items-center h-40">
              {services}
            </p>
            <hr className="shadow2" />
            <div className="flex justify-between text-2xl font-semibold items-center h-14 mx-1 my-3">
              <h1 className="text-gray2">Starts From</h1>
              <h2 className="text-orange">{startingPrice}</h2>
            </div>
            <hr />
            <div className="flex justify-center items-center h-24">
              <button className="shedulebutton flex items-center justify-center space-x-2 px-4 py-2 text-xl" style={{width:"220px"}}>
                <FontAwesomeIcon className="text-orange" icon={faEnvelope} />
                <span className="text-2xl text-textcolor">Schedule Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PriceQuestion = () => {
  return (
    <div className="flex flex-wrap justify-center items-center mx-5 lg:space-x-14 space-y-7">
      <div className="lg:w-[968px] md:w-9/12 sm:w-10/12 w-full  lg:h-[350px] h-auto rounded-3xl mt-7">
        <div className="grid lg:grid-cols-3 gap-4  my-1 grid-cols-1">
          <PriceCard
            title="Brand Identity"
            projectsCompleted="100+"
            services="LOGO | BUSINESS CARD | BROCHURE | VISITING CARD | DIGITAL MEDIA | STATIONERY DESIGNS & much more"
            startingPrice="₹179"
            imgsrc={brandidentity}
          />
          <PriceCard
            title="Motion Graphics"
            projectsCompleted="40+"
            services="Elevate your brand with captivating motion graphics: product animations, video creation, professional editing, animated invitations."
            startingPrice="₹499"
            imgsrc={videomotion}
          />
          <PriceCard
            title="3D Visualisation"
            projectsCompleted="10"
            services="Immersive 3D visualizations breathe life into architectural designs, engineering products through photorealistic animations, professional advertisements."
            startingPrice="₹777"
            imgsrc={threedViews}
          />
        </div>
      </div>
      <div className="lg:w-[468px] md:w-9/12 sm:w-10/12 w-full  lg:h-[350px] h-auto rounded-3xl flex justify-center items-center bg-color2">
        <Faqs />
      </div>
    </div>
  );
};

export default PriceQuestion;
