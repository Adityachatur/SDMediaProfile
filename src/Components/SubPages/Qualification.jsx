import {
  faAward,
  faBookReader,
  faEarthAmerica,
  faHourglassEnd,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg from "./awardsvg.svg";

const Qualification = () => {
  const cardData = [
    {
      name: "Top Designer",
      content: "MIT ACSC 2023-24 Magazine Designer",
    },
    {
      name: "Best Designer",
      content: "MIT ACSC 2023-24 Magazine Designer",
    },
    {
      name: "Top 10 UI",
      content: "MIT ACSC 2023-24 Magazine Designer",
    },
  ];

  const settings = {
    dots: true,
   
    infinite: true,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="sm:w-full bg-color2 rounded-3xl lg:h-[350px] h-auto space-y-3 lg:p-4 p-2 mb-4">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5 space-y-1">
        <div className="w-full h-52 shadow1 text-textcolor p-3 rounded-3xl bg-color2">
          <div className="text-center py-3 space-x-2 text-orange">
            <FontAwesomeIcon icon={faBookReader} className="text-2xl" />
            <span className="text-xl font-semibold">Education</span>
          </div>
          <hr className="w-full text-color1" />
          <div className="text-center text-xl py-4 text-iconcolor space-y-2">
            <span className="text-2xl font-semibold text-textcolor">
              Bachelors in Animation
            </span>
            <h1>MIT ACSC, Alandi, Pune</h1>
            <h1>Year Of Passing: 2025</h1>
          </div>
        </div>
        <div className="w-full h-52 shadow1 text-textcolor p-3 rounded-3xl bg-color2">
          <div className="text-center py-2 space-x-2 text-orange">
            <FontAwesomeIcon icon={faAward} className="text-2xl" />
            <span className="text-xl font-semibold">Awards</span>
          </div>
          <hr className="w-full text-color1" />
          <div>
            <Slider {...settings}>
              {cardData.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="mx-1 p-2 h-2/3 shadow-md flex flex-col items-center justify-center">
                    <div className="text-white text-2xl font-bold">
                      {item.name}
                    </div>
                    <div className="text-white text-base text-center">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-full lg:h-48 h-36 shadow1 text-textcolor p-3 rounded-3xl bg-color2">
          <div className="text-center py-3 space-x-2 text-orange">
            <FontAwesomeIcon icon={faEarthAmerica} className="text-2xl" />
            <span className="text-xl font-semibold">Language</span>
          </div>
          <hr className="w-full text-color1" />
          <div className="flex space-x-1 text-gray1 lg:h-24 space-y-2 text-xl justify-center items-center text-center flex-wrap">
            <h1 className="bg-gray py-2 px-3 rounded-2xl">English</h1>
            <h1 className="bg-gray py-2 px-3 rounded-2xl">Marathi</h1>
            <h1 className="bg-gray py-2 px-3 rounded-2xl">Hindi</h1>
          </div>
        </div>
        <div className="w-full lg:h-48 h-36 shadow1 text-textcolor p-3 rounded-3xl bg-color2">
          <div className="text-center py-3 space-x-2 text-orange">
            <FontAwesomeIcon icon={faHourglassEnd} className="text-2xl" />
            <span className="text-xl font-semibold">Available (IST)</span>
          </div>
          <hr className="w-full text-color1" />
          <div className="flex space-x-3 text-gray1 lg:h-24 space-y-2 text-xl justify-center items-center text-center flex-wrap">
            <h1 className="bg-gray py-2 px-3 rounded-2xl">9 AM</h1>
            <h1 className="">TO</h1>
            <h1 className="bg-gray py-2 px-3 rounded-2xl">10 PM</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;