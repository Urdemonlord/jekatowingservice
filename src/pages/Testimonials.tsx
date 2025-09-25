import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Budi Santoso',
      location: 'Jakarta Selatan',
      rating: 5,
      text: 'Pelayanan sangat memuaskan! Mobil saya mogok tengah malam di Kemang, tapi tim Jeka Towing langsung datang dalam 20 menit. Teknisinya profesional, sopan, dan harga sangat wajar. Mobil ditangani dengan hati-hati, tidak ada kerusakan tambahan sama sekali.',
      service: 'Towing Mobil Sedan',
      date: 'Desember 2024',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sari Dewi',
      location: 'Bekasi',
      rating: 5,
      text: 'Recommended banget! SUV saya mogok di tol Bekasi, panik banget karena bawa anak kecil. Tim Jeka Towing datang cepat, driver sopan dan sabar. Peralatan lengkap dan modern, kendaraan ditangani dengan sangat hati-hati. Pasti akan pakai lagi kalau butuh.',
      service: 'Derek Darurat SUV',
      date: 'November 2024',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ahmad Rahman',
      location: 'Jakarta Pusat',
      rating: 5,
      text: 'Sudah beberapa kali pakai jasa Jeka Towing untuk kendaraan kantor. Respon selalu cepat, harga transparan tanpa biaya tersembunyi. Yang paling saya suka, mereka selalu update progress via WhatsApp jadi kita tahu posisi teknisi dimana.',
      service: 'Towing Kendaraan Kantor',
      date: 'Oktober 2024',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Lisa Andriani',
      location: 'Depok',
      rating: 5,
      text: 'Motor saya mogok di tol Jagorawi, panik banget karena pertama kali ngalamin. Untung ada Jeka Towing yang 24 jam. Teknisinya ramah, jelasin prosesnya dengan sabar, dan kerja cepat. Motor sampai rumah dengan selamat. Terima kasih banyak!',
      service: 'Towing Motor',
      date: 'September 2024',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ricky Pratama',
      location: 'Jakarta Timur',
      rating: 5,
      text: 'Pelayanan excellent! Mobil saya kecelakaan ringan di Cawang, kondisi panik dan bingung. Tim Jeka Towing tidak hanya bantu towing, tapi juga kasih saran untuk asuransi dan bengkel. Sangat membantu dan profesional. Highly recommended!',
      service: 'Derek Kecelakaan',
      date: 'Agustus 2024',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Maya Sari',
      location: 'Jakarta Barat',
      rating: 5,
      text: 'Aki mobil soak di mall Taman Anggrek, untung ada layanan jump start dari Jeka Towing. Teknisi datang dalam 15 menit, langsung bisa start mobil. Harga jump start juga reasonable, tidak kemahalan. Service yang sangat membantu!',
      service: 'Jump Start Aki',
      date: 'Juli 2024',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const stats = [
    { number: '2000+', label: 'Customer Puas' },
    { number: '24/7', label: 'Layanan Tersedia' },
    { number: '15 Min', label: 'Rata-rata Respon' },
    { number: '99%', label: 'Tingkat Kepuasan' }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Testimoni Customer
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Kepuasan dan kepercayaan ribuan customer adalah motivasi terbaik bagi kami 
              untuk terus memberikan layanan towing terbaik dan terpercaya.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl lg:text-3xl font-bold text-orange-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-6">
                    <Quote className="h-10 w-10 text-blue-900 mr-4" />
                    <div className="flex space-x-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                      <p className="text-sm text-gray-500">{testimonials[currentIndex].date}</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-blue-900 text-white p-8 rounded-xl">
                    <div className="text-4xl font-bold mb-2">{testimonials[currentIndex].rating}.0</div>
                    <div className="text-blue-200 mb-4">Rating</div>
                    <div className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                      {testimonials[currentIndex].service}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? 'bg-blue-900' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Semua Testimoni Customer
            </h2>
            <p className="text-xl text-gray-600">
              Pengalaman nyata dari customer yang telah menggunakan layanan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 line-clamp-4">
                  "{testimonial.text.substring(0, 150)}..."
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                  <span className="text-xs text-gray-500">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Rating & Review Summary
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-900 mb-2">4.9</div>
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">Berdasarkan 2000+ review</p>
              </div>

              <div className="space-y-3">
                {[
                  { stars: 5, percentage: 92 },
                  { stars: 4, percentage: 6 },
                  { stars: 3, percentage: 1 },
                  { stars: 2, percentage: 1 },
                  { stars: 1, percentage: 0 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-sm font-medium w-8">{item.stars}★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-10">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Bergabunglah dengan Ribuan Customer yang Puas!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rasakan sendiri pelayanan towing terbaik yang telah dipercaya ribuan customer di Jakarta
          </p>
          <button
            onClick={() => window.open('https://wa.me/6287890152199?text=Halo, saya ingin menggunakan jasa towing setelah baca testimoni', '_blank')}
            className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors mx-auto"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Hubungi Kami Sekarang</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;