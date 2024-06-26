import React, { useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faEnvelope,
  faUser,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
import Homepage from "../Pages/Homepage";
import Workpage from "../Pages/Workpage";
import Contactpage from "../Pages/Contactpage";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [startX, setStartX] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [isTouch, setIsTouch] = useState(false);

  const pages = [
    { path: "/", label: "About Me", icon: faUser },
    { path: "/Work", label: "My Work", icon: faMap },
    { path: "/Service", label: "Services", icon: faMicrosoft },
  ];

  const handleStart = (e) => {
    const currentTime = new Date().getTime();
    if (e.type === "mousedown") {
      setIsTouch(false);
      setStartX(e.clientX);
    } else {
      setIsTouch(true);
      setStartX(e.targetTouches[0].clientX);
    }
    setStartTime(currentTime);
  };

  const handleEnd = (e) => {
    const currentTime = new Date().getTime();
    const endX = isTouch ? e.changedTouches[0].clientX : e.clientX;
    const swipeDistance = startX - endX;
    const swipeTime = currentTime - startTime;

    const currentIndex = pages.findIndex(
      (page) => page.path === location.pathname
    );

    if (swipeDistance > 50 && swipeTime < 500) {
      // Swiped left
      navigate(pages[(currentIndex + 1) % pages.length].path);
    } else if (swipeDistance < -50 && swipeTime < 500) {
      // Swiped right
      navigate(pages[(currentIndex - 1 + pages.length) % pages.length].path);
    }
  };

  const getLinkStyle = (path) => {
    if (location.pathname === path) {
      return "text-white bg-orange"; // active text and background color
    } else {
      return "text-white bg-color3"; // default text and background color
    }
  };

  return (
    <>
      <div className="navbar-container py-20 font-manrope">
        <nav className="navbar flex justify-center space-x-3  font-semibold lg:text-xl text-[14px] rounded-3xl h-[85px] items-center xl:w-full lg:w-[400px] lg:mainbox-shadow w-auto lg:mx-auto mx-2">
          {pages.map(({ path, label, icon }) => (
            <Link key={path} to={path}>
              <button
                className={`lg:py-3 py-3 lg:px-5 px-3  space-x-2 lg:rounded-xl shadow1 rounded-xl flex items-center lg:space-x-2  bg-color3 hover:bg-orange transform transition-all duration-700 ${getLinkStyle(
                  path
                )}`}
              >
                <FontAwesomeIcon icon={icon} />
                <span>{label}</span>
              </button>
            </Link>
          ))}
        </nav>
      </div>

      <div
        className="page-container"
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/work" element={<Workpage />} />
          <Route path="/service" element={<Contactpage />} />
        </Routes>
      </div>
    </>
  );
};

export default Navbar;
