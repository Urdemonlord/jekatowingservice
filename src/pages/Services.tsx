import { MessageCircle, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Pengiriman Mobil',
      description: 'Derek mobil dengan aman menggunakan truk towing profesional dengan kapasitas hingga 5 ton',
      features: ['Flatbed Towing', 'Wheel Lift Towing', 'Heavy Duty Towing', 'Luxury Car Towing'],
    },
    {
      title: 'Pengiriman Motor & Moge',
      description: 'Layanan derek khusus sepeda motor dengan penanganan hati-hati dan peralatan khusus',
      features: ['Motor Sport', 'Motor Matic', 'Motor Bebek', 'Motor Listrik'],
    },
    {
      title: 'Pengiriman Bus',
      description: 'Derek bus dengan armada heavy duty untuk kendaraan transportasi umum dan pariwisata',
      features: ['Bus Kecil', 'Bus Besar', 'Bus Pariwisata', 'Bus Antar Kota'],
    },
    {
      title: 'Pengiriman Alat Berat',
      description: 'Derek alat berat dan kendaraan konstruksi dengan kapasitas angkat tinggi dan peralatan khusus',
      features: ['Excavator', 'Bulldozer', 'Forklift', 'Heavy Equipment'],
    },
    {
      title: 'Pengiriman Mesin Industri',
      description: 'Derek mesin industri dan peralatan pabrik dengan penanganan khusus dan keamanan maksimal',
      features: ['Mesin Pabrik', 'Genset Industri', 'Mesin Produksi', 'Industrial Equipment'],
    },
    {
      title: 'Pengambilan Mobil dari Dealer',
      description: 'Layanan pengambilan mobil baru dari dealer dengan dokumentasi lengkap dan keamanan terjamin',
      features: ['Pengurusan Dokumen', 'Pengiriman Aman', 'Garansi Keamanan', 'Door-to-Door Service'],
    },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/6287890152199?text=Halo, saya butuh layanan towing service', '_blank');
  };
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF5A00] to-[#E54A00] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Layanan Towing Profesional
            </h1>
             <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
               Kami menyediakan berbagai layanan pengiriman kendaraan di Jepara dan sekitarnya dengan teknisi berpengalaman, 
               peralatan modern, dan armada lengkap untuk semua jenis kendaraan.
             </p>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
              <button
                onClick={handleWhatsApp}
                className="bg-white text-[#FF5A00] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Sekarang</span>
              </button>
              <a
                href="tel:+6287890152199"
                className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all border border-white/30 flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>0878-9015-2199</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border-l-4 border-[#FF5A00]"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#FF5A00] p-4 rounded-xl flex-shrink-0 shadow-lg">
                      <img alt={service.title} className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#FF5A00] rounded-full"></div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bagaimana <span className="text-[#FF5A00]">Cara Kerjanya</span>?
            </h2>
            <p className="text-xl text-gray-600">
              Proses sederhana untuk mendapatkan bantuan towing dalam hitungan menit
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Hubungi Kami', desc: 'Call atau WhatsApp ke nomor kami' },
              { step: '2', title: 'Berikan Info', desc: 'Lokasi dan jenis kendaraan' },
              { step: '3', title: 'Tim Bergerak', desc: 'Teknisi menuju lokasi Anda' },
              { step: '4', title: 'Selesai', desc: 'Kendaraan di-towing dengan aman' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#FF5A00] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#FF5A00] to-[#E54A00] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Butuh Bantuan Towing Sekarang?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Tim profesional kami siap membantu Anda 24 jam setiap hari dengan respon cepat dan pelayanan terbaik.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => window.open('https://wa.me/6287890152199?text=Halo, saya butuh bantuan towing service', '_blank')}
              className="bg-white text-[#FF5A00] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp: 0878-9015-2199</span>
            </button>
            <a
              href="tel:+6287890152199"
              className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all border border-white/30 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call: 0878-9015-2199</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;