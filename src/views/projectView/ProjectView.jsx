import linkIcon from "../../assets/link.svg";
import "./projectView.css";

const ProjectView = () => {
  return (
    <div className="projectContainer" id="projects">
      <h2 className="subTitle">My Projects</h2>
      <div className="projectContent">
        <a
          className="titleProject"
          href="https://realestate-project-mq6u.onrender.com"
        >
          Lestate
          <span>
            <img src={linkIcon} alt="" />
          </span>
        </a>
        <iframe src="https://realestate-project-mq6u.onrender.com/"></iframe>
      </div>
    </div>
  );
};

export default ProjectView;
