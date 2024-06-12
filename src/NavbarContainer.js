import React from "react";
import VerticalNavbar from "./VerticalNavbar";
import HamburgerMenu from "./HamburgerMenu";
import { useState, useEffect } from "react";

function NavbarContainer() {
  const [navbarDisplay, setNavbarDisplay] = useState(false);
  
  function handleHamburgerClick(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the document body
    setNavbarDisplay(!navbarDisplay);
  }

  useEffect(() => {
    const handleclick = (event) => {
      event.stopPropagation();
      if (navbarDisplay) {
        // console.log("yes");
        const verticalNavbar = document.getElementById("vertical_navbar");
        if (verticalNavbar && !verticalNavbar.contains(event.target)) {
          setNavbarDisplay(false);
        }
      }
    };
    // const handlescroll = (event) =>{
    //   event.stopPropagation();
    //   if(navbarDisplay){
    //     const verticalNavbar = document.getElementById("vertical_navbar");
    //     if(verticalNavbar){
    //       setNavbarDisplay(false);
    //     }
    //   }
    // }

    //i decided not to add the scroll event beacuse it affects the click event and closes the navbar when youre pressing the <a></a> tags (because of the smooth scroll function) 
    document.body.addEventListener('click', handleclick);
    // window.addEventListener('scroll',handlescroll);


    return () => {
      document.body.removeEventListener('click', handleclick);
      // window.removeEventListener('scroll',handlescroll)
    };
  }, [navbarDisplay]);

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