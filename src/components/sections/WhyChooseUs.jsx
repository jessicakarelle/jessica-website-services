import { useTranslation } from '../../hooks/useTranslation';
import { Shield, Clock, Award, HeadphonesIcon } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const t = useTranslation();

  const icons = [
    <Shield size={40} />,
    <Clock size={40} />,
    <Award size={40} />,
    <HeadphonesIcon size={40} />
  ];

  return (
    <section className="why-choose-us">
      <h2>{t.whyChooseUs.title}</h2>
      <p className="subtitle">{t.whyChooseUs.subtitle}</p>
      
      <div className="reasons-grid">
        {t.whyChooseUs.reasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <div className="reason-icon">{icons[index]}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;