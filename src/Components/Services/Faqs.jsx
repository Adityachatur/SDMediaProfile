import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const Faqs = () => {
  const cardData = [
    {
      imageUrl: "path/to/trainer1.jpg", // Update with actual image paths
      question: "Can you work with clients remotely?",
      content:
        "Absolutely! I have experience working with clients from all around the world. I ensure seamless collaboration regardless of geographical location.",
    },
    {
      imageUrl: "path/to/trainer2.jpg",
      question:
        "How long does it typically take to complete a web design project?",
      content:
        "The timeline for each project varies depending on its scope and complexity. Factors such as the number of pages, functionalities required.",
    },
    {
      imageUrl: "path/to/trainer2.jpg",
      question: "Do you offer website maintenance services?",
      content:
        "Yes, I offer website maintenance services to ensure your website remains up to date, secure, and optimized.",
    },
    {
      imageUrl: "path/to/trainer4.jpg",
      question: "Will my website be mobile-friendly?",
      content:
        "Absolutely! Mobile responsiveness is a top priority in today's digital landscape. I design and develop websites that are fully responsive.",
    },
    {
      imageUrl: "path/to/trainer5.jpg",
      question:
        "Can you integrate third-party tools or platforms into my website?",
      content:
        "Yes, I have experience integrating various third-party tools, plugins, and platforms into websites.",
    },
  ];

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots", // Use custom class for dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false, // Change to horizontal in mobile view
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto lg:h-[350px] h-[500px]  rounded-3xl shadow1">
      <div className="flex justify-center items-center text-2xl space-x-2 lg:h-28 h-20 ">
        <FontAwesomeIcon icon={faQuestionCircle} className="text-textcolor" />
        <span className="text-orange">Faqs</span>
      </div>{" "}
      <hr />
      <div className="bg-color2 pt-6 pb-12 px-4  lg:pb-0 lg:px-8 lg:h-auto md:h-[320px] h-auto p-4 relative">
        <Slider {...settings}>
          {cardData.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-color2 shadow1 rounded-3xl w-full text-left lg:h-[190px] md:h-[170px] h-auto mt-2">
                <div className="text-iconcolor text-lg font-bold mb-2 py-4 px-6">
                  {item.question}
                </div>
                <hr />
                <div className="text-gray2 text-lg lg:text-xl p-6 mb-4">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Faqs;
