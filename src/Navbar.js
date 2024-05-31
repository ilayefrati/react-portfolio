import React from "react";
import './Navbar.css'

function smoothScroll(event) {
    event.preventDefault();

    const targetId = event.target.getAttribute("href"); 
    // we are using event.target instead of .this beacuse function components dont have instances like class components so it dosent know what is .this
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const targetOffset = targetSection.offsetTop;
      //i deleted the -100 from the offset top - looks better
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth", // Use smooth scrolling behavior
      });
    }
}

function Navbar(){
    return(
        <nav id="navbar">
            <li><a href="#home" onClick={smoothScroll}>Home</a></li>
            <li><a href="#about_me" onClick={smoothScroll}>About me</a></li>
            <li><a href="#projects" onClick={smoothScroll}>My projects</a></li>
            <li><a href="#contact_me" onClick={smoothScroll}>Contact Me</a></li>
        </nav>
    )
}

export {smoothScroll,Navbar}; // from now on when we import Navbar it should be a named import