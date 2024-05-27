import React from "react";
import MyWork from "../SubPages/Mywork";
import PriceQuestion from "../SubPages/PriceQuestion";
import Benefits from "../SubPages/Benefits";
import Footer from "../Navbars/Footer";
const Contactpage = () => {
  return (
    <>
      <div className=" lg:mt-3 mt-10 ">
        <PriceQuestion />
        <Benefits />
        <Footer />
      </div>
    </>
  );
};

export default Contactpage;
