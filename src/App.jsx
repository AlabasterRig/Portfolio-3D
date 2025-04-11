import LogoSection from "./sections/LogoSection.jsx"
import NavBar from "./components/NavBar.jsx"
import FeatureCards from "./sections/Featurecards.jsx"
import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoSection/>
      <FeatureCards/>
    </>
  )
}

export default App