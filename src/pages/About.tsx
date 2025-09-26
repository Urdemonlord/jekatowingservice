import { Users, Award, Shield, Clock, Truck, MapPin } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2018', event: 'Jeka Towing Service didirikan dengan 1 unit towing truck' },
     { year: '2020', event: 'Ekspansi armada menjadi 2 unit dan melayani seluruh Indonesia' },
    { year: '2021', event: 'Meluncurkan layanan 24 jam dan sistem GPS tracking' },
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://imgur.com/QCOFb0X.jpg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
                Tentang <span className="text-[#FF5A00]">Jeka Towing</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Berdiri sejak 2018, kami telah menjadi partner terpercaya untuk layanan towing 
                di Jepara dan sekitarnya. Dengan komitmen memberikan pelayanan terbaik, kami 
                terus berinovasi untuk memenuhi kebutuhan customer dengan jangkauan layanan 
                ke hampir seluruh kota besar di Indonesia.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-[#FF5A00] mb-2">1000+</div>
                  <div className="text-gray-300">Kendaraan Tertolong</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#FF5A00] mb-2">6+</div>
                  <div className="text-gray-300">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://imgur.com/QCOFb0X.jpg"
                alt="Jeka Towing Armada"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#FF5A00] text-white p-6 rounded-xl shadow-lg">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#FF5A00]">Vision & Mission</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prinsip dan komitmen yang menjadi fondasi dalam setiap layanan yang kami berikan
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#FF5A00] to-[#E54A00] rounded-2xl p-8 text-white">
                <div className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-lg inline-flex mb-6">
                  <Truck className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold mb-6">Visi Kami</h2>
                <p className="text-lg mb-6 leading-relaxed">
                  Menjadi perusahaan jasa towing & ekspedisi kendaraan terkemuka di Indonesia, 
                  dengan layanan yang cepat, aman, dan profesional.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Ekspansi ke seluruh Indonesia</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Teknologi terdepan dalam industri</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Standard internasional untuk semua layanan</span>
                  </li>
                </ul>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF5A00] rounded-full"></div>
            </div>

            {/* Mission */}
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#FF5A00]">
                <div className="bg-[#FF5A00] text-white p-4 rounded-lg inline-flex mb-6">
                  <Award className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Misi Kami</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Menjangkau setiap kota/kabupaten di Indonesia melalui kemitraan strategis, 
                  menghadirkan layanan derek & pengiriman kendaraan yang lebih mudah, aman, dan terpercaya.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#FF5A00] rounded-full"></div>
                    <span>Pelayanan 24 jam dengan respon cepat</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#FF5A00] rounded-full"></div>
                    <span>Teknisi profesional dan berpengalaman</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#FF5A00] rounded-full"></div>
                    <span>Harga transparan tanpa biaya tersembunyi</span>
                  </li>
                </ul>
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#FF5A00] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nilai-Nilai <span className="text-[#FF5A00]">Perusahaan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prinsip yang menjadi fondasi dalam setiap layanan yang kami berikan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#FF5A00]">
                  <div className="bg-[#FF5A00] text-white p-4 rounded-full inline-flex mb-6 shadow-lg">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Perjalanan <span className="text-[#FF5A00]">Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestone penting dalam pengembangan Jeka Towing Service sejak 2018
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#FF5A00]/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#FF5A00] rounded-full shadow-lg"></div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 ml-auto'}`}>
                    <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FF5A00] hover:shadow-lg transition-all">
                      <div className="text-2xl font-bold text-[#FF5A00] mb-2">{milestone.year}</div>
                      <p className="text-gray-700 leading-relaxed">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gradient-to-br from-[#FF5A00] to-[#E54A00] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Tim Profesional <span className="text-white">Kami</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Didukung oleh tim terbaik dengan pengalaman dan dedikasi tinggi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#FF5A00]" />
              </div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-white/90">Teknisi Berpengalaman</div>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-[#FF5A00]" />
              </div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-white/90">Unit Armada</div>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-[#FF5A00]" />
              </div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-white/90">Area Coverage</div>
            </div>
            
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#FF5A00]" />
              </div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-white/90">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Siap Melayani Anda <span className="text-[#FF5A00]">24/7</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Hubungi tim profesional kami kapan saja Anda membutuhkan bantuan towing
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => window.open('https://wa.me/6287890152199?text=Halo, saya ingin tahu lebih lanjut tentang Jeka Towing Service', '_blank')}
              className="bg-[#FF5A00] hover:bg-[#E54A00] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              WhatsApp: 0878-9015-2199
            </button>
            <a
              href="mailto:divandaal@gmail.com"
              className="bg-white border-2 border-[#FF5A00] text-[#FF5A00] hover:bg-[#FF5A00] hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Email: divandaal@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;