import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import fr from '../locales/fr.json';
import en from '../locales/en.json';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  const translations = { fr, en };
  return translations[language];
};