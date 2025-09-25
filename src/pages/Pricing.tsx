import React from 'react';
import { Check, Star, Phone, MessageCircle } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Towing Mobil Sedan',
      basePrice: 'Rp 150.000',
      description: 'Untuk mobil sedan dan hatchback dalam kota',
      features: [
        'Jarak hingga 10 km',
        'Flatbed atau wheel lift',
        'Asuransi penuh',
        'Teknisi berpengalaman',
        'Respon 15-30 menit'
      ],
      popular: false
    },
    {
      name: 'Towing SUV/MPV',
      basePrice: 'Rp 200.000',
      description: 'Untuk SUV, MPV, dan kendaraan besar',
      features: [
        'Jarak hingga 10 km',
        'Heavy duty towing',
        'Asuransi comprehensive',
        'Teknisi certified',
        'Respon prioritas',
        'GPS tracking'
      ],
      popular: true
    },
    {
      name: 'Towing Motor',
      basePrice: 'Rp 75.000',
      description: 'Untuk sepeda motor semua jenis',
      features: [
        'Jarak hingga 15 km',
        'Motorcycle carrier',
        'Penanganan khusus',
        'Asuransi terjamin',
        'Respon cepat'
      ],
      popular: false
    }
  ];

  const additionalServices = [
    { service: 'Jump Start Aki', price: 'Rp 50.000' },
    { service: 'Ganti Ban', price: 'Rp 75.000' },
    { service: 'Towing Jarak Jauh (per km)', price: 'Rp 8.000' },
    { service: 'Towing Malam (22:00-06:00)', price: '+30%' },
    { service: 'Towing Weekend/Libur', price: '+20%' },
    { service: 'Emergency Response', price: '+25%' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Tarif Towing Service
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Harga transparan dan kompetitif untuk semua jenis layanan towing. 
              Tidak ada biaya tersembunyi, estimasi akurat sebelum pelayanan.
            </p>
            <div className="bg-orange-500 text-white px-6 py-3 rounded-lg inline-block font-semibold">
              Konsultasi Gratis • Estimasi Real-time
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Paket Layanan Towing
            </h2>
            <p className="text-xl text-gray-600">
              Pilih paket yang sesuai dengan jenis kendaraan Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  plan.popular ? 'border-orange-500 transform scale-105' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Paling Populer</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-blue-900 mb-2">{plan.basePrice}</div>
                  <div className="text-gray-500">Tarif dasar dalam kota</div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => window.open(`https://wa.me/6287890152199?text=Halo, saya ingin menggunakan ${plan.name}`, '_blank')}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-blue-900 text-white hover:bg-blue-800'
                  }`}
                >
                  Pesan {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Layanan Tambahan
            </h2>
            <p className="text-xl text-gray-600">
              Biaya tambahan untuk layanan khusus dan kondisi tertentu
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {additionalServices.map((item, index) => (
                <div key={index} className="p-6 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.service}</h3>
                  </div>
                  <div className="text-xl font-bold text-blue-900">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              Informasi Penting Tarif
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Yang Sudah Termasuk:</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Biaya towing dalam radius 10-15 km</li>
                  <li>• Asuransi kendaraan selama proses</li>
                  <li>• Teknisi berpengalaman dan certified</li>
                  <li>• Peralatan towing profesional</li>
                  <li>• Customer service 24 jam</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Biaya Tambahan:</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• Jarak lebih dari batas paket: Rp 8.000/km</li>
                  <li>• Towing malam hari (22:00-06:00): +30%</li>
                  <li>• Weekend dan hari libur: +20%</li>
                  <li>• Kondisi darurat/emergency: +25%</li>
                  <li>• Akses lokasi sulit: sesuai kondisi</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Cara Pembayaran:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-blue-700">
                <div>• Cash</div>
                <div>• Transfer Bank</div>
                <div>• E-Wallet</div>
                <div>• Kartu Kredit/Debit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Butuh Estimasi Harga Akurat?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Hubungi kami untuk mendapatkan estimasi harga yang tepat sesuai kondisi dan lokasi Anda
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => window.open('https://wa.me/6287890152199?text=Halo, saya ingin tanya estimasi harga towing', '_blank')}
              className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Tanya Harga via WhatsApp</span>
            </button>
            <a
              href="tel:+6287890152199"
              className="flex items-center justify-center space-x-2 bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
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

export default Pricing;