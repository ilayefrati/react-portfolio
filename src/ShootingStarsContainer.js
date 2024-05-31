import React, { useState, useEffect } from "react";
import ShootingStar from "./ShootingStar";
import './ShootingStarsContainer.css';

function ShootingStarsContainer() {
    const [phoneRes, setPhoneRes] = useState(window.innerWidth <= 481);

    useEffect(() => {
        const checkScreen = () => {
            setPhoneRes(window.innerWidth <= 481);
        };

        window.addEventListener('resize', checkScreen);

        // Check screen size on initial render
        checkScreen();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkScreen);
        };
    }, []);

    const starsArr = [];
    const phoneStarsArr = [];

    for (let i = 0; i < 15; i++) {
        const randomRight = Math.floor(Math.random() * (70 - (-70) + 1) + (-70));
        const randomAnimationDuration = (Math.random() * 4) + 2;
        const randomAnimationDelay = Math.random() * 7; // Random delay between 0 and 7 seconds

        starsArr.push(
            <ShootingStar 
                key={i} 
                right={randomRight} 
                top={0} 
                animationDuration={randomAnimationDuration}
                animationDelay={randomAnimationDelay} // Pass random delay as prop
            />
        );
    }

    for (let j = 0; j < 6; j++) {
        const randomAnimationDuration = (Math.random() * 4) + 2;
        const randomAnimationDelay = Math.random() * 7; // Random delay between 0 and 7 seconds
        const randomTop = Math.floor(Math.random() * (100 - 80 + 1)) + 80;
        const randomRight = Math.floor(Math.random() * (20 - (-20) + 1)) + (-20);

        phoneStarsArr.push(
            <ShootingStar 
                key={j} 
                right={randomRight} 
                top={randomTop} 
                animationDuration={randomAnimationDuration}
                animationDelay={randomAnimationDelay} // Pass random delay as prop
            />
        );
    }

    return (
        <div className="shooting-stars-container">
            {starsArr}
            {phoneRes && phoneStarsArr}
        </div>
    );
}

export default ShootingStarsContainer;
