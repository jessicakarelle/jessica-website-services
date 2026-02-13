import Hero from '../components/sections/Hero';
import ProcessSection from '../components/sections/ProcessSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <ProcessSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;