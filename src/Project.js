import React from "react";
import "./Project.css";

function Project(props) {
  let react_background = false;
  if (props.tech.includes("React")) {
    react_background = true;
  }
  
  return (
    <div
      className={props.visible ? "project_container slide_up" : "project_container"}
      style={{
        backgroundImage: `url(${
          react_background
            ? "images/project_container2.png"
            : "images/project_container1.png"
        })`,
        transitionDelay: `${props.transitionDelay}s`, // Set transition delay based on prop
      }}
    >
      <h3>{props.title}</h3>
      <p className="project-tech">{props.tech}</p>
      <hr className="project_line" />
      <p>{props.description}</p>
      {props.confidential ? (
        <p className="confidential">*NO LINK DUE TO CONFIDENTIAL REASONS*</p>
      ) : (
        <a href="https://www.safety-car.co.il/" target="_blank">
          <button className="project_button">Visit Website {">"} </button>
        </a>
      )}
    </div>
  );
}

export default Project;
