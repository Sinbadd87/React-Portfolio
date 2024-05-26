import Navigation from "./views/navigation/Navigation";
import AboutView from "./views/aboutView/AboutView";
import ProjectView from "./views/projectView/ProjectView";
import SkillsView from "./views/skillsView/SkillsView";
import ContactView from "./views/contactView/ContactView";
import Footer from "./views/footer/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <AboutView />
      <ProjectView />
      <SkillsView />
      <ContactView />
      <Footer />
    </div>
  );
}

export default App;
