import React from 'react'

const year = new Date().getFullYear();
const dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const logo = dark ? '/logo-dark.png' : '/logo-light.png';

console.log(logo)
console.log(dark)

const Footer = () => {
  return (
    <footer className='flex flex-col mt-12 border-t border-gray-300 dark:border-gray-700'>
      <div className='w-full py-6 flex justify-center items-center text-center text-sm text-gray-600 dark:text-gray-400'>
        <ul>
          <li className='inline mx-2 hover:underline cursor-pointer' onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Proyectos</li>
          <li className='inline mx-2 hover:underline cursor-pointer' onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contacto</li>
        </ul>
      </div>
      <div>
        <ul className='w-full py-6 flex justify-center items-center text-center text-sm text-gray-600 dark:text-gray-400'>
          <li className='inline mx-2 hover:underline cursor-pointer' onClick={() => window.open('https://www.instagram.com/doblelarq/', '_blank')}>Instagram</li>
          <li className='inline mx-2 hover:underline cursor-pointer' onClick={() => window.open('https://www.linkedin.com/in/doblelarq/', '_blank')}>LinkedIn</li>
          <li className='inline mx-2 hover:underline cursor-pointer' onClick={() => window.open('https://wa.me/', '_blank')}>WhatsApp</li>
          <li className='inline mx-2 hover:underline cursor-pointer' onClick={() => window.open('mailto:doblelarquitecturagmail.com', '_blank')}>Email</li>
        </ul>
      </div>
      <div className='w-full py-6 flex justify-center items-center text-center text-sm text-gray-600 dark:text-gray-400'>
        {/* <p>{year} ©<span className="font-bold text-text dark:text-text-dark">DobleL.arq</span>. All rights reserved</p>
        <p>. Creado por <span className='font-bold text-text dark:text-text-dark'>DobleP.dev</span></p> */}

        <p className="flex items-center justify-center py-2 text-sm opacity-80">
          <span className="font-semibold text-accent font-script pr-1">DobleL.arq</span>® hecho por
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://pittanapatricio.vercel.app"
            className="inline-flex items-center pl-1 size-5"
          >
            <img src='/logo-dark.png' alt="Pittana Patricio Dev" className="h-5" />
          </a>
          . © {year}
        </p>
      </div>
    </footer>
  )
}

export default Footer
