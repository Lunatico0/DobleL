import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Swiper from "@ui/swiper.jsx";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // 60fps
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
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-3 md:px-12 py-6 scroll-mt-28 bg-background text-text dark:bg-backgroundDark/10 backdrop-blur-md dark:text-textDark transition-colors duration-500 rounded-xl"
    >

      {/* Columna izquierda */}
      <motion.div
        className="w-full md:max-w-xl space-y-6 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center mx-auto md:mx-0 bg-gradient-to-r from-secondary/20 to-primary/20 border border-primary/30 rounded-full px-4 py-2 mt-4 md:mt-0"
        >
          <MilitaryTechIcon className="h-4 w-4 text-text dark:text-white mr-2" />
          <span className="text-text dark:text-textDark text-sm font-medium">
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
        <motion.p
          className="text-base sm:text-lg md:text-xl text-text dark:text-textDark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Un estudio joven que te acompaña desde los cimientos hasta acabados, tu proyecto en manos expertas y confiables.
        </motion.p>

        <p className="text-base sm:text-lg md:text-xl text-text dark:text-textDark">
          Hacemos realidad tus sueños.
        </p>

        {/* Botones */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button className="bg-primary dark:bg-primaryDark text-text dark:text-textDark px-5 py-2 rounded-md hover:bg-primary/80 dark:hover:bg-primaryDark/80 shadow-sm transition duration-300">
            Solicitar Presupuesto
          </button>
          <button className="px-6 py-2 sm:py-3 rounded-lg border-2 border-secondary/70 text-secondary font-semibold hover:bg-secondary/70 hover:text-white transition duration-300">
            Ver Proyectos
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div>
            <p className="text-3xl font-bold text-white">
              <Counter end={20} duration={2.1} />
            </p>
            <p className="text-sm">Años de Experiencia</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">
              <Counter end={150} duration={1.8} />
            </p>
            <p className="text-sm">Proyectos Completados</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-white">
              <Counter end={100} duration={1.9} />
            </p>
            <p className="text-sm">Satisfacción Cliente</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Columna derecha */}
      <motion.div className="w-full md:max-w-lg mt-8 md:mt-0">
        <Swiper />
      </motion.div>

    </section >
  );
};

export default Hero;
