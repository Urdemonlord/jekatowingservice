import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/6287890152199?text=Halo, saya butuh bantuan towing service', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2">
                <img 
                  src="/img/jeka towing.webp" 
                  alt="Jeka Towing Logo" 
                  className="h-10 w-auto" 
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Jeka Towing</h3>
                <p className="text-gray-300">24/7 Service</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Layanan towing terpercaya dengan armada lengkap dan teknisi berpengalaman. Siap melayani 24 jam setiap hari.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleWhatsApp}
                className="bg-[#25D366] text-white p-2 rounded-lg hover:bg-[#20BD5C] transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              <a
                href="tel:+6287890152199"
                className="bg-[#FF5A00] text-white p-2 rounded-lg hover:bg-[#E54A00] transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan Kami</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Pengiriman Mobil</li>
              <li>• Pengiriman Motor & Moge</li>
              <li>• Pengiriman Bus</li>
              <li>• Pengiriman Alat Berat</li>
              <li>• Pengiriman Mesin Industri</li>
              <li>• Pengambilan dari Dealer</li>
            </ul>
          </div>

          {/* Coverage Area */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Area Layanan</h3>
            <ul className="space-y-2 text-gray-300">
               <li>• Jepara</li>
               <li>• Kudus</li>
               <li>• Pati</li>
               <li>• Rembang</li>
               <li>• Demak</li>
               <li>• Seluruh Jawa Tengah</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#FF5A00]" />
                <span className="text-gray-300">+62 878-9015-2199</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#FF5A00]" />
                <span className="text-gray-300">divandaal@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#FF5A00] mt-1" />
                <span className="text-gray-300">Depan Jembatan Timbang, RT.08/RW.02, Lebuawu, Kec. Pecangaan, Kabupaten Jepara, Jawa Tengah 59462</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-[#FF5A00]" />
                <span className="text-gray-300">24 Jam Setiap Hari</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              © {new Date().getFullYear()} Jeka Towing Service. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/jeka_towingservice" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FF5A00] transition-colors"
              >
                Instagram: @jeka_towingservice
              </a>
              <a 
                href="https://tiktok.com/@jekatowingservice" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FF5A00] transition-colors"
              >
                TikTok: @jekatowingservice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;