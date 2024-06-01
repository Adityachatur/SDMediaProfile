import React, { useState } from "react";
import Footerlogo from "../Images/Footerlogo.png";
import HoverFooterlogo from "../Images/Personalimg.jpg"; // Path to the hover image
import behance from "../Images/BehanceLogo.svg";
import instagram from "../Images/InstagramLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Msg = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Handles mouse enter event
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Handles mouse leave event with a delay
  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 5000);
  };

  return (
    <div className="relative font-manrope">
      <div className="lg:w-60 w-7/12 lg:h-16 h-14 rounded-2xl shadow1 bg-red-300 z-50 flex items-center justify-center cursor-pointer update2upgrade">
        <div className="dropdown relative">
          <button
            className="dropbtn flex items-center justify-center h-16"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={isHovered ? HoverFooterlogo : Footerlogo}
              alt="Footer Logo"
              className="lg:h-16 h-12 lg:p-2 p-1 rounded-2xl"
            />
            <h1 className="text-textcolor lg:text-lg text-[14px]">
              {isHovered ? (
                <span className="lg:text-xl text-base lg:p-2">SDC MEDIA</span>
              ) : (
                "#Update2Upgrade"
              )}
            </h1>
          </button>
          {isHovered && (
            <div className="dropdown-content absolute bg-white mt-2 shadow-lg rounded-lg p-4">
              <button className="block w-full text-left lg:mb-4 mb-2 focus:outline-none">
                <div className="bg-color3 shadow1 rounded-3xl p-2">
                  <div className="flex items-center lg:h-20 h-12 mb-2 text-textcolor">
                    <img src={behance} alt="Behance" className="h-10 ml-4" />
                    <h1 className="lg:text-xl font-semibold text-[16px] ml-3">
                      My Creatives at
                    </h1>
                  </div>
                  <p className="lg:text-lg text-[14px] lg:px-5 px-2 text-gray2">
                    Behance portfolio dives onto a perfect skillset overview.
                  </p>
                </div>
              </button>
              <button className="block w-full text-left lg:mb-4 mb-2 focus:outline-none">
                <div className="bg-color3 shadow1 rounded-3xl p-2">
                  <div className="flex items-center lg:h-20 h-12 mb-2 text-textcolor">
                    <img
                      src={instagram}
                      alt="Instagram"
                      className="h-10 ml-4"
                    />
                    <h1 className="lg:text-xl font-semibold text-[16px] ml-3">
                      Follow at Instagram
                    </h1>
                  </div>
                  <p className="lg:text-lg text-[14px] text-gray2 lg:px-5 px-2">
                    Gens showcase platform of client works and recreational
                    projects.
                  </p>
                </div>
              </button>
              <button className="block w-full text-left focus:outline-none">
                <div className="bg-color3 shadow1 rounded-3xl p-2">
                  <div className="flex items-center lg:h-20 h-12 mb-2 text-textcolor justify-start">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="h-10 ml-4"
                    />
                    <h1 className="lg:text-xl text-[16px] font-semibold ml-3">
                      Connect with LinkedIn
                    </h1>
                  </div>
                  <p className="lg:text-lg text-[14px] text-gray2 lg:px-5 px-2">
                    Professional works showcase for certain media publishment.
                  </p>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Msg;
