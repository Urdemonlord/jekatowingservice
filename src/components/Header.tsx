import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = [
        'home', 
        'services', 
        'how-it-works', 
        'why-choose-us', 
        'testimonials', 
        'about', 
        'contact', 
        'social',
        'location'
      ];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Beranda', href: '#home' },
    { name: 'Layanan', href: '#services' },
    { name: 'Cara Kerja', href: '#how-it-works' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Kontak', href: '#contact' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/6287890152199?text=Halo, saya butuh bantuan towing service', '_blank');
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2">
              <img 
                src="/img/jeka towing.webp" 
                alt="Jeka Towing Service Logo" 
                className="h-12 w-auto" 
              />
              <div>
                <h1 className="text-xl font-bold text-[#FF5A00]">Jeka Towing</h1>
                <p className="text-sm text-gray-600">24/7 Service</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'text-[#FF5A00]'
                    : 'text-gray-700 hover:text-[#FF5A00]'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#20BD5C] transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </button>
            <a
              href="tel:+6287890152199"
              className="flex items-center space-x-2 bg-[#FF5A00] text-white px-4 py-2 rounded-lg hover:bg-[#E54A00] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
                  <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium ${
                  activeSection === item.href.substring(1)
                    ? 'text-[#FF5A00] bg-orange-50'
                    : 'text-gray-700 hover:text-[#FF5A00] hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-2 space-y-2">
              <button
                onClick={() => {
                  handleWhatsApp();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 bg-[#25D366] text-white px-4 py-2 rounded-lg"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </button>
              <a
                href="tel:+6287890152199"
                className="w-full flex items-center justify-center space-x-2 bg-[#FF5A00] text-white px-4 py-2 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;