import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const workExperiences = [
  {
    id: 1,
    role: "Founder & Multimedia Designer",
    durationstart: "July 2020",
    durationend: "Present",
    description:
      "As a freelancer at SD Creations & Multimedia, I spearheaded client management and creative thinking for renowned brands. Key responsibilities included crafting captivating graphic designs, logos, brand identities, and motion graphics.",
    company: "SD CREATIONS",
    subtitle: "MUTIMEDIA",
  },
  {
    id: 2,
    role: "Freelance Motion Graphic Designer",
    durationstart: "Feb 2022",
    durationend: "Present",
    description:
      "As a Freelance Motion Artist since 2 years , I excel in creating visually stunning motion graphics and character animations.",
    company: "Motion Designer",
    subtitle: "Freelancing",
  },
  {
    id: 3,
    role: "College Magazine Designer",
    durationstart: "Sept 2022",
    durationend: "Oct 2023",
    description:
      "MITACSC Head Magazine Visual Designer In my role as the Visual Designer of Annual College Magazine for academic year 2022-23, when I used to handle my studies and work part time on a magazine design 300 pages team where I am in charge of six members. During the design production softwares such as Adobe Photoshop, Adobe illustrator and Corel Suite were used. The whole journey has been a roller coaster ride and a brave one, which has helped me to develop leadership qualities that help to further effective teamwork.",
    company: "Freelancer",
    subtitle: "freelance.com",
  },
];

const WorkExperienceItem = ({ experience, orderClass }) => (
  <div
    className={`lg:h-auto lg:w-full w-10/12 lg:ml-0 ml-10 shadow1 text-white p-2 my-2 rounded-3xl bg-color2 ${orderClass}`}
  >
    <div className="text-textcolor text-center space-y-3 my-3">
      <h1 className="lg:text-2xl text-lg">{experience.role}</h1>
      <h1 className="lg:text-xl text-base">
        {experience.durationstart} <span className="text-gray2 mx-1">to</span>{" "}
        {experience.durationend}
      </h1>
    </div>
    <hr />
    <p className="lg:text-lg text-base text-textcolor text-center my-4 lg:px-2 lg:p-4 px-2">
      {experience.description}
    </p>
  </div>
);

const CompanyBanner = ({ experience, orderClass }) => (
  <div
    className={`lg:h-[400px] lg:w-8/12 w-6/12 ml-10 lg:ml-auto mr-auto lg:mr-1  text-white p-2 my-2 flex justify-center items-center relative ${orderClass}`}
  >
    <div className="h-28 w-full relative">
      <div className="text-textcolor text-center flex flex-col justify-center rounded-3xl shadow1 space-y-3  p-1 h-28 my-auto">
        <h1 className="lg:text-2xl text-lg font-semibold">
          {experience.company}
          <br />
          <span className="text-iconcolor text-base">
            {experience.subtitle}
          </span>
        </h1>
      </div>
      <div className="absolute lg:left-[-50px] left-[-35px] right-0 bottom-0 top-[50%] transform -translate-y-1/2 w-7 h-7 rounded-full bg-white z-20 flex items-center border-4 border-gray2 justify-center">
        {experience.id}
      </div>
    </div>
    <div
      className="absolute top-0 bottom-0 lg:left-[-34px] left-[-18px] w-[2px]  lg:h-[110%] md:h-[43vh] h-[70vh] "
      style={{ backgroundColor: "#383838" }}
    ></div>
  </div>
);

const WorkExp = () => {
  return (
    <div className="w-full h-full bg-color2 rounded-3xl space-y-3 lg:p-4 p-2 mb-4 font-manrope mainbox-shadow">
      <div className="text-center py-3 space-x-2 text-orange">
        <FontAwesomeIcon icon={faSuitcase} className="text-2xl" />
        <span className="text-xl font-semibold">Work Experience</span>
      </div>
      <hr className="w-full text-color1" />

      <div className="lg:overflow-auto  lg:h-[270px] h-auto no-scrollbar">
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full mx-auto my-4">
          <WorkExperienceItem
            experience={workExperiences[0]}
            orderClass="order-2 lg:order-1"
          />
          <CompanyBanner
            experience={workExperiences[0]}
            orderClass="order-1 lg:order-2"
          />

          <WorkExperienceItem
            experience={workExperiences[1]}
            orderClass="order-4 lg:order-3"
          />
          <CompanyBanner
            experience={workExperiences[1]}
            orderClass="order-3 lg:order-4"
          />

          <WorkExperienceItem
            experience={workExperiences[2]}
            orderClass="order-6 lg:order-5"
          />
          <CompanyBanner
            experience={workExperiences[2]}
            orderClass="order-5 lg:order-6"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
