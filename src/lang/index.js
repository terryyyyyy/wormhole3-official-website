import { createI18n } from 'vue-i18n'
import en from './en'
import zh from './zh'

const i18n = createI18n({
  locale: localStorage.getItem('language') || 'en',
  fallbackLocale: 'en',
  warnHtmlMessage: false,
  messages: {
    en: en,
    zh: zh
  }
})
export default i18n
