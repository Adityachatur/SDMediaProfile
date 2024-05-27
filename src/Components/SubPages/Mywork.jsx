import React from "react";
import WorkTogether from "./WorkTogether";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import iphone from "../Images/iphone.jpg";
import s20sqaud from "../Images/s20sqaud.jpg";
import sdmotion from "../Images/sdmotion.jpg";
import rudio from "../Images/raudio.jpg";
import toprightarow from "../Images/2CAOf1Muun0RpvPvaXMPvvcw.svg";

const MyWork = () => {
  return (
    <div className="flex flex-wrap justify-center items-center  lg:space-x-12 space-y-7 lg:space-y-0 lg:mx-auto mx-5">
      <div className="lg:w-[968px] md:w-9/12 sm:w-10/12 w-full shadow-internal bg-color2 lg:h-[350px] h-auto rounded-3xl mt-0">
        <div className="flex flex-col md:flex-row justify-between items-center lg:h-28 h-auto">
          <div className="py-3 lg:pl-5 text-center">
            <h1 className="text-orange text-xl py-2">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              Works
            </h1>
            <h1 className="text-3xl text-textcolor font-semibold">
              My Top 4 Projects
            </h1>
          </div>
          <button className="shedulebutton mr-3 flex items-center justify-center text-xl text-textcolor">
            View All Projects
            <img src={toprightarow} alt="" className="ml-2" />
          </button>
        </div>
        <hr />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7 m-4 h-auto grid-cols-1">
          {[
            { image: s20sqaud, title: "S20 Esports Logo" },
            { image: iphone, title: "Titanium Ad Remake" },
            { image: rudio, title: "Raudio Brand Identity" },
            { image: sdmotion, title: "Dynamic Motion Intro" },
          ].map((item, index) => (
            <div className="h-auto shadow1 rounded-3xl" key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="rounded-t-3xl h-64 w-full object-cover"
              />
              <div className="flex h-16 mx-2 justify-between items-center text-xl text-textcolor">
                <h1>{item.title}</h1>
                <img
                  src={toprightarow}
                  alt=""
                  className="ml-2 px-4 py-2 rounded-3xl shadow1 cursor-pointer hover:bg-zinc-800 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-[460px] md:w-9/12 sm:w-10/12 w-full lg:h-[350px] h-auto rounded-3xl flex justify-center items-center">
        <WorkTogether />
      </div>
    </div>
  );
};

export default MyWork;
