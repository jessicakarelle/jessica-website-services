import { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const t = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section">
      <h2>{t.faq.title}</h2>
      <p className="subtitle">{t.faq.subtitle}</p>
      
      <div className="faq-list">
        {t.faq.questions.map((faq, index) => (
          <div key={index} className="faq-item">
            <button 
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              <ChevronDown 
                size={20} 
                className={openIndex === index ? 'rotate' : ''}
              />
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;