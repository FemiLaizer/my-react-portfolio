import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects, filterCategory, projectList }) => {
  return (
    <section className="pa4 bg-near-white">
      <div className="mw8 center">
        <h2 className="f2 dark-blue tc">Projects</h2>
        <div className="work_list">
          {projectList.map((category, index) => (
            <button
              onClick={() => filterCategory(category)}
              className="work_category"
              key={index}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-between">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
