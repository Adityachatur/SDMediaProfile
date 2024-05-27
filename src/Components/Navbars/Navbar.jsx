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
import ScrollToTop from "../ScrollToTop";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [startX, setStartX] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [isTouch, setIsTouch] = useState(false);

  const pages = [
    { path: "/", label: "About Me", icon: faUser },
    { path: "/about", label: "My Work", icon: faMap },
    { path: "/contact", label: "Services", icon: faEnvelope },
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
      <div className="navbar-container py-12">
        <nav className="navbar flex justify-center space-x-6 font-semibold lg:text-xl text-base rounded-3xl h-[85px] items-center lg:w-[400px] w-auto lg:mx-auto mx-4">
          {pages.map(({ path, label, icon }) => (
            <Link key={path} to={path}>
              <button
                className={`lg:py-3 py-1 lg:px-5 px-1 space-x-2 lg:rounded-xl shadow1 rounded-md flex items-center lg:space-x-2  bg-color3 ${getLinkStyle(
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
          <Route path="/about" element={<Workpage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </div>
    </>
  );
};

export default Navbar;
