import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import clientfemale from "../Images/clientfemale.png";

const Testimonials = () => {
  const sliderRef = useRef(null);

  const cardData = [
    {
      name: "Shweta ~ Australia ",
      content:
        "Pragadesh is a web design genius! He captured my brand perfectly and created a website that truly represents who I am.",
      img: clientfemale,
      position: "Client",
    },
    {
      name: "Monika ~ Hong Kong ",
      content:
        "Collaborative atmosphere with creative idea exchanges... Really appreciate!!",
      img: clientfemale,
      position: "IT Professional",
    },
    {
      name: "Gunjan ~ Agra ",
      content:
        "Lovely cinematic story scripting & fantastic illustrations, Thanks a lot!",
      img: clientfemale,
      position: "Architecture",
    },
    {
      name: "Abhilash ~ Pune ",
      content: "Amazing logo with exact concept thinking, mind-blowing...!",
      img: "",
      position: "Entrepreneur",
    },
    {
      name: "Mahesh Dubey",
      content:
        "Up to the mark brand design with the appropriate content and visuals. Satisfied with the work!",
      img: "",
      position: "Architecture",
    },
  ];

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="sm:w-full bg-color2 rounded-3xl lg:h-[350px] lg:w-[30vw] lg:mx-auto h-auto p-2 lg:mb-5 mx-5 relative font-manrope">
        <div className="text-center py-5 space-x-2 text-orange">
          <FontAwesomeIcon icon={faUser} className="text-2xl" />
          <span className="text-xl font-semibold">Testimonials</span>
        </div>
        <hr className="text-black" />
        <div className="bg-color2 lg:h-[250px] md:h-[300px] h-auto p-6 relative">
          <Slider {...settings} ref={sliderRef}>
            {cardData.map((item, index) => (
              <div key={index} className="relative">
                {/* Testimonial Card */}
                <div className="bg-color2 shadow1 rounded-3xl w-full text-left lg:h-[190px] md:h-[170px] h-auto mt-16">
                  <div className="text-iconcolor text-xl font-bold mb-2 py-4 px-6">
                    {item.content}
                  </div>
                  <hr />
                  <div className="text-gray2 text-lg lg:text-xl flex flex-wrap justify-between items-center h-28 mx-4">
                    <img
                      src={item.img}
                      alt=""
                      className="lg:w-20 lg:h-20 w-16 h-16 bg-red-500 rounded-full bg-contain"
                    />
                    <h1 className="lg:text-[18px] text-lg text-textcolor lg:w-[200px] text-center">
                      {item.name}
                    </h1>
                    <h2 className="text-lg text-iconcolor lg:block hidden">
                      {item.position}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          {/* Arrow Buttons Outside Slider */}
          <div className="absolute top-[35px]  -translate-y-1/2 lg:left-[75px] -left-1  lg:right-[75px]  -right-1 flex justify-between px-6">
            <button
              className="custom-prev-arrow cursor-pointer flex justify-center items-center"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="lg:text-2xl text-xl text-iconcolor "
              />
            </button>
            <button
              className="custom-next-arrow cursor-pointer flex justify-center items-center"
              onClick={() => sliderRef.current.slickNext()}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="lg:text-2xl text-xl text-iconcolor font-light"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
