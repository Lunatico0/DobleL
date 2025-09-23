import React from 'react';
import { motion } from "framer-motion";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Footer = () => {
  const year = new Date().getFullYear();
  const sections =
    [
      { label: "Inicio", id: "" },
      { label: "Proyectos", id: "projects" },
      { label: "Sobre Nosotros", id: "about" },
      { label: "Contacto", id: "contact" },
    ]

  return (
    <footer className="mt-5 border-t border-gray-700 px-4 sm:px-6">

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-4 text-sm text-text">
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
      </div>


      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-4 text-sm">
        <button
          className='cursor-pointer hover:text-accent text-accent/60 transition-colors duration-300'
          onClick={() => window.open("https://www.instagram.com/doblel.arq/", "_blank")}>
          <InstagramIcon />
        </button>

        <button
          className='cursor-pointer hover:text-accent text-accent/60 transition-colors duration-300'
          onClick={() => window.open("https://www.linkedin.com/in/lautaro-luna-87029466", "_blank")}>
          <LinkedInIcon />
        </button>

        <button
          className='cursor-pointer hover:text-accent text-accent/60 transition-colors duration-300'
          onClick={() => window.open("https://wa.me/+5493435451198", "_blank")}>
          <WhatsAppIcon />
        </button>

        <button
          className='cursor-pointer hover:text-accent text-accent/60 transition-colors duration-300'
          onClick={() => window.open("mailto:doblel.estudiodearquitectura@gmail.com", "_blank")}>
          <AlternateEmailIcon />
        </button>
      </div>

      <p className="flex sm:flex-row items-center justify-center gap-2 py-4 text-sm opacity-80 text-text">
        <span className="font-semibold text-accent font-script">DobleL.arq</span>® hecho por
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pittanapatricio.vercel.app"
          className="inline-flex items-center"
        >
          <img src="/LogoImg/DobleP-Logo.svg" alt="Pittana Patricio Dev" className="h-5 ml-1" />
        </a>
        . © {year}
      </p>
    </footer>
  )
}

export default Footer
