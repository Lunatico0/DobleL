import React from 'react'
import Hero from '@components/sections/Hero/Hero.jsx'
import Projects from '@components/sections/Projects/ProjectsGrid.jsx'

const Home = () => {
  return (
    <div className='mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <Hero />
      <Projects />
    </div>
  )
}

export default Home
