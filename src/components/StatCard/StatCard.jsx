import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion';
import { Users, UserCheck, BookOpen, Award, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './StatCard.css';

const STAT_ICONS = { Users, UserCheck, BookOpen, Award };

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1500 });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 1.5 });
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return spring.on('change', (v) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(v).toLocaleString();
      }
    });
  }, [spring]);

  return <span ref={ref}>0</span>;
};

const StatCard = ({ stat, index = 0 }) => {
  const { t } = useTranslation();
  const IconComponent =
    stat.icon && STAT_ICONS[stat.icon] ? STAT_ICONS[stat.icon] : TrendingUp;

  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="stat-card__icon">
        <IconComponent size={28} />
      </div>
      <div className="stat-card__value">
        <AnimatedNumber value={stat.value} />
        <span className="stat-card__suffix">{stat.suffix}</span>
      </div>
      <p className="stat-card__label">{stat.labelKey ? t(stat.labelKey) : stat.label}</p>
    </motion.div>
  );
};

export default StatCard;
