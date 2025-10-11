import Hero from "./components/Hero"
import FeaturedProperties from "./components/FeaturedProperties"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"
import AskAgent from "./components/AskAgent"

const App = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProperties />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
      <AskAgent />
    </div>
  )
}

export default App