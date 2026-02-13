import { useTranslation } from '../hooks/useTranslation';
import ContactSection from '../components/sections/ContactSection';
import './Contact.css';

const Contact = () => {
  const t = useTranslation();

  return (
    <div className="contact-page">
      <div className="page-hero">
        <h1>{t.pages.contactHero.title}</h1>
        <p>{t.pages.contactHero.subtitle}</p>
      </div>
      <ContactSection />
    </div>
  );
};

export default Contact;