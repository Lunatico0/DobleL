import { motion } from "framer-motion";

const ProjectCard = ({ project, index, onOpen }) => (
  <motion.article
    key={project.id}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="relative group overflow-hidden rounded-xl shadow-lg"
  >
    {/* Imagen */}
    <img
      loading="lazy"
      decoding="async"
      src={project.images[0]}
      alt={project.alt}
      className="w-full h-60 sm:h-80 object-cover filter grayscale group-hover:grayscale-0 transition duration-700 ease-in-out"
    />

    {/* Overlay de info */}
    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white transition-opacity duration-700 ease-in-out group-hover:opacity-0">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm">{project.location}</p>
      <span className="text-xs mt-2">{project.date}</span>
    </div>

    {/* Botón */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out">
      <button
        aria-label={`Ver detalles del proyecto ${project.title}`}
        onClick={() => onOpen(project)}
        className="px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition"
      >
        Ver Proyecto
      </button>
    </div>
  </motion.article>
);

export default ProjectCard;
