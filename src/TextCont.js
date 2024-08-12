import React from "react";
import './TextCont.css'
import Button from './Button';
import { smoothScroll } from "./Navbar";

function TextCont(){
    return(
        <div className="text_cont">
            <h1>Front End Developer.</h1>
            <h2>if you are looking for someone that will make your ideas come to life,
                 you came to the right place.</h2>
            <div className="buttons">
                <a href="https://drive.google.com/uc?export=download&id=1SUynO11puAio_J6s3THSqk_jl6C" download="ilay_cv"> {/* the download property should be on the <a> */}
                    <Button text="Download CV" />
                </a>

                <a href="#contact_me" onClick={smoothScroll}>  
                    <Button text = "Lets Work Together!"/>
                </a>
            </div>
        </div>
    )   
}

export default TextCont;
