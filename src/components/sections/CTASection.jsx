import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Prêt à Démarrer Votre Projet ?</h2>
        <p>Obtenez un devis gratuit en moins de 24h</p>
        <Button>
          Obtenir un devis gratuit
          <ArrowRight size={20} />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;