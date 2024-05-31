import React from "react";
import VerticalNavbar from "./VerticalNavbar";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";

function NavbarContainer() {
  const [navbarDisplay, setNavbarDisplay] = useState(false);
  function handleHamburgerClick() {
    setNavbarDisplay(!navbarDisplay);
    // what we did here was to create a parent component that includes the hamburger menu and the navbar. this components holds the state that is
    //  responsible for the display of the navbar and passes it down as a prop.
    // also, it passes the function that toggels this state so we can use it in the hamburger menu component (it changes the state of the navbar container)
    // this prevents circular depenendencies between components
  }
  return (
    <>
      {navbarDisplay ? (
        <VerticalNavbar
        navbarDisplay={navbarDisplay}
        handleHamburgerClick={handleHamburgerClick}
      />
      ) : (
        <HamburgerMenu onClick={handleHamburgerClick} />
      )}
    </>
  );
}

export default NavbarContainer;
