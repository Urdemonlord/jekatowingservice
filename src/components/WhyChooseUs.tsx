import { Clock, Shield, Users, Truck, Award, MapPin } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: '24/7 Layanan',
      description: 'Siap melayani kapan saja, hari libur dan weekend tetap buka',
    },
    {
      icon: Shield,
      title: 'Asuransi Terjamin',
      description: 'Kendaraan Anda dijamin aman dengan asuransi penuh',
    },
    {
      icon: Users,
      title: 'Teknisi Berpengalaman',
      description: 'Tim profesional dengan pengalaman bertahun-tahun',
    },
    {
      icon: Truck,
      title: 'Armada Lengkap',
      description: 'Berbagai jenis truk towing untuk semua kendaraan',
    },
    {
      icon: Award,
      title: 'Service Berkualitas',
      description: 'Pelayanan terbaik dengan standar internasional',
    },
    {
      icon: MapPin,
       title: 'Coverage Luas',
       description: 'Melayani Jepara dan sekitarnya dengan respon cepat',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih Jeka Towing?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kepercayaan ribuan customer menjadi motivasi kami untuk terus memberikan 
            layanan towing terbaik dan terpercaya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border-b-4 border-[#FF5A00]"
              >
                <div className="bg-orange-100 text-[#FF5A00] p-4 rounded-full inline-flex mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-[#FF5A00] to-[#E54A00] rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Respon Cepat, Layanan Terpercaya
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Dengan waktu respon rata-rata 15-30 menit, kami hadir ketika Anda membutuhkan. 
                Pengalaman puluhan ribu customer membuktikan kualitas layanan kami.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">15-30</div>
                  <div className="text-white/80">Menit Respon</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">99%</div>
                  <div className="text-white/80">Customer Puas</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/public/jekatowing.webp"
                alt="Professional Towing"
                className="w-full h-64 object-contain bg-white/10 p-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;