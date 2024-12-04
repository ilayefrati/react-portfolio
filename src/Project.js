import React from "react";
import "./Project.css";

function Project(props) {
  let react_background = false;
  if (props.tech.includes("React")) {
    react_background = true;
  }
  
  return (
    <div
      className={`project_container ${props.visible ? "slide_up" : ""}`}
      onClick={()=>{}}
      style={{
        backgroundImage: `url(${
          react_background
            ? `${process.env.PUBLIC_URL}/images/SecondBackground.png`
            : `${process.env.PUBLIC_URL}/images/FirstBackground.png`
        })`,
        transitionDelay: `${props.transitionDelay}s`, // Set transition delay based on prop
      }}
    >
      {react_background ? (
        <img src={`${process.env.PUBLIC_URL}/images/ReactTech.png`} className="tech-icons-react"/>
      ):(
        <img src={`${process.env.PUBLIC_URL}/images/Tech.png`} className="tech-icons"/>
      )}
      <h3>{props.title}</h3>
      <p className="project-tech">{props.tech}</p>
      <hr className="project_line" />
      <p>{props.description}</p>
      {props.confidential ? (
        <p className="confidential">*NO LINK DUE TO CONFIDENTIAL REASONS*</p>
      ) : (
        <a href={props.link} target="_blank">
          <button className="project_button">Visit Website {">"} </button>
        </a>
      )}
    </div>
  );
}

export default Project;
