import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Slide } from "@data/personal.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Parallax } from "swiper/modules";
import "swiper/css/parallax";
import "swiper/css/controller";
import "swiper/css/parallax";
import "swiper/css";

export default function ParallaxSwiper() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Slide.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);


  return (
    <Swiper
      modules={[Parallax, Controller, Autoplay]}
      speed={600}
      parallax={true}
      loop={true}
      controller={{ inverse: true }}
      autoplay={{ delay: 4000, disableOnInteraction: true }}
      className="mySwiper"
    >
      {Slide.map((slide, i) => (
        <SwiperSlide key={i}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full
              h-[60dvh] flex items-center justify-center
              bg-backgroundDark overflow-hidden max-w-dvw mx-auto "
          >
            <img
              src={slide.image}
              alt={`Slide ${i}`}
              onLoad={() => setLoaded(true)}
              className={`
                absolute inset-0 w-full h-full object-cover
                transition-opacity duration-1200
                ${loaded ? "opacity-100" : "opacity-0"}
              `}
              loading="lazy"
            />

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="relative z-10 text-center text-black px-4 sm:px-8"
            >
              <h2
                data-swiper-parallax="-130%"
                className={`
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                  font-bold drop-shadow-md
                  ${slide.customClass}
                `}
              >
                {slide.title}
              </h2>
              <p
                data-swiper-parallax="130%"
                className={`
                  mt-2 text-sm sm:text-base md:text-lg lg:text-xl
                  ${slide.customClass}
                `}
              >
                {slide.desc}
              </p>
            </motion.div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
