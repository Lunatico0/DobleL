import { useState } from "react";
import { motion } from "framer-motion";
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
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-md shadow-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 sm:px-6">
        {/* Logo */}
        <button
          onClick={() =>
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-lg font-bold text-text flex items-center"
        >
          Doble L
          <span className="hidden sm:inline text-gray-400 pl-2 text-sm">
            | Estudio de arquitectura
          </span>
        </button>

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

          <button
            onClick={() => window.open("https://wa.me/5493435451198", "_blank")}
            className="ml-4 bg-primary text-text hover:bg-primary/80 px-4 py-2 rounded-full transition duration-300 text-sm"
          >
            Solicitar Entrevista
          </button>
        </nav>

        <button
          className="md:hidden text-2xl text-text"
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
          className="md:hidden bg-background/70 backdrop-blur-md shadow-md"
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
              <button
                onClick={() => window.open("https://wa.me/5493435451198", "_blank")}
                className="ml-4
                bg-primary hover:bg-primary/80
                text-text px-4 py-2 rounded-full
                transition duration-300 text-sm"
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
