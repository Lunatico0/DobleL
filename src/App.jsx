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
        <div className="min-h-screen w-full max-w-7xl mx-auto bg-background dark:bg-backgroundDark transition-colors duration-500 scroll-smooth px-4 sm:px-6 lg:px-8">
          <NavHero />
          <Home />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
