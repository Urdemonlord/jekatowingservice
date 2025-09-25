import React from 'react';
import { ArrowRight, Phone, MapPin, Truck, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: 'Hubungi Kami',
      description: 'Call atau WhatsApp ke nomor 0878-9015-2199. Tim customer service kami siap melayani 24 jam.',
      icon: Phone,
      details: ['Tersedia 24/7', 'Respon dalam 2 menit', 'Customer service ramah']
    },
    {
      step: 2,
      title: 'Berikan Informasi',
      description: 'Sampaikan lokasi Anda, jenis kendaraan, dan kondisi yang dialami untuk estimasi yang akurat.',
      icon: MapPin,
      details: ['Lokasi pickup', 'Jenis kendaraan', 'Kondisi kendaraan', 'Tujuan towing']
    },
    {
      step: 3,
      title: 'Tim Bergerak',
      description: 'Teknisi terdekat akan segera menuju lokasi Anda dengan armada yang sesuai kebutuhan.',
      icon: Truck,
      details: ['GPS tracking real-time', 'Estimasi waktu tiba', 'Update progress via WA']
    },
    {
      step: 4,
      title: 'Selesai Aman',
      description: 'Kendaraan Anda di-towing dengan aman ke tujuan. Pembayaran mudah dan transparan.',
      icon: CheckCircle,
      details: ['Penanganan profesional', 'Asuransi terjamin', 'Pembayaran fleksibel']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Cara Kerja Jeka Towing
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Proses sederhana dan cepat untuk mendapatkan bantuan towing profesional. 
              Hanya 4 langkah mudah untuk menyelesaikan masalah kendaraan Anda.
            </p>
            <div className="bg-orange-500 text-white px-6 py-3 rounded-lg inline-block font-semibold">
              Rata-rata waktu respon: 15-30 menit
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 1;
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={isEven ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                        {step.step}
                      </div>
                      <div className="bg-blue-100 text-blue-900 p-3 rounded-lg">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {step.description}
                    </p>
                    
                    <div className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={isEven ? 'lg:col-start-1' : ''}>
                    <div className="bg-gray-50 rounded-2xl p-8 text-center">
                      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon className="h-12 w-12" />
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">
                        Langkah {step.step}
                      </h4>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Timeline Layanan
            </h2>
            <p className="text-xl text-gray-600">
              Dari panggilan pertama hingga kendaraan sampai tujuan
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-8">
              {[
                { time: '0 menit', event: 'Panggilan masuk', desc: 'Customer menghubungi via call/WA' },
                { time: '2 menit', event: 'Konfirmasi detail', desc: 'Verifikasi lokasi dan kebutuhan' },
                { time: '5 menit', event: 'Dispatch unit', desc: 'Tim terdekat diberangkatkan' },
                { time: '15-30 menit', event: 'Tiba di lokasi', desc: 'Teknisi sampai dan evaluasi' },
                { time: '45-60 menit', event: 'Proses towing', desc: 'Kendaraan di-towing ke tujuan' },
                { time: '90 menit', event: 'Selesai', desc: 'Kendaraan sampai tujuan dengan aman' }
              ].map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-900 rounded-full"></div>
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-sm font-semibold text-orange-600">{item.time}</div>
                      <div className="text-lg font-bold text-gray-900">{item.event}</div>
                      <div className="text-gray-600">{item.desc}</div>
                    </div>
                  </div>
                  <div className="w-1/2 pl-8">
                    {index % 2 === 1 && (
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="text-sm text-blue-600">Update Progress</div>
                        <div className="text-gray-700">Customer mendapat notifikasi real-time</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan Umum
            </h2>
            <p className="text-xl text-gray-600">
              Jawaban untuk pertanyaan yang sering ditanyakan
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Berapa lama waktu tunggu untuk towing?',
                a: 'Rata-rata 15-30 menit untuk area Jakarta Pusat dan Selatan, 30-45 menit untuk area lainnya.'
              },
              {
                q: 'Apakah tersedia layanan 24 jam?',
                a: 'Ya, kami melayani 24 jam setiap hari termasuk weekend dan hari libur.'
              },
              {
                q: 'Bagaimana cara pembayaran?',
                a: 'Kami menerima cash, transfer bank, e-wallet, dan kartu kredit/debit.'
              },
              {
                q: 'Apakah kendaraan diasuransikan selama towing?',
                a: 'Ya, semua kendaraan yang kami towing dilindungi asuransi comprehensive.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Siap Memulai Proses Towing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Hubungi kami sekarang dan rasakan kemudahan layanan towing profesional
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => window.open('https://wa.me/6287890152199?text=Halo, saya ingin menggunakan jasa towing', '_blank')}
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

export default HowItWorks;