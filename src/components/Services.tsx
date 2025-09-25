import React from 'react';
import { Truck, Car, Bike, Wrench, Battery, ShipWheel as Wheel } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Towing Mobil',
      description: 'Derek mobil dengan aman menggunakan truk towing profesional',
    },
    {
      icon: Bike,
      title: 'Towing Motor',
      description: 'Layanan derek khusus sepeda motor dengan penanganan hati-hati',
    },
    {
      icon: Car,
      title: 'Derek Darurat',
      description: 'Bantuan darurat 24 jam untuk kendaraan mogok di jalan',
    },
    {
      icon: Battery,
      title: 'Jump Start',
      description: 'Bantuan starter aki mobil yang tekor atau soak',
    },
    {
      icon: Wheel,
      title: 'Ganti Ban',
      description: 'Service ganti ban bocor atau kempes di lokasi Anda',
    },
    {
      icon: Wrench,
      title: 'Perbaikan Ringan',
      description: 'Perbaikan kecil kendaraan di tempat sebelum ditowing',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Layanan Towing Profesional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan towing dan bantuan darurat dengan teknisi berpengalaman 
            dan peralatan modern untuk semua jenis kendaraan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="bg-blue-900 text-white p-3 rounded-lg inline-flex mb-4 group-hover:bg-orange-500 transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Butuh Bantuan Sekarang?
            </h3>
            <p className="text-blue-700 mb-6">
              Tim kami siap membantu Anda 24 jam setiap hari dengan respon cepat
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => window.open('https://wa.me/6287890152199?text=Halo, saya butuh bantuan towing service', '_blank')}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Hubungi WhatsApp
              </button>
              <a
                href="tel:+6287890152199"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Call: 0878-9015-2199
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;