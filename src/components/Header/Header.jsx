import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { navigationLinks } from '../../data/navigation';
import { LANGUAGES, SITE_NAME_SHORT } from '../../data/constants';
import useScroll from '../../hooks/useScroll';
import Button from '../Button/Button';
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { scrolled } = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('language', code);
    setLangOpen(false);
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        className={`header ${scrolled ? 'header--scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container">
          <div className="header__inner">
            {/* Logo */}
            <Link to="/" className="header__logo" aria-label="Bosh sahifaga qaytish">
              <div className="header__logo-icon">
                <span className="header__logo-text-num">2</span>
              </div>
              <div className="header__logo-info">
                <span className="header__logo-name">{SITE_NAME_SHORT}</span>
                <span className="header__logo-city">Qo'qon shahri</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="header__nav" aria-label="Asosiy navigatsiya">
              <ul className="header__nav-list">
                {navigationLinks.map((link) => (
                  <li key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                      }
                      end={link.path === '/'}
                    >
                      {t(link.labelKey)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Actions */}
            <div className="header__actions">
              {/* Language Switcher */}
              <div className="header__lang">
                <button
                  className="header__lang-btn"
                  onClick={() => setLangOpen(!langOpen)}
                  aria-label="Til tanlash"
                  aria-expanded={langOpen}
                >
                  <Globe size={15} />
                  <span>{currentLang.label}</span>
                  <ChevronDown
                    size={14}
                    className={`header__lang-chevron ${langOpen ? 'header__lang-chevron--open' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <>
                      <div
                        className="header__lang-backdrop"
                        onClick={() => setLangOpen(false)}
                      />
                      <motion.ul
                        className="header__lang-dropdown"
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                      >
                        {LANGUAGES.map((lang) => (
                          <li key={lang.code}>
                            <button
                              className={`header__lang-option ${lang.code === i18n.language ? 'header__lang-option--active' : ''}`}
                              onClick={() => handleLanguageChange(lang.code)}
                            >
                              <span className="header__lang-code">{lang.label}</span>
                              <span className="header__lang-name">{lang.name}</span>
                            </button>
                          </li>
                        ))}
                      </motion.ul>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA */}
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate('/admission')}
                className="header__cta"
              >
                {t('header.cta')}
              </Button>

              {/* Hamburger */}
              <button
                className="header__hamburger"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="mobile-menu__header">
                <Link to="/" className="header__logo" onClick={closeMobile}>
                  <div className="header__logo-icon">
                    <span className="header__logo-text-num">2</span>
                  </div>
                  <div className="header__logo-info">
                    <span className="header__logo-name">{SITE_NAME_SHORT}</span>
                    <span className="header__logo-city">Qo'qon shahri</span>
                  </div>
                </Link>
                <button
                  className="mobile-menu__close"
                  onClick={closeMobile}
                  aria-label="Yopish"
                >
                  <X size={22} />
                </button>
              </div>

              <nav aria-label="Mobil navigatsiya">
                <ul className="mobile-menu__list">
                  {navigationLinks.map((link, idx) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
                        }
                        onClick={closeMobile}
                        end={link.path === '/'}
                      >
                        {t(link.labelKey)}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="mobile-menu__footer">
                <div className="mobile-menu__langs">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      className={`mobile-menu__lang ${lang.code === i18n.language ? 'mobile-menu__lang--active' : ''}`}
                      onClick={() => handleLanguageChange(lang.code)}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
                <Button
                  variant="primary"
                  onClick={() => { navigate('/admission'); closeMobile(); }}
                  style={{ width: '100%' }}
                >
                  {t('header.cta')}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
