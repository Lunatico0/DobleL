import React from "react";

const proyectosData = [
  {
    id: 1,
    titulo: "Casa Praga",
    ubicacion: "Crespo, Entre Ríos, Argentina",
    fecha: "2022",
    imagen: "/proyectos/1.png",
  },
  {
    id: 2,
    titulo: "Estudio Visión",
    ubicacion: "Paraná, Entre Ríos, Argentina",
    fecha: "2023",
    imagen: "/proyectos/3.png",
  },
  {
    id: 3,
    titulo: "Casa A+L",
    ubicacion: "Crespo, Entre Ríos, Argentina",
    fecha: "2022",
    imagen: "/proyectos/IG1.png",
  },
  {
    id: 4,
    titulo: "Casa Praga",
    ubicacion: "Crespo, Entre Ríos, Argentina",
    fecha: "2022",
    imagen: "/proyectos/enhanced_3.png",
  }
];

const Proyects = () => {
  return (
    <div id="projects" className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 scroll-mt-20">
      {proyectosData.map((proyecto) => (
        <div
          key={proyecto.id}
          className="relative group overflow-hidden rounded-xl shadow-lg"
        >
          {/* Imagen con efecto escala de grises */}
          <img
            src={proyecto.imagen}
            alt={proyecto.titulo}
            className="w-full h-80 object-cover filter grayscale group-hover:grayscale-0 transition duration-700 ease-in-out"
          />

          {/* Capa de información */}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white transition-opacity duration-700 ease-in-out group-hover:opacity-0">
            <h3 className="text-xl font-semibold">{proyecto.titulo}</h3>
            <p className="text-sm">{proyecto.ubicacion}</p>
            <span className="text-xs mt-2">{proyecto.fecha}</span>
          </div>

          {/* Botón que queda visible */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out">
            <button className="px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition">
              Ver Proyecto
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Proyectos;
