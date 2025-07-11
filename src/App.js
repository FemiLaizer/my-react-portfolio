import { React, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import project from "./data/projects";

const allList = ["All", ...new Set(project.map((data) => data.category))];

function App() {
  const [projectList, setProjectList] = useState(allList);
  const [projects, setProjects] = useState(project);

  const filterCategory = (e) => {
    if (e === "All") {
      setProjects(project);
      return;
    }
    const filteredCategory = project.filter(
      (project) => project.category === e
    );
    console.log(e);
    setProjects(filteredCategory);
  };

  return (
    <div className="bg-near-white min-vh-100">
      <main className="pt5 tc">
        <section className="pa4">
          <h1 className="f2 b dark-blue">Welcome to My Portfolio</h1>
          <p className="f4 gray mt3">
            We will create amazing things together, and you will love it!.
          </p>
          {/* <button className="mt4 pv2 ph4 br2 bg-blue white b grow pointer">
            View My Work
          </button> */}
        </section>
      </main>
      <Navbar />
      <Hero />
      <Projects
        projects={projects}
        filterCategory={filterCategory}
        projectList={projectList}
      />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
