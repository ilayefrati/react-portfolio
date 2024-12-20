import React, { useRef, useEffect, useState } from "react";
import "./AboutMePage.css";

function AboutMePage() {
  const [visible, setVisible] = useState(false);
  // we still need to use UseState here (even though i want the visible variable to change to true once and then not update to false again) because when we do change this varieble to true i want the component to rerender (with the new classes).
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

  return (
    <div id="about_me" ref={ref}>
      <h3 className={visible ? "slide_right" : ""}>
        Hi, I'm <b>Ilay Efrati</b> — a tech unit veteran and highly motivated
        front-end developer with over 2 years of experience creating complex
        projects. Specializing in <b>React.js</b>, <b>HTML</b>, <b>CSS</b>,{" "}
        <b>JavaScript</b>,<b>Git</b>, and <b>GitHub</b>, I excel at developing
        web interfaces while prioritizing user experience, performance, and
        responsiveness. Committed to continuous learning and integrating new
        technologies, I bring leadership capabilities and thrive in
        team-oriented environments.
      </h3>
      <img
        src={`${process.env.PUBLIC_URL}/images/about_me_img.png`}
        alt="my portfolio picture"
        className={visible ? "slide_left" : ""}
      />
    </div>
  );
}

export default AboutMePage;
