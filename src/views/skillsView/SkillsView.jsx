import "./skillsView.css";

const SkillsView = () => {
  return (
    <div className="skillsContainer" id="skills">
      <h2>What do you expect?</h2>
      <div className="elevatorPitch">
        <h6 className="questions">Hardskills?</h6>
        <p>
          Well, I&apos;m fullstack developer who can build, maintain and deploy
          web application with multi filter search,
          authentication/authorization, integrated map (mapBox), reservation
          feature and payment method (Stripe).
        </p>
        <div className="techStack">
          <ul>
            <li id="techStack">Tech Stack:</li>
            <li>React</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Docker</li>
            <li>Git</li>
            <li>HTML/SCSS/Bootstrap</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <h6 className="questions">Motivation?</h6>
        <p>
          I&apos;m eager to create a product that I can &quot;touch&quot;. I
          like to find solutions. I receive satisfaction from high-level done
          work. I like to learn. Coding consist all of it. That is why I&apos;m
          loving it!
        </p>
        <h6 className="questions">Ability to work and learn independently?</h6>
        <p>
          I have learned MERN stack from scratch and launched fullstack web app.
          So yes, I know how to find answers independently.
        </p>
      </div>
    </div>
  );
};

export default SkillsView;
