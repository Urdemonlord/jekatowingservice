import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telepon',
      info: '+62 878-9015-2199',
      description: 'Hubungi langsung untuk bantuan darurat',
      action: () => window.open('tel:+6287890152199'),
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '+62 878-9015-2199',
      description: 'Chat langsung untuk konsultasi cepat',
      action: () => window.open('https://wa.me/6287890152199?text=Halo, saya ingin bertanya tentang layanan towing'),
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'divandaal@gmail.com',
      description: 'Kirim pertanyaan detail via email',
      action: () => window.open('mailto:divandaal@gmail.com?subject=Pertanyaan Layanan Towing'),
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  const serviceAreas = [
    'Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Barat', 
    'Jakarta Timur', 'Jakarta Utara', 'Depok', 'Bekasi', 'Tangerang'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format WhatsApp message
      const message = `*PESAN DARI WEBSITE*

🔸 *Nama:* ${formData.name}
🔸 *No. Telepon:* ${formData.phone}
🔸 *Email:* ${formData.email}
🔸 *Subjek:* ${formData.subject}

*Pesan:*
${formData.message}

Mohon segera direspon. Terima kasih!`;

      // Send to WhatsApp
      const whatsappUrl = `https://wa.me/6287890152199?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Tim customer service kami siap membantu Anda 24 jam setiap hari. 
              Hubungi kami melalui berbagai channel yang tersedia untuk mendapatkan bantuan cepat.
            </p>
            <div className="bg-orange-500 text-white px-6 py-3 rounded-lg inline-block font-semibold">
              Respon dalam 2 menit • Layanan 24/7
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cara Menghubungi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Pilih metode komunikasi yang paling nyaman untuk Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all">
                  <div className={`${method.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-lg font-semibold text-blue-900 mb-3">{method.info}</p>
                  <p className="text-gray-600 mb-6">{method.description}</p>
                  <button
                    onClick={method.action}
                    className={`${method.color} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
                  >
                    Hubungi Sekarang
                  </button>
                </div>
              );
            })}
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              🚨 Panggilan Darurat
            </h3>
            <p className="text-red-700 mb-6">
              Untuk situasi darurat yang membutuhkan bantuan segera, langsung hubungi:
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+6287890152199"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                📞 Call: 0878-9015-2199
              </a>
              <button
                onClick={() => window.open('https://wa.me/6287890152199?text=🚨 DARURAT! Saya butuh bantuan towing segera', '_blank')}
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                💬 WhatsApp Darurat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kirim Pesan
              </h2>
              <p className="text-gray-600 mb-8">
                Isi form di bawah ini untuk mengirim pertanyaan atau feedback. 
                Kami akan merespon dalam waktu 24 jam.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      No. Telepon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0812-3456-7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Pilih subjek</option>
                    <option value="Pertanyaan Layanan">Pertanyaan Layanan</option>
                    <option value="Request Penawaran">Request Penawaran</option>
                    <option value="Komplain">Komplain</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Kerjasama">Kerjasama</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Pesan berhasil dikirim! Anda akan diarahkan ke WhatsApp untuk melanjutkan percakapan.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    Terjadi kesalahan. Silakan coba lagi atau hubungi langsung via WhatsApp.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-900 text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Mengirim...</span>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Kirim Pesan</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-blue-900 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Jam Operasional</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Senin - Minggu</span>
                    <span className="font-semibold text-green-600">24 Jam</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Hari Libur</span>
                    <span className="font-semibold text-green-600">24 Jam</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-700">Customer Service</span>
                    <span className="font-semibold text-blue-600">24/7 Online</span>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <MapPin className="h-8 w-8 text-blue-900 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Area Layanan</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Catatan:</strong> Untuk area di luar coverage, silakan hubungi kami 
                    untuk konfirmasi ketersediaan layanan.
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Butuh Bantuan Cepat?</h3>
                <p className="text-blue-100 mb-6">
                  Untuk bantuan darurat atau pertanyaan mendesak, hubungi langsung:
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+6287890152199"
                    className="flex items-center space-x-3 text-white hover:text-orange-300 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold">0878-9015-2199</span>
                  </a>
                  <button
                    onClick={() => window.open('https://wa.me/6287890152199', '_blank')}
                    className="flex items-center space-x-3 text-white hover:text-green-300 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-semibold">WhatsApp Chat</span>
                  </button>
                  <a
                    href="mailto:divandaal@gmail.com"
                    className="flex items-center space-x-3 text-white hover:text-blue-300 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="font-semibold">divandaal@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;