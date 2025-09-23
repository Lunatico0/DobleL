import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Typography from "@mui/material/Typography";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ProjectDetail({ project, open, onClose }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!project) return null;

  const handleClose = () => {
    setThumbsSwiper(null);
    onClose();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: "85%", md: 720 },
    bgcolor: "background.background",
    color: "text.text",
    boxShadow: 24,
    borderRadius: 2,
    p: 3,
    maxHeight: "90vh",
    overflow: "auto",
  };

  return (
    <Modal
      open={Boolean(open)}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 400 }}
      aria-labelledby="project-detail-title"
      aria-describedby="project-detail-desc"
    >
      <Fade in={Boolean(open)}>
        <Box
          sx={style}
          className="bg-black/60 backdrop-blur-sm transition-colors transition-discrete transition-duration-200"
        >
          {/* botón cerrar */}
          <IconButton
            onClick={handleClose}
            aria-label="Cerrar"
            color="inherit"
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseRoundedIcon />
          </IconButton>

          {/* título */}
          <Typography
            id="project-detail-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2, fontWeight: 700 }}
          >
            {project.title}
          </Typography>

          {/* slider con thumbs */}
          {project.images?.length > 0 && (
            <>
              {/* Swiper principal */}
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                  marginBottom: "12px",
                }}
                spaceBetween={10}
                navigation
                loop={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mb-4"
              >
                {project.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${project.title} ${idx + 1}`}
                      className="w-full h-72 object-cover rounded"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Swiper de miniaturas (thumbs) */}
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper-thumbs"
              >
                {project.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`thumb ${idx + 1}`}
                      className="w-full h-20 aspect-video object-cover rounded cursor-pointer"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}

          {/* descripción */}
          {project.description && (
            <Typography
              id="project-detail-desc"
              variant="body1"
              sx={{ mb: 1, color: "text.text" }}
            >
              {project.description}
            </Typography>
          )}

          {/* meta */}
          <Typography variant="body2" color="text.text">
            {project.location} {project.location && (project.date || project.m2) ? " · " : ""}
            {project.date} {project.m2 ? ` · ${project.m2} m²` : ""}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
}
