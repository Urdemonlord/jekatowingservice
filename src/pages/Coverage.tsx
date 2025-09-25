import { MapPin, Clock, Phone, CheckCircle } from 'lucide-react';

const Coverage = () => {
  const coverageAreas = [
    {
      area: 'Jepara Kota',
      districts: ['Jepara', 'Kedung', 'Bangsri', 'Keling', 'Kembang', 'Mayong', 'Mlonggo', 'Nalumsari', 'Pecangaan', 'Tahunan'],
      responseTime: '15-25 menit',
      status: 'primary',
      image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      area: 'Pecangaan',
      districts: ['Pecangaan', 'Batealit', 'Donorojo', 'Kalinyamatan', 'Welahan'],
      responseTime: '20-30 menit',
      status: 'primary',
      image: 'https://images.pexels.com/photos/162805/tow-truck-car-wreck-wreck-truck-162805.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      area: 'Tahunan',
      districts: ['Tahunan', 'Mayong', 'Keling', 'Kembang', 'Mlonggo'],
      responseTime: '20-30 menit',
      status: 'primary',
      image: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      area: 'Welahan',
      districts: ['Welahan', 'Batealit', 'Donorojo', 'Kalinyamatan', 'Pecangaan'],
      responseTime: '25-35 menit',
      status: 'secondary',
      image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      area: 'Mayong',
      districts: ['Mayong', 'Keling', 'Kembang', 'Mlonggo', 'Tahunan'],
      responseTime: '25-35 menit',
      status: 'secondary',
      image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      area: 'Kalinyamatan',
      districts: ['Kalinyamatan', 'Batealit', 'Donorojo', 'Welahan', 'Pecangaan'],
      responseTime: '30-40 menit',
      status: 'secondary',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      area: 'Donorojo',
      districts: ['Donorojo', 'Batealit', 'Kalinyamatan', 'Welahan', 'Pecangaan'],
      responseTime: '35-45 menit',
      status: 'extended',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      area: 'Karimunjawa',
      districts: ['Karimunjawa', 'Kepulauan Jepara', 'Pulau Panjang', 'Pulau Menjangan'],
      responseTime: '60-90 menit',
      status: 'extended',
      image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const serviceHighlights = [
    { icon: Clock, text: '24 Jam Setiap Hari', color: 'text-[#FF5A00]' },
    { icon: Phone, text: 'Respon Cepat', color: 'text-[#FF5A00]' },
    { icon: CheckCircle, text: 'Coverage Luas', color: 'text-[#FF5A00]' },
    { icon: MapPin, text: 'GPS Tracking', color: 'text-[#FF5A00]' }
  ];


  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'primary': return { text: 'Priority Area', color: 'text-white bg-[#FF5A00]' };
      case 'secondary': return { text: 'Standard Area', color: 'text-white bg-[#E54A00]' };
      case 'extended': return { text: 'Extended Area', color: 'text-white bg-[#CC3A00]' };
      default: return { text: 'Coverage Area', color: 'text-gray-700 bg-gray-100' };
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
              Area Layanan <span className="text-[#FF5A00]">Towing</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Kami melayani area Jepara dan sekitarnya dengan waktu respon cepat dan 
              coverage yang luas untuk memastikan bantuan selalu tersedia saat Anda membutuhkan.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {serviceHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <Icon className={`h-8 w-8 mx-auto mb-3 ${item.color}`} />
                    <div className="text-gray-200 font-medium">{item.text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Wilayah Yang Kami <span className="text-[#FF5A00]">Layani</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jangkauan layanan dengan waktu respon optimal di setiap area
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverageAreas.map((area, index) => {
              const statusInfo = getStatusLabel(area.status);
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#FF5A00]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.area}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${statusInfo.color}`}>
                        {statusInfo.text}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {area.area}
                      </h3>
                      <div className="text-white/90 font-semibold">
                        {area.responseTime}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-lg font-bold text-[#FF5A00] mb-4">Kecamatan Yang Dilayani:</h4>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {area.districts.slice(0, 6).map((district, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-[#FF5A00] flex-shrink-0" />
                          <span className="text-sm text-gray-700">{district}</span>
                        </div>
                      ))}
                      {area.districts.length > 6 && (
                        <div className="col-span-2 text-sm text-gray-500">
                          +{area.districts.length - 6} kecamatan lainnya
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => window.open(`https://wa.me/6287890152199?text=Halo, saya butuh towing di area ${area.area}`, '_blank')}
                      className="w-full bg-[#FF5A00] hover:bg-[#E54A00] text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Request Towing di {area.area}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Response Time Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Waktu <span className="text-[#FF5A00]">Respon</span> Layanan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jangkauan layanan dengan waktu respon optimal di setiap area
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#FF5A00]">
              <div className="bg-[#FF5A00] text-white p-4 rounded-full inline-flex mb-6 shadow-lg">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Priority Area</h3>
              <p className="text-gray-600 mb-4">Jepara Kota, Pecangaan, Tahunan</p>
              <div className="text-3xl font-bold text-[#FF5A00] mb-2">15-25 menit</div>
              <div className="text-gray-500">Waktu Respon Tercepat</div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#FF5A00]">
              <div className="bg-[#FF5A00] text-white p-4 rounded-full inline-flex mb-6 shadow-lg">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard Area</h3>
              <p className="text-gray-600 mb-4">Welahan, Mayong, Kalinyamatan</p>
              <div className="text-3xl font-bold text-[#FF5A00] mb-2">25-40 menit</div>
              <div className="text-gray-500">Waktu Respon Standar</div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-[#FF5A00]">
              <div className="bg-[#FF5A00] text-white p-4 rounded-full inline-flex mb-6 shadow-lg">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Extended Area</h3>
              <p className="text-gray-600 mb-4">Donorojo, Karimunjawa</p>
              <div className="text-3xl font-bold text-[#FF5A00] mb-2">35-90 menit</div>
              <div className="text-gray-500">Masih Dilayani 24 Jam</div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Notes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Informasi Penting <span className="text-[#FF5A00]">Area Layanan</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#FF5A00]">
              <h3 className="text-2xl font-bold text-[#FF5A00] mb-6">Catatan Khusus:</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#FF5A00] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Waktu respon dapat bervariasi tergantung kondisi traffic</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#FF5A00] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Area tol dan jalan protokol mendapat prioritas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#FF5A00] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Layanan 24 jam tersedia di seluruh area coverage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#FF5A00] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Biaya dapat bervariasi berdasarkan jarak dan lokasi</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#FF5A00]">
              <h3 className="text-2xl font-bold text-[#FF5A00] mb-6">Area Khusus:</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[#FF5A00] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Pelabuhan Jepara: Layanan tersedia</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[#FF5A00] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Bandara Ahmad Yani Semarang: Koordinasi khusus</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[#FF5A00] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Area industri Jepara: Akses 24 jam</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[#FF5A00] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Kompleks perumahan: Akses terjamin</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#FF5A00] to-[#E54A00] rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Lokasi Anda Tidak Tercantum?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Hubungi kami untuk konfirmasi layanan di area Anda. Kami selalu berusaha memperluas jangkauan untuk melayani lebih banyak customer.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => window.open('https://wa.me/6287890152199?text=Halo, apakah area saya dilayani untuk towing service?', '_blank')}
                className="bg-white text-[#FF5A00] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Cek Area via WhatsApp
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
      </section>
    </div>
  );
};

export default Coverage;
