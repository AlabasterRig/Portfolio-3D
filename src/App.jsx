import LogoSection from "./sections/LogoSection.jsx"
import NavBar from "./components/NavBar.jsx"
import FeatureCards from "./sections/Featurecards.jsx"
import Hero from "./sections/Hero.jsx"
import ShowcaseSection from "./sections/ShowcaseSection.jsx"
import ExperienceSection from "./sections/ExperienceSection.jsx"
import TechStack from "./sections/TechStack.jsx"
import Testimonials from "./sections/Testimonials.jsx"

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoSection/>
      <FeatureCards/>
      <ExperienceSection/>
      <TechStack/>
      <Testimonials/>
    </>
  )
}

export default App