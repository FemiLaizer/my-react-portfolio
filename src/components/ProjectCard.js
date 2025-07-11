import React from "react";

const ProjectCard = ({ title, description, image, demoLink, githubLink }) => {
  return (
    <div className="bg-white ba b--light-gray br3 shadow-1 pa3 mv3 w-100 w-45-l">
      <img src={image} alt={title} className="br2 w-100 h5 object-cover" />
      <h3 className="f4 mt3 dark-blue">{title}</h3>
      <p className="gray">{description}</p>
      <div className="mt3">
        <a
          href={demoLink}
          target="_blank"
          rel="noreferrer"
          className="mr3 link dim blue"
        >
          Live Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="link dim dark-gray"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
