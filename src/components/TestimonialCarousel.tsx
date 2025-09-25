import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Budi Santoso',
      location: 'Jakarta Selatan',
      rating: 5,
      text: 'Pelayanan sangat memuaskan! Mobil saya mogok tengah malam, tapi tim Jeka Towing langsung datang dalam 20 menit. Profesional dan harga wajar.',
      service: 'Towing Mobil Sedan',
    },
    {
      name: 'Sari Dewi',
      location: 'Bekasi',
      rating: 5,
      text: 'Recommended banget! Driver sopan, peralatan lengkap, dan kendaraan ditangani dengan hati-hati. Tidak ada kerusakan tambahan sama sekali.',
      service: 'Derek Darurat',
    },
    {
      name: 'Ahmad Rahman',
      location: 'Jakarta Pusat',
      rating: 5,
      text: 'Respon cepat, harga transparan, tidak ada biaya tersembunyi. Sudah beberapa kali pakai jasa mereka, selalu puas dengan hasilnya.',
      service: 'Towing SUV',
    },
    {
      name: 'Lisa Andriani',
      location: 'Depok',
      rating: 5,
      text: 'Motor saya mogok di tol, panik banget. Untung ada Jeka Towing yang 24 jam. Teknisinya ramah dan kerja cepat. Terima kasih!',
      service: 'Towing Motor',
    },
    {
      name: 'Ricky Pratama',
      location: 'Jakarta Timur',
      rating: 5,
      text: 'Pelayanan excellent! Mobil ditangani dengan sangat hati-hati, dan harganya reasonable. Pasti akan rekomendasikan ke teman-teman.',
      service: 'Jump Start & Towing',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Testimoni <span className="text-[#FF5A00]">Customer</span>
          </h2>
          <p className="text-xl text-gray-600">
            Kepuasan customer adalah prioritas utama kami
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border-l-4 border-[#FF5A00]">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-[#FF5A00] mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                  <span className="inline-block bg-orange-100 text-[#FF5A00] text-sm px-3 py-1 rounded-full mt-2">
                    {testimonials[currentIndex].service}
                  </span>
                </div>
              </div>

              <div className="text-center lg:text-right">
                <div className="bg-[#FF5A00] text-white p-6 rounded-xl inline-block shadow-lg">
                  <div className="text-3xl font-bold mb-2">{testimonials[currentIndex].rating}.0</div>
                  <div className="text-white/80">Rating</div>
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
                    index === currentIndex ? 'bg-[#FF5A00]' : 'bg-gray-300'
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

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#FF5A00] to-[#E54A00] rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-2">
              Bergabunglah dengan ribuan customer yang puas!
            </h3>
            <p className="text-white/90 mb-4">
              Dapatkan layanan towing terbaik dengan harga terjangkau
            </p>
            <button
              onClick={() => window.open('https://wa.me/6287890152199?text=Halo, saya ingin menggunakan jasa towing', '_blank')}
              className="bg-white text-[#FF5A00] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md"
            >
              Hubungi Kami Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;