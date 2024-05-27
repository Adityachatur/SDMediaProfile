import React from "react";
import Projectdone from "../SubPages/Projectdone";
import Followersviews from "../SubPages/Followersviews";
import Testimonials from "../SubPages/Testimonials";
import Mywork from "../SubPages/Mywork";
import WorkTogether from "../SubPages/WorkTogether";
import Footer from "../Navbars/Footer";
import Faqs from "../SubPages/Faqs";

const Workpage = () => {
  return (
    <>
      <div className="bg-color1 grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-2 lg:px-4 px-2  h-auto lg:w-full md:w-9/12 sm:w-10/12 w-full md:mx-auto sm:mx-auto">
        <Projectdone />
        <Followersviews />
        <Testimonials />
      </div>
      <div className=" lg:mt-0 mt-10">
        <Mywork />
      </div>
      <Footer />
    </>
  );
};

export default Workpage;
