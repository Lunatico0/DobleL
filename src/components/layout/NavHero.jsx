import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const NavHero = () => {
  const [open, setOpen] = useState(false);
  const sections =
    [
      { label: "Proyectos", id: "projects" },
      { label: "Sobre Nosotros", id: "about" },
      { label: "Contacto", id: "contact" },
    ]

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-md shadow-md"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 sm:px-6">
          {/* Logo */}
          <a
            href="#hero"
            className="text-lg font-bold text-text flex items-center"
          >
            Doble L
            <span className="hidden sm:inline text-gray-400 pl-2 text-sm">
              | Estudio de arquitectura
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6">
              {sections.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <a
                    href={`#${item.id}`}
                    className="relative group"
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </motion.li>
              ))}
            </ul>

            <a
              href="https://wa.me/5493435451198"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-text hover:bg-primary/80 px-4 py-2 rounded-full transition duration-300 text-sm"
            >
              Solicitar Entrevista
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            aria-label="Abrir menú de navegación"
            className="md:hidden text-2xl text-text cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseRoundedIcon size={28}/> : <MenuRoundedIcon size={28}/>}
          </button>
        </div>
      </motion.header>

      {/* Mobile nav (fixed overlay) */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -180 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -180 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 w-full z-40 md:hidden bg-background/70 backdrop-blur-md shadow-md"
          >
            <ul className="flex flex-col items-center gap-4 py-4 text-text">
              {sections.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.id}`}
                    className="relative group"
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="https://wa.me/5493435451198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/80 text-text px-4 py-2 rounded-full transition duration-300 text-sm"
                >
                  Solicitar Entrevista
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavHero;
