import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/6287890152199?text=Halo, saya butuh bantuan towing service', '_blank');
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Jeka Towing</h3>
                <p className="text-blue-200">24/7 Service</p>
              </div>
            </div>
            <p className="text-blue-200 mb-4">
              Layanan towing terpercaya dengan armada lengkap dan teknisi berpengalaman. Siap melayani 24 jam setiap hari.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              <a
                href="tel:+6287890152199"
                className="bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan Kami</h3>
            <ul className="space-y-2 text-blue-200">
              <li>• Towing Mobil</li>
              <li>• Towing Motor</li>
              <li>• Derek Kendaraan</li>
              <li>• Bantuan Darurat</li>
              <li>• Jump Start Aki</li>
              <li>• Ganti Ban</li>
            </ul>
          </div>

          {/* Coverage Area */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Area Layanan</h3>
            <ul className="space-y-2 text-blue-200">
              <li>• Jakarta Pusat</li>
              <li>• Jakarta Selatan</li>
              <li>• Jakarta Barat</li>
              <li>• Jakarta Timur</li>
              <li>• Jakarta Utara</li>
              <li>• Depok & Bekasi</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-blue-200">+62 878-9015-2199</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-blue-200">divandaal@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-orange-500 mt-1" />
                <span className="text-blue-200">Jakarta & Sekitarnya</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-orange-500" />
                <span className="text-blue-200">24 Jam Setiap Hari</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © {new Date().getFullYear()} Jeka Towing Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;