import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-blue white pv4 tc">
      <p className="mb3">
        © {new Date().getFullYear()} Oplaize. All rights reserved.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="link white hover-light-blue mh3"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="link white hover-light-blue mh3"
        >
          LinkedIn
        </a>
        <a
          href="mailto:you@example.com"
          className="link white hover-light-blue mh3"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
