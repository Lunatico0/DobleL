import { AtSign, Instagram, Linkedin, LinkedinIcon } from 'lucide-react';
import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const year = new Date().getFullYear();
const dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const logo = dark ? '/logoDark.png' : '/logo-light.png';

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-300 dark:border-gray-700 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-4 text-sm text-gray-600 dark:text-gray-400">
        <button
          className="hover:underline"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          Proyectos
        </button>
        <button
          className="hover:underline"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Contacto
        </button>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-4 text-sm text-gray-600 dark:text-gray-400">
        <button
          className='cursor-pointer hover:text-accent transition-colors duration-300'
          onClick={() => window.open("https://www.instagram.com/doblelarq/", "_blank")}>
          <InstagramIcon />
        </button>

        <button
          className='cursor-pointer hover:text-accent transition-colors duration-300'
          onClick={() => window.open("https://www.linkedin.com/in/doblelarq/", "_blank")}>
          <LinkedInIcon />
        </button>

        <button
          className='cursor-pointer hover:text-accent transition-colors duration-300'
          onClick={() => window.open("https://wa.me/", "_blank")}>
          <WhatsAppIcon />
        </button>

        <button
          className='cursor-pointer hover:text-accent transition-colors duration-300'
          onClick={() => window.open("mailto:doblelarquitecturagmail.com", "_blank")}>
          <AlternateEmailIcon />
        </button>
      </div>

      <p className="flex sm:flex-row items-center justify-center gap-2 py-4 text-sm opacity-80 text-gray-600 dark:text-gray-400">
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
