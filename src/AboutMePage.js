import React, { useRef, useEffect, useState } from 'react';
import './AboutMePage.css';

function AboutMePage() {
    const [visible, setVisible] = useState(false);
    // we still need to use UseState here (even though i want the visible variable to change to true once and then not update to false again) because when we do change this varieble to true i want the component to rerender (with the new classes).
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true); // we change the state varieble to true and then stop observing the element so it will stay true.
                observer.unobserve(ref.current); 
            }
        }, {
            threshold: 0.7,
        });

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
            <h3 className={visible ? "slide_right" : ""}>Allow me to introduce myself - My name is <b>Ilay Efrati, </b>
                a passionate <b>Front-end developer</b> With a specialization in <b>React</b>, <b>HTML,</b> <b>CSS</b> and <b>JavaScript. </b>
                I am currently serving as a Front-end Developer
                for the IDF, where I have successfully developed numerous projects.
                I am committed to continuously learning new technologies and incorporating them into my projects.
            </h3>
            <img src="images/about_me_img.png" alt="my portfolio picture" className={visible ? "slide_left" : ""} />
        </div>
    );
}

export default AboutMePage;
