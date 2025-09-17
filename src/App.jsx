import './App.css'
import Footer from './Components/Footer.jsx'
import Hero from './Components/Hero.jsx'
import NavHero from './Components/NavHero.jsx'
import Proyects from './Components/Proyects.jsx'

function App() {

  return (
    <div className="min-h-screen max-w-dvw bg-background dark:bg-background-dark transition-colors duration-500 scroll-smooth">
      <div className="max-w-dvw md:max-w-7xl mx-auto px-4">
        <NavHero />
        <Hero />
        <Proyects />
        <Footer />
      </div>
    </div>
  )
}

export default App
