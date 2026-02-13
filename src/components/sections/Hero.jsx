import { useTranslation } from '../../hooks/useTranslation';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const t = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <p className="hero-description">{t.hero.description}</p>
        <div className="hero-buttons">
          <button className="hero-cta">
            {t.hero.cta}
            <ArrowRight size={20} />
          </button>
          <button className="hero-cta-secondary">
            {t.hero.cta_secondary}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;