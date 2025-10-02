import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const SocialPill = (props) => {
  return (
    <div {...props}>
      <a
        href="https://www.instagram.com/doblel.arq/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:text-accent text-accent/60 transition-colors duration-300"
        aria-label="Instagram"
      >
        <InstagramIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/lautaro-luna-87029466"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:text-accent text-accent/60 transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://wa.me/+5493435451198"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:text-accent text-accent/60 transition-colors duration-300"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon />
      </a>
      <a
        href="mailto:doblel.estudiodearquitectura@gmail.com"
        target='_blank'
        className="cursor-pointer hover:text-accent text-accent/60 transition-colors duration-300"
        aria-label="Correo electrónico"
      >
        <AlternateEmailIcon />
      </a>
    </div>
  )
}

export default SocialPill
