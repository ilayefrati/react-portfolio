import React from "react";
import './ShootingStar.css';

function ShootingStar(props) {
    return (
        <div className="shooting-star" style={{right: `${props.right}vw`, top: `${props.top}vw`, animationDuration: `${props.animationDuration}s`, animationDelay: `${props.animationDelay}s`}}>
            
        </div>
    );
}

export default ShootingStar;
