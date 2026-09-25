import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from './translations';
import { DEFAULT_LANGUAGE } from '../data/constants';

const savedLanguage = localStorage.getItem('language') || DEFAULT_LANGUAGE;

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: translations.uz },
      ru: { translation: translations.ru },
      en: { translation: translations.en },
    },
    lng: savedLanguage,
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
