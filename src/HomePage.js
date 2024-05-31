import React, { useState, useEffect } from "react";
import './HomePage.css';
import { Navbar } from './Navbar';
import TextCont from './TextCont';
import ShootingStarsContainer from './ShootingStarsContainer';
import NavbarContainer from "./NavbarContainer";

function HomePage() {
    const [navbarDisplay, setNavbarDisplay] = useState(window.innerWidth > 481);

    useEffect(() => {
        const checkScreen = () => {
            if (window.innerWidth <= 481 && navbarDisplay) {
                setNavbarDisplay(false);
            } else if (window.innerWidth > 481 && !navbarDisplay) {
                setNavbarDisplay(true);
            }
        };

        window.addEventListener('resize', checkScreen);

        // Check screen size on initial render
        checkScreen();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkScreen);
        };
    }, [navbarDisplay]);

    return (
        <div id="home">
            {navbarDisplay ? <Navbar /> : <NavbarContainer />}
            <ShootingStarsContainer />
            <TextCont />
        </div>
    );
}

export default HomePage;
