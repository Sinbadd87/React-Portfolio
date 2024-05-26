import { saveAs } from "file-saver";

import MongoDBIcon from "../../assets/MongoDB.svg";
import ExpressIcon from "../../assets/ExpressJS-Dark.svg";
import ReactIcon from "../../assets/React-Dark.svg";
import NodeIcon from "../../assets/NodeJS-Dark.svg";

import "./aboutView.css";

const AboutView = () => {
  const handleClick = (e) => {
    e.preventDefault();
    saveAs(
      "https://docs.google.com/document/d/1EwvVgnYBR9ZudWi60eNkdaBPc69B0zZJpkohw2s0YJk/edit?usp=drive_link",
      "CV.pdf"
    );
  };
  return (
    <div className="aboutContainer" id="aboutMe">
      <div className="aboutContent">
        <div className="text-1">Hi,</div>
        <div className="text-2">
          I&apos;m <span>Dima</span>
        </div>
        <div className="text-1">Full Stack Developer</div>
        <div className="aboutBtnContainer">
          <button onClick={handleClick} className="aboutBtn">
            Resume
          </button>
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
