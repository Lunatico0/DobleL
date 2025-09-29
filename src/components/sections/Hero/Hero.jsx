import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Swiper from "@ui/swiper.jsx";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { projects } from "@/data/projects.js";

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}{end === 100 ? "%" : "+"}</span>;
};

const Hero = () => {
  const m2 = projects.reduce((total, project) => total + (project.m2 || 0), 0);
  const m2Final = m2 >= 1000 ? Math.floor(m2 / 100) * 100 : m2;
  const projectsCount = projects.length;
  const message = 'Buenas, quiero mas informacion sobre los precios de renders y mas. Muchas gracias.'

  return (
    <section
      id="hero"
      className="bg-background/10 text-text backdrop-blur-md transition-colors duration-500 py-4 pb-4 px-3 lg:px-8 gap-x-6 scroll-mt-19 flex flex-col-reverse lg:flex-row items-center justify-between rounded-xl"
    >

      {/* Columna izquierda */}
      <motion.div
        className="w-full lg:max-w-xl space-y-6 text-center lg:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center mx-auto lg:mx-0 bg-gradient-to-r from-secondary/60 to-primary/60 border border-primary rounded-full px-4 py-2 mt-4 lg:mt-0"
        >
          <MilitaryTechIcon className="h-4 w-4 text-text mr-2" />
          <span className="text-text text-sm font-medium">
            Arquitecto matriculado
          </span>
        </motion.div>

        {/* Título */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Construimos{" "}
          <motion.span
            className="text-secondary inline-block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Tu Futuro
          </motion.span>
        </motion.h1>

        {/* Descripción */}
        <motion.div
          className="text-base sm:text-lg lg:text-xl md:max-w-xl mx-auto text-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p>
            Un estudio joven que te acompaña desde los cimientos hasta acabados, tu proyecto en manos expertas y confiables.
          </p>
          <p>
            Hacemos realidad tus sueños.
          </p>
        </motion.div>

        {/* Botones */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a
            className="bg-primary hover:bg-primary/80 text-text rounded-md shadow-sm transition duration-300 text-center p-4"
            href={`https://wa.me/5493435451198?text=${message}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Solicitar Presupuesto
          </a>

          <a
            className="px-6 py-2 sm:py-3 rounded-lg border-2 border-secondary/70 text-secondary font-semibold hover:bg-secondary/70 hover:text-text transition duration-300"
            href="#projects"
          >
            Ver Proyectos
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div>
            <p className="text-3xl font-bold text-white">
              <Counter end={m2Final} duration={2.1} />
            </p>
            <p className="text-sm text-nowrap">m<sup>2</sup> renderizados</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">
              <Counter end={projectsCount} duration={1.8} />
            </p>
            <p className="text-sm text-nowrap">Proyectos</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">
              <Counter end={100} duration={1.9} />
            </p>
            <p className="text-sm text-nowrap">Satisfacción</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Columna derecha */}
      <motion.div className="w-full md:max-w-lg md:mt-0">
        <Swiper />
      </motion.div>

    </section >
  );
};

export default Hero;
