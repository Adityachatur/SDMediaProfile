import React from "react";
import Msg from "../SubPages/Msg";
const Footer = () => {
  return (
    <>
      <div>
        <h1 className=" font-Syncopate text-xl relative font-bolt text-textcolor  flex lg:justify-center justify-end items-center pr-4 w-full h-20 bg-color1 z-0">
          <span className="font-bold mr-2">SDC</span> MEDIA
          <span className="absolute left-0 right-0 top-3 bottom-0 z-40 lg:ml-9 ml-1">
            <Msg />
          </span>
        </h1>
      </div>
    </>
  );
};

export default Footer;
