import React from "react";
import { motion } from "framer-motion";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const ProjectDetail = ({ project, onClose, isDark }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-2 sm:px-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className={`relative rounded-2xl shadow-lg w-[95%] sm:w-[90%] md:max-w-3xl p-4 sm:p-6 overflow-y-auto max-h-[90vh]
          ${isDark ? "bg-backgroundDark text-gray-300" : "bg-white text-gray-700"}`}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-black dark:hover:text-white"
        >
          <CloseRoundedIcon fontSize="large" />
        </button>

        {/* Título */}
        <h2 className="text-xl sm:text-2xl font-bold mb-4">{project.titulo}</h2>

        {/* Imagen */}
        <img
          src={project.imagen}
          alt={project.titulo}
          className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg mb-4"
        />

        {/* Descripción */}
        <p className="mb-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
          {project.descripcion}
        </p>

        {/* Ubicación y fecha */}
        <p className="text-xs sm:text-sm text-gray-500">
          {project.ubicacion} · {project.fecha}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
