import React from 'react';
import { motion } from "framer-motion";
import SocialPill from '../ui/SocialPill.jsx';
import { footerSections } from '@/data/sections.js';
import NavList from '../ui/NavList.jsx';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-5 border-t border-gray-700 px-4 sm:px-6">

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-4 text-sm text-text">
        <NavList sections={footerSections} direction="row" />
      </div>

      {/* <-- Pill with socials --> */}
      <SocialPill className="flex flex-row justify-center items-center gap-4 py-4 text-sm" />


      <p className="flex sm:flex-row items-center justify-center gap-2 py-4 text-sm opacity-80 text-text">
        <span className="font-semibold text-accent font-script">DobleL.arq</span>® hecho por
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://pittanapatricio.vercel.app"
          className="inline-flex items-center"
        >
          <img loading='lazy' decoding='async' src="/LogoImg/DobleP-Logo.svg" alt="DobleP.dev Desarrollo Full Stack" className="h-5 ml-1" />
        </a>
        . © {year}
      </p>
    </footer>
  )
}

export default Footer
