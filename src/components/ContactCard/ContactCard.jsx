import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import './ContactCard.css';

const ContactCard = ({ type, value, label, href, icon: CustomIcon }) => {
  const icons = {
    phone: Phone,
    email: Mail,
    address: MapPin,
    hours: Clock,
  };

  const IconComponent = CustomIcon || icons[type] || Phone;

  const content = (
    <div className="contact-card">
      <div className="contact-card__icon">
        <IconComponent size={22} />
      </div>
      <div className="contact-card__body">
        {label && <span className="contact-card__label">{label}</span>}
        <span className="contact-card__value">{value}</span>
      </div>
      {href && (
        <span className="contact-card__arrow">
          <ExternalLink size={14} />
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="contact-card-wrapper" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <div className="contact-card-wrapper">{content}</div>;
};

export default ContactCard;
