import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-6 py-16 scroll-mt-28 bg-background/10 text-text backdrop-blur-md transition-colors duration-500 rounded-xl"
    >
      <h2
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
      >
        Contactanos
      </h2>

      <h2
        className='text-text'
      >
        Puedes contactarme a través de mis redes o llenando el formulario.
      </h2>

      <div
        className="flex flex-col sm:flex-row justify-center items-center gap-4 p-4 my-4 text-sm bg-background/10 text-text backdrop-blur-md transition-colors duration-500 rounded-xl"
      >
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

      <form
        className="w-full max-w-md space-y-4"
      >
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full p-3 rounded-lg border border-secondary/40 bg-background/90"
        />

        <input
          type="email"
          placeholder="Tu email"
          className="w-full p-3 rounded-lg border border-secondary/40 bg-background/90"
        />

        <textarea
          placeholder="Tu mensaje"
          rows="4"
          className="w-full p-3 rounded-lg border border-secondary/40 bg-background/90" />

        <button
          type="submit"
          className="w-full py-3 bg-secondary/70 hover:bg-secondary text-text font-semibold rounded-lg transition-colors transition-discrete"
        >
          Enviar
        </button>
      </form>
    </section>
  )
}

export default Contact
