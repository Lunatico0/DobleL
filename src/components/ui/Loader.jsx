import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onFinish }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
      if (onFinish) onFinish();
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-[#556175] flex items-center justify-center z-[9999]"
    >
      <svg
        width="900"
        height="900"
        viewBox="0 0 1080 1080"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
      >
        {/* Hexágono */}
        <path
          id="contorno-completo"
          d="m0,539.99999l0,540.00001l540.00001,0l540.00001,0l0,-540.00001l0,-540.00001l-540.00001,0l-540.00001,0l0,540.00001zm657.50001,-201.5l115.5,67l0,97.7l0,97.8l-103.7,-0.2l-103.8,-0.3l-0.3,-60.3l-0.2,-60.2l15,0l15,0l0,45.5l0,45.5l74.5,0l74.5,0l0,-74.3l0,-74.3l-102,-58.8l-102,-58.7l-26.6,15.6c-14.6,8.5 -26.7,15.5 -27,15.5c-0.2,0 -0.3,-7.7 -0.2,-17.1l0.3,-17.1l26,-15.4c14.3,-8.4 26.8,-15.2 27.7,-15.1c0.9,0.1 53.7,30.3 117.3,67.2zm-191.5,104l0,128.5l37.5,0l37.5,0l0,15l0,15l-52.5,0l-52.5,0l-0.2,-118.3l-0.3,-118.3l-49.5,28.7l-49.5,28.7l0,118.2l0,118.3l101.5,58.8c55.8,32.4 102.1,58.7 102.9,58.4c0.7,-0.3 46.7,-26.7 102.2,-58.8l100.8,-58.2l0.3,-16l0.3,-16l14.3,-0.3l14.2,-0.3l0,24.3l0,24.3l-116.5,67.2l-116.5,67.2l-116.5,-67.2l-116.5,-67.2l0.3,-134.4l0.2,-134.3l63.5,-37.1c34.9,-20.3 70.3,-40.9 78.5,-45.8c8.3,-4.8 15.3,-8.8 15.8,-8.8c0.4,-0.1 0.7,57.7 0.7,128.4zm-59,193l0"
          strokeDasharray="2650"
          strokeDashoffset="2650"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="2650"
            to="0"
            dur="2s"
            fill="freeze"
          />
        </path>

        <g
          id="casa-relleno"
          fill="#fff"
          fillOpacity="0"
          transform="scale(0.0774), translate(2303,2580)"
          stroke="#fff"
          strokeOpacity="0"
        >
          <polygon
            id="l-casa-derecha"
            points="4676,1329 7348,2868 7348,4831 5371,4831 5371,3644 5026,3644 5026,5182 7692,5182 7692,2672 4676,924 3994,1322 3994,1727"
          />
          <polygon
            id="l-casa-izquierda"
            points="3690,4831 3690,1498 3340,1701 3340,2098 3340,5182 4676,5182 4676,4831"
          />
          <animate
            attributeName="fill-opacity"
            values="0;1"
            dur="0.5s"
            begin="2s"
            fill="freeze"
          />
          <animate
            attributeName="stroke-width"
            values="0;60"
            dur="1s"
            begin="2s"
            fill="freeze"
          />
          <animate
            attributeName="stroke-opacity"
            values="0;1"
            dur="0.2s"
            begin="2s"
            fill="freeze"
          />
        </g>

        {/* Letras */}
        <text
          x="430"
          y="680"
          fontSize="48"
          fontFamily="Arial, sans-serif"
          fontWeight="500"
          fill="transparent"
          stroke="#fff"
          strokeWidth="3"
          strokeDasharray="600"
          strokeDashoffset="600"
        >
          DobleL.arq
          <animate
            attributeName="stroke-dashoffset"
            from="600"
            to="0"
            dur="2s"
            begin="1s"
            fill="freeze"
          />
          <animate
            attributeName="fill"
            values="transparent;#fff"
            dur="0.5s"
            begin="2.2s"
            fill="freeze"
          />
        </text>
      </svg>
    </motion.div>
  );
}
