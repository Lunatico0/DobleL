import React, { useState } from "react";
import { projects } from "@data/projects.js";
import ProjectDetail from "./ProjectDetail.jsx";
import { motion } from "framer-motion";

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (project) => {
    setSelected(project);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <section
      id="projects"
      className="bg-background/10 text-text backdrop-blur-md transition-colors duration-500 scroll-mt-19 rounded-xl mt-4"
    >
      <h2
        className="text-3xl md:text-4xl font-bold py-6 text-center"
      >
        Proyectos
      </h2>
      <section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 sm:p-8 "
      >
        {projects.map((project, index) => (
          project.status === "active" && (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              {/* image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 sm:h-80 object-cover filter grayscale group-hover:grayscale-0 transition duration-700 ease-in-out"
              />

              {/* Capa de información */}
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white transition-opacity duration-700 ease-in-out group-hover:opacity-0">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm">{project.location}</p>
                <span className="text-xs mt-2">{project.date}</span>
              </div>

              {/* Botón que queda visible */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out">
                <button
                  onClick={() => handleOpen(project)}
                  className="px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition"
                >
                  Ver Proyecto
                </button>
              </div>
            </motion.div>
          )
        ))}
      </section>


      <ProjectDetail project={selected} open={open} onClose={handleClose} />
    </section>
  );
};

export default Projects;
