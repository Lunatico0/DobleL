import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Parallax } from "swiper/modules";
import "swiper/css/parallax";
import "swiper/css";

const slides = [
  {
    image: "/Personal/Lautaro.png",
    title: "Hola! Soy Lautaro.",
    desc: "En este espacio comparto mi pasión por la construcción y el diseño.",
    customClass: "relative -top-55",
  },
  {
    image: "/proyectos/1.png",
    title: "Construimos tu futuro",
    desc: "Más de 20 años de experiencia en construcción profesional.",
    customClass: "",
  },
  {
    image: "/proyectos/3.png",
    title: "Proyectos personalizados",
    desc: "Desde cimientos hasta acabados, tu proyecto en manos expertas.",
    customClass: "",
  },
];

export default function ParallaxSwiper() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);


  return (
    <Swiper
      modules={[Parallax]}
      speed={600}
      parallax={true}
      loop={true}
      className="mySwiper"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div
            className="relative w-full h-[500px] flex items-center justify-center bg-background-dark overflow-hidden"
          >
            <img
              src={slide.image}
              alt={`Slide ${i}`}
              onLoad={() => setLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1200 ${loaded ? "opacity-100" : "opacity-0"}`}
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="relative z-10 text-center text-black"
            >
              <h2
                data-swiper-parallax="-130%"
                className={`text-4xl font-bold ${slide.customClass}`}
              >
                {slide.title}
              </h2>
              <p
                data-swiper-parallax="130%"
                className={`mt-2 ${slide.customClass}`}
              >
                {slide.desc}
              </p>
            </motion.div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
