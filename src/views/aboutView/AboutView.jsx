import MongoDBIcon from "../../assets/MongoDB.svg";
import ExpressIcon from "../../assets/ExpressJS-Dark.svg";
import ReactIcon from "../../assets/React-Dark.svg";
import NodeIcon from "../../assets/NodeJS-Dark.svg";

import "./aboutView.css";

const AboutView = () => {
  return (
    <div className="aboutContainer" id="aboutMe">
      <div className="aboutContent">
        <div className="text-1">Hi,</div>
        <div className="text-2">
          I&apos;m <span>Dima</span>
        </div>
        <div className="text-1">Full Stack Developer</div>
        <div className="aboutBtnContainer">
          <a
            href="https://drive.google.com/file/d/1143hUzREJkZWKNbHXRBSXmLMd5w5HSwU/view?usp=sharing"
            target="_blank"
            className="aboutBtn"
          >
            Resume
          </a>
        </div>
        <div className="techStackContainer">
          <img src={MongoDBIcon} alt="" />
          <img src={ExpressIcon} alt="" />
          <img src={ReactIcon} alt="" />
          <img src={NodeIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutView;
