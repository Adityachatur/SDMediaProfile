import React from "react";
import Msg from "../SubPages/Msg";
const Footer = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl relative font-bolt text-textcolor  flex justify-center items-center w-full h-20 bg-color1 z-0">
          SDC MEDIA
          <span className="absolute left-0 right-0 top-3 bottom-0 z-40 lg:ml-9 ml-5">
            <Msg />
          </span>
        </h1>
      </div>
    </>
  );
};

export default Footer;
