import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WorkExp = () => {
  return (
    <>
      <div className="w-full bg-color2 rounded-3xl lg:h-[350px] h-auto space-y-3 lg:p-4 p-2 mb-4">
        <div className="text-center py-3 space-x-2 text-orange">
          <FontAwesomeIcon icon={faSuitcase} className="text-2xl" />
          <span className="text-xl font-semibold">Work Experience</span>
        </div>
        <hr className="w-full text-color1" />
        <div
          className="relative overflow-auto bg-color2 grid lg:grid-cols-2  grid-cols-1 gap-5  no-scrollbar"
          style={{ maxHeight: "260px" }}
        >
          {/* Vertical line with dots */}
          <div className="absolute top-0 bottom-0 lg:left-1/2 left-3 transform -translate-x-1/2 border-r-2 lg:h-[1150px]  h-[1050px] lg:ml-10 ml-3 border-gray2 z-50">
            {/* Dot 1 */}
            <div className="absolute lg:top-[150px] md:top-[30px] top-10 left-0 transform -translate-x-1/2  bg-textcolor  border-gray w-4 h-4 rounded-full"></div>
            {/* Dot 2 */}
            <div className="absolute lg:top-[460px] md:top-[460px] top-[460px]  left-0 transform -translate-x-1/2 bg-textcolor w-4 h-4 rounded-full"></div>
            {/* Dot 3 */}
            <div className="absolute lg:top-[880px] md:top-[890px]  top-[895px] left-0 transform -translate-x-1/2 bg-textcolor w-4 h-4 rounded-full"></div>
          </div>
          {/* End of vertical line with dots */}
          <div className="lg:w-full w-10/12 lg:mx-1 mx-auto  bg-color3 rounded-3xl shadow1 lg:h-[300px] h-[330px]  lg:order-1 order-2">
            <div className="text-textcolor text-center space-y-3 my-3">
              <h1 className="text-2xl">
                Founder & <br /> Multimedia Designer
              </h1>
              <h1 className="text-xl ">
                July 2020{" "}
                <span className="px-2 text-lg text-iconcolor">To</span> Present
              </h1>
            </div>
            <hr />
            <p className="text-lg text-textcolor text-center my-4 lg:px-2 p-4 px-auto">
              As a freelancer at SD Creations & Multimedia, I spearheaded client
              management and creative thinking for renowned brands. Key
              responsibilities included crafting captivating graphic designs,
              logos, brand identities, and motion graphics.
            </p>
          </div>
          <div className="lg:w-9/12 w-6/12  mr-auto lg:ml-16 ml-10 bg-color2 lg:h-[300px]  flex flex-col lg:order-2 order-1">
            <div className="text-textcolor text-center flex flex-col justify-center rounded-3xl shadow1 space-y-3 lg:p-3 p-2 mr-2 lg:h-36 h-24 my-auto">
              <h1 className="lg:text-2xl text-xl font-semibold">
                SD CREATIONS
                <br />{" "}
                <span className="text-iconcolor text-xl">MULTIMEDIA </span>
              </h1>
            </div>
          </div>
          <div className="lg:w-full w-10/12 lg:mx-1 mx-auto bg-color3 rounded-3xl shadow1 lg:h-[300px] h-[330px] lg:order-3 order-4">
            <div className="text-textcolor text-center space-y-3 my-3 flex flex-col justify-center">
              <h1 className="text-2xl font-semibold">
                Freelance Motion Graphic Designer
              </h1>
              <h1 className="text-xl ">
                Feb 2022
                <span className="px-2 text-lg text-iconcolor">To</span> Present
              </h1>
            </div>
            <hr />
            <p className="text-lg text-textcolor text-center my-4 lg:px-2 px-auto p-4">
              As a Freelance Motion Artist since 2 years, I excel in creating
              visually stunning motion graphics and character animations.
            </p>
          </div>
          <div className="lg:w-9/12 w-6/12  lg:ml-16 ml-12 mr-auto bg-color2 lg:h-[300px]  h-auto  flex flex-col lg:order-4 order-3">
            <div className="text-textcolor text-center flex flex-col justify-center rounded-3xl shadow1 space-y-3 lg:p-3 p-2 mr-2 lg:h-36 h-24 my-auto">
              <h1 className="lg:text-2xl text-xl font-semibold">
                Motion Designer <span className="text-iconcolor">Freelancing</span>
              </h1>
            </div>
          </div>
          <div className="lg:w-full w-10/12 lg:mx-1 mx-auto bg-color3 rounded-3xl shadow1 lg:h-[500px] h-[480px] lg:order-5 order-6 ">
            <div className="text-textcolor text-center space-y-3 my-3">
              <h1 className="text-2xl font-semibold">
                College Magazine Designer
              </h1>
              <h1 className="text-xl ">
                Sept 2022
                <span className="px-2 text-lg text-iconcolor">To</span> Oct 2023
              </h1>
            </div>
            <hr />
            <p className="text-lg text-textcolor text-center my-4 lg:px-2 px-auto p-4">
              MITACSC Head Magazine Visual Designer In my role as the Visual
              Designer of Annual College Magazine for academic year 2022-23,
              when I used to handle my studies and work part time on a magazine
              design 300 pages team where I am in charge of six members. During
              the design production softwares such as Adobe Photoshop, Adobe
              Illustrator, and Corel Suite were used. The whole journey has been
              a roller coaster ride and a brave one, which has helped me to
              develop leadership qualities that help to further effective
              teamwork.
            </p>
          </div>
          <div className="lg:w-9/12 w-6/12  lg:ml-16 ml-12 mr-auto bg-color2 lg:h-[500px] h-auto  flex flex-col lg:order-6 order-5">
            <div className="text-textcolor text-center flex flex-col justify-center rounded-3xl shadow1 space-y-3 lg:p-3 p-2 mr-2 lg:h-36 h-24 my-auto">
              <h1 className="lg:text-2xl text-xl font-semibold">
              Freelancer <span className="text-iconcolor text-xl">freelance.com</span>
              </h1>
            </div>
          </div>
          <div className="absolute top-0 bottom-0 lg:left-1/2  left-3 transform -translate-x-1/2 border-r-2 h-screen lg:ml-10 ml-3 border-gray2"></div>{" "}
        </div>
      </div>
    </>
  );
};
export default WorkExp;
