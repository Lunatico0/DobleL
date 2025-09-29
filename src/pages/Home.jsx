import React from 'react';
import Hero from '@components/sections/Hero/Hero.jsx';
import About from '@/components/sections/About/About.jsx';
import Contact from '@/components/sections/Contact/Contact.jsx';
import Projects from '@components/sections/Projects/ProjectsGrid.jsx'

const Home = () => {
  return (
    <main className='my-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}

export default Home
