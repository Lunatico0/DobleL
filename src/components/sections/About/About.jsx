import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col my-4 items-center justify-center px-6 py-16 scroll-mt-19 bg-background/10 text-text backdrop-blur-md transition-colors duration-500 rounded-xl"
    >
      <h2
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
      >
        Acerca de Nosotros
      </h2>

      <p
        className="max-w-3xl text-center text-gray-700 dark:text-gray-300"
      >
        En <span className="font-semibold text-secondary">Doble L</span> nos especializamos en ofrecer soluciones innovadoras y de calidad.
        Nuestro compromiso es brindar confianza, eficiencia y excelencia en cada proyecto.
      </p>
    </section>
  )
}

export default About
