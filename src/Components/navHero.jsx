import React from 'react';

const navHero = () => {
  return (
    <div className='flex justify-between pt-10'>
      <h1 className='text-lg'><span className='font-bold'>Perlo Arevalo Gaston</span> | Maestro Mayor de Obra</h1>
      <nav className='flex items-center gap-5'>
        <ul className='flex gap-5 justify-center items-center'>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <button
          onClick={() => window.open('https://wa.me/5493435416929', '_blank')}
          className='bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300'
        >
          Solicitar Entrevista
        </button>
      </nav>
    </div>
  )
}

export default navHero
