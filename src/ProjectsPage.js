import React from "react";
import "./ProjectsPage.css";
import ProjectsTitle from "./ProjectsTitle";
import Project from "./Project";

function ProjectsPage() {
  let proj_obj = {
    title: "safety-car.co.il",
    tech: "built using HTML, CSS and Javascript",
    description:
      "Lorem ipsum dolor sit amet. Et delectus modi et natus obcaecati aut nostrum",
    confidential: false,
  };
  let project2 = {
    title: "Givati unit website",
    tech: "built using React Js",
    description:
      "Lorem ipsum dolor sit amet. Et delectus modi et natus obcaecati aut nostrum",
    confidential: true,
  };
  let project3 = {
    title: "Hoshen unit website",
    tech: "built using HTML, CSS and Javascript",
    description:
      "Lorem ipsum dolor sit amet. Et delectus modi et natus obcaecati aut nostrum",
    confidential: true,
  };
  let project_arr = [proj_obj, project2, project3];
  return (
    <div id="projects">
      <ProjectsTitle />
      <div className="projects_container">
        {project_arr.map((proj_obj, index) => {
          return (
            <Project
              key={index}
              title={proj_obj.title}
              tech={proj_obj.tech}
              description={proj_obj.description}
              confidential={proj_obj.confidential}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsPage;
