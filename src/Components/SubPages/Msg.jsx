import React, { useState } from "react";
import Footerlogo from "../Images/Footerlogo.png";
import HoverFooterlogo from "../Images/Personalimg.jpg"; // Path to the hover image
import behance from "../Images/BehanceLogo.svg";
import instagram from '../Images/InstagramLogo.svg';
import linkedin from '../Images/linkedin-512.png';

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
    }, 9000);
  };

  return (
    <div className="relative">
      <div
        className="w-56 h-16 rounded-2xl bg-black z-50 flex items-center justify-center cursor-pointer"
        style={{
          backgroundColor: "#000000",
          backgroundImage: "linear-gradient(315deg, #000000 90%, #7f8c8d 100%)",
        }}
      >
        <div className="dropdown relative">
          <button
            className="dropbtn flex items-center justify-center h-16"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={isHovered ? HoverFooterlogo : Footerlogo}
              alt="Footer Logo"
              className="h-16 p-2 rounded-2xl"
            />
            <h1 className="text-base text-textcolor">
              {isHovered ? <span className="text-2xl p-2">SDC MEDIA</span> : "#Update2Upgrade"}
            </h1>
          </button>
          {isHovered && (
            <div className="dropdown-content absolute bg-white mt-2 shadow-lg rounded-lg p-4">
              <a href="#" className="block mb-4">
                <div className="bg-color3 shadow1 rounded-3xl p-2">
                  <div className="flex items-center h-20 text-textcolor">
                    <img src={behance} alt="Behance" className="h-10 mr-4" />
                    <h1>My Creatives at</h1>
                  </div>
                  <p className="text-lg px-5">
                    Behance portfolio dives onto a perfect skillset overview.
                  </p>
                </div>
              </a>
              <a href="#" className="block mb-4">
                <div className="bg-color3 shadow1 rounded-3xl p-2">
                  <div className="flex items-center h-20 text-textcolor">
                    <img src={instagram} alt="Instagram" className="h-10 mr-4" />
                    <h1>Follow at Instagram</h1>
                  </div>
                  <p className="text-lg px-5">
                    Gens showcase platform of client works and recreational projects.
                  </p>
                </div>
              </a>
              <a href="#" className="block">
                <div className="bg-color3 shadow1 rounded-3xl py-5">
                  <div className="flex items-center h-20 text-textcolor justify-start">
                    <img src={linkedin} alt="LinkedIn" className="h-10 mr-4" />
                    <h1>Connect with LinkedIn</h1>
                  </div>
                  <p className="text-lg px-5">
                    Professional works showcase for certain media publishment.
                  </p>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Msg;
