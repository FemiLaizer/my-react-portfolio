import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="w-100 bg-white shadow-1 fixed top-0 left-0 z-2">
      <div className="flex justify-between items-center pa3 mw8 center">
        <h1 className="f4 b dark-blue">Oplaize</h1>
        <ul className="dn flex-ns list ma0 pa0">
          <li className="mh3 pointer hover-blue">
            <Link to="hero" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="mh3 pointer hover-blue">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="mh3 pointer hover-blue">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
