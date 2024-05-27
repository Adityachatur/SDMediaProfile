import React from "react";
import WorkTogether from "./WorkTogether";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faTrophy,
  faChartLine,
  faUsers,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const benefitsData = [
  {
    icon: faTrophy,
    percentage: 95,
    description: "Exceptional Project Success Rate",
  },
  {
    icon: faUsers,
    percentage: 97,
    description: "Maintained a client satisfaction rate",
  },
  {
    icon: faGlobe,
    percentage: 98,
    description: "Ensured cross-browser compatibility",
  },
  {
    icon: faGlobe,
    percentage: 98,
    description: "Ensured cross-browser compatibility",
  },
  {
    icon: faGlobe,
    percentage: 98,
    description: "Ensured cross-browser compatibility",
  },
];

const BenefitCard = ({ icon, percentage, description }) => (
  <div className="flex flex-row lg:mx-10 mx-0 my-2 justify-between items-center">
    <div className="text-2xl text-center font-bold text-textcolor p-4 rounded-full shadow w-16 m-4 h-16">
      <FontAwesomeIcon icon={icon} />
    </div>
    <div className=" w-8 h-8 bg-red-50 rounded-full flex justify-center">
      <div className="w-[2px] bg-red-50 h-screen justify-center"></div>
    </div>
    <div className="text-2xl flex justify-start text-center font-bold text-textcolor rounded-3xl h-20 shadow1 m-4 w-9/12">
      <div className="items-center flex justify-center w-[100px] rounded-l-3xl shadow1 lg:p-4">
        <span className="lg:text-5xl text-3xl font-bold text-textcolor">
          {percentage}
          <span className="lg:text-4xl text-3xl font-semibold text-orange">
            %
          </span>
        </span>
      </div>
      <div className="flex justify-start items-center ml-2 lg:text-2xl md:text-lg text-base font-semibold text-gray2">
        {description}
      </div>
    </div>
  </div>
);

const Benefits = () => (
  <div>
    <div className="flex flex-wrap justify-center items-center mx-5 lg:space-x-14 space-y-7">
      <div className="lg:w-[968px] md:w-9/12 sm:w-10/12 w-full shadow-internal bg-color2 lg:h-[350px] h-auto rounded-3xl mt-7 relative">
        <div className="text-center h-20 flex justify-center items-center py-3 space-x-2 text-orange">
          <FontAwesomeIcon icon={faBolt} className="text-2xl" />
          <span className="text-xl font-semibold">Benefits</span>
        </div>
        <hr className="w-full" />
        <div className="flex flex-col h-[300px] overflow-auto no-scrollbar">
          <marquee direction="up">
            {[...Array(100)].map((_, index) =>
              benefitsData.map((benefit, i) => (
                <BenefitCard
                  key={`${index}-${i}`}
                  icon={benefit.icon}
                  percentage={benefit.percentage}
                  description={benefit.description}
                />
              ))
            )}
          </marquee>
        </div>
        {/* <div className="vertical-line">
          <div className="middle-dot"></div>
        </div> */}
      </div>
      <div className="lg:w-[460px] md:w-9/12 sm:w-10/12 w-full lg:h-[350px] h-auto rounded-3xl flex justify-center items-center">
        <WorkTogether />
      </div>
    </div>
  </div>
);

export default Benefits;
