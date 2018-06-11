import i18n from 'i18next'
import en from 'src/locales/en.json'
import ru from 'src/locales/ru.json'

i18n.init({
  fallbackLng: 'ru',
  debug: true,

  interpolation: {
    escapeValue: false // not needed for react!!
  },

  resources: {
    en: { translation: en },
    ru: { translation: ru }
  }
})

i18n.locale = 'ru'

export function t(name, params = {}) {
  return i18n.t(name, params)
}

export default i18n
