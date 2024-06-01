import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import personal from "../Images/Personalimg.jpg";

const Personaldetails = () => {
  return (
    <div className="sm:w-full bg-color2 mainbox-shadow  rounded-3xl lg:h-[350px] h-auto space-y-3 lg:p-4 p-2 mb-4 font-manrope">
      <div className="flex">
        <img
          src={personal}
          alt=""
          className="lg:h-48 lg:w-52 h-36 w-32 rounded-lg lg:m-3 bg-red-300"
        />
        <div className="ml-2 sm:ml-3 space-y-2">
          <h3 className="bg-gray-600 h-8 lg:px-5 lg:py-6 py-3 px-2 lg:text-xl text-base flex items-center justify-center lg:w-10/12 md:10/12 w-full mt-4 text-textcolor font-semibold rounded-full shadow1">
            <span className="h-3 w-3 bg-green rounded-full mr-2"></span>
            Available for work
          </h3>
          <h1 className="lg:text-3xl text-xl text-textcolor font-semibold mt-2 sm:mt-4">
            Sahil Dhadam
          </h1>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-iconcolor lg:h-6 h-3"
            />
            <span className="text-iconcolor lg:text-xl text-[12px] ml-2">
              sahildhadam.sd@gmail.com
            </span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-iconcolor lg:h-6 h-4"
            />
            <span className="text-iconcolor lg:text-xl text-[12px] ml-2">
              Pune, Maharashtra-410501.
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto bg-color2 rounded-2xl shadow1 py-2 lg:px-6 px-2 mt-4">
        <dl>
          <h1 className="text-2xl p-2 font-semibold text-textcolor">
            About Me
          </h1>
          <dd className="text-iconcolor lg:text-xl text-md text-left">
            I am a passionate artist with a strong technical background seeking
            to join your creative team in 2D visualization and 3D animation. I
            have expertise in Graphic Design & Brand Identity and am proficient
            in tools like Maya, Blender, Photoshop, and Adobe Creative Suite.
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Personaldetails;
