import React, { useState } from "react";
import { motion } from "framer-motion";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const NavHero = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-background/70 dark:bg-backgroundDark/70 backdrop-blur-md shadow-md"
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center py-3 px-4 sm:px-6">
        {/* Logo */}
        <button
          onClick={() =>
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-lg font-bold text-text dark:text-textDark flex items-center"
        >
          Doble L
          <span className="hidden sm:inline text-gray-600 dark:text-gray-400 pl-2 text-sm">
            | Estudio de arquitectura
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            {[
              { label: "Proyectos", id: "projects" },
              { label: "Contacto", id: "contact" },
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <button
                  onClick={() =>
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="relative group"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black dark:bg-gray-400 transition-all duration-300 group-hover:w-full" />
                </button>
              </motion.li>
            ))}
          </ul>

          <button
            onClick={() => window.open("https://wa.me/", "_blank")}
            className="ml-4 bg-primary dark:bg-primaryDark text-text dark:text-textDark px-4 py-2 rounded-full hover:bg-primary/80 dark:hover:bg-primaryDark/80 transition duration-300 text-sm"
          >
            Solicitar Entrevista
          </button>
        </nav>

        <button
          className="md:hidden text-2xl text-text dark:text-textDark"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseRoundedIcon size={28} /> : <MenuRoundedIcon size={28} />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-background/70 dark:bg-backgroundDark/70 backdrop-blur-md shadow-md"
        >
          <ul className="flex flex-col items-center gap-4 py-4 text-text dark:text-textDark">
            {[
              { label: "Proyectos", id: "projects" },
              { label: "Contacto", id: "contact" },
            ].map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    setOpen(false);
                  }}
                  className="hover:underline"
                >
                  {item.label}
                </button>
              </li>
            ))}

            <li>
              <button
                onClick={() =>
                  window.open("https://wa.me/5493435416929", "_blank")
                }
                className="bg-primary text-text dark:text-textDark px-5 py-2 rounded-full hover:bg-primary/80 transition duration-300"
              >
                Solicitar Entrevista
              </button>
            </li>
          </ul>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default NavHero;
