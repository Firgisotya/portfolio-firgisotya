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
        <span>zzuuddiinn28@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/firgisi/" target="_blank">
          <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/firgisotya" target="_blank">
          <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/Firgisotya" target="_blank">
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
