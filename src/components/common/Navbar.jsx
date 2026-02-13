import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

const Navbar = () => {
  const t = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">Jessica K.</Link>
        <div className="nav-content">
          <Link to="/" className="nav-link">{t.nav.home}</Link>
          <Link to="/services" className="nav-link">{t.nav.services}</Link>
           <Link to="/about" className="nav-link">{t.nav.about}</Link>
          <Link to="/contact" className="nav-link">{t.nav.contact}</Link>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;