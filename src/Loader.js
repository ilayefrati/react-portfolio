import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader_container">
      <h1 className="loading">Loading</h1>
      <div className="loader">
        <span>{"{"}</span>
        <span>{"}"}</span>
      </div>
    </div>
  );
}

export default Loader;
