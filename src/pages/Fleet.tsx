import { Truck, Car, Shield, Award, Clock } from 'lucide-react';

const Fleet = () => {
  const fleetData = [
    {
      name: 'Single Towing Truck',
      type: 'Heavy Duty',
      capacity: '5 Ton',
      image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Mobil Sedan', 'SUV/MPV', 'Luxury Car', 'Sports Car'],
      description: 'Truk towing flatbed untuk kendaraan dengan ground clearance rendah atau kendaraan mewah yang membutuhkan penanganan extra hati-hati.',
      status: 'Available 24/7'
    },
    {
      name: 'Wheel Lift Towing',
      type: 'Medium Duty',
      capacity: '3 Ton',
      image: 'https://images.pexels.com/photos/162805/tow-truck-car-wreck-wreck-truck-162805.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Mobil Sedan', 'Hatchback', 'Small SUV', 'Van'],
      description: 'Towing truck dengan sistem wheel lift yang cocok untuk kendaraan penumpang standar dan van kecil.',
      status: 'Available 24/7'
    },
    {
      name: 'Motorcycle Carrier',
      type: 'Specialized',
      capacity: '10 Motor',
      image: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Sport Bike', 'Matic', 'Bebek', 'Motor Listrik'],
      description: 'Kendaraan khusus untuk towing sepeda motor dengan sistem pengikat yang aman dan platform khusus.',
      status: 'Available 24/7'
    },
    {
      name: 'Heavy Duty Truck',
      type: 'Heavy Duty',
      capacity: '10 Ton',
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Truck', 'Bus', 'Heavy Vehicle', 'Commercial'],
      description: 'Truk derek heavy duty untuk kendaraan komersial, bus, dan truck yang membutuhkan kapasitas angkat tinggi.',
      status: 'Available 24/7'
    },
    {
      name: 'Flatbed Towing',
      type: 'Premium',
      capacity: '7 Ton',
      image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Luxury Car', 'Sports Car', 'Classic Car', 'Exotic Car'],
      description: 'Truk towing flatbed premium untuk kendaraan mewah dan klasik dengan penanganan extra hati-hati.',
      status: 'Available 24/7'
    },
    {
      name: 'Multi-Purpose Carrier',
      type: 'Versatile',
      capacity: '8 Ton',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Alat Berat', 'Mesin Industri', 'Kendaraan Khusus', 'Cargo'],
      description: 'Kendaraan serbaguna untuk towing alat berat, mesin industri, dan kendaraan khusus dengan kapasitas tinggi.',
      status: 'Available 24/7'
    },
  ];

  const specifications = [
    { icon: Shield, title: 'Asuransi Penuh', desc: 'Semua armada dilindungi asuransi comprehensive' },
    { icon: Award, title: 'Certified Drivers', desc: 'Driver berpengalaman dengan sertifikasi internasional' },
    { icon: Truck, title: 'Regular Maintenance', desc: 'Perawatan rutin untuk performa optimal' },
    { icon: Car, title: 'GPS Tracking', desc: 'Semua unit dilengkapi GPS untuk monitoring real-time' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://imgur.com/67pMRjT.jpg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
              Armada <span className="text-[#FF5A00]">Towing</span> Profesional
            </h1>
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Armada lengkap dengan berbagai jenis kendaraan towing untuk melayani semua kebutuhan derek 
              kendaraan Anda di Jepara dan sekitarnya dengan aman dan profesional.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#FF5A00] mb-2">15+</div>
                <div className="text-gray-200">Unit Towing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#FF5A00] mb-2">24/7</div>
                <div className="text-gray-200">Siap Operasi</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#FF5A00] mb-2">10</div>
                <div className="text-gray-200">Ton Kapasitas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#FF5A00] mb-2">100%</div>
                <div className="text-gray-200">Terasuransi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Galeri <span className="text-[#FF5A00]">Armada Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Foto real armada towing profesional yang siap melayani Anda 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetData.map((vehicle, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#FF5A00]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-[#FF5A00] text-white px-3 py-1 rounded-full text-sm font-bold">
                    {vehicle.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    {vehicle.capacity}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {vehicle.status}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {vehicle.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {vehicle.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[#FF5A00] mb-3">Cocok Untuk:</h4>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => window.open(`https://wa.me/6287890152199?text=Halo, saya ingin menggunakan ${vehicle.name} untuk towing`, '_blank')}
                    className="w-full bg-[#FF5A00] hover:bg-[#E54A00] text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Request {vehicle.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Standar <span className="text-[#FF5A00]">Armada Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Semua kendaraan memenuhi standar internasional untuk keamanan dan kualitas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#FF5A00]">
                  <div className="bg-[#FF5A00] text-white p-4 rounded-full inline-flex mb-6 shadow-lg">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {spec.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {spec.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Fitur Keamanan & <span className="text-[#FF5A00]">Teknologi</span>
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#FF5A00] text-white p-4 rounded-lg shadow-lg">
                    <Shield className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sistem Pengaman Berlapis</h3>
                    <p className="text-gray-600 leading-relaxed">Winch berkualitas tinggi, tali sling certified, dan sistem pengunci otomatis</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#FF5A00] text-white p-4 rounded-lg shadow-lg">
                    <Car className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">GPS Real-time Tracking</h3>
                    <p className="text-gray-600 leading-relaxed">Monitoring posisi kendaraan secara real-time untuk keamanan maksimal</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#FF5A00] text-white p-4 rounded-lg shadow-lg">
                    <Award className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Operator Bersertifikat</h3>
                    <p className="text-gray-600 leading-relaxed">Semua operator telah menjalani training khusus dan memiliki sertifikat resmi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://imgur.com/QCOFb0X.jpg"
                alt="Fleet Safety"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Keamanan Terjamin</h3>
                <p className="text-white/90">Armada modern dengan standar keamanan internasional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#FF5A00] to-[#E54A00] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Butuh Bantuan Towing dengan <span className="text-white">Armada Profesional?</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Hubungi kami sekarang untuk mendapatkan bantuan dengan armada terlengkap dan terpercaya
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => window.open('https://wa.me/6287890152199?text=Halo, saya ingin bertanya tentang armada towing', '_blank')}
              className="bg-white text-[#FF5A00] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Konsultasi WhatsApp
            </button>
            <a
              href="mailto:divandaal@gmail.com"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30"
            >
              Email: divandaal@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
