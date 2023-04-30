import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>varshamhaske808@gmail.com</span>
        <div className="f-icons">
          <Insta color="#d62976" size={"3rem"} />
          <Facebook color="#3b5998" size={"3rem"} />
          <Gitub color="#171515" size={"3rem"} />
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
