import { useTranslation } from '../../hooks/useTranslation';
import Card from '../common/Card';
import Button from '../common/Button';
import { Check } from 'lucide-react';
import './PricingTable.css';

const PricingTable = () => {
  const t = useTranslation();

  return (
    <section className="pricing-section">
      <h2>{t.pricing.title}</h2>
      <p className="subtitle">{t.pricing.subtitle}</p>
      
      <div className="pricing-grid">
        {t.pricing.packages.map((pkg, index) => (
          <Card key={index} className={index === 1 ? 'popular-package' : ''}>
            {index === 1 && <div className="popular-badge">{t.pricing.popular}</div>}
            <h3>{pkg.name}</h3>
            <div className="price">{pkg.price}</div>
            <p className="package-description">{pkg.description}</p>
            
            <ul className="features-list">
              {pkg.features.map((feature, i) => (
                <li key={i}>
                  <Check size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button variant={index === 1 ? 'primary' : 'secondary'}>
              {t.pricing.cta}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;