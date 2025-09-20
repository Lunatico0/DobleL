import './App.css'
import Footer from '@components/layout/Footer.jsx'
import NavHero from '@components/layout/NavHero.jsx'
import Home from '@pages/Home.jsx'
import Loader from "@ui/Loader";
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className="min-h-screen w-full mx-auto bg-background/10 dark:bg-backgroundDark/50 transition-colors duration-500 scroll-smooth  backdrop-blur-xs">
          <NavHero />
          <Home />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
