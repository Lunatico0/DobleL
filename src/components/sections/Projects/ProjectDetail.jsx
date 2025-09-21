import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const ProjectDetail = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // 👈 captura click en el fondo
      className="fixed inset-0 overflow-y-auto bg-black/60 flex items-center justify-center z-50 px-2 sm:px-4 backdrop-sepia-100 backdrop-blur-sm transition-colors transition-discrete transition-duration-200"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="relative rounded-2xl shadow-lg w-[95%] sm:w-[90%] md:max-w-3xl p-4 sm:p-6 overflow-y-auto max-h-[90dvh] bg-background text-gray-300"
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-text"
        >
          <CloseRoundedIcon fontSize="large" />
        </button>

        {/* Título */}
        <h2 className="text-xl sm:text-2xl font-bold mb-4">{project.title}</h2>

        {/* Imagen */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg mb-4"
        />

        {/* Descripción */}
        <p className="mb-2 text-sm sm:text-base text-gray-300">
          {project.description}
        </p>

        {/* Ubicación y fecha */}
        <p className="text-xs sm:text-sm text-gray-500">
          {project.location} · {project.date} · {project.m2} m<sup>2</sup>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;




// // src/components/sections/Projects/ProjectDetail.jsx
// import React from "react";
// import Modal from "@mui/material/Modal";
// import Backdrop from "@mui/material/Backdrop";
// import Fade from "@mui/material/Fade";
// import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// import Typography from "@mui/material/Typography";

// export default function ProjectDetail({ project, open, onClose }) {
//   if (!project) return null;

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: { xs: "95%", sm: "85%", md: 720 },
//     bgcolor: "background.background",
//     color: "text.primary",
//     boxShadow: 24,
//     borderRadius: 2,
//     p: 3,
//     maxHeight: "90vh",
//     overflow: "auto",
//   };

//   return (
//     <Modal
//       open={Boolean(open)}
//       onClose={onClose}
//       closeAfterTransition
//       BackdropComponent={Backdrop}
//       BackdropProps={{ timeout: 400 }}
//       aria-labelledby="project-detail-title"
//       aria-describedby="project-detail-desc"
//     >
//       <Fade in={Boolean(open)}>
//         <Box sx={style}>
//           {/* botón cerrar */}
//           <IconButton
//             onClick={onClose}
//             aria-label="Cerrar"
//             sx={{ position: "absolute", right: 8, top: 8, color: "text.secondary" }}
//           >
//             <CloseRoundedIcon />
//           </IconButton>

//           {/* título */}
//           <Typography id="project-detail-title" variant="h6" component="h2" sx={{ mb: 2, fontWeight: 700 }}>
//             {project.title}
//           </Typography>

//           {/* imagen */}
//           {project.image && (
//             <Box
//               component="img"
//               src={project.image}
//               alt={project.title}
//               sx={{
//                 width: "100%",
//                 height: { xs: 180, sm: 240, md: 320 },
//                 objectFit: "cover",
//                 borderRadius: 1,
//                 mb: 2,
//               }}
//             />
//           )}

//           {/* descripción */}
//           {project.description && (
//             <Typography id="project-detail-desc" variant="body1" sx={{ mb: 1 }}>
//               {project.description}
//             </Typography>
//           )}

//           {/* meta */}
//           <Typography variant="body2" color="text.secondary">
//             {project.location} {project.location && (project.date || project.m2) ? " · " : ""}
//             {project.date} {project.m2 ? ` · ${project.m2} m²` : ""}
//           </Typography>
//         </Box>
//       </Fade>
//     </Modal>
//   );
// }
