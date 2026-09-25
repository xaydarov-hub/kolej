import { User, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import './TeacherCard.css';

const TeacherCard = ({ teacher, index = 0 }) => {
  return (
    <motion.article
      className="teacher-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="teacher-card__avatar">
        {teacher.image ? (
          <img
            src={teacher.image}
            alt={teacher.name}
            className="teacher-card__photo"
            loading="lazy"
          />
        ) : (
          <div className="teacher-card__avatar-placeholder">
            <User size={40} />
          </div>
        )}
      </div>
      <div className="teacher-card__body">
        <h3 className="teacher-card__name">{teacher.name}</h3>
        <p className="teacher-card__position">
          <Briefcase size={14} />
          {teacher.position}
        </p>
        {teacher.subject && (
          <p className="teacher-card__subject">{teacher.subject}</p>
        )}
        {teacher.experience && (
          <span className="teacher-card__experience">{teacher.experience}</span>
        )}
      </div>
    </motion.article>
  );
};

export default TeacherCard;
