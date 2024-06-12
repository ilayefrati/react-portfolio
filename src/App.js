import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./HomePage";
import AboutMePage from "./AboutMePage";
import ProjectsPage from "./ProjectsPage";
import ContactMe from "./ContactMe";
import Loader from "./Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    };

    // Check if the document is already fully loaded
    if (document.readyState === "complete") {
      // here we used the readystate attribute of the document because apperantly this is the way to check on mobile devices if the page finished loading. if it hasnt, we attach an event listener that calles the function when the page finishes to load.
      handleLoad();
    } else {
      // Listen for the load event
      window.addEventListener("load", handleLoad);

      // Cleanup event listener on unmount
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    loading ? <Loader /> : (
      <>
        <HomePage />
        <AboutMePage />
        <ProjectsPage />
        <ContactMe />
      </>
    )
  );
}

export default App;
