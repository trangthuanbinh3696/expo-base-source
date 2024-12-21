import enNs from '../i18n/locales/en/translation.json';
import jaNs from '../i18n/locales/ja/translation.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'enNs';
    resources: {
      enNs: typeof enNs;
      jaNs: typeof jaNs;
    };
  }
}
