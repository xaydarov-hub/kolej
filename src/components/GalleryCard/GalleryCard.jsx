import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { motion } from 'framer-motion';
import './GalleryCard.css';

const GalleryCard = ({ image, index = 0, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className="gallery-card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={() => onClick && onClick(image)}
    >
      {!loaded && <div className="gallery-card__skeleton skeleton" />}
      <img
        src={image.url}
        alt={image.title || 'Galereya rasmi'}
        className={`gallery-card__image ${loaded ? 'gallery-card__image--loaded' : ''}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
      <div className="gallery-card__overlay">
        <div className="gallery-card__overlay-content">
          <div className="gallery-card__zoom">
            <ZoomIn size={24} />
          </div>
          {image.title && (
            <p className="gallery-card__title">{image.title}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
