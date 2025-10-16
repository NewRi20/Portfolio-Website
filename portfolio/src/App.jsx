import Header from "./components/header/header"
import Content from "./pages/landingPage/content"
import About from "./pages/about/about"
import Experience from "./pages/about/experience"
import ExperiencesSnapshots from "./pages/about/experiences_snapshots"
import Skills from "./pages/skills/Skills.jsx"
import Projects from "./pages/project/Projects.jsx"
import ContactInformation from "./pages/contactInformation/ContactInformation.jsx"

function App() {

  return (
    <>
      <Header />
      <Content />
      <div id="about">
        <About />
        <Experience />
        <ExperiencesSnapshots />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contacts">
        <ContactInformation />
      </div>
    </>
  )
}

export default App
