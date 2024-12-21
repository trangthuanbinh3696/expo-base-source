import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import translationEn from './locales/en/translation.json';
import translationJa from './locales/ja/translation.json';

const resources = {
  en: { translation: translationEn },
  zh: { translation: translationJa },
};

const initI18n = async () => {
  let savedLanguage = 'en';

  if (!savedLanguage) {
    savedLanguage = Localization.locale;
  }

  i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
