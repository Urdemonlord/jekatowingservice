import React from 'react';
import { MapPin, Clock, Phone, CheckCircle } from 'lucide-react';

const Coverage = () => {
  const coverageAreas = [
    {
      area: 'Jakarta Pusat',
      districts: ['Menteng', 'Tanah Abang', 'Gambir', 'Sawah Besar', 'Kemayoran', 'Senen', 'Cempaka Putih', 'Johar Baru'],
      responseTime: '15-25 menit',
      status: 'primary'
    },
    {
      area: 'Jakarta Selatan',
      districts: ['Kebayoran Baru', 'Kebayoran Lama', 'Pesanggrahan', 'Cilandak', 'Pasar Minggu', 'Jagakarsa', 'Mampang', 'Setiabudi', 'Tebet', 'Pancoran'],
      responseTime: '20-30 menit',
      status: 'primary'
    },
    {
      area: 'Jakarta Barat',
      districts: ['Grogol Petamburan', 'Taman Sari', 'Tambora', 'Kebon Jeruk', 'Kalideres', 'Palmerah', 'Kembangan', 'Cengkareng'],
      responseTime: '20-30 menit',
      status: 'primary'
    },
    {
      area: 'Jakarta Timur',
      districts: ['Matraman', 'Pulogadung', 'Jatinegara', 'Cakung', 'Duren Sawit', 'Kramat Jati', 'Makasar', 'Pasar Rebo', 'Cipayung', 'Ciracas'],
      responseTime: '25-35 menit',
      status: 'primary'
    },
    {
      area: 'Jakarta Utara',
      districts: ['Penjaringan', 'Pademangan', 'Tanjung Priok', 'Koja', 'Kelapa Gading', 'Cilincing'],
      responseTime: '25-35 menit',
      status: 'primary'
    },
    {
      area: 'Depok',
      districts: ['Pancoran Mas', 'Beji', 'Cipayung', 'Sukmajaya', 'Cinere', 'Limo', 'Sawangan', 'Bojongsari', 'Cilodong', 'Cimanggis', 'Tapos'],
      responseTime: '30-45 menit',
      status: 'secondary'
    },
    {
      area: 'Bekasi',
      districts: ['Bekasi Timur', 'Bekasi Barat', 'Bekasi Selatan', 'Bekasi Utara', 'Medan Satria', 'Pondok Gede', 'Jati Asih', 'Jati Sampurna', 'Bantargebang', 'Mustika Jaya'],
      responseTime: '35-50 menit',
      status: 'secondary'
    },
    {
      area: 'Tangerang',
      districts: ['Tangerang Kota', 'Karawaci', 'Serpong', 'BSD', 'Alam Sutera', 'Gading Serpong', 'Bintaro'],
      responseTime: '40-55 menit',
      status: 'extended'
    }
  ];

  const serviceHighlights = [
    { icon: Clock, text: '24 Jam Setiap Hari', color: 'text-green-600' },
    { icon: Phone, text: 'Respon Cepat', color: 'text-blue-600' },
    { icon: CheckCircle, text: 'Coverage Luas', color: 'text-orange-600' },
    { icon: MapPin, text: 'GPS Tracking', color: 'text-purple-600' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'primary': return 'border-green-500 bg-green-50';
      case 'secondary': return 'border-blue-500 bg-blue-50';
      case 'extended': return 'border-orange-500 bg-orange-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'primary': return { text: 'Priority Area', color: 'text-green-700 bg-green-100' };
      case 'secondary': return { text: 'Standard Area', color: 'text-blue-700 bg-blue-100' };
      case 'extended': return { text: 'Extended Area', color: 'text-orange-700 bg-orange-100' };
      default: return { text: 'Coverage Area', color: 'text-gray-700 bg-gray-100' };
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Area Layanan Towing
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Kami melayani area Jakarta dan sekitarnya dengan waktu respon cepat dan 
              coverage yang luas untuk memastikan bantuan selalu tersedia saat Anda membutuhkan.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {serviceHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <Icon className={`h-8 w-8 mx-auto mb-2 ${item.color.replace('text-', 'text-')}`} />
                    <div className="text-sm font-medium">{item.text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Wilayah Yang Kami Layani
            </h2>
            <p className="text-xl text-gray-600">
              Jangkauan layanan dengan waktu respon optimal di setiap area
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coverageAreas.map((area, index) => {
              const statusInfo = getStatusLabel(area.status);
              return (
                <div
                  key={index}
                  className={`rounded-xl border-2 p-6 transition-all hover:shadow-lg ${getStatusColor(area.status)}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {area.area}
                      </h3>
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${statusInfo.color}`}>
                        {statusInfo.text}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">
                        {area.responseTime}
                      </div>
                      <div className="text-sm text-gray-600">Waktu Respon</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Kecamatan Yang Dilayani:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {area.districts.map((district, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-gray-700 text-sm">{district}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => window.open(`https://wa.me/6287890152199?text=Halo, saya butuh towing di area ${area.area}`, '_blank')}
                    className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                  >
                    Request Towing di {area.area}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Response Time Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-green-100 rounded-xl p-8 text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Priority Area</h3>
              <p className="text-green-700 mb-4">Jakarta Pusat & Sebagian Jakarta Selatan</p>
              <div className="text-3xl font-bold text-green-800">15-25 menit</div>
              <div className="text-green-600">Waktu Respon Tercepat</div>
            </div>

            <div className="bg-blue-100 rounded-xl p-8 text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Standard Area</h3>
              <p className="text-blue-700 mb-4">Jakarta & Bekasi/Depok</p>
              <div className="text-3xl font-bold text-blue-800">20-45 menit</div>
              <div className="text-blue-600">Waktu Respon Standar</div>
            </div>

            <div className="bg-orange-100 rounded-xl p-8 text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-orange-800 mb-2">Extended Area</h3>
              <p className="text-orange-700 mb-4">Tangerang & Sekitarnya</p>
              <div className="text-3xl font-bold text-orange-800">40-55 menit</div>
              <div className="text-orange-600">Masih Dilayani 24 Jam</div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Notes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              Informasi Penting Area Layanan
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Catatan Khusus:</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Waktu respon dapat bervariasi tergantung kondisi traffic</li>
                  <li>• Area tol dan jalan protokol mendapat prioritas</li>
                  <li>• Layanan 24 jam tersedia di seluruh area coverage</li>
                  <li>• Biaya dapat bervariasi berdasarkan jarak dan lokasi</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Area Khusus:</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Bandara Soekarno-Hatta: Layanan tersedia</li>
                  <li>• Pelabuhan Tanjung Priok: Koordinasi khusus</li>
                  <li>• Area industri: Akses 24 jam</li>
                  <li>• Kompleks perumahan: Akses terjamin</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Lokasi Anda Tidak Tercantum?
              </h3>
              <p className="text-blue-700 mb-6">
                Hubungi kami untuk konfirmasi layanan di area Anda. Kami selalu berusaha memperluas jangkauan untuk melayani lebih banyak customer.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => window.open('https://wa.me/6287890152199?text=Halo, apakah area saya dilayani untuk towing service?', '_blank')}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Cek Area via WhatsApp
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
    </div>
  );
};

export default Coverage;