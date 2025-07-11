import React from "react";

const Navbar = () => {
  return (
    <nav className="w-100 bg-white shadow-1 fixed top-0 left-0 z-2">
      <div className="flex justify-between items-center pa3 mw8 center">
        <h1 className="f4 b dark-blue">Oplaize</h1>
        <ul className="dn flex-ns list ma0 pa0">
          <li className="mh3 pointer hover-blue">Home</li>
          <li className="mh3 pointer hover-blue">About</li>
          <li className="mh3 pointer hover-blue">Projects</li>
          <li className="mh3 pointer hover-blue">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
