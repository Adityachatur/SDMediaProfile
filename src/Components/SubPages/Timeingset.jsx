import React from "react";
import { Link } from "react-router-dom";
import personalimg from "../Images/Personalimg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Timeingset = () => {
  return (
    <>
      <div className="h-[100vh] bg-color1 text-white text-center flex justify-center">
        <div className="lg:w-4/12 md:w-5/12 sm:w-6/12 w-9/12">
          <img src={personalimg} alt="" className="h-32 rounded-full mx-auto" />
          <h1 className="text-4xl font-bold ">Sahil Dhadam</h1>
          <h1 className="text-lg mx-auto text-gray2">
            CGI Artist | Motion Designer | Graphic Design
            <a
              href="https://cal.com/meeting-schedule"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-blue-600">
                (https://cal.com/meeting-schedule)
              </span>
            </a>
            <br />I am a passionate artist with a strong technical background
            seeking to join your creative team in 2D visualization and 3D
            animation with expertise in Graphic Design & Brand Identity.
            Proficient in Maya, Blender, Photoshop & Adobe Creative Suite.
            <div className="w-full cursor-pointer border-[1px] border-border h-28 mt-5 text-left p-3 bg-gray space-y-1 flex flex-col justify-center timeset">
              <Link
                to="https://cal.com/meeting-schedule/15min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-xl font-semibold text-textcolor">
                  15 Min Meeting
                </p>
                <p className="w-16 bg-color3">
                  <FontAwesomeIcon icon={faClock} />
                  15m
                </p>
              </Link>
            </div>
            <div className="w-full cursor-pointer border-[1px] border-border h-28 border-t-0 text-left p-3 bg-gray space-y-1 flex flex-col justify-center timeset">
              <Link
                to="https://cal.com/meeting-schedule/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-xl font-semibold text-textcolor">
                  30 Min Meeting
                </p>
                <p className="w-16 bg-color3">
                  <FontAwesomeIcon icon={faClock} />
                  30m
                </p>
              </Link>
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Timeingset;
