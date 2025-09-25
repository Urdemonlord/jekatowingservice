import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Beranda', href: '/' },
    { name: 'Layanan', href: '/services' },
    { name: 'Armada', href: '/fleet' },
    { name: 'Area Layanan', href: '/coverage' },
    { name: 'Cara Kerja', href: '/how-it-works' },
    { name: 'Tarif', href: '/pricing' },
    { name: 'Testimoni', href: '/testimonials' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Kontak', href: '/contact' },
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
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-900 text-white p-2 rounded-lg">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">Jeka Towing</h1>
                <p className="text-sm text-gray-600">24/7 Service</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.slice(0, 5).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-blue-900'
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </button>
            <a
              href="tel:+6287890152199"
              className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
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
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium ${
                  location.pathname === item.href
                    ? 'text-blue-900 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 space-y-2">
              <button
                onClick={() => {
                  handleWhatsApp();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </button>
              <a
                href="tel:+6287890152199"
                className="w-full flex items-center justify-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg"
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