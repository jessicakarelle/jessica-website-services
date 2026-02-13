import { useTranslation } from '../../hooks/useTranslation';
import './ProcessSection.css';

const ProcessSection = () => {
  const t = useTranslation();

  return (
    <section className="process-section">
      <h2>{t.process.title}</h2>
      <p className="subtitle">{t.process.subtitle}</p>
      
      <div className="process-timeline">
        {t.process.steps.map((step, index) => (
          <div key={index} className="process-step">
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;