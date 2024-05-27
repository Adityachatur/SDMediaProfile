import React from "react";
import Personaldetails from "../SubPages/Personaldetails";
import Taskcomplete from "../SubPages/Taskcomplete";
import Hardskills from "../SubPages/Hardskills";
import Qualification from "../SubPages/Qualification";
import WorkExp from "../SubPages/WorkExp";
import WorkTogether from "../SubPages/WorkTogether";
import Footer from "../Navbars/Footer";

const Homepage = () => {
  return (
    <>
      <div className="bg-color1 grid grid-cols-1 md:grid-col lg:grid-cols-3 gap-6 px-5 h-full lg:w-full md:w-9/12 sm:w-10/12 w-full md:mx-auto sm:mx-auto">
        <Personaldetails />
        <Taskcomplete />
        <Hardskills />
        <Qualification />
        <WorkExp />
        <WorkTogether/>
      </div>
      <Footer/>
    </>
  );
};

export default Homepage;
