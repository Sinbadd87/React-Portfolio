import gridIcon from "../../assets/grid.svg";
import closeIcon from "../../assets/close.svg";
import { useState } from "react";

import "./navigation.css";

const Navigation = () => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <div className="navContainer">
      <div className="logo">
        <a href="#">
          <span>D</span>ima <span>T</span>ischenko
        </a>
      </div>
      <ul className={menu ? "menuContainer active" : "menuContainer"}>
        <li>
          <a href="#aboutMe" onClick={handleClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#projects" onClick={handleClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" onClick={handleClick}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contactMe" onClick={handleClick}>
            Contact
          </a>
        </li>
      </ul>
      <div className={menu ? "icon hide" : "icon"}>
        <img src={gridIcon} alt="" onClick={handleClick} />
      </div>
      <div className={!menu ? "icon hide" : "icon"}>
        <img src={closeIcon} alt="" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Navigation;
