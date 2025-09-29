import { useEffect } from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function Toast({ type = "success", message, onClose }) {
  // Autocierre después de unos segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  // Colores según el tipo
  const style =
    type === "success"
      ? "bg-secondary/90 text-textDark"
      : type === "error"
        ? "bg-red-500 text-text"
        : "bg-primary/80 text-text";

  return (
    <div className="fixed top-5 right-5 z-50">
      <div
        className={`${style} px-4 py-2 rounded-lg shadow-lg flex items-center justify-between gap-4`}
      >
        <span>{message}</span>
        <button
          aria-label="Cerrar"
          onClick={onClose}
          className="font-bold hover:opacity-70 flex"
        >
          <CloseRoundedIcon fontSize='small' />
        </button>
      </div>
    </div>
  );
}
