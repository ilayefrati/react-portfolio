import React from "react";
import "./ContactMe.css";
import IconText from "./IconText";

function ContactMe() {
  let phone = { icon: "fa-solid fa-phone", text: "053-3409049" };
  let envelope = {
    icon: "fa-regular fa-envelope",
    text: "ilay2092003@gmail.com",
  };
  let address = { icon: "fa-solid fa-location-dot", text: "Meitar, Israel" };
  let icon_list = [phone, envelope, address];
  return (
    <div id="contact_me">
      <div className="custom-shape-divider-top-1715437211">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="details">
        {icon_list.map((icon_obj, index) => {
          return (
            <IconText key={index} icon={icon_obj.icon} text={icon_obj.text} />
          );
        })}
      </div>
      <hr className="contact_me_line" />
      <div className="credit">
        <p>פותח ע"י עילי אפרתי</p>
        <a
          aria-label="Whatsapp: Ilay Efrati"
          href="https://api.whatsapp.com/send?phone=0533409049"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-whatsapp" style={{ color: "#ffffff" }}></i>
          <span className="visually-hidden">Whatsapp</span>
        </a>
        <a
          aria-label="LinkedIn: Ilay Efrati"
          href="https://www.linkedin.com/in/ilay-efrati-9b1a62279/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin" style={{ color: "#ffffff" }}></i>
          <span className="visually-hidden">LinkedIn</span>
          {/* <!-- חייב לשים טקסט בשביל הנגישות לאלה ששומעים מהמסך - את הטקסט הזה אי אפשר לראות בגלל הקלאס --> */}
        </a>
      </div>
    </div>
  );
}

export default ContactMe;
