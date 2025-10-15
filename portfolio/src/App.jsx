import Header from "./components/header/header"
import Content from "./pages/landingPage/content"
import About from "./pages/about/about"
import Experience from "./pages/about/experience"
import ExperiencesSnapshots from "./pages/about/experiences_snapshots"

function App() {

  return (
    <>
      <Header />
      {/* <Content />
      <About /> */}
      <Experience />
      <ExperiencesSnapshots />
    </>
  )
}

export default App
