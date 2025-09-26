import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import QuoteForm from '../components/QuoteForm';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <QuoteForm />
      <TestimonialCarousel />
    </div>
  );
};

export default Home;
