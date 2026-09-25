import './SectionTitle.css';
import { motion } from 'framer-motion';

const SectionTitle = ({
  badge = null,
  title,
  subtitle = null,
  align = 'center',
  light = false,
  className = '',
}) => {
  return (
    <div className={`section-title section-title--${align} ${light ? 'section-title--light' : ''} ${className}`}>
      {badge && (
        <motion.span
          className="section-title__badge"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        className="section-title__heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: badge ? 0.1 : 0 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="section-title__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        className="section-title__line"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 80, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
    </div>
  );
};

export default SectionTitle;
