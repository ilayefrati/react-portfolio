import React from "react";
import "./Project.css";

function Project(props) {
  let react_background = false;
  if (props.tech.includes("React")) {
    react_background = true;
  }
  return (
    <div className="project_container" style={{ backgroundImage: `url(${react_background ? 'images/project_container2.png' : 'images/project_container1.png'})` }}>
      <h3>{props.title}</h3>
      <p className="project-tech">{props.tech}</p>
      <hr className="project_line" />
      <p>{props.description}</p>
      {props.confidential ? (
        <p className="confidential">*NO LINK DUE TO CONFIDENTIAL REASONS*</p>
      ) : (
        <button className="project_button">Visit Website {'>'} </button>
      )}
    </div>
  );
}

export default Project;
