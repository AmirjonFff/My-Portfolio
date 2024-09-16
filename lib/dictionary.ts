import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
  tj: () => import('@/dictionaries/tj.json').then(module => module.default),
  ru: () => import('@/dictionaries/ru.json').then(module => module.default),
  en: () => import('@/dictionaries/en.json').then(module => module.default),
}

export const getDictionary = async (locale: Locale) => {
  const loadDictionary = dictionaries[locale];

  if (!loadDictionary) {
    throw new Error(`Dictionary for locale "${locale}" not found`);
  }

  return loadDictionary();  // Вызов функции для загрузки словаря
}
