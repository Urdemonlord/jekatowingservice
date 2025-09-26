import { Phone, MapPin, Truck, CheckCircle, MessageCircle } from 'lucide-react';

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
      <section className="bg-gradient-to-r from-[#FF5A00] to-[#E54A00] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Cara Kerja Jeka Towing
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Proses sederhana dan cepat untuk mendapatkan bantuan towing profesional. 
              Hanya 4 langkah mudah untuk menyelesaikan masalah kendaraan Anda.
            </p>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold border border-white/30">
              Rata-rata waktu respon: 15-30 menit
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 1;
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={isEven ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-[#FF5A00] text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                        {step.step}
                      </div>
                      <div className="bg-orange-100 p-4 rounded-full">
                        <Icon className="h-8 w-8 text-[#FF5A00]" />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-xl text-gray-600 mb-6">
                      {step.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-[#FF5A00]" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`bg-gray-100 rounded-2xl p-8 shadow-lg border-l-4 border-[#FF5A00] ${isEven ? 'lg:col-start-1' : ''}`}>
                    <div className="text-center">
                      <div className="bg-white rounded-full p-6 inline-block mb-6 shadow-md">
                        <Icon className="h-16 w-16 text-[#FF5A00]" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">
                        Langkah {step.step}
                      </h4>
                      <p className="text-gray-600 mb-6">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Timeline <span className="text-[#FF5A00]">Layanan</span>
            </h2>
            <p className="text-xl text-gray-600">
              Dari panggilan pertama hingga kendaraan sampai tujuan
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-[#FF5A00] rounded-full"></div>
            
            <div className="space-y-8">
              {[
                { time: '0 menit', event: 'Panggilan masuk', desc: 'Customer menghubungi via call/WA' },
                { time: '2 menit', event: 'Konfirmasi detail', desc: 'Verifikasi lokasi dan kebutuhan' },
                { time: '5 menit', event: 'Dispatch unit', desc: 'Tim terdekat diberangkatkan' },
                { time: '15-30 menit', event: 'Tiba di lokasi', desc: 'Teknisi sampai dan evaluasi' },
                { time: '45-60 menit', event: 'Proses towing', desc: 'Kendaraan di-towing ke tujuan' },
                { time: '90 menit', event: 'Selesai', desc: 'Kendaraan sampai tujuan dengan aman' }
              ].map((item, index) => (
                <div key={index} className="relative grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div className={`md:col-span-2 ${index % 2 === 0 ? 'md:text-right' : 'md:col-start-4 md:text-left'}`}>
                    {index % 2 === 0 ? (
                      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#FF5A00]">
                        <div className="font-bold text-[#FF5A00]">{item.time}</div>
                        <div className="text-lg font-bold text-gray-900">{item.event}</div>
                        <div className="text-gray-600">{item.desc}</div>
                      </div>
                    ) : (
                      <div className="bg-white p-4 rounded-lg shadow-md border-r-4 border-[#FF5A00]">
                        <div className="font-bold text-[#FF5A00]">{item.time}</div>
                        <div className="text-lg font-bold text-gray-900">{item.event}</div>
                        <div className="text-gray-600">{item.desc}</div>
                      </div>
                    )}
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <div className="w-8 h-8 bg-white border-4 border-[#FF5A00] rounded-full shadow-md"></div>
                  </div>
                  <div className="md:col-span-2 hidden md:block">
                    {index % 2 === 1 && (
                      <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                        <div className="font-medium text-[#FF5A00]">Update Progress</div>
                        <div className="text-sm text-gray-600">Customer mendapat notifikasi real-time</div>
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan <span className="text-[#FF5A00]">Umum</span>
            </h2>
            <p className="text-xl text-gray-600">
              Jawaban untuk pertanyaan yang sering ditanyakan
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Berapa lama waktu tunggu untuk towing?',
                a: 'Rata-rata 15-30 menit untuk area Jepara Pusat, 25-45 menit untuk Kudus, Pati, dan Demak, 40-60 menit untuk area Rembang dan Blora.'
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
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border-l-4 border-[#FF5A00]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#FF5A00] to-[#E54A00] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Siap Memulai Proses Towing?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Hubungi kami sekarang dan rasakan kemudahan layanan towing profesional
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => window.open('https://wa.me/6287890152199?text=Halo, saya ingin menggunakan jasa towing', '_blank')}
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

export default HowItWorks;
