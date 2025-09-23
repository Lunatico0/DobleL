import React from "react";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Typography from "@mui/material/Typography";

export default function ProjectDetail({ project, open, onClose }) {
  if (!project) return null;

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
      onClose={onClose}
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
            onClick={onClose}
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

          {/* imagen */}
          {project.image && (
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                width: "100%",
                height: { xs: 180, sm: 240, md: 320 },
                objectFit: "cover",
                borderRadius: 1,
                mb: 2,
              }}
            />
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
