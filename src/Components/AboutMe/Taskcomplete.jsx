import {
  faBehance,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toprightarrow from "../Images/2CAOf1Muun0RpvPvaXMPvvcw.svg";
import React from "react";
import { Link } from "react-router-dom";

const StatisticCard = ({ count, label }) => (
  <div className="w-full h-44 bg-color2 text-textcolor rounded-3xl shadow1 flex flex-col items-center justify-center p-1 font-manrope">
    <h1 className="lg:text-6xl text-4xl font-semibold flex items-center">
      {count} <span className="text-orange">+</span>
    </h1>
    <hr className="w-full border-black mt-2" />
    <p className="text-center mt-5 lg:text-xl text-lg text-orange flex items-center">
      <FontAwesomeIcon icon={faSmile} className="mr-2" />
      {label}
    </p>
  </div>
);

const SocialCard = ({ icon, count, label }) => (
  <div className="w-full  lg:h-32 h-24 bg-color2 text-textcolor flex justify-between px-3 lg:px-5 items-center lg:rounded-3xl rounded-2xl shadow1">
    <div className="flex items-center">
      <FontAwesomeIcon
        icon={icon}
        className="text-3xl p-4 rounded-full shadow1 mr-4"
      />
      <div>
        <h1 className="text-[22px] font-semibold">{count} +</h1>
        <p className="text-iconcolor font-semibold text-lg">{label}</p>
      </div>
    </div>
    <img
      src={toprightarrow}
      alt=""
      className="text-3xl p-3 cursor-pointer border-2 border-color2 rounded-full"
    />
  </div>
);

const Taskcomplete = () => {
  return (
    <div className="w-full mainbox-shadow flex justify-center items-center h-full rounded-3xl bg-color2 p-4 mb-4 mx-auto font-manrope">
      <div className="flex flex-col lg:flex-row lg:space-y-1 space-y-5 lg:space-x-4 w-full">
        <div className="flex flex-col lg:my-7 space-y-5 w-full lg:w-1/2">
          <StatisticCard count="500" label="Completed Tasks" />
          <StatisticCard count="10" label="Happy International Clients" />
        </div>
        <div className="flex flex-col space-y-5 w-full lg:w-1/2 font-manrope">
          <Link to={"https://www.behance.net/sahildhadam"}>
            {" "}
            <SocialCard icon={faBehance} count="197" label="Viewers" />
          </Link>
          <Link to={"https://www.instagram.com/sdcreatx.design/"}>
            <SocialCard icon={faInstagram} count="200" label="Followers" />
          </Link>
          <Link to={"https://www.linkedin.com/in/sahil-dhadam-6bb91120b/"}>
            <SocialCard icon={faLinkedinIn} count="300" label="Connections" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Taskcomplete;
