import React from "react";
import "./VerticalNavbar.css";
import { smoothScroll } from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";

function VerticalNavbar(props) {
  return (
    <nav
      id="vertical_navbar"
      // style={{ display: props.navbarDisplay ? "flex" : "none" }}
      // we removed the display propery here because the visabillity is controlled by css classes.
      className={props.navbarDisplay ? "open" : ""}
    >
      {/* <HamburgerMenu onClick={props.handleHamburgerClick} /> */}
      {/*i came to the conclution the hamburger menu dosent neccacerally have to be inside the vertical navbar (renderd inside it) because i can still controll
       the navbar visability with the css classes (like we did before with the handleHamburgerClick function) and i just need to increment the z-index of the hamburger menu.*/}
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

export default VerticalNavbar;
