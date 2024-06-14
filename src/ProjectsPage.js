import React, { useRef, useEffect, useState } from "react";
import "./ProjectsPage.css";
import ProjectsTitle from "./ProjectsTitle";
import Project from "./Project";

function ProjectsPage() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true); // we change the state varieble to true and then stop observing the element so it will stay true.
          observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Cleanup: Stop observing when component unmounts
      }
    };
  }, []); // Empty dependency array to run the effect only once

  let project1 = {
    title: "safety-car.co.il",
    tech: "built using HTML, CSS and Javascript",
    description:
      'Containes information about the company "תעבורה על בטוח", their clients, the services they offer and more',
    confidential: false,
    transitionDelay:0,
  };
  let project2 = {
    title: "Givati unit website",
    tech: "built using React Js",
    description:
      "Showcasing Givati unit abilities and serves as a data management platform for the unit",
    confidential: true,
    transitionDelay:0.3,
  };
  let project3 = {
    title: "Hoshen unit website",
    tech: "built using HTML, CSS and Javascript",
    description:
      "Showcasing Hoshen unit capabilities and gives information about the unit. serves as a data management platform for Hoshen",
    confidential: true,
    transitionDelay:0.6,

  };
  let project_arr = [project1, project2, project3];
  return (
    <div id="projects" ref={ref}>
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
              visible={visible}
              transitionDelay = {proj_obj.transitionDelay}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsPage;
