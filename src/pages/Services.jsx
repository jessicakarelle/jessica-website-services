import { useTranslation } from '../hooks/useTranslation';
import PricingTable from '../components/sections/PricingTable';
import ProcessSection from '../components/sections/ProcessSection';
import FAQ from '../components/sections/FAQ';
import CTASection from '../components/sections/CTASection';
import './Services.css';

const Services = () => {
  const t = useTranslation();

  return (
    <div className="services-page">
      <div className="page-hero">
        <h1>{t.pages.servicesHero.title}</h1>
        <p>{t.pages.servicesHero.subtitle}</p>
      </div>
      <PricingTable />
      <ProcessSection />
      <FAQ />
      <CTASection />
    </div>
  );
};

export default Services;