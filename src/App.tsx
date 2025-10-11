import Hero from "./components/Hero"
import FeaturedProperties from "./components/FeaturedProperties"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProperties />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App