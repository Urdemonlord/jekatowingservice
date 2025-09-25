import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import QuoteForm from './components/QuoteForm';
import TestimonialCarousel from './components/TestimonialCarousel';
import LocationMap from './components/LocationMap';
import SocialMedia from './components/SocialMedia';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          {/* Main sections */}
          <div id="home">
            <Hero />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="how-it-works">
            <HowItWorks />
          </div>
          <div id="why-choose-us">
            <WhyChooseUs />
          </div>
          <div id="testimonials">
            <TestimonialCarousel />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <QuoteForm />
          </div>
          <div id="social">
            <SocialMedia />
          </div>
          <div id="location">
            <LocationMap />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;