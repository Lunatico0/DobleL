import React from 'react';
import EmailContact from './EmailContact.jsx';
import SocialPill from '@/components/ui/SocialPill.jsx';

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
      <SocialPill className="flex sm:flex-row justify-center items-center gap-4 p-4 my-4 text-sm bg-background/10 text-text backdrop-blur-md transition-colors duration-500 rounded-xl" />

      {/* <-- Form Contact --> */}
      <EmailContact />

    </section>

  )
}

export default Contact
