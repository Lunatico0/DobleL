import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Toast from '@/components/ui/Toast.jsx';

const EmailContact = () => {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const form = useRef();
  const [toast, setToast] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) {
      console.error("El form todavía no está montado");
      return;
    }

    const now = new Date().toLocaleString("es-AR", {
      dateStyle: "full",
      timeStyle: "short"
    });

    const timeInput = form.current.querySelector("input[name='time']");
    if (timeInput) timeInput.value = now;

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey,
      })
      .then(
        () => {
          setToast({
            type: "success",
            message: "¡Correo enviado con éxito!",
          });
          e.target.reset();
        },
        (error) => {
          setToast({
            type: "error",
            message: `Ocurrió un error: ${error.text}`,
          });
        }
      );
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          aria-label='Nombre completo. Opcional.'
          className="w-full p-3 rounded-lg border border-secondary/40 bg-background/90 focus:outline-none focus:ring-1 focus:ring-secondary"
        />

        <input
          type="email"
          name="email"
          placeholder="Email *"
          required
          aria-label='Email obligatorio.'
          className="w-full p-3 rounded-lg border border-secondary/40 bg-background/90 focus:outline-none focus:ring-1 focus:ring-secondary"
        />

        <textarea
          name="message"
          placeholder="Mensaje *"
          rows="3"
          required
          aria-label='Mensaje.'
          className="w-full p-3 rounded-lg border border-secondary/40 bg-background/90 focus:outline-none focus:ring-1 focus:ring-secondary"
        />

        <input type="hidden" name="time" />

        <button
          aria-label="Enviar formulario de contacto"
          type="submit"
          className="w-full py-3 bg-secondary/70 hover:bg-secondary text-text font-semibold rounded-lg transition-colors transition-discrete"
        >
          Enviar
        </button>
      </form>

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </>
  )
}

export default EmailContact
