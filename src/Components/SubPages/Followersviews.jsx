import React from "react";
import followers from "../SubPages/followers.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faSmile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import instagram from "../Images/InstagramLogo.svg";
import behance from "../Images/BehanceLogo.svg";
import Youtube from "../Images/Youtube.svg";
import Twitter from "../Images/download (1).svg";
import Instagram from "../Images/Instagram.svg";
import Pinterest from "../Images/pinterest.svg";
import tiktok from "../Images/Tiktok.svg";
import snapchat from "../Images/snapchat.svg";
import discord from "../Images/Discord.svg";
import toprightarow from "../Images/2CAOf1Muun0RpvPvaXMPvvcw.svg";
import { Link } from "react-router-dom";
const Followersviews = () => {
  return (
    <div>
      <div className="sm:w-full rounded-3xl lg:h-[350px] h-auto  px-4 relative">
        <div className="h-44 sm:h-40 md:h-52 lg:h-52 relative">
          <img
            src={followers}
            alt="Followers"
            className="object-contain h-full absolute left-0 right-0 top-0 bottom-0 z-10"
          />
          <span className="absolute left-0 right-0 bottom-0 text-xl lg:top-8 top-3 text-orange z-0">
            <marquee behavior="" direction="left" hspace="1">
              <div className="flex space-x-5 lg:h-[40px] md:h-20 h-16">
                <img src={Youtube} alt="" />
                <img src={Twitter} alt="" />
                <img src={Instagram} alt="" />
                <img src={Pinterest} alt="" />
                <img src={Youtube} alt="" />
                <img src={Twitter} alt="" />
                <img src={Instagram} alt="" />
                <img src={Pinterest} alt="" />
              </div>
            </marquee>
          </span>
          <div className=" absolute left-0 right-0 top-0 bottom-0 z-20">
            <div className="text-orange text-xl flex items-end h-20 p-4">
              <h1>
                <FontAwesomeIcon icon={faUser} /> My Clients
              </h1>
            </div>
          </div>
          <span className="flex justify-center h-1/2 border-b-2 border-gray" />
          <div className="text-white absolute left-0 right-0 top-100 bottom-4 z-20">
            <div className="text-orange text-xl flex items-end h-20 p-4">
              <h1>
                <span className="lg:text-5xl text-4xl text-textcolor font-semibold">
                  200+{" "}
                </span>{" "}
                <span className="lg:text-lg text-base">
                  Happy Clients Over…
                </span>
              </h1>
            </div>
          </div>
          <span className="absolute left-0 right-0 bottom-0 text-xl top-[100px] text-orange z-0 pl-32">
            <marquee behavior="" scrollamount="5" direction="right" hspace="20">
              <div className="flex space-x-5 lg:h-[40px] md:20 h-14">
                <img src={tiktok} alt="" />
                <img src={snapchat} alt="" />
                <img src={discord} alt="" />
                <img src={tiktok} alt="" />
                <img src={snapchat} alt="" />
                <img src={discord} alt="" />
              </div>
            </marquee>
          </span>
        </div>
        <div className="grid grid-cols-2 gap-7   ">
          <div className="w-full h-52 lg:mt-10 my-5 bg-color2 text-textcolor rounded-3xl shadow1 p-2 lg:p-4 flex flex-col justify-center space-y-4">
            <div className="flex flex-row w-full lg:w-9/12 mx-auto">
              <img
                src={instagram}
                alt=""
                className="lg:h-16 h-14 lg:w-16 p-2 border-2 border-gray shadow1 rounded-full"
                style={{
                  background:
                    "linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7)",
                }}
              />
              <div className="ml-2">
                <span className="lg:text-3xl text-2xl font-semibold text-textcolor">
                  200+{" "}
                </span>
                <br />
                <p className="text-zinc-400">Followers</p>
              </div>
            </div>

            <Link to={"https://www.instagram.com/sdcreatx.design/"}>
              {" "}
              <button className="border-2 text-xl border-black py-2 lg:py-3  lg:px-1 w-full lg:w-9/12 flex justify-center  mx-auto rounded-3xl shadow1 transition-all duration-300 hover:bg-gray">
                Follow Me
                <img
                  src={toprightarow}
                  alt=""
                  className="text-iconcolor ml-2 text-2xl"
                />
              </button>
            </Link>
          </div>

          <div className="w-full h-52 lg:mt-10 my-5 bg-color2 text-textcolor rounded-3xl shadow1 p-2 lg:p-4 flex flex-col justify-center space-y-4">
            <div className="flex flex-row w-full lg:w-9/12 mx-auto">
              <img
                src={behance}
                alt=""
                className="lg:h-16 h-14 lg:w-16 p-2 border-2 border-gray shadow1 rounded-full"
                style={{ background: "#1769ff" }}
              />
              <div className="ml-2">
                <span className="lg:text-3xl text-2xl font-semibold text-textcolor">
                  197+{" "}
                </span>
                <br />
                <p className="text-zinc-400">Followers</p>
              </div>
            </div>
            <Link
              to={
                "https://auth.services.adobe.com/en_US/deeplink.html#/social-only"
              }
            >
              {" "}
              <button className="border-2 text-xl border-black py-2 lg:py-3  lg:px-1 w-full lg:w-9/12 flex justify-center  mx-auto rounded-3xl shadow1 transition-all duration-300 hover:bg-gray">
                Check Out
                <img
                  src={toprightarow}
                  alt=""
                  className="text-iconcolor ml-2 text-2xl"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Followersviews;
