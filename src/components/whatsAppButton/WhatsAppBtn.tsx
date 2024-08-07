import { FaWhatsapp } from "react-icons/fa6";
import './WhatsAppBtn.css';
const WhatsAppBtn = () => {
  const phoneNumber = "+5491165234000";
  const message = "Hola, me gustaría más información sobre sus servicios.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="whatsApp-btn">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={36} color='#ababab' />
      </a>
    </div>
  );
};

export default WhatsAppBtn;
