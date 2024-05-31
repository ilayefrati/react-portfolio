import React from "react";
import './ProjectsTitle.css'

function ProjectsTitle(){
    return(
        <div className="title_and_lines">
            <hr className="left_line"/>
            <h2 className="title">My Recent Projects</h2>
            <hr className="right_line"/>
        </div>
    )
}

export default ProjectsTitle;