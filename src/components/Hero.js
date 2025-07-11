import React from "react";
import profilePic from "../assets/profile.jpg"; // Replace with your own image

const Hero = () => {
  return (
    <section className="pa4 pt6-l pb5 bg-lightest-blue">
      <div className="mw8 center flex flex-column flex-row-ns items-center justify-between">
        <div className="tc tl-ns w-100 w-50-ns mb4 mb0-ns">
          <h1 className="f2 f1-ns lh-title dark-blue">Hi, I'm Femi</h1>
          <p className="f4 gray mt2">
            A passionate Front-End Developer building user-friendly React apps.
          </p>
          <button className="mt3 pv2 ph4 br2 bg-blue white b grow pointer">
            View My Projects
          </button>
        </div>

        <div className="w-100 w-40-ns tc">
          <img
            src={profilePic}
            alt="Profile"
            className="br-100 h4 w4 h5-ns w5-ns dib shadow-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
