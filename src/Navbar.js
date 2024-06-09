import React from "react";
import "./Navbar.css";

function smoothScroll(event) {
  event.preventDefault();

  // Get the closest anchor tag if the event target is the button
  const anchor = event.target.closest("a");
  // the problem we encounterd here is when i pressed the link in the textcont second button, it pressed the button itself and not the <a></a> element. thats why the event target 
  // was a button and not <a></a>. we solved that problem by finding the closest <a></a> (moving upwords) and using it as our target (if i already press an <a></a> element it wont change nothing)
  if (!anchor) return;

  const targetId = anchor.getAttribute("href");
  const targetSection = document.querySelector(targetId);

  if (targetSection) {
    const targetOffset = targetSection.offsetTop;
    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
  }
}

function Navbar() {
  return (
    <nav id="navbar">
      <li>
        <a href="#home" onClick={smoothScroll}>
          Home
        </a>
      </li>
      <li>
        <a href="#about_me" onClick={smoothScroll}>
          About me
        </a>
      </li>
      <li>
        <a href="#projects" onClick={smoothScroll}>
          My projects
        </a>
      </li>
      <li>
        <a href="#contact_me" onClick={smoothScroll}>
          Contact Me
        </a>
      </li>
    </nav>
  );
}

export { smoothScroll, Navbar }; // from now on when we import Navbar it should be a named import
