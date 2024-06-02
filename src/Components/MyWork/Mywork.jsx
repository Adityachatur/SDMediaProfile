import React from "react";
import WorkTogether from "../SubPages/WorkTogether";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import iphone from "../Images/iphone.jpg";
import s20sqaud from "../Images/s20sqaud.jpg";
import sdmotion from "../Images/sdmotion.jpg";
import rudio from "../Images/raudio.jpg";
import toprightarow from "../Images/2CAOf1Muun0RpvPvaXMPvvcw.svg";

const MyWork = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center my-4 xl:flex-row  h-full lg:mx-auto font-manrope">
      <div className="lg:w-[64vw] w-full ml-6 mr-3 mt-1 shadow-internal bg-color2 xl:h-auto lg:h-full h-auto rounded-3xl mb-4 lg:mb-0">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center lg:h-28 h-auto">
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
      <div className="lg:w-[32vw] w-full xl:h-auto lg:-auto h-auto rounded-3xl flex justify-center mt-1 lg:ml-2 items-center">
        <WorkTogether />
      </div>
    </div>
  );
};

export default MyWork;
