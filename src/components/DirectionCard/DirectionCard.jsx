import { Link } from 'react-router-dom';
import {
  Clock, Award, ChevronRight, BookOpen,
  ShieldCheck, Monitor, Truck, Scissors, Shirt, Palette, Settings, Gem, Code2, Drone,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './DirectionCard.css';

const DIRECTION_ICONS = {
  ShieldCheck, Monitor, Truck, Scissors, Shirt, Palette, Settings, Gem, Code2, Drone, BookOpen,
};

const DirectionCard = ({ direction, index = 0 }) => {
  const { t } = useTranslation();

  const IconComponent =
    direction.icon && DIRECTION_ICONS[direction.icon]
      ? DIRECTION_ICONS[direction.icon]
      : BookOpen;

  return (
    <motion.article
      className="direction-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
    >
      <div className="direction-card__icon-wrapper">
        <IconComponent size={28} className="direction-card__icon" />
      </div>
      <div className="direction-card__body">
        <h3 className="direction-card__name">
          {direction.name || t(direction.nameKey)}
        </h3>
        <p className="direction-card__desc">
          {direction.description || t(direction.descriptionKey)}
        </p>
        <div className="direction-card__meta">
          <span className="direction-card__meta-item">
            <Clock size={14} />
            {direction.duration}
          </span>
          {direction.qualification && (
            <span className="direction-card__meta-item">
              <Award size={14} />
              {direction.qualification}
            </span>
          )}
        </div>
      </div>
      <Link
        to={`/directions/${direction.id}`}
        className="direction-card__link"
        aria-label={`${direction.name || t(direction.nameKey)} haqida batafsil`}
      >
        <span>{t('directions.viewDetails')}</span>
        <ChevronRight size={16} />
      </Link>
    </motion.article>
  );
};

export default DirectionCard;
