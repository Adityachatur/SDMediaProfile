import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import personal from "../Images/Personalimg.jpg";

const Personaldetails = () => {
  return (
    <div className="w-full bg-color2 mainbox-shadow rounded-3xl h-full space-y-3 lg:p-4 p-2 font-manrope flex flex-col justify-center items-center">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <img
          src={personal}
          alt="Sahil Dhadam"
          className="xl:h-48 xl:w-52 lg:h-48 lg:w-52 h-36 w-32 rounded-lg lg:m-3 mb-4 lg:mb-0"
        />
        <div className="ml-0 lg:ml-3 lg:space-y-4 space-y-2 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start">
            <h3 className="bg-gray-600 h-8 lg:px-5 lg:py-6 py-3 px-2 lg:text-xl text-base flex items-center justify-center lg:w-10/12 w-full mt-4 text-textcolor font-semibold rounded-full shadow1">
              <span className="h-3 w-3 bg-green rounded-full p-2 mr-2"></span>
              Available for work
            </h3>
          </div>
          <h1 className="lg:text-3xl text-xl text-textcolor font-semibold mt-2 sm:mt-4">
            Sahil Dhadam
          </h1>
          <div className="flex items-center justify-center lg:justify-start">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-iconcolor lg:h-6 h-4"
            />
            <span className="text-iconcolor lg:text-xl text-sm ml-2">
              sahildhadam.sd@gmail.com
            </span>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-iconcolor lg:h-6 h-4"
            />
            <span className="text-iconcolor lg:text-xl text-sm ml-2">
              Pune, Maharashtra-410501.
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto bg-color2 rounded-2xl shadow-md py-2 lg:px-6 px-2 mt-4">
        <section>
          <header>
            <h1 className="text-2xl p-2 font-semibold text-textcolor">
              About Me
            </h1>
          </header>
          <p className="text-iconcolor lg:text-xl text-md text-left">
            I am a passionate artist with a strong technical background seeking
            to join your creative team in 2D visualization and 3D animation. I
            have expertise in Graphic Design & Brand Identity and am proficient
            in tools like Maya, Blender, Photoshop, and Adobe Creative Suite.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Personaldetails;
