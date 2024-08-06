
const WhatsAppBtn = () => {
  const phoneNumber = "+5491165234000";
  const message = "Hola, me gustaría más información sobre sus servicios."; // Mensaje predefinido (opcional)

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#25D366",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Contactar por WhatsApp
      </button>
    </a>
  );
};

export default WhatsAppBtn;
