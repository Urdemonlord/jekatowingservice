import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Budi Santoso',
      location: 'Jepara',
      rating: 5,
      text: 'Pelayanan sangat memuaskan! Mobil saya mogok tengah malam di Alun-alun Jepara, tapi tim Jeka Towing langsung datang dalam 20 menit. Teknisinya profesional, sopan, dan harga sangat wajar. Mobil ditangani dengan hati-hati, tidak ada kerusakan tambahan sama sekali.',
      service: 'Towing Mobil Sedan',
      date: 'Desember 2024',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sari Dewi',
      location: 'Kudus',
      rating: 5,
      text: 'Recommended banget! SUV saya mogok di jalan raya Kudus-Jepara, panik banget karena bawa anak kecil. Tim Jeka Towing datang cepat, driver sopan dan sabar. Peralatan lengkap dan modern, kendaraan ditangani dengan sangat hati-hati. Pasti akan pakai lagi kalau butuh.',
      service: 'Derek Darurat SUV',
      date: 'November 2024',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ahmad Rahman',
      location: 'Jepara Pusat',
      rating: 5,
      text: 'Sudah beberapa kali pakai jasa Jeka Towing untuk kendaraan kantor. Respon selalu cepat, harga transparan tanpa biaya tersembunyi. Yang paling saya suka, mereka selalu update progress via WhatsApp jadi kita tahu posisi teknisi dimana.',
      service: 'Towing Kendaraan Kantor',
      date: 'Oktober 2024',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Lisa Andriani',
      location: 'Pati',
      rating: 5,
      text: 'Motor saya mogok di jalan raya Pati-Jepara, panik banget karena pertama kali ngalamin. Untung ada Jeka Towing yang 24 jam. Teknisinya ramah, jelasin prosesnya dengan sabar, dan kerja cepat. Motor sampai rumah dengan selamat. Terima kasih banyak!',
      service: 'Towing Motor',
      date: 'September 2024',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Ricky Pratama',
      location: 'Demak',
      rating: 5,
      text: 'Pelayanan excellent! Mobil saya kecelakaan ringan di jalan raya Demak, kondisi panik dan bingung. Tim Jeka Towing tidak hanya bantu towing, tapi juga kasih saran untuk asuransi dan bengkel. Sangat membantu dan profesional. Highly recommended!',
      service: 'Derek Kecelakaan',
      date: 'Agustus 2024',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Maya Sari',
      location: 'Jepara Selatan',
      rating: 5,
      text: 'Aki mobil soak di pusat perbelanjaan Jepara, untung ada layanan jump start dari Jeka Towing. Teknisi datang dalam 15 menit, langsung bisa start mobil. Harga jump start juga reasonable, tidak kemahalan. Service yang sangat membantu!',
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
    <div >
      {/* Hero Section */}
      <section >
        <div >
          <div >
            <h1 >
              Testimoni Customer
            </h1>
            <p >
              Kepuasan dan kepercayaan ribuan customer adalah motivasi terbaik bagi kami 
              untuk terus memberikan layanan towing terbaik dan terpercaya.
            </p>
            
            <div >
              {stats.map((stat, index) => (
                <div key={index} >
                  <div >
                    {stat.number}
                  </div>
                  <div >{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section >
        <div >
          <div >
            <div >
              <div >
                <div >
                  <div >
                    <Quote  />
                    <div >
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i}  />
                      ))}
                    </div>
                  </div>
                  
                  <p >
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div >
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      
                    />
                    <div>
                      <h4 >
                        {testimonials[currentIndex].name}
                      </h4>
                      <p >{testimonials[currentIndex].location}</p>
                      <p >{testimonials[currentIndex].date}</p>
                    </div>
                  </div>
                </div>

                <div >
                  <div >
                    <div >{testimonials[currentIndex].rating}.0</div>
                    <div >Rating</div>
                    <div >
                      {testimonials[currentIndex].service}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div >
              <button
                onClick={prevTestimonial}
                
              >
                <ChevronLeft  />
              </button>

              <div >
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
                
              >
                <ChevronRight  />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section >
        <div >
          <div >
            <h2 >
              Semua Testimoni Customer
            </h2>
            <p >
              Pengalaman nyata dari customer yang telah menggunakan layanan kami
            </p>
          </div>

          <div >
            {testimonials.map((testimonial, index) => (
              <div key={index} >
                <div >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    
                  />
                  <div>
                    <h4 >{testimonial.name}</h4>
                    <p >{testimonial.location}</p>
                  </div>
                </div>

                <div >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i}  />
                  ))}
                </div>

                <p >
                  "{testimonial.text.substring(0, 150)}..."
                </p>

                <div >
                  <span >
                    {testimonial.service}
                  </span>
                  <span >{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Stats */}
      <section >
        <div >
          <div >
            <h2 >
              Rating & Review Summary
            </h2>
          </div>

          <div >
            <div >
              <div >
                <div >4.9</div>
                <div >
                  {[...Array(5)].map((_, i) => (
                    <Star key={i}  />
                  ))}
                </div>
                <p >Berdasarkan 2000+ review</p>
              </div>

              <div >
                {[
                  { stars: 5, percentage: 92 },
                  { stars: 4, percentage: 6 },
                  { stars: 3, percentage: 1 },
                  { stars: 2, percentage: 1 },
                  { stars: 1, percentage: 0 }
                ].map((item, index) => (
                  <div key={index} >
                    <span >{item.stars}★</span>
                    <div >
                      <div
                        
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span >{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section >
        <div >
          <h2 >
            Bergabunglah dengan Ribuan Customer yang Puas!
          </h2>
          <p >
            Rasakan sendiri pelayanan towing terbaik yang telah dipercaya ribuan customer di Jepara dan sekitarnya
          </p>
          <button
            onClick={() => window.open('https://wa.me/6287890152199?text=Halo, saya ingin menggunakan jasa towing setelah baca testimoni', '_blank')}
            
          >
            <MessageCircle  />
            <span>Hubungi Kami Sekarang</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
