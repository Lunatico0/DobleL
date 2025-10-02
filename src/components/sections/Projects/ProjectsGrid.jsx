import React, { useState } from "react";
import { projects } from "@data/projects.js";
import ProjectDetail from "./ProjectDetail.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { useProjectModal } from "@/hook/useProjectModal.js";

const Projects = () => {
  const { selected, open, handleOpen, handleClose } = useProjectModal();

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
          project.status === "active" ? (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={handleOpen}
            />
          ) : null
        ))}
      </section>

      {open && selected && (
        <ProjectDetail project={selected} open={open} onClose={handleClose} />
      )}

    </section>
  );
};

export default Projects;
