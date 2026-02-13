import { useTranslation } from '../../hooks/useTranslation';
import Card from '../common/Card';
import { Star } from 'lucide-react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const t = useTranslation();

  return (
    <section className="testimonials-section">
      <h2>{t.testimonials.title}</h2>
      <p className="subtitle">{t.testimonials.subtitle}</p>
      
      <div className="testimonials-grid">
        {t.testimonials.list.map((testimonial, index) => (
          <Card key={index}>
            <div className="stars">
              {[...Array(testimonial.stars)].map((_, i) => (
                <Star key={i} size={20} fill="var(--accent-primary-color)" color="var(--accent-primary-color)" />
              ))}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="client-name">- {testimonial.name}</p>
            <p className="company-name">{testimonial.company}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;