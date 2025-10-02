import { aboutData } from "@/data/about";
import { AboutCard } from "./AboutCard.jsx";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col my-4 items-center justify-center px-6 py-16 scroll-mt-19 bg-background/10 text-text backdrop-blur-md transition-colors duration-500 rounded-xl"
    >
      <h2 className="text-3xl font-bold mb-6">Acerca de Nosotros</h2>

      <p className="max-w-[80ch] mx-auto text-text mb-4 text-pretty">
        Un estudio <span className='text-secondary'>joven</span>, creativo e innovador, donde cada <span className='text-secondary'>proyecto</span> propuesto nace de fusionar ideas frescas con rigor técnico, adaptándose a los estándares de eficiencia energética.
      </p>

      <p className="max-w-[80ch] mx-auto text-text mb-12 text-pretty">
        Creemos en una <span className='text-secondary'>arquitectura viva</span>, libre y, sobre todo, habitable, donde las personas son siempre el punto central: quienes habitan, sienten y disfrutan los espacios. Con un enfoque que combina innovación, técnica y sensibilidad material, <span className='text-secondary'>transformamos</span> cada proyecto en un espacio único que invita a vivir y a conectar.
      </p>

      <div className="flex flex-row justify-around items-stretch max-w-4xl mx-auto w-full gap-6">
        {aboutData.map((item, index) => (
          <AboutCard
            key={index}
            Icon={item.Icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

export default About
