import Hero from '../components/sections/Hero';
import PricingTable from '../components/sections/PricingTable';
import ProcessSection from '../components/sections/ProcessSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <PricingTable />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Home;