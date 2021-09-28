import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import 'moment/locale/fr';

import globalEn from '../locale/en/global.json';
import globalFr from '../locale/fr/global.json';
import userEn from '../locale/en/user.json';
import userFr from '../locale/fr/user.json';

const messages = {
  en: {
    global: globalEn,
    user: userEn,
  },
  fr: {
    global: globalFr,
    user: userFr,
  },
};

i18next
  .use(initReactI18next)
  .init({
    lng: 'en',
    detection: {
      order: ['userLng', 'querystring', 'navigator', 'htmlTag'],
    },
    fallbackLng: 'fr',
    resources: messages,
    defaultNS: 'global',
    ns: ['global'],
  });

export default i18next;
