import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './NewsCard.css';

const NewsCard = ({ news, index = 0 }) => {
  const { t } = useTranslation();

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('uz-UZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <motion.article
      className="news-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
    >
      <Link to={`/news/${news.id}`} className="news-card__link" aria-label={news.title}>
        <div className="news-card__image-wrapper">
          {news.image ? (
            <img
              src={news.image}
              alt={news.title}
              className="news-card__image"
              loading="lazy"
            />
          ) : (
            <div className="news-card__image-placeholder">
              <span>📰</span>
            </div>
          )}
          {news.category && (
            <span className="news-card__category">
              <Tag size={12} />
              {news.category}
            </span>
          )}
        </div>
        <div className="news-card__body">
          <h3 className="news-card__title">{news.title}</h3>
          {news.description && (
            <p className="news-card__excerpt">{news.description}</p>
          )}
          <div className="news-card__footer">
            {news.createdAt && (
              <span className="news-card__date">
                <Calendar size={14} />
                {formatDate(news.createdAt)}
              </span>
            )}
            <span className="news-card__read-more">
              {t('common.readMore')}
              <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default NewsCard;
