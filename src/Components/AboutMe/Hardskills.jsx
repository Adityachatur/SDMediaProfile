import photoshop from "../Images/Photoshop.png";
import aftereffect from "../Images/AfterEffect.png";
import premierpro from "../Images/PremierPro.png";
import autodeskmaya from "../Images/AutodeskMaya.png";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SkillCard = ({ imgSrc, title, subtitle }) => (
  <div className="flex lg:h-32 h-24 m-2 lg:rounded-3xl rounded-2xl text-textcolor items-center justify-around bg-color2 shadow1 p-4 font-manrope">
    <img
      src={imgSrc}
      alt={title}
      className="lg:h-[55px] lg:w-[55px] h-16 w-16 p-2 border-color2 shadow1 rounded-2xl mr-2"
    />
    <div>
      <h1 className="text-xl text-gray1 font-bold">{title}</h1>
      <p className="text-gray2 text-lg">{subtitle}</p>
    </div>
  </div>
);

const Hardskills = () => {
  return (
    <div className="sm:w-full bg-color2 rounded-3xl mainbox-shadow h-full space-y-3 lg:p-4 p-2 mb-4 font-manrope ">
      <div className="h-24 space-y-5">
        <h1 className="text-orange text-xl text-center">
          <FontAwesomeIcon icon={faCube} /> Use To With
        </h1>
        <h1 className="font-semibold lg:text-2xl text-xl text-center text-textcolor">
          My Top 4 Hard Skills
        </h1>
        <p className="w-full border-b-2 shadow"></p>
      </div>

      <div className="flex justify-center items-center w-full h-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 w-full gap-4 py-5">
          <SkillCard
            imgSrc={photoshop}
            title="Photoshop"
            subtitle="Graphic Design"
          />
          <SkillCard
            imgSrc={aftereffect}
            title="After Effects"
            subtitle="Motion Graphics"
          />
          <SkillCard
            imgSrc={premierpro}
            title="Premier Pro"
            subtitle="Video Editing"
          />
          <SkillCard
            imgSrc={autodeskmaya}
            title="Autodesk Maya"
            subtitle="3D Animation"
          />
        </div>
      </div>
    </div>
  );
};

export default Hardskills;
