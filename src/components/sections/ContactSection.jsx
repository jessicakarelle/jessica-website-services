import { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import Button from '../common/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  const t = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t.contact.form.success);
  };

  return (
    <section className="contact-section">
      <h2>{t.contact.title}</h2>
      <p className="subtitle">{t.contact.subtitle}</p>
      
      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <input 
            type="text" 
            placeholder={t.contact.form.name}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          <input 
            type="email" 
            placeholder={t.contact.form.email}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <input 
            type="tel" 
            placeholder={t.contact.form.phone}
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <input 
            type="text" 
            placeholder={t.contact.form.company}
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
          />
          <textarea 
            placeholder={t.contact.form.message}
            rows="5"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          />
          <Button type="submit">{t.contact.form.submit}</Button>
        </form>

        <div className="contact-info">
          <div className="info-item">
            <Mail size={24} />
            <div>
              <p className="info-label">{t.contact.info.email}</p>
              <p>jessica@example.com</p>
            </div>
          </div>
          <div className="info-item">
            <Phone size={24} />
            <div>
              <p className="info-label">{t.contact.info.phone}</p>
              <p>+1 (514) 555-1234</p>
            </div>
          </div>
          <div className="info-item">
            <MapPin size={24} />
            <div>
              <p className="info-label">{t.contact.info.location}</p>
              <p>Montréal, QC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;