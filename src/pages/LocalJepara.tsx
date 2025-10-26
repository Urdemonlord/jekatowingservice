import { Phone, MessageCircle, MapPin, Clock, Award, Truck, Shield, Zap } from 'lucide-react';

const LocalJepara = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/6287890152199?text=Halo, saya butuh jasa towing 24 jam di Jepara', '_blank');
  };

  return (
    <div className="bg-gray-50">
      {/* SEO Hero Section - Optimized for "jasa towing 24 jam jepara" */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Jasa Towing 24 Jam Jepara
          </h1>
          <p className="text-xl text-gray-200 mb-4 max-w-3xl">
            Jeka Towing Service - Layanan Derek Mobil & Motor Terpercaya 24 Jam di Jepara dan Sekitarnya
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl">
            Dengan armada modern dan teknisi berpengalaman, kami siap membantu Anda kapan saja. 
            Jasa towing cepat, aman, dan terjangkau untuk semua jenis kendaraan di Jepara, Kudus, Pati, Demak, dan Rembang.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20BD5C] text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Hubungi Kami Sekarang (WhatsApp)</span>
            </button>
            <a
              href="tel:+6287890152199"
              className="flex items-center justify-center space-x-2 bg-[#FF5A00] hover:bg-[#E54A00] text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              <Phone className="h-5 w-5" />
              <span>0878-9015-2199</span>
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-4">
              <Clock className="h-6 w-6 text-[#FF5A00] mb-2" />
              <p className="text-white font-semibold">Layanan 24 Jam</p>
              <p className="text-gray-300 text-sm">Siap melayani kapan saja</p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-4">
              <Zap className="h-6 w-6 text-[#FF5A00] mb-2" />
              <p className="text-white font-semibold">Respons Cepat</p>
              <p className="text-gray-300 text-sm">Tiba dalam 15-30 menit</p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-4">
              <Shield className="h-6 w-6 text-[#FF5A00] mb-2" />
              <p className="text-white font-semibold">Aman & Terpercaya</p>
              <p className="text-gray-300 text-sm">Armada terawat profesional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Jasa Towing di Jepara */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Layanan Jasa Derek & Towing di Jepara
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Jeka Towing Service menyediakan berbagai jasa towing profesional untuk memenuhi kebutuhan Anda:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Truck className="h-8 w-8 text-[#FF5A00] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Derek Mobil Mogok</h3>
              <p className="text-gray-600 mb-4">
                Jasa derek mobil mogok dengan armada modern dan teknisi berpengalaman. 
                Kami siap membantu ketika kendaraan Anda mogok atau bermasalah di jalan.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Respons 15-30 menit</li>
                <li>✓ Armada tersedia 24/7</li>
                <li>✓ Harga terjangkau</li>
              </ul>
            </div>

            {/* Service Card 2 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Truck className="h-8 w-8 text-[#FF5A00] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Derek Motor 24 Jam</h3>
              <p className="text-gray-600 mb-4">
                Jasa derek sepeda motor profesional dan aman untuk semua jenis motor. 
                Dengan penanganan khusus untuk menjaga kondisi motor Anda.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Penanganan profesional</li>
                <li>✓ Tersedia 24 jam</li>
                <li>✓ Jangkauan luas</li>
              </ul>
            </div>

            {/* Service Card 3 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Truck className="h-8 w-8 text-[#FF5A00] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Towing Kecelakaan</h3>
              <p className="text-gray-600 mb-4">
                Layanan towing untuk kendaraan yang mengalami kecelakaan dengan penanganan khusus 
                dan aman untuk menjaga kendaraan Anda.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Penanganan darurat</li>
                <li>✓ Asuransi terakomodasi</li>
                <li>✓ Cepat dan profesional</li>
              </ul>
            </div>

            {/* Service Card 4 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Truck className="h-8 w-8 text-[#FF5A00] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Derek Jarak Jauh</h3>
              <p className="text-gray-600 mb-4">
                Jasa towing jarak jauh antar kota untuk memindahkan kendaraan Anda ke lokasi lain 
                dengan aman dan terpercaya.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Jangkauan Se-Jawa</li>
                <li>✓ Harga kompetitif</li>
                <li>✓ Armada tersedia</li>
              </ul>
            </div>

            {/* Service Card 5 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Truck className="h-8 w-8 text-[#FF5A00] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Derek Bus & Truk</h3>
              <p className="text-gray-600 mb-4">
                Jasa towing untuk kendaraan berat seperti bus, truk, dan alat berat dengan 
                armada heavy duty profesional.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Armada heavy duty</li>
                <li>✓ Teknisi berpengalaman</li>
                <li>✓ Kapasitas besar</li>
              </ul>
            </div>

            {/* Service Card 6 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Truck className="h-8 w-8 text-[#FF5A00] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rescue Kendaraan</h3>
              <p className="text-gray-600 mb-4">
                Layanan rescue untuk kendaraan yang terjebak, tenggelam, atau dalam situasi darurat 
                lainnya dengan penanganan profesional.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Situasi darurat</li>
                <li>✓ Tim profesional</li>
                <li>✓ Penanganan khusus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wilayah Layanan Towing di Jepara */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Area Layanan Jasa Towing 24 Jam
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Jeka Towing Service melayani di seluruh Jepara dan kota-kota sekitarnya:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Jepara', 'Kudus', 'Pati', 'Rembang', 'Demak', 'Semarang', 'Brebes', 'Tegal'].map((city) => (
              <div key={city} className="bg-white rounded-lg p-6 border-l-4 border-[#FF5A00] hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-5 w-5 text-[#FF5A00]" />
                  <h3 className="font-bold text-gray-900">{city}</h3>
                </div>
                <p className="text-gray-600 text-sm">Jasa towing 24 jam di {city}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg p-8 border-l-4 border-[#FF5A00]">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lokasi Kantor Kami</h3>
            <div className="flex items-start space-x-4 mb-6">
              <MapPin className="h-6 w-6 text-[#FF5A00] flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Depan Jembatan Timbang, RT.08/RW.02, Lebuawu, Kec. Pecangaan, Kabupaten Jepara, Jawa Tengah 59462
                </p>
                <p className="text-gray-600 mb-4">
                  Lokasi strategis untuk menjangkau seluruh area Jepara dan sekitarnya dengan cepat.
                </p>
                <a 
                  href="https://maps.google.com/maps?q=Jeka+Towing+Service+Jepara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF5A00] hover:underline font-semibold"
                >
                  Lihat di Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kenapa Memilih Jeka Towing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Kenapa Memilih Jeka Towing Service untuk Jasa Towing di Jepara?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-[#FF5A00] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Berpengalaman</h3>
              <p className="text-gray-600">Lebih dari 7 tahun melayani jasa towing di Jepara dengan ribuan kepuasan pelanggan</p>
            </div>

            <div className="text-center">
              <Clock className="h-12 w-12 text-[#FF5A00] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">24 Jam Nonstop</h3>
              <p className="text-gray-600">Layanan towing tersedia 24 jam setiap hari untuk kebutuhan darurat Anda</p>
            </div>

            <div className="text-center">
              <Zap className="h-12 w-12 text-[#FF5A00] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Respons Cepat</h3>
              <p className="text-gray-600">Tiba di lokasi Anda dalam 15-30 menit dengan armada modern</p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-[#FF5A00] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aman Terpercaya</h3>
              <p className="text-gray-600">Armada terawat, teknisi profesional, dan asuransi komprehensif untuk keamanan Anda</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Optimized for Long Tail Keywords */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Pertanyaan Umum - Jasa Towing 24 Jam di Jepara
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#FF5A00]">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Berapa biaya jasa towing di Jepara?</h3>
              <p className="text-gray-600">
                Biaya jasa towing di Jepara sangat kompetitif, mulai dari Rp 200.000 untuk area dekat hingga Rp 2.000.000+ untuk jarak jauh. 
                Hubungi kami untuk penawaran harga spesial sesuai kebutuhan Anda.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-[#FF5A00]">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Apakah Jeka Towing melayani 24 jam?</h3>
              <p className="text-gray-600">
                Ya, Jeka Towing Service melayani jasa towing 24 jam setiap hari termasuk hari libur dan hari raya. 
                Hubungi kami kapan saja di nomor 0878-9015-2199 atau via WhatsApp.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-[#FF5A00]">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Berapa lama waktu datang jasa derek?</h3>
              <p className="text-gray-600">
                Rata-rata waktu respons kami adalah 15-30 menit setelah Anda menghubungi kami. 
                Lokasi kami yang strategis di Jepara memastikan kami dapat menjangkau Anda dengan cepat.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-[#FF5A00]">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Jenis kendaraan apa saja yang bisa ditowing?</h3>
              <p className="text-gray-600">
                Kami melayani towing untuk semua jenis kendaraan: mobil pribadi, motor, mobil box, bus, truk, dan alat berat. 
                Armada kami lengkap dengan teknisi berpengalaman untuk setiap jenis kendaraan.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-[#FF5A00]">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Apakah bisa towing jarak jauh dari Jepara?</h3>
              <p className="text-gray-600">
                Ya, kami melayani towing jarak jauh ke seluruh pulau Jawa. Kami juga melayani antar provinsi dengan harga yang kompetitif. 
                Hubungi kami untuk penawaran khusus towing jarak jauh.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-[#FF5A00]">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Apakah Jeka Towing bekerja sama dengan asuransi?</h3>
              <p className="text-gray-600">
                Ya, Jeka Towing Service bekerja sama dengan berbagai perusahaan asuransi. 
                Kami dapat menguruskan klaim asuransi untuk memudahkan Anda dalam proses towing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#FF5A00] to-[#E54A00]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Butuh Jasa Towing 24 Jam di Jepara Sekarang?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Hubungi Jeka Towing Service sekarang juga dan dapatkan respons cepat dalam 15-30 menit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center space-x-2 bg-white text-[#FF5A00] hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat WhatsApp Sekarang</span>
            </button>
            <a
              href="tel:+6287890152199"
              className="flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold transition-all"
            >
              <Phone className="h-5 w-5" />
              <span>Telepon: 0878-9015-2199</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocalJepara;