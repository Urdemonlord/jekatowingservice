import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Pengiriman Mobil',
      description:
        'Derek mobil dengan aman menggunakan truk towing profesional untuk semua jenis mobil sedan, SUV, dan MPV',
      image:
        'https://imgur.com/5VjxIPH.jpg',
    },
    {
      title: 'Pengiriman Motor & Moge',
      description:
        'Layanan derek khusus sepeda motor dan motor gede dengan penanganan hati-hati dan aman',
      image:
        'https://imgur.com/LnMGhbM.jpg',
    },
    {
      title: 'Pengiriman Bus',
      description:
        'Derek bus dengan armada heavy duty untuk kendaraan transportasi umum dan pariwisata',
      image:
        'https://imgur.com/JroJ3T8.jpg',
    },
    {
      title: 'Pengiriman Alat Berat',
      description:
        'Derek alat berat dan kendaraan konstruksi dengan kapasitas angkat tinggi dan peralatan khusus',
      image:
        'https://imgur.com/691C5Cm.jpg',
    },
    {
      title: 'Pengiriman Mesin Industri',
      description:
        'Derek mesin industri dan peralatan pabrik dengan penanganan khusus dan keamanan maksimal',
      image:
        'https://imgur.com/Go3er0n.jpg',
    },
    {
      title: 'Pengiriman Mobil Sport & Moge',
      description:
        'Derek khusus mobil sport dan motor gede dengan peralatan premium dan penanganan extra hati-hati',
      image:
        'https://imgur.com/foTNyRr.jpg',
    },
    {
      title: 'Pengambilan Mobil dari Dealer',
      description:
        'Layanan pengambilan mobil baru dari dealer dengan dokumentasi lengkap dan keamanan terjamin',
      image:
        'https://imgur.com/IWz4UY9.jpg',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Layanan <span className="text-[#FF5A00]">Towing Profesional</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Kami menyediakan berbagai layanan pengiriman kendaraan dengan teknisi berpengalaman
            dan peralatan modern untuk semua jenis kendaraan di Jepara dan sekitarnya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#FF5A00]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <button
                    onClick={() =>
                      window.open(
                        `https://wa.me/6287890152199?text=Halo, saya ingin menggunakan layanan ${service.title}`,
                        '_blank'
                      )
                    }
                    className="mt-4 w-full bg-[#FF5A00] hover:bg-[#E54A00] text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#FF5A00] to-[#E54A00] rounded-2xl p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Butuh Bantuan Sekarang?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Tim kami siap membantu Anda 24 jam setiap hari dengan respon cepat dan layanan profesional
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() =>
                  window.open(
                    'https://wa.me/6287890152199?text=Halo, saya butuh bantuan towing service',
                    '_blank'
                  )
                }
                className="bg-white text-[#FF5A00] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Hubungi WhatsApp
              </button>
              <a
                href="mailto:divandaal@gmail.com"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30"
              >
                Email: divandaal@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
