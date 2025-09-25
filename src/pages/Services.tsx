import React from 'react';
import { Truck, Car, Bike, Wrench, Battery, ShipWheel as Wheel, Shield, Clock, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Towing Mobil',
      description: 'Derek mobil dengan aman menggunakan truk towing profesional dengan kapasitas hingga 5 ton',
      features: ['Flatbed Towing', 'Wheel Lift Towing', 'Heavy Duty Towing', 'Luxury Car Towing'],
    },
    {
      icon: Bike,
      title: 'Towing Motor',
      description: 'Layanan derek khusus sepeda motor dengan penanganan hati-hati dan peralatan khusus',
      features: ['Motor Sport', 'Motor Matic', 'Motor Bebek', 'Motor Listrik'],
    },
    {
      icon: Car,
      title: 'Derek Darurat',
      description: 'Bantuan darurat 24 jam untuk kendaraan mogok, kecelakaan, atau kondisi emergency lainnya',
      features: ['Accident Recovery', 'Breakdown Assistance', 'Roadside Help', 'Emergency Response'],
    },
    {
      icon: Battery,
      title: 'Jump Start Aki',
      description: 'Service jump start untuk aki yang tekor atau soak dengan peralatan modern',
      features: ['Aki Tekor', 'Aki Soak', 'Alternator Check', 'Battery Replacement'],
    },
    {
      icon: Wheel,
      title: 'Ganti Ban',
      description: 'Layanan ganti ban bocor atau kempes langsung di lokasi Anda berada',
      features: ['Ban Bocor', 'Ban Kempes', 'Spare Tire', 'Tire Repair'],
    },
    {
      icon: Wrench,
      title: 'Perbaikan Ringan',
      description: 'Perbaikan kecil kendaraan di tempat sebelum proses towing jika memungkinkan',
      features: ['Engine Check', 'Fuel System', 'Electrical Issue', 'Minor Repairs'],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Layanan Towing Profesional
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan towing dan bantuan darurat dengan teknisi berpengalaman, 
              peralatan modern, dan armada lengkap untuk semua jenis kendaraan.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>24/7 Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Jakarta & Sekitarnya</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-900 text-white p-4 rounded-xl flex-shrink-0">
                      <Icon className="h-8 w-8" />
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
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
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
              Bagaimana Cara Kerjanya?
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
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Butuh Bantuan Towing Sekarang?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Tim profesional kami siap membantu Anda 24 jam setiap hari dengan respon cepat dan pelayanan terbaik.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => window.open('https://wa.me/6287890152199?text=Halo, saya butuh bantuan towing service', '_blank')}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              WhatsApp: 0878-9015-2199
            </button>
            <a
              href="tel:+6287890152199"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Call: 0878-9015-2199
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;