import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-6 py-16 scroll-mt-19 bg-background/10 text-text backdrop-blur-md transition-colors duration-500 rounded-xl"
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
          className="w-full p-3 rounded-lg border border-secondary/40 bg-background/90 focus:outline-none focus:ring-1 focus:ring-secondary"
        />

        <input
          type="email"
          placeholder="Tu email"
          className="w-full p-3 rounded-lg border border-secondary/40 bg-background/90 focus:outline-none focus:ring-1 focus:ring-secondary"
        />

        <textarea
          placeholder="Tu mensaje"
          rows="4"
          className="w-full p-3 rounded-lg border border-secondary/40 bg-background/90 focus:outline-none focus:ring-1 focus:ring-secondary" />

        <button
          type="submit"
          className="w-full py-3 bg-secondary/70 hover:bg-secondary text-text font-semibold rounded-lg transition-colors transition-discrete"
        >
          Enviar
        </button>
      </form>
    </section>

    // <section
    //   id="contact"
    //   className"py-20 px-6 text-center scroll-mt-19 bg-background/10 text-text backdrop-blur-md transition-colors duration-500 rounded-xl"
    // >
    //   <h2 className"text-3xl font-bold mb-6">Contacto</h2>
    //   <p className"max-w-xl mx-auto text-text mb-10">
    //     ¿Tienes alguna duda o consulta? Escríbenos y te responderemos a la brevedad.
    //   </p>

    //   <form className"max-w-xl mx-auto space-y-6 text-left">
    //     <div>
    //       <label className"block text-text mb-2">Nombre</label>
    //       <input type="text" className"w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-secondary" />
    //     </div>

    //     <div>
    //       <label className"block text-text mb-2">Email</label>
    //       <input type="email" className"w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-secondary" />
    //     </div>

    //     <div>
    //       <label className"block text-text mb-2">Mensaje</label>
    //       <textarea rows="4" className"w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-secondary"></textarea>
    //     </div>

    //     <div className"text-center">
    //       <button type="submit" className"bg-secondary/70 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-secondary transition">
    //         Enviar
    //       </button>
    //     </div>
    //   </form>
    // </section>
  )
}

export default Contact
