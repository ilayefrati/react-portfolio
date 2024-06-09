import React from "react";
import "./IconText.css";

function IconText(props) {
  let href;
  let aria_label;
  if(props.icon.includes("envelope")){
    href = "mailto:ilay2092003@gmail.com"
    aria_label ="Email: ilay2092003@gmail.com"
}
  else if(props.icon.includes("phone")){
    href = "tel:0533409049"
    aria_label="Phone: 0533409049"
  }
  else{
    href = "https://maps.app.goo.gl/A4Hkz2z3DevKtadU6"
    aria_label="Address: Meitar, Israel"
  }

  return (
    <h3 className="icon_text">
      <i className={props.icon} style={{ color: "#ffffff" }}></i>
      <a
        style={{ textDecoration: "none", color: "#ffffff" }}
        href={href}
        aria-label={aria_label}
        target="_blank"
      >
        {props.text}
      </a>
    </h3>
  );
}

export default IconText;
