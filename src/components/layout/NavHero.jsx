import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { headerSections } from "@/data/sections.js";
import NavList from "../ui/NavList.jsx";

const NavHero = () => {
  const [open, setOpen] = useState(false);

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
          <a href="#hero" className="text-lg font-bold text-text flex items-center">
            Doble L
            <span className="hidden sm:inline text-gray-400 pl-2 text-sm">
              | Estudio de arquitectura
            </span>
          </a>

          {/* Desktop nav (flex overlay) */}
          <nav className="hidden md:flex items-center gap-6">
            <NavList sections={headerSections} direction="row" includeCTA />
          </nav>

          {/* Mobile menu button */}
          <button
            aria-label="Abrir menú de navegación"
            className="md:hidden text-2xl text-text cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseRoundedIcon size={28} /> : <MenuRoundedIcon size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile nav (fixed overlay) */}
      <AnimatePresence>
        {open && (
          <motion.nav
            iinitial={{ opacity: 0, y: -180 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -180 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 w-full z-40 md:hidden bg-background/70 backdrop-blur-md shadow-md"
          >
            <NavList sections={headerSections} direction="col" includeCTA isMobile />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavHero;
