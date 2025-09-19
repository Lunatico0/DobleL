import React from 'react'
import { motion } from "framer-motion";

const ProjectsCard = ( proyecto, setSelected ) => {
  console.log(proyecto.proyecto)
  return (
    <motion.div
      key={proyecto.proyecto.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: proyecto.index * 0.15 }}
      className="relative group overflow-hidden rounded-xl shadow-lg"
    >
      {/* Imagen */}
      <img
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
  )
}

export default ProjectsCard
