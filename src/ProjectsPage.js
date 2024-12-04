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
        // fixes the problem which you cant see the transition on mobile
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
      `A corporate website for "תעבורה על בטוח," showcasing the company's services, clients, personnel and additional information. The website was optimized with effective SEO strategies and engaging content, resulting in a 40% increase in visitor traffic and enhanced user engagement.`,
    confidential: false,
    link: "https://www.safety-car.co.il/",
    transitionDelay: 0,
  };
  let project2 = {
    title: "Givati unit website",
    tech: "built using React Js",
    description:
      "A robust, high-functionality website for the Givati unit within the confidential IDF network, designed to showcase the unit's capabilities and serve as a comprehensive data management platform.",
    confidential: true,
    transitionDelay: 0.2,
  };
  let project3 = {
    title: "Hoshen unit website",
    tech: "built using HTML, CSS and Javascript",
    description:
      "An advanced website developed for the Hoshen unit within the confidential IDF network, highlighting the unit's achievements, providing essential resources, and streamlining internal data management processes.",
    confidential: true,
    transitionDelay: 0.4,
  };
  let project4 = {
    title: "zivcar.co.il",
    tech: "built using React Js",
    description:
      "A sales site for the Ziv system, a comprehensive car fleet management framework designed to streamline operations and improve efficiency. This website enhanced user experience, increased customer engagement, and contributed to a 15% boost in sales.",
    confidential: false,
    link: "https://zivcar.co.il/",
    transitionDelay: 0.6,
  };
  let project5 = {
    title: "J6 & Cyber Defense Directorate Media Unit website",
    tech: "built using React Js",
    description:
      "An innovative platform for the J6 & Cyber Defense Directorate Media Unit within the confidential IDF network, serving as a centralized repository for the unit's assets and providing detailed information about the unit.",
    confidential: true,
    transitionDelay: 0.8,
  };
  let project_arr = [project1, project2, project3, project4, project5];
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
              link={proj_obj.link}
              visible={visible}
              transitionDelay={proj_obj.transitionDelay}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsPage;
