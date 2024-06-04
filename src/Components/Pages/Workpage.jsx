import React from "react";
import Projectdone from "../MyWork/Projectdone";
import Followersviews from "../MyWork/Followersviews";
import Testimonials from "../MyWork/Testimonials";
import Mywork from "../MyWork/Mywork";
import Footer from "../Navbars/Footer";
const Workpage = () => {
  return (
    <>
      <div className="bg-color1 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-7 lg:px-4 px-2  h-full lg:w-full md:w-9/12 sm:w-10/12 w-full md:mx-auto sm:mx-auto">
        <Projectdone />
        <Followersviews />
        <Testimonials />
      </div>
      <div className="grid lg:grid-cols-2  grid-cols-1 ">
        <Mywork />
      </div>
      <Footer />
    </>
  );
};

export default Workpage;
