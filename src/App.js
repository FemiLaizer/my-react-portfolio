import { React, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import project from "./data/projects";

const allList = ["All", ...new Set(project.map((data) => data.category))];
console.log(allList);

function App() {
  const [projectList, setProjectList] = useState(allList);
  const [projects, setProjects] = useState(project);

  const filterCategory = (e) => {
    if (e === "All") {
      setProjects(projects);
      return;
    }
    const filteredCategory = projects.filter(
      (project) => project.category === e
    );
    setProjects(filteredCategory);
  };

  return (
    <div className="bg-near-white min-vh-100">
      <Navbar />
      <Hero />
      <Projects
        projects={projects}
        filterCategory={filterCategory}
        projectList={projectList}
      />

      <main className="pt5 tc">
        <section className="pa4">
          <h1 className="f2 b dark-blue">Welcome to My Portfolio</h1>
          <p className="f4 gray mt3">
            I’m a passionate Front-End Developer based in Nigeria.
          </p>
          <button className="mt4 pv2 ph4 br2 bg-blue white b grow pointer">
            View My Work
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
