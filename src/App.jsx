import './App.css'
import Footer from './Components/footer.jsx'
import Hero from './Components/Hero.jsx'
import NavHero from './Components/NavHero.jsx'
import Proyectos from './Components/Proyectos.jsx'

function App() {

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark transition-colors duration-500 scroll-smooth">
      <div className="max-w-7xl mx-auto px-4">
        <NavHero />
        <Hero />
        <Proyectos />
        <Footer />
      </div>
    </div>
  )
}

export default App
