import { useTranslation } from '../../hooks/useTranslation';
import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';
import './CTASection.css';

const CTASection = () => {
  const t = useTranslation();

  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>{t.cta.title}</h2>
        <p>{t.cta.subtitle}</p>
        <Button>
          {t.cta.button}
          <ArrowRight size={20} />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;