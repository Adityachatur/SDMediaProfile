import React from "react";
import img from "../Images/first.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowPointer,
  faCalendar,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const WorkTogether = () => {
  return (
    <div className="sm:w-full bg-color2 mainbox-shadow rounded-3xl h-full  space-y-3 p-2 relative font-manrope">
      <img src={img} alt="" className="w-full rounded-3xl lg:h-80" />
      <hr />
      <div className="text-white w-11/12 mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-items-center py-4 gap-4">
          <button className="shedulebutton flex items-center justify-center space-x-2 w-[250px] lg:w-[180px] text-xl">
            <FontAwesomeIcon className="text-orange" icon={faCalendar} />
            <span>Schedule Call</span>
          </button>
          <button className="shedulebutton flex items-center justify-center lg:w-[180px] w-[250px] space-x-2 px-4 py-2 text-xl">
            <FontAwesomeIcon className="text-orange" icon={faEnvelope} />
            <span>Mail Me</span>
          </button>
        </div>
      </div>
      <div className="bounce-box flex flex-col items-center">
        <FontAwesomeIcon
          className="text-orange text-3xl bounce-icon absolute left-[-10px] top-[-20px]"
          icon={faArrowPointer}
        />
        <p className="lg:text-xl text-base">Contact Me</p>
      </div>
    </div>
  );
};

export default WorkTogether;
