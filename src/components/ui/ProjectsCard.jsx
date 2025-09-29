import React from 'react'
import { motion } from "framer-motion";

const ProjectsCard = (proyecto, setSelected) => {
  console.log(proyecto.proyecto)
  return (
    <>
      {/* ProjectCard original */}
      <motion.div
        key={proyecto.proyecto.id}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: proyecto.index * 0.15 }}
        className="relative group overflow-hidden rounded-xl shadow-lg"
      >
        {/* Imagen */}
        <img
          loading='lazy'
          decoding='async'
          src={proyecto.proyecto.imagen}
          alt={proyecto.proyecto.titulo}
          className="w-full h-60 sm:h-80 object-cover filter grayscale group-hover:grayscale-0 transition duration-700 ease-in-out"
        />

        {/* Capa de información */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white transition-opacity duration-700 ease-in-out group-hover:opacity-0">
          <h3 className="text-xl font-semibold">{proyecto.proyecto.titulo}</h3>
          <p className="text-sm">{proyecto.proyecto.ubicacion}</p>
          <span className="text-xs mt-2">{proyecto.proyecto.fecha}</span>
        </div>

        {/* Botón que queda visible */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out">
          <button
            onClick={() => setSelected(proyecto.proyecto)}
            className="px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition"
          >
            Ver Proyecto
          </button>
        </div>


      </motion.div>

      {/* Contacto alternativo */}

      <section
        id="contact"
        className="py-20 px-6 text-center scroll-mt-19 bg-background/10 text-text backdrop-blur-md transition-colors duration-500 rounded-xl"
      >
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <p className="max-w-xl mx-auto text-text mb-10">
          ¿Tienes alguna duda o consulta? Escríbenos y te responderemos a la brevedad.
        </p>

        <div
          className="flex sm:flex-row justify-center items-center gap-4 p-4 my-4 text-sm bg-background/10 text-text backdrop-blur-md transition-colors duration-500 rounded-xl"
        >
          <button
            className='cursor-pointer hover:text-accent text-accent/60 transition-colors duration-300'
            onClick={() => window.open("https://www.instagram.com/doblel.arq/", "_blank")}>
            <InstagramIcon />
          </button>

          <button
            className='cursor-pointer hover:text-accent text-accent/60 transition-colors duration-300'
            onClick={() => window.open("https://www.linkedin.com/in/lautaro-luna-87029466", "_blank")}>
            <LinkedInIcon />
          </button>

          <button
            className='cursor-pointer hover:text-accent text-accent/60 transition-colors duration-300'
            onClick={() => window.open("https://wa.me/+5493435451198", "_blank")}>
            <WhatsAppIcon />
          </button>

          <button
            className='cursor-pointer hover:text-accent text-accent/60 transition-colors duration-300'
            onClick={() => window.open("mailto:doblel.estudiodearquitectura@gmail.com", "_blank")}>
            <AlternateEmailIcon />
          </button>
        </div>

        <form className="max-w-xl mx-auto space-y-6 text-left">
          <div>
            <label className="block text-text mb-2">Nombre</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-secondary" />
          </div>

          <div>
            <label className="block text-text mb-2">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-secondary" />
          </div>

          <div>
            <label className="block text-text mb-2">Mensaje</label>
            <textarea rows="4" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-secondary"></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="bg-secondary/70 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-secondary transition">
              Enviar
            </button>
          </div>
        </form>
      </section>

      {/* About alternativo */}
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
    </>

  )
}

export default ProjectsCard
