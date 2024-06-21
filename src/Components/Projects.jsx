import React from "react";
import { projectsContributions } from "../data/title";
import { projects } from "../data/project";
import Card from "./Custom/Card";

function Projects() {
  return (
    <div className="md:w-10/12 w-11/12 mx-auto text-white py-10" id="projects">
      <div className="font-bold text-xl text-[#37BCF8] pb-6">
        {projectsContributions}
      </div>
      <div className="lg:w-11/12 w-full mx-auto flex flex-wrap items-center justify-center gap-8 py-6">
        {projects.map((element) => {
          return (
            <div
              key={element.name}
              className="w-11/12 lg:w-5/12 md:w-2/3 sm:w-3/4 flex flex-wrap items-center"
            >
              <Card
                name={element.name}
                img={element.img}
                description={element.description}
                link={element.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
