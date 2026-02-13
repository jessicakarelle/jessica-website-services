import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useContext(LanguageContext);

  return (
    <button 
      className="lang-switcher"
      onClick={() => switchLanguage(language === 'fr' ? 'en' : 'fr')}
    >
      {language === 'fr' ? 'EN' : 'FR'}
    </button>
  );
};

export default LanguageSwitcher;