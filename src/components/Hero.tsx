import { Phone, MessageCircle, MapPin, Clock, Truck } from 'lucide-react';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/6287890152199?text=Halo, saya butuh bantuan towing service', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12 sm:pt-32">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://imgur.com/QCOFb0X.jpg')"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <img 
                  src="/jekatowing.webp" 
                  alt="Jeka Towing Service Logo" 
                  className="h-20 w-auto mr-4" 
                />
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white">
                    Jeka Towing
                    <span className="block text-[#FF5A00]">Service</span>
                  </h1>
                </div>
              </div>
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed font-medium">
                Solusi Jasa Pengiriman Kendaraan 24 Jam –
                <span className="text-[#FF5A00]"> Aman, Cepat, Profesional</span>
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Berdiri sejak 2018, berpengalaman di bidang towing dengan jangkauan
                layanan ke hampir seluruh kota besar di Indonesia.
                Berbasis di Jepara dengan layanan 24 jam.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-[#FF5A00]" />
                <span className="text-gray-200 text-lg font-medium">24/7 Available</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-[#FF5A00]" />
                <span className="text-gray-200 text-lg font-medium">Seluruh Kota Jepara</span>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="h-6 w-6 text-[#FF5A00]" />
                <span className="text-gray-200 text-lg font-medium">Armada Lengkap</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-6 w-6 text-[#FF5A00]" />
                <span className="text-gray-200 text-lg font-medium">Respon Cepat</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center space-x-3 bg-[#FF5A00] hover:bg-[#E54A00] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="h-6 w-6" />
                <span>WhatsApp Sekarang</span>
              </button>
              <a
                href="mailto:divandaal@gmail.com"
                className="flex items-center justify-center space-x-3 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 backdrop-blur-sm border border-white/30"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Email Kami</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#FF5A00]">1000+</div>
                  <div className="text-sm text-gray-300">Kendaraan Tertolong</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FF5A00]">6+</div>
                  <div className="text-sm text-gray-300">Tahun Pengalaman</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FF5A00]">24/7</div>
                  <div className="text-sm text-gray-300">Layanan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Card */}
          <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-[#FF5A00] rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Truck className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Butuh Bantuan Cepat?</h3>
                <p className="text-gray-200">
                  Tim profesional kami siap membantu Anda 24/7. 
                  Hubungi sekarang untuk layanan towing terbaik.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-[#FF5A00] rounded-full"></div>
                    <span className="text-sm text-gray-200">Response dalam 15 menit</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-[#FF5A00] rounded-full"></div>
                    <span className="text-sm text-gray-200">Armada siap 24/7</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-[#FF5A00] rounded-full"></div>
                    <span className="text-sm text-gray-200">Harga transparan</span>
                  </div>
                </div>
                <div className="pt-4">
                  <a
                    href="tel:+6287890152199"
                    className="inline-flex items-center space-x-2 bg-[#FF5A00] hover:bg-[#E54A00] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Call: 0878-9015-2199</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
