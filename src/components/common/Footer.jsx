import { useTranslation } from '../../hooks/useTranslation';
import './Footer.css';

const Footer = () => {
  const t = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-tagline">{t.footer.tagline}</p>
        <p>&copy; 2024 Jessica Karelle Services. {t.footer.rights}</p>
        <div className="footer-links">
          <a href="/privacy">{t.footer.links.privacy}</a>
          <a href="/terms">{t.footer.links.terms}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;