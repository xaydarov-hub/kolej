import './Loader.css';

const Loader = ({ fullScreen = false, size = 'md', text = null }) => {
  if (fullScreen) {
    return (
      <div className="loader-overlay" role="status" aria-label="Yuklanmoqda">
        <div className="loader-content">
          <div className={`loader-spinner loader-spinner--${size}`} />
          {text && <p className="loader-text">{text}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="loader-inline" role="status" aria-label="Yuklanmoqda">
      <div className={`loader-spinner loader-spinner--${size}`} />
      {text && <p className="loader-text">{text}</p>}
    </div>
  );
};

export const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton skeleton-image" />
    <div className="skeleton-body">
      <div className="skeleton skeleton-badge" />
      <div className="skeleton skeleton-title" />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-text skeleton-text--short" />
    </div>
  </div>
);

export const SkeletonGrid = ({ count = 6 }) => (
  <div className="skeleton-grid">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);

export default Loader;
