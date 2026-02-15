import { Shield, Clock, Award, HeadphonesIcon } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield size={40} />,
      title: 'Qualité Garantie',
      description: 'Code propre et maintenable, respect des standards web'
    },
    {
      icon: <Clock size={40} />,
      title: 'Livraison Rapide',
      description: 'Délais respectés, updates régulières pendant le projet'
    },
    {
      icon: <Award size={40} />,
      title: 'Design Professionnel',
      description: 'Interface moderne et responsive, adaptée à votre marque'
    },
    {
      icon: <HeadphonesIcon size={40} />,
      title: 'Support Continu',
      description: 'Accompagnement après livraison, formation incluse'
    }
  ];

  return (
    <section className="why-choose-us">
      <h2>Pourquoi Nous Choisir</h2>
      <p className="subtitle">Des solutions web qui font la différence</p>
      
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <div className="reason-icon">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;