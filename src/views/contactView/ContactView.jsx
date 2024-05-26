import gmailIcon from "../../assets/gmail.svg";
import gitHubIcon from "../../assets/github.svg";
import linkedInIcon from "../../assets/linkedin.svg";

import "./contactView.css";

const ContactView = () => {
  return (
    <div className="contactContainer" id="contactMe">
      <h2>Have more questions? Let&apos;s talk!</h2>
      <div className="contactInfo">
        <div className="contactInfoIcon">
          <a href="mailto:dtishen@gmail.com">
            <img src={gmailIcon} alt="" />
            <span>dtishen@gmail.com</span>
          </a>
        </div>
        <div className="contactInfoIcon">
          <a href="http://www.linkedin.com/in/dmitry-tischenko-29355134">
            <img src={linkedInIcon} alt="" /> <span>Dima Tischenko</span>
          </a>
        </div>
        <div className="contactInfoIcon">
          <a href="https://github.com/Sinbadd87">
            <img src={gitHubIcon} alt="" /> <span>Dima Tischenko</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
