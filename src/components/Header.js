import React, { useEffect, useState } from "react";

// import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";

//import Logo
import Logo from "../assets/img/logo.png";

const Header = () => {
  //useState
  const [bg, setBg] = useState(false);
  //useEffect
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
  });

  return (
    <header
      className={`${
        bg && "bg-white shadow-md py-4"
      } p-8 lg:px-0 w-full fixed  z-10 transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#!">
          <img src={Logo} alt="/" />
        </a>
        {/* nav */}
        <Nav />
        {/* nav mobile */}
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
