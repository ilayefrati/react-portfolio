import React from "react";
import "./ProjectsPage.css";
import ProjectsTitle from "./ProjectsTitle";
import Project from "./Project";

function ProjectsPage() {
  let proj_obj = {
    title: "safety-car.co.il",
    tech: "built using HTML, CSS and Javascript",
    description:
      'Containes information about the company "תעבורה על בטוח", their clients, the services they offer and more',
    confidential: false,
  };
  let project2 = {
    title: "Givati unit website",
    tech: "built using React Js",
    description:
    "Showcasing Givati unit abilities and serves as a data management platform for the unit",
    confidential: true,
  };
  let project3 = {
    title: "Hoshen unit website",
    tech: "built using HTML, CSS and Javascript",
    description:
      "Showcasing Hoshen unit capabilities and gives information about the unit. serves as a data management platform for Hoshen",
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
