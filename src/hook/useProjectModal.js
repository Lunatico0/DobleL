import { useState } from "react";

export const useProjectModal = () => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (project) => {
    setSelected(project);
    setOpen(true);
  };

  const handleClose = () => {
    setSelected(null);
    setOpen(false);
  };

  return { selected, open, handleOpen, handleClose };
};
