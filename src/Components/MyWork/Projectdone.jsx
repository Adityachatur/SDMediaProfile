import {
  faAward,
  faBriefcase,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Projectdone = () => {
  const stats = [
    { value: "500", label: "Completed Tasks", icon: faSmile },
    { value: "200", label: "Happy Client", icon: faSmile },
    { value: "03", label: "Years of Experience", icon: faBriefcase },
    { value: "10", label: "International Clients", icon: faAward },
  ];

  return (
    <div className="w-full text-textcolor rounded-3xl h-full px-4 bg-color2 mainbox-shadow font-manrope py-5 ">
      <div className="grid lg:grid-cols-2  grid-cols-2  gap-4   mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="w-full mx-auto h-56 mt-2 item-center  bg-color2 text-textcolor rounded-3xl shadow1  flex flex-col justify-center"
          >
            <h1 className="lg:text-7xl text-5xl font-semibold text-center flex justify-center items-center my-5">
              {stat.value} <span className="text-orange">+</span>
            </h1>
            <hr className="text-black mt-3 mb-2" />
            <p className="text-center lg:text-xl text-sm text-orange flex justify-center items-center">
              <FontAwesomeIcon
                icon={stat.icon}
                className="text-orange lg:mr-2 mr-1"
              />
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projectdone;
