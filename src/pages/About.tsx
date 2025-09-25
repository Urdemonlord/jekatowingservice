import React from 'react';
import { Users, Award, Shield, Clock, Truck, MapPin } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2018', event: 'Jeka Towing Service didirikan dengan 2 unit towing truck' },
    { year: '2019', event: 'Ekspansi armada menjadi 5 unit dan melayani seluruh Jakarta' },
    { year: '2020', event: 'Meluncurkan layanan 24 jam dan sistem GPS tracking' },
    { year: '2021', event: 'Mencapai 10.000+ customer dan rating 4.9/5' },
    { year: '2022', event: 'Membuka layanan ke Bekasi, Depok, dan Tangerang' },
    { year: '2023', event: 'Armada bertambah menjadi 15+ unit dengan teknologi terbaru' },
    { year: '2024', event: 'Melayani 50.000+ panggilan dengan tingkat kepuasan 99%' }
  ];

  const teamValues = [
    {
      icon: Shield,
      title: 'Keamanan Utama',
      description: 'Setiap kendaraan yang kami tangani dijamin aman dengan asuransi penuh dan penanganan profesional.'
    },
    {
      icon: Clock,
      title: 'Respon Cepat',
      description: 'Komitmen kami memberikan respon dalam 15-30 menit untuk membantu Anda saat darurat.'
    },
    {
      icon: Users,
      title: 'Tim Profesional',
      description: 'Teknisi berpengalaman dan bersertifikat yang selalu mengutamakan kepuasan customer.'
    },
    {
      icon: Award,
      title: 'Kualitas Terjamin',
      description: 'Standar layanan internasional dengan peralatan modern dan maintenance rutin.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Tentang Jeka Towing Service
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Sejak 2018, kami telah menjadi partner terpercaya untuk layanan towing di Jakarta 
                dan sekitarnya. Dengan komitmen memberikan pelayanan terbaik, kami terus berinovasi 
                untuk memenuhi kebutuhan customer.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">50,000+</div>
                  <div className="text-blue-200">Panggilan Dilayani</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">6+</div>
                  <div className="text-blue-200">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Jeka Towing Team"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm">SIAP MELAYANI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="bg-blue-900 text-white p-4 rounded-lg inline-flex mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Misi Kami</h2>
              <p className="text-lg text-gray-700 mb-6">
                Memberikan layanan towing terbaik dan terpercaya dengan mengutamakan keamanan, 
                kecepatan respon, dan kepuasan customer. Kami berkomitmen menjadi solusi terdepan 
                untuk semua kebutuhan derek kendaraan di Jakarta dan sekitarnya.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span>Pelayanan 24 jam dengan respon cepat</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span>Teknisi profesional dan berpengalaman</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                  <span>Harga transparan tanpa biaya tersembunyi</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8">
              <div className="bg-orange-500 text-white p-4 rounded-lg inline-flex mb-6">
                <Truck className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi Kami</h2>
              <p className="text-lg text-gray-700 mb-6">
                Menjadi perusahaan towing service terdepan di Indonesia yang dikenal karena 
                kualitas layanan, inovasi teknologi, dan kepercayaan customer. Kami ingin 
                menjadi pilihan utama untuk semua kebutuhan bantuan kendaraan darurat.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Ekspansi ke seluruh Indonesia</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Teknologi terdepan dalam industri</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Standard internasional untuk semua layanan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Perusahaan
            </h2>
            <p className="text-xl text-gray-600">
              Prinsip yang menjadi fondasi dalam setiap layanan yang kami berikan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all">
                  <div className="bg-blue-100 text-blue-900 p-4 rounded-full inline-flex mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-xl text-gray-600">
              Milestone penting dalam pengembangan Jeka Towing Service
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-900 rounded-full"></div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 ml-auto'}`}>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="text-2xl font-bold text-blue-900 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Tim Profesional Kami
            </h2>
            <p className="text-xl text-blue-100">
              Didukung oleh tim terbaik dengan pengalaman dan dedikasi tinggi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-blue-200">Teknisi Berpengalaman</div>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Unit Armada</div>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-blue-200">Area Coverage</div>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-blue-200">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Siap Melayani Anda 24/7
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Hubungi tim profesional kami kapan saja Anda membutuhkan bantuan towing
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => window.open('https://wa.me/6287890152199?text=Halo, saya ingin tahu lebih lanjut tentang Jeka Towing Service', '_blank')}
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

export default About;