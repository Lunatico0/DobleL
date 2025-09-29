import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EmailContact from './EmailContact.jsx';

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-6 py-16 scroll-mt-19 bg-background/10 text-text backdrop-blur-md transition-colors duration-500 rounded-xl"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Contactanos
      </h2>

      <h2 className='text-text'>
        Puedes contactarme a través de mis redes o llenando el formulario.
      </h2>

      {/* <-- Pill with socials --> */}
      <div
        className="flex sm:flex-row justify-center items-center gap-4 p-4 my-4 text-sm bg-background/10 text-text backdrop-blur-md transition-colors duration-500 rounded-xl"
      >

        <a
          href="https://www.instagram.com/doblel.arq/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-accent text-accent/60 transition-colors duration-300"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/lautaro-luna-87029466"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-accent text-accent/60 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>

        <a
          href="https://wa.me/+5493435451198"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:text-accent text-accent/60 transition-colors duration-300"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon />
        </a>

        <a
          href="mailto:doblel.estudiodearquitectura@gmail.com"
          className="cursor-pointer hover:text-accent text-accent/60 transition-colors duration-300"
          aria-label="Correo electrónico"
        >
          <AlternateEmailIcon />
        </a>
      </div>

      {/* <-- Form Contact --> */}
      <EmailContact />

    </section>

  )
}

export default Contact
