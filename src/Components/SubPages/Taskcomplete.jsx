import {
  faBehance,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const StatisticCard = ({ count, label }) => (
  <div className="w-full lg:w-11/12 h-44 bg-color2 text-textcolor rounded-3xl shadow1 flex flex-col items-center justify-center">
    <h1 className="text-6xl font-bold flex my-4 items-center">
      {count} <span className="text-orange">+</span>
    </h1>
    <hr className="w-full border-black mt-2" />
    <p className="text-center mt-5 lg:text-xl text-sm text-orange flex items-center">
      <FontAwesomeIcon icon={faSmile} className="text-orange" />
      {label}
    </p>
  </div>
);

const SocialCard = ({ icon, count, label }) => (
  <div className="w-full h-28  bg-color2 text-textcolor flex justify-between  px-3 lg:px-5 items-center rounded-3xl shadow1">
    <div className="flex items-center">
      <FontAwesomeIcon icon={icon} className="text-3xl p-4 rounded-full  shadow1 mr-4" />
      <div>
        <h1 className="text-2xl font-bold">{count} +</h1>
        <p className="text-iconcolor text-lg">{label}</p>
      </div>
    </div>
    <FontAwesomeIcon icon={faArrowRight} className="text-3xl p-3 cursor-pointer border-2 border-color2 rounded-full" />
  </div>
);

const Taskcomplete = () => {
  return (
    <div className="w-full rounded-3xl bg-color2 h-auto lg:h-[350px] space-y-2 lg:p-4 p-2 mb-4 mx-auto">
      <div className="flex flex-col lg:flex-row lg:space-x-4 w-full">
        <div className="flex flex-col lg:space-y-10 space-y-10 my-7 lg:w-1/2 mx-2">
          <StatisticCard count="500" label="Completed Tasks" />
          <StatisticCard count="10" label="Happy International Clients" />
        </div>
        <div className="flex flex-col space-y-10 lg:w-1/2 w-full my-1 mx-auto">
          <SocialCard icon={faBehance} count="197" label="Viewers" />
          <SocialCard icon={faInstagram} count="200" label="Followers" />
          <SocialCard icon={faLinkedinIn} count="300" label="Connections" />
        </div>
      </div>
    </div>
  );
};

export default Taskcomplete;
