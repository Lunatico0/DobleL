import React from 'react'

const About = () => {
  return (
    <section id="about" className="flex flex-col my-4 items-center justify-center px-6 py-16 scroll-mt-19 bg-background/10 text-text backdrop-blur-md transition-colors duration-500 rounded-xl">
      <h2 className="text-3xl font-bold mb-6">Acerca de Nosotros</h2>
      <p className="max-w-2xl mx-auto text-text mb-12">
        En Doble L creemos en la innovación, la cercanía con nuestros clientes
        y la calidad en cada uno de nuestros servicios. Nuestro equipo trabaja
        día a día para llevar soluciones modernas y accesibles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center bg-primary/90 text-text rounded-full mb-4">
            🌟
          </div>
          <h3 className="font-semibold text-lg">Innovación</h3>
          <p className="text-text text-sm mt-2">Buscamos siempre lo último en tecnología y diseño.</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center bg-primary/90 text-text rounded-full mb-4">
            🤝
          </div>
          <h3 className="font-semibold text-lg">Compromiso</h3>
          <p className="text-text text-sm mt-2">Nuestra prioridad es cumplir con cada cliente.</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center bg-primary/90 text-text rounded-full mb-4">
            ⚡
          </div>
          <h3 className="font-semibold text-lg">Calidad</h3>
          <p className="text-text text-sm mt-2">Ofrecemos soluciones confiables y duraderas.</p>
        </div>
      </div>
    </section>

  )
}

export default About
