import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WorkExp = () => {
  const experiences = [
    {
      role: "Founder & Multimedia Designer",
      company: "SD CREATIONS",
      type: "MULTIMEDIA",
      duration: "July 2020 - Present",
      description:
        "As a freelancer at SD Creations & Multimedia, I spearheaded client management and creative thinking for renowned brands. Key responsibilities included crafting captivating graphic designs, logos, brand identities, and motion graphics.",
      position: "lg:order-1 order-2",
      labelPosition: "lg:order-2 order-1",
      dotPosition: "lg:top-[170px] md:top-[30px] top-10",
    },
    {
      role: "Freelance Motion Graphic Designer",
      company: "Motion Designer",
      type: "Freelancing",
      duration: "Feb 2022 - Present",
      description:
        "As a Freelance Motion Artist since 2 years, I excel in creating visually stunning motion graphics and character animations.",
      position: "lg:order-3 order-4",
      labelPosition: "lg:order-4 order-3",
      dotPosition: "lg:top-[535px] md:top-[460px] top-[460px]",
    },
    {
      role: "College Magazine Designer",
      company: "Freelancer",
      type: "freelance.com",
      duration: "Sept 2022 - Oct 2023",
      description:
        "MITACSC Head Magazine Visual Designer. In my role as the Visual Designer of Annual College Magazine for academic year 2022-23, I handled studies and worked part-time on a 300-page magazine design team where I was in charge of six members. Using Adobe Photoshop, Adobe Illustrator, and Corel Suite, this journey has helped me develop leadership qualities and effective teamwork.",
      position: "lg:order-5 order-6",
      labelPosition: "lg:order-6 order-5",
      dotPosition: "lg:top-[900px] md:top-[890px] top-[895px]",
    },
  ];

  return (
    <div className="w-full bg-color2 rounded-3xl lg:h-[350px] h-auto space-y-3 lg:p-4 p-2 mb-4">
      <div className="text-center py-3 space-x-2 text-orange">
        <FontAwesomeIcon icon={faSuitcase} className="text-2xl" />
        <span className="text-xl font-semibold">Work Experience</span>
      </div>
      <hr className="w-full text-color1" />
      <div className="relative overflow-auto bg-color2 grid lg:grid-cols-2 grid-cols-1 gap-5 no-scrollbar" style={{ maxHeight: "260px" }}>
        <div className="absolute top-0 bottom-0 lg:left-1/2 left-3 transform -translate-x-1/2 border-r-2 lg:h-[1150px] h-[1050px] lg:ml-10 ml-3 border-gray2 z-50">
          {experiences.map((exp, index) => (
            <div key={index} className={`absolute ${exp.dotPosition} left-0 transform -translate-x-1/2 bg-textcolor w-4 h-4 rounded-full`} />
          ))}
        </div>

        {experiences.map((exp, index) => (
          <React.Fragment key={index}>
            <div className={`lg:w-full w-10/12 lg:mx-1 mx-auto bg-color3 rounded-3xl shadow1 lg:h-[350px] h-[330px] ${exp.position}`}>
              <div className="text-textcolor text-center space-y-3 my-3">
                <h1 className="lg:text-2xl text-lg">{exp.role}</h1>
                <h1 className="lg:text-xl text-base">
                  {exp.duration.split(" - ")[0]}{" "}
                  <span className="px-2 lg:text-lg text-base text-iconcolor">To</span>{" "}
                  {exp.duration.split(" - ")[1]}
                </h1>
              </div>
              <hr />
              <p className="lg:text-lg text-base text-textcolor text-center my-4 lg:px-2 lg:p-4 px-2">{exp.description}</p>
            </div>
            <div className={`lg:w-9/12 w-6/12 mr-auto lg:ml-16 ml-10 bg-color2 flex flex-col ${exp.labelPosition}`}>
              <div className="text-textcolor text-center flex flex-col justify-center rounded-3xl shadow1 space-y-3 lg:p-3 p-2 mr-2 lg:h-28 h-24 my-auto">
                <h1 className="lg:text-2xl text-lg font-semibold">
                  {exp.company}
                  <br />
                  <span className="text-iconcolor text-base">{exp.type}</span>
                </h1>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WorkExp;
